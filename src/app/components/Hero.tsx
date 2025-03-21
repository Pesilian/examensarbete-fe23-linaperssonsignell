'use client'
import Image from 'next/image'
import { DarkMode } from '../../services/themeService'

// This component is the hero image, used on page.tsx

export default function Hero() {
  const isDarkMode = DarkMode()
  return (
    <figure className="justify-self-end self-center">
      <Image
        src={isDarkMode ? 'kommunkartan_dark.svg' : 'kommunkartan.svg'}
        alt="Kommunkartan"
        width={500}
        height={500}
        className="p-4 max-w-full lg:max-w-[400px] md:max-w-[300px] h-auto "
        priority={true}
      />
    </figure>
  )
}
