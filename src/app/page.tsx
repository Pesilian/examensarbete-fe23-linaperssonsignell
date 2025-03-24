'use client'

import ToFormBtn from './components/getToFormBtn'
import Hero from './components/Hero'
import StepAnimation from './components/stepsToTranscribe'

export default function Home() {
  return (
    <article className="h-full w-full flex flex-col justify-items-center items-center lg:grid lg:grid-cols-4 lg:content-center lg:justify-center">
      <h3 className="lg:col-span-4 font-black text-xl text-center lg:text-5xl mt-12">
        Enkel transkribering i tre steg!
      </h3>

      <Hero />
      <StepAnimation />
      <ToFormBtn />
    </article>
  )
}
