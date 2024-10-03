'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useCursorContext } from '@/context/cursor-context'

gsap.registerPlugin(useGSAP)
export function CustomCursor() {
   const { ref, moveCursor } = useCursorContext()

   useGSAP(
      () => {
         if (window.innerWidth > 900) {
            document.addEventListener('mousemove', (e) => moveCursor(e.clientX, e.clientY))
            return () => document.removeEventListener('mousemove', (e) => moveCursor(e.clientX, e.clientY))
         }
      },
      { scope: ref, dependencies: [] },
   )
   return (
      <div
         ref={ref}
         data-cursor
         className="size-10 bg-primary opacity-0 rounded-full fixed top-0 left-0 z-[100] pointer-events-none"
      ></div>
   )
}
