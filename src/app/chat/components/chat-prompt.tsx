"use client";
import Spline from "@splinetool/react-spline";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai/conversation";
import { Message, MessageContent } from "@/components/ai/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from "@/components/ai/prompt-input";
import { useState, useEffect } from "react";
import { ChatStatus } from "ai";

import { nanoid } from "nanoid";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { useSearchParams } from "next/navigation";

type LunbiMessage = {
  id: string;
  status: string;
  answer: string;
  source: {
    title: string;
    url: string;
  };
  role: "system" | "user" | "assistant";
};

const createUserMessage = (query: string): LunbiMessage => {
  return {
    id: nanoid(),
    status: "success",
    answer: query,
    source: {
      title: "User Message",
      url: "none",
    },
    role: "user",
  };
};

export function LoadingText() {
  return (
    <TextShimmer className="font-mono text-sm" duration={1}>
      Generating Answer...
    </TextShimmer>
  );
}

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<LunbiMessage[]>([]);
  const [status, setStatus] = useState<ChatStatus>();

  const searchParams = useSearchParams();
  const searchParamsQuery = searchParams.get("query");

  useEffect(() => {
    if (searchParamsQuery) {
      sendMessage(searchParamsQuery);
    }
  }, [searchParamsQuery]);

  const sendMessage = (query: string) => {
    setStatus("submitted");
    const userMessage = createUserMessage(query);
    setMessages((prev) => [...prev, userMessage]);
    sendQuestion(query);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      sendMessage(input);
    }
  };

  async function sendQuestion(query: string) {
    const res = await fetch("/api/prompt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, data]);

    setStatus("ready");
  }

  return (
    <div className="flex flex-col h-full w-full">
      {messages.length === 0 && (
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-200 h-100 z-10">
            <Spline scene="https://prod.spline.design/v-ERD9x9lMRbsI7b/scene.splinecode" />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-bold font-plus-jakarta-sans">
              <TextEffect per="word" preset="fade">
                Welcome to Lunbi
              </TextEffect>
            </h1>

            <h1 className="text-gray-500">
              <TextEffect per="word" preset="fade">
                Ask about whatever you need about space, biology and more
              </TextEffect>
            </h1>
          </div>
        </div>
      )}

      <Conversation>
        <ConversationContent>
          {messages?.map((message, index) => (
            <Message from={message.role} key={`${message?.id}-${index}`}>
              <MessageContent>
                <TextEffect per="word" preset="fade">
                  {message.answer}
                </TextEffect>
              </MessageContent>
            </Message>
          ))}

          {status === "submitted" && <LoadingText />}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div
        className="
      bg-gradient-to-r from-[#B8F3B0] to-[#D9FFD5] 
      rounded-2xl w-full p-4
      flex flex-col gap-2 font-medium
      text-gray-900
      "
      >
        <h4 className="text-xs">Search, Define, Plan with AI powered chat</h4>
        <PromptInput onSubmit={handleSubmit} className="flex items-end p-4">
          <PromptInputTextarea
            value={input}
            placeholder="Type your question about biology in a space..."
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <PromptInputSubmit status={status} disabled={!input.trim()} />
        </PromptInput>
      </div>
    </div>
  );
}
