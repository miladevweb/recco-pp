import { Fragment } from 'react'
import { HeroSection } from './_components/hero-section'
import { GridSection } from './_components/grid-section'
import { FirstImageSection } from './_components/images-section/first'
import { OurSection } from './_components/our-section'
import { SustainabilitySection } from './_components/sustainability-section'
import { AlwaysSection } from './_components/always-section'
import { MarqueeSection } from './_components/marquee-section'
import { SecondImageSection } from './_components/images-section/second'

export default function Page() {
  return (
    <Fragment>
      <HeroSection />
      <GridSection />
      <FirstImageSection />
      <OurSection />
      <SustainabilitySection />

      <div className="relative">
        <SecondImageSection />
        <AlwaysSection />
      </div>
      <MarqueeSection />
    </Fragment>
  )
}
