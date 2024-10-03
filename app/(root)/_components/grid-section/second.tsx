'use client'
import { gsap } from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useInView } from 'react-intersection-observer'
import { useCursorContext } from '@/context/cursor-context'

gsap.registerPlugin(useGSAP)
export function Second() {
  const container = useRef(null)
  const [ref, inView] = useInView()
  const { setOnMouseEnter, setOnMouseLeave } = useCursorContext()

  useGSAP(
    () => {
      if (inView) {
        gsap.from('aside > div:nth-child(1)', {
          y: -90,
          opacity: 0,
          ease: 'power3.inOut',
          duration: 2,
        })
      }
    },
    { scope: container, dependencies: [inView] },
  )
  return (
    <div>
      <div ref={container}>
        <aside
          ref={ref}
          data-grid="image-container"
          className="flex gap-x-5 mt-36 mb-28"
        >
          <div className="relative h-[600px] w-[430px]">
            <Image
              fill
              alt="#"
              priority
              className="object-cover"
              src={'/images/img1.webp'}
              sizes="(max-width: 400px) 100vw"
              onMouseEnter={setOnMouseEnter}
              onMouseLeave={setOnMouseLeave}
            />
          </div>

          <div className="flex gap-x-5">
            <div
              data-scroll
              data-scroll-speed="0.1"
              className="relative md:hidden xl:block xl:w-[130px] w-[40%] h-[170px]"
            >
              <Image
                fill
                alt="#"
                sizes="15vw"
                className="object-cover"
                src={'/images/img2.webp'}
                onMouseEnter={setOnMouseEnter}
                onMouseLeave={setOnMouseLeave}
              />
            </div>

            <div
              className="relative md:hidden xl:block xl:w-[130px] w-[40%] h-[170px]"
              data-scroll
              data-scroll-speed="0.15"
            >
              <Image
                fill
                alt="#"
                className="object-cover"
                src={'/images/img3.webp'}
                sizes="(max-width: 200px) 100vw"
                onMouseEnter={setOnMouseEnter}
                onMouseLeave={setOnMouseLeave}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
