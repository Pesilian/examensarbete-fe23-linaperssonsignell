'use client'

// This component is the header for the transcription page, is due to be further developed with dynamic title

interface FileTitleProps {
  name: string
}

//Title of finished transcription
export default function FileTitle({ name }: FileTitleProps) {
  return (
    <h2 className="lg:text-4xl text-2xl pl-2 lg:pl-8 font-Roboto font-bold tracking-wide">
      {name}
    </h2>
  )
}
