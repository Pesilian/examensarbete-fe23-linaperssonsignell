'use client'
import { DarkMode } from '@/src/services/themeService'
import { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'

interface FaQAccordation {
  question: string
  answer: string
}

// AccordionFaq component – displays a collapsible FAQ item.
// Shows a question and toggles the visibility of the answer on click.
// Supports dark mode styling and includes open/close icons.

//Is used in getFAQ

export default function AccordionFaq({ question, answer }: FaQAccordation) {
  const isDarkMode = DarkMode()
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`w-auto cursor-pointer p-4 m-4 transition-all duration-300 overflow-hidden ${
        open
          ? isDarkMode
            ? ' bg-stone-900 text-white'
            : ' text-black'
          : isDarkMode
            ? ' bg-stone-950 text-white'
            : 'text-black'
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm lg:text-lg transition-all ease-in-out duration-700">
          {question}
        </span>
        <HiOutlineChevronDown
          className={`transform transition-transform duration-700 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          open
            ? 'max-h-[500px] opacity-100 translate-y-0 mt-2'
            : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <p className="text-start text-xs lg:text-sm">{answer}</p>
      </div>
    </div>
  )
}
