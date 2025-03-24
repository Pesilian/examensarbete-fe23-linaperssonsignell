'use client'

import React from 'react'

interface Segment {
  speaker: string
  start: number
  end: number
}

interface Props {
  segments: Segment[]
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `${minutes} min ${seconds.toString().padStart(2, '0')} sek`
}

const SpeakerTalkTime: React.FC<Props> = ({ segments }) => {
  const talkTimePerSpeaker: Record<string, number> = {}

  segments.forEach(({ speaker, start, end }) => {
    const duration = end - start
    talkTimePerSpeaker[speaker] = (talkTimePerSpeaker[speaker] || 0) + duration
  })

  return (
    <div className="flex h-12 items-center ml-8">
      {Object.entries(talkTimePerSpeaker).map(([speaker, time]) => (
        <div className="text-xs ml-2 flex" key={speaker}>
          <p className="text-stone-400 mr-2">
            Talare {speaker.replace('SPEAKER_', '')}:
          </p>
          <p>{formatTime(time)}</p>
        </div>
      ))}
    </div>
  )
}

export default SpeakerTalkTime
