'use client'

interface ProgressBarProps {
  progress: number
}

//simple progress bar component

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-16 h-16 border-t-4 border-green-300 border-solid rounded-full animate-spin mb-10" />
      <p>Processing {Math.trunc(progress)} %</p>
    </div>
  )
}
