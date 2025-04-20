"use client"

import { motion } from "framer-motion"

interface SliderProgressProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

export function SliderProgress({ total, current, onDotClick }: SliderProgressProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className="group relative p-2"
          aria-label={`Aller à l'image ${index + 1}`}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white/80 transition-colors"
            initial={false}
            animate={{
              scale: current === index ? 1.5 : 1,
              backgroundColor: current === index ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      ))}
    </div>
  )
}

