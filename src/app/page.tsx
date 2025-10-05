"use client";

import Header from "@/components/header";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VideoBackground from "@/components/video-background";
import { SearchIcon, SendIcon } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/chat?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative font-sans items-center items-center">
      <main className="flex flex-col items-center w-full h-screen px-20">
        <Header />

        <div className="flex flex-col h-full w-full items-start justify-between z-2 py-20">
          <motion.div
            className="flex flex-col gap-1 w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-gray-900 max-w-[260px] text-4xl font-bold">
              Meet Lunbi, your cosmic biology{" "}
              <TextLoop
                className="overflow-y-clip"
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                }}
              >
                <span>Buddy</span>
                <span>Friend</span>
                <span>Helper</span>
              </TextLoop>
            </h2>
            <p className="text-gray-500">Just ask him.</p>
          </motion.div>

          <motion.div
            className="flex w-full justify-center items-start h-[200px]"
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex gap-4 rounded-full bg-white/40 p-2 px-4 backdrop-blur-lg h-fit">
              <SearchIcon size="38" color="black" />
              <Input
                placeholder="Ask me everything..."
                className="border-none shadow-none md:text-xl"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                className="rounded-full"
                onClick={handleSearch}
                disabled={!query}
              >
                Search <SendIcon />
              </Button>
            </div>
          </motion.div>

          <div className="w-1/2">
            <h4 className="text-[#3E5437] max-w-md text-xl">
              <TextEffect per="char" preset="fade">
                Ask about whatever you need about space, biology and more
                Explore space and life with a friendly guide powered by
                scientific knowledge.
              </TextEffect>
            </h4>
          </div>
        </div>

        <VideoBackground />
      </main>
    </div>
  );
}
