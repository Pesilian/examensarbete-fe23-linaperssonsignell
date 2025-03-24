import { DarkMode } from '@/src/services/themeService'
import Link from 'next/link'

// This component is a link to the newtranscription page
// It is used in aboutUs.tsx

export default function ToFormBtn() {
  const isDarkMode = DarkMode()
  return (
    <Link
      href="/newtranscription"
      className={`lg:col-span-4 lg:text-3xl text-lg border rounded-full h-14 w-5/6 flex items-center justify-center text-stone-950 font-Roboto mt-4 transform transition duration-300 lg:hover:scale-[1.2] lg:hover:text-stone-50 ${isDarkMode ? 'bg-[#00A39B] border-stone-950' : 'bg-[#A9CFE0]'}`}
    >
      <span className="lg:p-8 font-light">
        Jag är redo att börja transkribera!
      </span>
    </Link>
  )
}
