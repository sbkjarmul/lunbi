"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <motion.div
      className="flex justify-between items-center w-full h-[160px] z-2"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/" className="text-2xl font-bold">
        Lunbi
      </Link>

      <div className="flex gap-8">
        <div className="w-[100px] flex items-center justify-center">
          <NavLink href="/chat">AI Assistant</NavLink>
        </div>
        <div className="w-[100px] flex items-center justify-center">
          <NavLink href="/about">About Lunbi</NavLink>
        </div>
      </div>

      <Button asChild className="rounded-full">
        <Link href="/chat">Get Started</Link>
      </Button>
    </motion.div>
  );
}
