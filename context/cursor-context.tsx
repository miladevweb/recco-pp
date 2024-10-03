'use client'
import { gsap } from 'gsap'
import { MutableRefObject, createContext, useContext, useRef } from 'react'

type Props = {
   ref: MutableRefObject<null>
   setOnMouseEnter: () => void
   setOnMouseLeave: () => void
   moveCursor: (x: number, y: number) => void
}
const CursorContext = createContext<Props | null>(null)

export function CursorProvider({ children }: { children: React.ReactNode }) {
   const ref = useRef(null)
   const setOnMouseEnter = () => {
      if (ref.current) {
         gsap.to(ref.current, {
            scale: 7,
            duration: 0.2,
            '--mix': 'difference',
         })
      }
   }
   const setOnMouseLeave = () => {
      if (ref.current) {
         gsap.to(ref.current, {
            scale: 1,
            duration: 0.2,
            '--mix': 'normal',
         })
      }
   }

   const moveCursor = (x: number, y: number) => {
      if (ref.current) {
         gsap.to(ref.current, {
            x,
            y,
            opacity: 1,
            duration: 0.3,
         })
      }
   }

   return <CursorContext.Provider value={{ ref, setOnMouseEnter, setOnMouseLeave, moveCursor }}>{children}</CursorContext.Provider>
}

export const useCursorContext = () => {
   const context = useContext(CursorContext)
   if (!context) throw new Error('useCursorContext must be used within a CursorProvider')
   return context
}
