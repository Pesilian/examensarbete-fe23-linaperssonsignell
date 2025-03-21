'use client'
import Image from 'next/image'
import { DarkMode } from '../../services/themeService'

// This component is the hero image, used on page.tsx

export default function Hero() {
  const isDarkMode = DarkMode()
  return (
    <figure className=" hidden lg:block lg:justify-self-center lg:self-center lg:col-span-2 lg:col-start-1">
      <Image
        src={isDarkMode ? 'kommunkartan_dark.svg' : 'kommunkartan.svg'}
        alt="Kommunkartan"
        width={500}
        height={500}
        className="p-4 xl:max-w-full lg:max-w-[350px]  max-w-[200px] h-auto "
        priority={true}
      />
    </figure>
  )
}
