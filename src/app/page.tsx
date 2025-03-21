'use client'

import AboutUs from './components/aboutUs'
import Hero from './components/Hero'

export default function Home() {
  return (
    <article className="h-full w-full flex flex-col justify-items-center lg:grid lg:grid-cols-4 lg:content-center lg:justify-center">
      <Hero />
      <AboutUs />
    </article>
  )
}
