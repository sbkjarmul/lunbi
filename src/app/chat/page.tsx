import Link from "next/link";
import Chat from "./components/chat-prompt";
import { Suspense } from "react";

export default function ChatPage() {
  return (
    <div className="relative flex h-screen p-10">
      <div className="flex justify-start items-center w-[200px] h-[100px] px-10">
        <Link href="/" className="text-2xl font-bold">
          Lunbi
        </Link>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center w-full h-full z-10">
        <div
          className="flex flex-col items-center justify-center w-full h-full border border-green-200 rounded-2xl
        bg-[radial-gradient(circle,rgba(184,243,176,1)_0%,rgba(255,255,255,0)_64%)] z-0
        md:text-2xl
        p-10
        "
        >
          <Suspense>
            <Chat />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
