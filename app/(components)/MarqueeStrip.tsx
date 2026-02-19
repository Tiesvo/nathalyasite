"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MarqueeStrip({ images }: { images: string[] }) {
  const list = [...images, ...images]; // duplicate for seamless loop

  return (
    <div
      className="relative overflow-hidden h-[64px] md:h-[84px] lg:h-[96px] pointer-events-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <motion.ul
        aria-hidden
        className="flex h-full items-center gap-3 will-change-transform"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {list.map((src, i) => (
          <li key={i} className="relative h-full w-[120px] md:w-[140px] lg:w-[160px] shrink-0">
            <div
              className="relative h-full w-full overflow-hidden rounded-xl shadow-sm"
              style={{
                filter: "blur(2.5px) saturate(0.7) brightness(0.9)",
              }}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 160px, (min-width:768px) 140px, 120px"
                priority={i < 6}
              />
              {/* fog overlay on each image */}
              <div className="pointer-events-none absolute inset-0 bg-black/30 z-10"></div>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
