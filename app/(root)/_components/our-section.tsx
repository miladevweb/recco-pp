'use client'
import Image from 'next/image'
import { useCursorContext } from '@/context/cursor-context'
import { useCallback, useRef } from 'react'
import { Options, toCharacter, useObserver } from '@/context/use-observer'

export function OurSection() {
  const container = useRef(null)
  const options: Options = {
    from: { y: 80, opacity: 0 },
    to: { y: 0, opacity: 1, ease: 'power3.inOut', duration: 1, stagger: 0.08 },
  }
  const toCharacterCallback = useCallback(() => toCharacter('div > h3'), [])
  const { ref } = useObserver(container, options, 'h3 .letter', toCharacterCallback)
  const { setOnMouseEnter, setOnMouseLeave } = useCursorContext()
  return (
    <section
      data-scroll
      className="px-36"
      data-scroll-speed="0.1"
      data-our="container"
    >
      <div
        data-our="text-parent-container"
        className="grid grid-cols-[53%_47%]"
        ref={container}
      >
        <div></div>
        <div ref={ref}>
          <h3 className="font-abc-medium text-[6vw] tracking-tight inline-block mr-5">Our</h3>
          <h3 className="font-abc-medium text-[6vw] tracking-tight inline-block">Projects</h3>
          <div
            data-our="text-child-container"
            className="grid grid-cols-[45%_55%] mt-5"
          >
            <div></div>
            <p className="text-xs">
              Our development projects are designed not only for the present but also the future, whether they're used for onshoring manufacturing operations or serving logistics needs for the area.
              With that vision, we construct high quality, eye-appealing projects that provide tenants a home to build their companies for the long term.
            </p>
          </div>
        </div>
      </div>

      <div
        data-our="image-container"
        className="grid grid-cols-2 gap-x-5 [&_div]:relative [&_div]:h-[93vh] [&_div]:w-full"
      >
        <div
          data-scroll
          data-scroll-speed="0.2"
        >
          <Image
            fill
            alt="#"
            src={'/images/img4.webp'}
            className="-mt-10 object-cover"
            sizes="(max-width: 1000px) 100vw"
            onMouseEnter={setOnMouseEnter}
            onMouseLeave={setOnMouseLeave}
          />
        </div>

        <div
          data-scroll
          data-scroll-speed="0.4"
        >
          <Image
            fill
            alt="#"
            className="object-cover"
            src={'/images/img5.webp'}
            sizes="(max-width: 1000px) 100vw"
            onMouseEnter={setOnMouseEnter}
            onMouseLeave={setOnMouseLeave}
          />
        </div>
      </div>

      <hr className="block -mt-16" />
    </section>
  )
}
