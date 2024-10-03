'use client'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const routes = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Projects', path: '/projects' },
  { label: 'Info', path: '/info' },
]
export function Navbar() {
  const ref = useRef(null)
  const container = useRef(null)
  const pathname = usePathname()
  const [route, setRoute] = useState<{ label: string; path: string }>()

  useGSAP(
    () => {
      const currentRoute = routes.find((route) => route.path === pathname)
      if (currentRoute) {
        setRoute(currentRoute)
      }

      gsap.from(ref.current, {
        y: 50,
        opacity: 0,
        ease: 'power3.inOut',
        duration: 0.5,
        delay: pathname === '/' ? 2.7 : 1.7,
      })
    },
    { scope: container, dependencies: [pathname] },
  )
  return (
    <div>
      <div ref={container}>
        <nav
          ref={ref}
          className="fixed z-10 left-0 top-[89vh]  w-full grid place-items-center pointer-events-none"
        >
          <ul
            data-nav="ul-container"
            className="flex items-center bg-white gap-x-0 pl-2 pr-4 py-3 rounded-[50px] shadow-[0px_5px_15px_4px_#00000021] [&>li]:text-sm [&>li]:font-abc-regular [&>li]:overflow-hidden pointer-events-auto"
          >
            <li
              data-nav="arrow"
              className="rounded-full border-2 grid place-items-center size-8 mr-4"
            >
              &#x27F6;
            </li>

            {route && (
              <>
                <li data-nav="current-route">
                  <span>{route.label}</span>
                </li>

                {routes.map((route, index) => (
                  <li
                    key={index}
                    className="size-0"
                    data-nav="hidden-routes"
                  >
                    <span>{route.label} </span>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
