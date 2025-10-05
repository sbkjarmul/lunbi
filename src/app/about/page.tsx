import Header from "@/components/header";

import { MoonIcon, LeafIcon, ArrowBigRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-screen min-h-screen  bg-gradient-to-b from-[#FFFFFFF] to-[#D5FFC4]">
      <main className="flex flex-col w-full h-full justify-center px-10 gap-20 items-center pb-20">
        <Header />
        <div className="flex flex-col gap-4 text-4xl font-bold w-full justify-center items-center">
          <div className="flex gap-4">
            <p>LUN</p>
            <ArrowBigRight size="48px" color="#3E5437" />
            <p>lunar</p>
            <MoonIcon size="48px" color="#000" />
          </div>
          <div className="flex gap-4">
            <p>BI</p>
            <ArrowBigRight size="48px" color="#3E5437" />
            <p>biology</p>
            <LeafIcon size="48px" color="#000" />
          </div>
        </div>

        <section className="flex flex-col items-center text-center gap-8 max-w-2xl ">
          <div>
            <h2 className="font-bold text-xl opacity-85">What Lunbi is</h2>
            <p className="text-gray-900 opacity-75">
              We developed Lunbi, an AI-powered assistant that helps people
              explore and understand space biology in simple, human language.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl opacity-85">The Problem</h2>
            <p className="text-gray-900 opacity-75">
              Many space biology resources are highly technical and difficult
              for non-specialists to understand — Lunbi bridges that gap.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl opacity-85">How It Works</h2>
            <p className="text-gray-900 opacity-75">
              With Lunbi, users don’t need to search through dozens of research
              papers or struggle to interpret scientific jargon. You simply ask
              a question, and Lunbi finds the answer — using its database of
              over 600 space biology publications as an MVP foundation. The
              database can be easily expanded to include thousands of additional
              studies, making Lunbi scalable and future-ready. It also links
              back to the original articles, so users can dive deeper into the
              topic if they wish.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl opacity-85">Inspiration</h2>
            <p className="text-gray-900 opacity-75">
              Lunbi was inspired by Mooncake, the curious and friendly alien
              from the series Final Space — just like Mooncake, Lunbi is small,
              helpful, and full of energy to explore the universe with you.
            </p>

            <div className="flex justify-center items-center h-fit mt-4">
              <img
                src="/gifs/lunbi-high-five.gif"
                alt="Example GIF"
                className="w-100 h-60"
              />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl opacity-85">Mission & Impact</h2>
            <p className="text-gray-900 opacity-75">
              Lunbi addresses the challenge of making complex space science
              accessible to everyone, supporting education, research, and public
              engagement with NASA’s mission. It shows how AI can turn data into
              understanding — helping the next generation learn, discover, and
              dream about life beyond Earth.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
