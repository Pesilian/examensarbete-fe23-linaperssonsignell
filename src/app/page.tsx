'use client'

import AboutUs from './components/aboutUs'
import Hero from './components/Hero'

export default function Home() {
  return (
    <article className="h-full w-full grid grid-cols-3">
      <Hero />
      <AboutUs />
    </article>
  )
}
