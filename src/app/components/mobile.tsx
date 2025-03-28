'use client'

interface MobileProps {
  speaker: string
  start: string
  end: string
  text: string
}

//Component that renders finished and segmented transcription if on mobile device/ small screen
//Is the main focus on the transcribed page

export default function Mobile({ speaker, start, end, text }: MobileProps) {
  return (
    <section className="mb-4 p-4 w-full h-auto rounded-sm flex">
      <div>
        <h3 className="mr-4">Talare {speaker}</h3>
        <p className="mr-4 text-blue-400 text-xs">
          {start}-{end}:
        </p>
      </div>
      <p>{text}</p>
    </section>
  )
}
