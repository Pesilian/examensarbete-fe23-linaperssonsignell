'use client'

interface ProgressBarProps {
  progress: number
  status: string
}

//simple progress bar component
//Is used on page:transcibed

export default function ProgressBar({ progress, status }: ProgressBarProps) {
  return (
    <div className="flex flex-col justify-center items-center h-screen mb-20">
      <div className="w-32 h-32 border-t-8 border-[#1A7267] border-solid rounded-full animate-spin mb-10" />
      <p className="font-bold text-3xl text-[#1A7267]">{status}</p>
      <p className="font-bold text-3xl text-[#1A7267]">
        {Math.trunc(progress)} %
      </p>
    </div>
  )
}
