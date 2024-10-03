'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function LocomotiveProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (window.innerWidth > 900) {
      const runLocomotive = async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scroll = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.05,
            smoothWheel: true,
            wheelMultiplier: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          },
        })
        return () => scroll.destroy()
      }
      runLocomotive()
    }
  }, [pathname])
  return <>{children}</>
}
