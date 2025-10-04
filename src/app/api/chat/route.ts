import { NextRequest, NextResponse } from "next/server";
import {
  UIMessage,
  streamText,
  convertToModelMessages,
  createUIMessageStreamResponse,
  createUIMessageStream,
  simulateReadableStream,
  readUIMessageStream,
  generateText,
} from "ai";

import { openai } from "@ai-sdk/openai";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4.1-nano"),
    messages: convertToModelMessages(messages),
  });

  for await (const uiMessage of readUIMessageStream({
    stream: result.toUIMessageStream(),
  })) {
    console.log("Current message state:", uiMessage);
  }

  return result.toUIMessageStreamResponse();
}
