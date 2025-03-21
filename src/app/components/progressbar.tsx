'use client'

interface ProgressBarProps {
  progress: number
}

//simple progress bar component that is due to be further developed

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="bg-gray-200 h-4 rounded w-full">
      <div
        className="bg-blue-500 h-4 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
