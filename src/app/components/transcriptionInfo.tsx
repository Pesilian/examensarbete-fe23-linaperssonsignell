'use client'

import { DarkMode } from '@/src/services/themeService'

//Icons for transcription page, shows information abot transcribed file
//Is used on page:transcibed

interface LabelProps {
  speakers?: number
  language?: string
  words?: string
  time?: string
  text?: string
}

export default function TranscriptionInfo({
  speakers,
  language,
  words,
  time,
  text,
}: LabelProps) {
  const isDarkMode = DarkMode()
  return (
    <figure
      className={`${isDarkMode ? 'bg-stone-600 text-stone-50' : 'bg-[#EDD896] '} mt-4 pl-2 pr-2 mr-2 ml-2 rounded-sm shadow-sm text-center text-sm font-Inter`}
    >
      {speakers}
      {language}
      {words}
      {time}
      {text}
    </figure>
  )
}
