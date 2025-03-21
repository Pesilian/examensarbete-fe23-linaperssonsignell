'use client'

interface ProgressBarProps {
  progress: number
}

//simple progress bar component

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-16 h-16 border-t-4 border-stone-500 border-solid rounded-full animate-spin mb-10" />
      <p>Processing {progress} %</p>
    </div>
  )
}
