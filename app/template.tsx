'use client'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
export default function Template({ children }: { children: React.ReactNode }) {
  // Scope
  const container = useRef(null)

  const bg1 = useRef(null)
  const bg2 = useRef(null)
  const bg3 = useRef(null)
  const svg = useRef(null)

  useGSAP(
    () => {
      window.scrollTo(0, 0)

      const tl = gsap.timeline()
      tl.to(bg2.current, {
        duration: 0.6,
        top: 0,
        ease: 'circ.inOut',
      })
        .to(
          svg.current,
          {
            duration: 0.1,
            scale: 1,
            fill: 'white',
            ease: 'circ.inOut',
          },
          '<50%',
        )
        .to(bg1.current, {
          duration: 0,
          top: '-100%',
        })
        .to(bg3.current, {
          duration: 0.4,
          top: 0,
          ease: 'circ.inOut',
        })
        .to(
          svg.current,
          {
            duration: 0.1,
            fill: 'black',
            ease: 'circ.inOut',
          },
          '<50%',
        )
        .to([bg2.current, bg3.current], {
          top: '-100%',
          duration: 0.6,
          ease: 'circ.inOut',
          delay: 0.2,
        })
        .to(
          svg.current,
          {
            scale: 0,
            opacity: 0,
            duration: 0.008,
            pointerEvents: 'none',
            ease: 'circ.inOut',
          },
          '<50%',
        )
    },
    { scope: container, dependencies: [children] },
  )

  return (
    <main>
      <div ref={container}>
        <div
          className="z-20 size-full fixed inset-0 bg-white"
          ref={bg1}
        ></div>
        <div
          className="z-20 size-full fixed top-full left-0 bg-black"
          ref={bg2}
        ></div>
        <div
          className="z-20 size-full fixed top-full left-0 bg-primary"
          ref={bg3}
        ></div>
        <svg
          ref={svg}
          viewBox="0 0 165 160"
          className="z-30 size-60 scale-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M164.98 38.7875L164.98 0.745117C121.209 0.745115 85.7256 36.2287 85.7256 80L123.768 80C123.768 57.239 142.219 38.7875 164.98 38.7875Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-1.66288e-06 38.7875L0 0.745117C43.7713 0.745119 79.2549 36.2288 79.2549 80L41.2126 80C41.2126 57.239 22.7611 38.7875 -1.66288e-06 38.7875Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M123.767 80L85.7246 80C85.7246 123.771 121.208 159.255 164.98 159.255L164.98 121.213C142.218 121.213 123.767 102.761 123.767 80Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-1.66288e-06 118.042L0 80C43.7713 80 79.2549 115.484 79.2549 159.255L41.2126 159.255C41.2126 136.494 22.7611 118.042 -1.66288e-06 118.042Z"
          ></path>
        </svg>
      </div>

      {children}
    </main>
  )
}
