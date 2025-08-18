"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  className?: string;
  imageUrl: string;
  alt?: string;
}

export default function PhoneMockup({
  className,
  imageUrl,
  alt = "Mobile screenshot",
}: PhoneMockupProps) {
  return (
    <motion.div className={cn("relative h-full w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="border-foreground/5 bg-background dark:border-foreground/10 relative -right-16 left-0 z-10 aspect-[16/9] w-full overflow-hidden rounded-lg border-[10px] shadow-2xl md:absolute md:w-[800px]"
      >
        <motion.img
          src={imageUrl}
          alt={alt}
          className="h-full w-full rounded-lg object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
}
