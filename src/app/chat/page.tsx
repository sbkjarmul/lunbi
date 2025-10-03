import Spline from "@splinetool/react-spline";
import Link from "next/link";
import Chat from "./components/chat";

export default function ChatPage() {
  return (
    <div className="relative flex h-screen p-10">
      <div className="flex justify-start items-center w-[200px] h-[100px] px-10">
        <Link href="/" className="text-2xl font-bold">
          Lunbi
        </Link>
      </div>

      <div className="relative  flex-1 flex flex-col items-center justify-center w-full h-full z-10">
        <div
          className="flex flex-col items-center justify-center w-full h-full border border-green-200 rounded-2xl
        bg-[radial-gradient(circle,rgba(184,243,176,1)_0%,rgba(255,255,255,0)_64%)] z-0
        "
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-4xl font-bold">Welcome to Lunbi</h1>
            <h1 className="text-gray-500">
              Ask about whatever you need about space, biology and more
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Spline scene="https://prod.spline.design/v-ERD9x9lMRbsI7b/scene.splinecode" />
      </div>

      <Chat />
    </div>
  );
}
