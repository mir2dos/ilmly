"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  { src: "/clients/cambridge-learning-center.png", alt: "Center 1" },
  { src: "/clients/everest-education.png", alt: "Center 2" },
  { src: "/clients/it-park.png", alt: "Center 3" },
  { src: "/clients/najot-talim.png", alt: "Center 4" },
  { src: "/clients/thompson-school.png", alt: "Center 5" },
  { src: "/clients/blue-center.png", alt: "Center 5" },
];

export default function Clients() {
  return (
    <section className="container space-y-8 pt-10 pb-2">
      <h2 className="text-center text-xl font-semibold">
        Over 3000+ learning centers are using Ilmly.
      </h2>
      <Marquee pauseOnHover={true} autoFill={true} gradient={true}>
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={50}
            className="mx-8 transition duration-300 hover:grayscale-0"
          />
        ))}
      </Marquee>
    </section>
  );
}
