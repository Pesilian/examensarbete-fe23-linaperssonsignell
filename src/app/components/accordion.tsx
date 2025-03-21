'use client'
import { DarkMode } from '@/services/themeService'
import { useState } from 'react'
import React from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { HiOutlineChevronUp } from 'react-icons/hi2'

// This component is an accordion component to be used on faq-page

interface FaQAccordation {
  title: string
  content: string
}

export default function AccordionFaq({ title, content }: FaQAccordation) {
  const isDarkMode = DarkMode()
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`h-auto w-4/6 flex flex-col self-center border-2 rounded-sm m-8 mt-12 border-t-stone-300 ${isDarkMode ? 'border-stone-950' : 'border-stone-50 '}`}
    >
      <details className="list-none">
        <summary className="list-none">
          {title} {open ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </summary>
        {content}
      </details>
    </div>
  )
}
