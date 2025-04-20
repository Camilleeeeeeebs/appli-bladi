"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SliderControlsProps {
  onPrevious: () => void
  onNext: () => void
}

export function SliderControls({ onPrevious, onNext }: SliderControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        onClick={onPrevious}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="sr-only">Image précédente</span>
      </motion.button>

      <motion.button
        onClick={onNext}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronRight className="w-6 h-6" />
        <span className="sr-only">Image suivante</span>
      </motion.button>
    </div>
  )
}

