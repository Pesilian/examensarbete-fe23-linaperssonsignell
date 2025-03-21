'use client'
import Image from 'next/image'
import Link from 'next/link'

//Header component, is used in layout.tsx

import { DarkMode } from '../../services/themeService'

export default function Header() {
  const isDarkMode = DarkMode()
  return (
    <header className="flex w-full col-span-1 col-start-1">
      <Link href="/" className="max-h-40">
        <Image
          src={isDarkMode ? '/grLogotyp_dark.svg' : '/grLogotyp.svg'}
          alt="GR Logga"
          width={215}
          height={70}
          priority={true}
          className="m-10 w-40 h-auto "
        />
      </Link>
    </header>
  )
}
