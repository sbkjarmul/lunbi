import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VideoBackground from "@/components/video-background";
import { SearchIcon, SendIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative font-sans items-center items-center ">
      <main className="flex flex-col items-center w-full h-screen px-20">
        {/* HEADER */}
        <div className="flex justify-between items-center w-full h-[160px] z-2">
          <Link href="/" className="text-2xl font-bold">
            Lunbi
          </Link>

          <div className="flex gap-8">
            <div className="w-[100px] flex items-center justify-center">
              <Link
                href="/chat"
                className="hover:font-bold hover:text-[#3E5437] transition-all duration-200"
              >
                AI Assistant
              </Link>
            </div>
            <div className="w-[100px] flex items-center justify-center">
              <Link
                href="/about"
                className="hover:font-bold hover:text-[#3E5437] transition-all duration-200"
              >
                About Lunbi
              </Link>
            </div>
          </div>

          <Button asChild className="rounded-full">
            <Link href="/chat">Get Started</Link>
          </Button>
        </div>

        <div className="flex flex-col h-full w-full items-start justify-between z-2 py-20">
          <div className="flex flex-col gap-1 w-1/2">
            <h2 className="text-gray-900 max-w-[240px] text-4xl font-bold">
              Meet Lunbi, your cosmic biology buddy
            </h2>
            <p className="text-gray-500">Just ask him.</p>
          </div>

          <div className="flex w-full justify-center items-start h-[200px]">
            <div className="flex gap-4 rounded-full bg-white/40 p-2 px-4 backdrop-blur-lg h-fit">
              <SearchIcon size="38" color="black" />
              <Input
                placeholder="Ask me everything..."
                className="border-none shadow-none md:text-xl"
              />
              <Button className="rounded-full" asChild>
                <Link href="/chat">
                  Search <SendIcon />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-1/2">
            <h4 className="text-[#3E5437] max-w-md text-xl">
              Explore space and life with a friendly guide powered by scientific
              knowledge.
            </h4>
          </div>
        </div>

        <VideoBackground />
      </main>
    </div>
  );
}
