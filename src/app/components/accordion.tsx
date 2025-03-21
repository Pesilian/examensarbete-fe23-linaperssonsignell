'use client'
import { DarkMode } from '@/src/services/themeService'
import { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'

interface FaQAccordation {
  question: string
  answer: string
}

// AccordionFaq component – displays a collapsible FAQ item.
// Shows a question and toggles the visibility of the answer on click.
// Supports dark mode styling and includes open/close icons.

export default function AccordionFaq({ question, answer }: FaQAccordation) {
  const isDarkMode = DarkMode()
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`w-auto cursor-pointer border rounded-md p-4 m-4 transition-all duration-300 ${
        isDarkMode
          ? 'border-stone-700 bg-stone-900 text-white'
          : 'border-stone-300 bg-white text-black'
      }`}
    >
      <div className="flex justify-between items-center ">
        <span className="font-medium text-sm lg:text-lg">{question}</span>
        {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </div>
      {open && <p className="mt-2 text-start text-xs lg:text-sm">{answer}</p>}
    </div>
  )
}
