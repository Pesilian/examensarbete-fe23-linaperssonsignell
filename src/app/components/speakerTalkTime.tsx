'use client'

import React, { useState } from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi2'

interface Segment {
  speaker: string
  start: number
  end: number
}

interface Props {
  segments: Segment[]
}

//Component to display total speakingtime per speaker changes to hidden on mobile
//Is used on page:transcribed

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `${minutes} min ${seconds.toString().padStart(2, '0')} sek`
}

const SpeakerTalkTime: React.FC<Props> = ({ segments }) => {
  const [isOpen, setIsOpen] = useState(false)
  const talkTimePerSpeaker: Record<string, number> = {}

  segments.forEach(({ speaker, start, end }) => {
    const duration = end - start
    talkTimePerSpeaker[speaker] = (talkTimePerSpeaker[speaker] || 0) + duration
  })

  return (
    <div className="flex">
      {/* Toggle only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-xs  "
      >
        {isOpen ? '' : <HiOutlineChevronRight className="text-xl" />}
      </button>

      {/* TalkTime is always visible on desktop*/}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex-col lg:flex-row flex items-start lg:items-center h-auto pl-2 lg:pl-8 lg:h-12 transition-all duration-300 ${
          !isOpen ? 'hidden lg:flex' : 'flex'
        }`}
      >
        {Object.entries(talkTimePerSpeaker).map(([speaker, time]) => (
          <div className="text-xs lg:ml-2 flex mt-1" key={speaker}>
            <p className="text-stone-400 mr-2">
              Talare {speaker.replace('SPEAKER_', '')}:
            </p>
            <p>{formatTime(time)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpeakerTalkTime
