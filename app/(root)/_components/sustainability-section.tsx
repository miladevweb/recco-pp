'use client'
import { Options, toCharacter, useObserver } from '@/context/use-observer'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

const inputs = [
   {
      id: 's1',
      header: '12,000 acres of forests',
      thumbnail: '/images/img5.webp',
   },
   {
      id: 's2',
      header: '4,000 acres of grasslands',
      thumbnail: '/images/img6.webp',
   },
   {
      id: 's3',
      header: '2 miles of streams restored',
      thumbnail: '/images/img7.webp',
   },
   {
      id: 's4',
      header: 'Sustainable building practices',
      thumbnail: '/images/img8.webp',
   },
]
export function SustainabilitySection() {
   const [selectedId, setSelectedId] = useState('s1')
   const handleRadioChange = (id: string) => {
      setSelectedId(id)
   }
   const container = useRef(null)
   const options: Options = {
      from: { y: 80, opacity: 0 },
      to: { y: 0, opacity: 1, ease: 'power3.inOut', duration: 1, stagger: 0.08 },
   }
   const toCharacterCallback = useCallback(() => toCharacter('article > header'), [])
   const { ref } = useObserver(container, options, 'article > header > .letter', toCharacterCallback)
   return (
      <div>
         <section
            ref={container}
            data-sustainability="container"
            className="px-36 grid grid-cols-2 gap-x-10 py-16"
         >
            <article ref={ref}>
               <header className="text-[3.5vw] tracking-tight mb-8 font-abc-medium ">Sustainability</header>
               <p className="text-xs w-[65%]">
                  When it comes to sustainability, we go above, beyond and then some. We have invested in more than 16,000 acres of land where we are restoring native grasslands and growing forests
                  for carbon sequestration. Through our land management practices, we are improving wildlife habitat, reducing noxious weed infestations, and establishing vibrant forest and grassland
                  ecosystems. We've always played the long game, thinking forward for a future we're proudly bringing to fruition.
               </p>
            </article>

            <aside>
               {inputs.map(({ header, id, thumbnail }) => (
                  <div key={id}>
                     {id === 's1' && <hr />}
                     <input
                        id={id}
                        type="radio"
                        name="accordion"
                        checked={id === selectedId}
                        onChange={() => handleRadioChange(id)}
                     />
                     <label
                        htmlFor={id}
                        className="cursor-none"
                     >
                        <header className="py-3 text-[22px] flex items-center gap-x-3 tracking-tight">
                           <div className="text-primary text-sm font-medium rounded-full border size-9 grid place-items-center">
                              <span>+</span>
                           </div>
                           <span>{header}</span>
                        </header>

                        <div
                           className="relative w-full h-[45vh]"
                           data-sustainability="image-container"
                        >
                           <Image
                              fill
                              alt="#"
                              src={thumbnail}
                              className="object-cover"
                              sizes="(max-width: 500px) 100vw"
                           />
                        </div>
                        <hr />
                     </label>
                  </div>
               ))}
            </aside>
         </section>
      </div>
   )
}
