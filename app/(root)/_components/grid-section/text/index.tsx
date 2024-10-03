'use client'
import { useRef } from 'react'
import { Options, useObserver } from '@/context/use-observer'

export function TextTemplate({ children }: { children: React.ReactNode }) {
   const options: Options = {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1, ease: 'power3.inOut', duration: 1, stagger: 0.1 },
   }

   const container = useRef(null)
   const { ref } = useObserver(container, options, 'aside p')
   return (
      <div>
         <div ref={container}>
            <aside
               ref={ref}
               className="tracking-tighter font-inter text-[3vw] leading-[110%] [&>div]:overflow-y-hidden"
            >
               {children}
            </aside>
         </div>
      </div>
   )
}
