import { DarkMode } from '@/src/services/themeService'
import { useEffect, useState } from 'react'

//Animation on landing page to illustrate the steps to start a new transcription
//Is used on page:Page.tsx

export default function StepAnimation() {
  const [visibleSteps, setVisibleSteps] = useState(0)
  const isDarkMode = DarkMode()

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        if (prev < 3) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, 400)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    'Välj dina inställningar',
    'Ladda upp din ljudfil',
    'Starta transkriberingen!',
  ]

  return (
    <aside className="flex flex-col justify-center items-center p-10 gap-8 w-full lg:pl-10 lg:col-span-2 xl:max-w-lg lg:col-start-3 lg:justify-self-center lg:self-center ">
      {steps.map((text, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
            visibleSteps > index
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 transform transition duration-300 scale-[1.5]'
          } ${index % 2 === 0 ? 'self-start ml-10' : 'self-end mr-10'}`}
        >
          <span
            className={`absolute -top-1 -left-1 lg:top-0 lg:left-2 ${isDarkMode ? 'text-stone-50' : 'text-ston-950'} font-black text-3xl lg:text-5xl px-2 py-1 rounded-md`}
            style={{ zIndex: 10 }}
          >
            {index + 1}
          </span>

          <div
            className={`font-Roboto flex items-center justify-center w-28 h-28 lg:w-44 lg:h-44 rounded-full transform transition duration-300 ${
              isDarkMode ? 'bg-[#8E0826]' : 'bg-[#EDD896]'
            } text-center px-3 text-[0.75rem] lg:text-sm font-medium shadow-md break-words leading-tight`}
          >
            {text}
          </div>
        </div>
      ))}
    </aside>
  )
}
