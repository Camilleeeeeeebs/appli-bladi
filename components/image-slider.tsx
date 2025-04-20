"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface ImageData {
  src: string
  alt: string
  title: string
  description: string
}

interface ImageSliderProps {
  images: ImageData[]
  currentIndex: number
}

export function ImageSlider({ images, currentIndex }: ImageSliderProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-20 left-10 right-10 md:left-20 md:right-20 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {images[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl"
            >
              {images[currentIndex].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

