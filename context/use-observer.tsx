import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { MutableRefObject } from 'react'
import { useInView } from 'react-intersection-observer'

gsap.registerPlugin(useGSAP)
export type Options = { from: gsap.TweenVars; to: gsap.TweenVars }

export function useObserver(containerRef: MutableRefObject<null>, options: Options, gsapRef: string, toCharacter?: () => void) {
  const [ref, inView] = useInView({ triggerOnce: true })

  useGSAP(
    () => {
      if (toCharacter) toCharacter()
      gsap.set(gsapRef, options.from)
      if (inView) gsap.to(gsapRef, options.to)
    },

    { scope: containerRef, dependencies: [inView] },
  )
  return { ref }
}

export function toCharacter(selector: string) {
  const targets = gsap.utils.toArray(selector) as HTMLElement[]
  targets.forEach((element) => {
    const content = element.textContent!.split('')
    element.textContent = ''

    content.forEach((char) => {
      const span = document.createElement('span')
      span.className = 'letter'
      span.textContent = char
      element.append(span)
    })
  })
}
