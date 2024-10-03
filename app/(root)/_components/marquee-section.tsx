'use client'
import { useCursorContext } from '@/context/cursor-context'

export function MarqueeSection() {
   const { setOnMouseEnter, setOnMouseLeave } = useCursorContext()
   return (
      <section
         data-marquee="container"
         onMouseEnter={setOnMouseEnter}
         onMouseLeave={setOnMouseLeave}
         className="mt-[500px] h-[58vh] w-screen bg-primary select-none overflow-hidden"
      >
         {/* Marquee */}
         <div className="text-[15vw] font-abc-regular flex text-nowrap">
            <div
               data-marquee="text-container"
               className="w-[150vw] flex pl-[150px] -mt-3"
            >
               <span className="tracking-tighter">Marquee Section</span>
               <span className="text-[2vw] mt-16">TM</span>
            </div>
            <div
               data-marquee="text-container"
               className="w-[150vw] flex pl-[150px] -mt-3"
            >
               <span className="tracking-tighter">Marquee Section</span>
               <span className="text-[2vw] mt-16">TM</span>
            </div>
         </div>

         {/* Footer */}
         <footer data-marquee="footer" className="flex justify-between px-16 mt-8">
            <div className="flex gap-x-6">
               <span>&copy; No copyright</span>
               <span>BertchCapital Website Clone</span>
            </div>
            <div className="flex gap-x-6">
               <span>Privacy</span>
               <span>Terms</span>
            </div>
         </footer>
      </section>
   )
}
