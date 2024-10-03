'use client'
import { useCallback, useRef } from 'react'
import { Options, toCharacter, useObserver } from '@/context/use-observer'

export function HeroSection() {
  const container = useRef(null)
  const options: Options = {
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1, ease: 'power3.inOut', duration: 0.8, stagger: 0.05, delay: 1.5 },
  }

  const toCharacterCallback = useCallback(() => toCharacter('header > h3'), [])
  const { ref } = useObserver(container, options, 'h3 .letter', toCharacterCallback)

  return (
    <section>
      <div
        ref={container}
        data-hero="container"
      >
        <header
          ref={ref}
          data-hero="header"
          className="text-white text-[15vw] font-abc-regular tracking-tight text-center leading-[77%] absolute z-10 top-[17.8%] left-1/2 -translate-x-1/2 w-full"
        >
          <h3
            data-scroll
            data-scroll-speed="0.3"
            className="overflow-y-hidden pb-2"
          >
            Think
          </h3>
          <h3
            data-scroll
            data-scroll-speed="0.35"
            className="overflow-y-hidden pb-2 -mt-1"
          >
            Forward
          </h3>
        </header>

        <video
          loop
          muted
          autoPlay
          src="/videos/video.mp4"
          className="w-full h-[130vh] object-cover"
        ></video>
      </div>
    </section>
  )
}
