import Image from 'next/image'

export function AlwaysSection() {
  return (
    <section
      data-always="container"
      className="px-36 py-28 flex items-end gap-x-28 absolute left-0 top-[60%] pointer-events-none"
    >
      <div
        data-scroll
        data-scroll-speed="0.1"
        className="relative w-[25vw] h-[70vh] pointer-events-auto"
      >
        <Image
          fill
          alt="#"
          className="object-cover"
          src={'/images/img11.webp'}
          sizes="(max-width: 25vw) 100vw"
        />
      </div>

      <div data-always="text-container">
        <h3 className="text-[6.5vw] tracking-tight">
          Always <span className="text-primary">Ahead.</span>
        </h3>
        <div className="flex items-center gap-x-3">
          <div className="size-8 border rounded-full grid place-items-center">
            <span className="-mt-[6px] text-primary font-bold">&rarr;</span>
          </div>
          <p className="text-sm font-abc-medium font-semibold">Learn more about us</p>
        </div>
      </div>
    </section>
  )
}
