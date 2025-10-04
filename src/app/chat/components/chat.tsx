"use client";

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
  const { messages, append, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      append({ role: "user", content: input });
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Conversation>
        <ConversationContent>
          {messages.map((message) => (
            <Message from={message.role} key={message.id}>
              <MessageContent>
                <Response>{message.content}</Response>
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
