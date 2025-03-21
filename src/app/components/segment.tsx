'use client'
import { PiSpeakerSimpleHighLight } from 'react-icons/pi'
import { motion, AnimatePresence } from 'framer-motion'
import { DarkMode } from '@/src/services/themeService'

interface Segment {
  speaker: string
  start: string
  end: string
  text: string
  transcriptionMode?: boolean
}

//segment component that displays the speaker, start and end time and the text, is the main focus on the transcribed page
export default function Segment({
  speaker,
  start,
  end,
  text,
  transcriptionMode,
}: Segment) {
  const isDarkMode = DarkMode()

  return (
    //AnimatePresence is used to animate the component when changing between transcriptionMode and textMode
    <AnimatePresence mode="wait">
      {!transcriptionMode && (
        <motion.section
          key="text-mode"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-4 p-4 w-full h-auto rounded-sm flex"
        >
          <h3 className="mr-4">Talare {speaker}</h3>
          <p className="mr-4">
            {start}-{end}:
          </p>
          <p>{text}</p>
        </motion.section>
      )}
      {transcriptionMode && (
        <motion.section
          key="visual-mode"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="w-full h-auto rounded-sm flex"
        >
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
        </motion.section>
      )}
    </AnimatePresence>
  )
}
