import { NextRequest } from "next/server";
import { UIMessage, streamText, convertToModelMessages } from "ai";

import { openai } from "@ai-sdk/openai";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-nano"),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
