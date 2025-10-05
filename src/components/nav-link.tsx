"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "font-bold text-[#3E5437]" : "text-gray-700 hover:text-black"
      }
          hover:font-bold hover:text-[#3E5437] transition-all duration-200
      
      `}
    >
      {children}
    </Link>
  );
}
