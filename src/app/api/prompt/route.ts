import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    // const response = await fetch(`http://34.250.144.153:8808/prompts`, {
    //   method: "POST",
    //   headers: {
    //     "X-Lunbi-Token": "fa93c4e29b8d41a7e61d8f5c0db7a4e2",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ query }),
    // });

    // if (!response.ok) {
    //   const errorText = await response.text();
    //   return NextResponse.json(
    //     { error: `Backend error: ${errorText}` },
    //     { status: response.status }
    //   );
    // }

    // const data = await response.json();

    const data: {
      id: string;
      status: string;
      answer: string;
      source: {
        title: string;
        url: string;
      };
      role: "system" | "user" | "assistant";
    } = {
      id: "124jasfakhsakfas",
      status: "success",
      answer:
        "Spaceflight exposes the human body to a challenging environment, leading to both physiological and psychological changes. The primary factors are microgravity and increased radiation.\n\nIn microgravity, blood and other bodily fluids shift toward the upper body, which can affect vision and the cardiovascular system. Bones (especially in the hips and spine) lose density (spaceflight osteopenia), and muscles atrophy because they no longer have to work against Earth's gravity. Astronauts combat this with rigorous exercise.\n\nExposure to higher levels of space radiation increases the long-term risk of cancer and degenerative diseases. Additionally, the isolation and confinement of long missions can affect mental health, potentially causing anxiety and sleep disturbances.",
      source: {
        title:
          "International Space Station: Launching NASA and Humanity into Deep Space",
        url: "https://www.nasa.gov/missions/station/iss-research/international-space-station-launching-nasa-and-humanity-into-deep-space/",
      },
      role: "assistant",
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("Request failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
