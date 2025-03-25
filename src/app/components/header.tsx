'use client'
import Image from 'next/image'
import Link from 'next/link'
import { DarkMode } from '../../services/themeService'

//Main header of page
//Is used on layout.tsx

export default function Header() {
  const isDarkMode = DarkMode()
  return (
    <header className="relative lg:w-full lg:col-span-1 lg:col-start-1 overflow-visible">
      <Link href="/" className="block relative h-[50px] lg:h-[100px]">
        <Image
          src={isDarkMode ? '/grLogotyp_dark.svg' : '/grLogotyp.svg'}
          alt="GR Logga"
          width={215}
          height={70}
          priority
          className="absolute top-4 left-4 w-[100px] lg:w-[200px] h-auto z-50"
        />
      </Link>
    </header>
  )
}
