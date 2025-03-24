'use client'
import { PiSpeakerSimpleHighLight } from 'react-icons/pi'
import { DarkMode } from '@/src/services/themeService'

interface DesktopProps {
  speaker: string
  start: string
  end: string
  text: string
}

//Component that renders finished and segmented transcription if on desktop
//Is the main focus on the transcribed page
export default function Desktop({ speaker, start, end, text }: DesktopProps) {
  const isDarkMode = DarkMode()

  const pastelColors = [
    'bg-red-200',
    'bg-orange-200',
    'bg-amber-200',
    'bg-yellow-200',
    'bg-lime-200',
    'bg-green-200',
    'bg-teal-200',
    'bg-cyan-200',
    'bg-blue-200',
    'bg-purple-200',
  ]

  // Fallback om vi inte har färg för talaren
  const getSpeakerColor = (speaker: string) => {
    const speakerNumber = parseInt(speaker.replace('SPEAKER_', '').trim())
    return pastelColors[speakerNumber % pastelColors.length]
  }

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
              isDarkMode ? 'text-stone-50' : 'text-stone-900'
            } ${getSpeakerColor(speaker)} h-10 w-10 text-center p-2 rounded-full mr-2 text-sm font-bold`}
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
