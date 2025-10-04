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
import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Response } from "@/components/ai/response";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, status, sendMessage } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      // sendQuestion(input);
      sendMessage({ text: input });
      setInput("");
    }
  };

  async function sendQuestion(query: string) {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    console.log(data.answer);
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
              Welcome to Lunbi
            </h1>
            <h1 className="text-gray-500">
              Ask about whatever you need about space, biology and more
            </h1>
          </div>
        </div>
      )}

      <Conversation className="flex flex-col justify-end">
        <ConversationContent className="flex flex-col justify-end">
          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                {message.parts.map((part, index) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <Response key={`${message.id}-${index}`}>
                          {part.text}
                        </Response>
                      );
                    default:
                      return null;
                  }
                })}
              </MessageContent>
            </Message>
          ))}
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
