'use client'
import { PiSpeakerSimpleHighLight } from 'react-icons/pi'
import { DarkMode } from '@/src/services/themeService'

interface DesktopProps {
  speaker: string
  start: string
  end: string
  text: string
}

//segment component that displays the speaker, start and end time and the text, is the main focus on the transcribed page
export default function Desktop({ speaker, start, end, text }: DesktopProps) {
  const isDarkMode = DarkMode()

  return (
    <section className="w-full h-auto rounded-sm flex">
      <div
        className={`mb-2 p-8 w-full h-auto rounded-sm flex hover:shadow-sm ${
          isDarkMode ? 'hover:bg-stone-800 ' : 'hover:bg-stone-50'
        }`}
      >
        <div
          className={`flex pr-auto pl-4 rounded-r-full ${
            isDarkMode ? 'text-stone-50' : 'bg-'
          } items-center h-12 min-w-48 rounded mr-4`}
        >
          <span
            className={`${
              isDarkMode ? 'bg-stone-500 text-stone-50' : 'bg-stone-200'
            } h-10 w-10 text-center p-2 rounded-full mr-2 text-sm`}
          >
            {speaker}
          </span>
          <span className="flex flex-col ">
            <p className="text-nowrap font-Roboto font-bold text-xs">
              Talare {speaker}
            </p>

            <div className="flex w-full">
              <p className="mr-2 text-xs text-blue-400 text-nowrap ">
                {start} - {end}
              </p>
              <PiSpeakerSimpleHighLight className="self-center fill-blue-400" />
            </div>
          </span>
        </div>
        <p className="pt-4">{text}</p>
      </div>
    </section>
  )
}
