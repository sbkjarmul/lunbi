import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans items-center items-center min-h-screen">
      <main className="flex flex-col items-center w-full h-screen">
        \{/* HEADER */}
        <div className="flex justify-start items-center w-full h-[100px] px-10">
          <Link href="/" className="text-2xl font-bold">
            Lunbi
          </Link>
        </div>
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/v-ERD9x9lMRbsI7b/scene.splinecode" />
        </div>
      </main>
    </div>
  );
}
