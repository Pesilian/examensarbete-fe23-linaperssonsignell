import { DarkMode } from '@/src/services/themeService'
import Link from 'next/link'

// This component is a link to the newtranscription page
// It is used in component:aboutUs.tsx

export default function ToFormBtn() {
  const isDarkMode = DarkMode()
  return (
    <Link
      href="/newtranscription"
      className={`lg:col-span-4 lg:text-4xl text-lg border border-2 rounded-full h-14 lg:h-20 w-5/6 lg:w-3/6  flex items-center justify-center font-Roboto mt-4 transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-lg ${
        isDarkMode
          ? 'text-white border-[#8E0826] hover:text-[#8E0826] '
          : 'text-stone-950 border-[#EDD896] hover:bg-[#EDD896]'
      }`}
    >
      <span className="lg:p-8 font-light">Börja transkribera!</span>
    </Link>
  )
}
