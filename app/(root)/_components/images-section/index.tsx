'use client'
import { useCursorContext } from '@/context/cursor-context'
import Image from 'next/image'

export function ImageSectionTemplate({ url, speed }: { url: string; speed: string }) {
  const { setOnMouseEnter, setOnMouseLeave } = useCursorContext()
  return (
    <div className="relative w-screen h-screen">
      <Image
        fill
        alt="#"
        priority
        src={url}
        data-image
        data-scroll
        className="object-cover"
        data-scroll-speed={speed}
        onMouseEnter={setOnMouseEnter}
        onMouseLeave={setOnMouseLeave}
        sizes="(max-width: 640px) 60vw, 40vw"
      />
    </div>
  )
}
