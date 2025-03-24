'use client'

// This component is the header for the transcription page, is due to be further developed with dynamic title

interface FileTitleProps {
  name: string
}

//Title of finished transcription
export default function FileTitle({ name }: FileTitleProps) {
  return (
    <h2 className="lg:text-4xl text-2xl pl-2 lg:pl-10 font-Roboto font-bold tracking-wide">
      <span className="mr-2">|</span>
      <span className="text-[#8E0826]">{name}</span>
      <span className="ml-2">|</span>
    </h2>
  )
}
