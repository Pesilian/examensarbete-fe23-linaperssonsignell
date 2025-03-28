'use client'
import { MdOutlineCopyAll } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion'

// This component is a button that copies text to clipboard
// It is used in transcribed.tsx

interface CopyBtnProps {
  text: string
}

export default function CopyBtn({ text }: CopyBtnProps) {
  const [copied, setCopied] = useState(false)

  //Copies the text to clipboard and sets copied to true for 2 seconds
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={copyToClipboard}
      className="flex items-center w-auto lg:pr-8 lg:h-12 h-auto  "
      animate={{ color: copied ? '#1A7267' : '#1c1917' }}
      transition={{ duration: 0.5 }}
    >
      <MdOutlineCopyAll className="mr-2  text-2xl lg:text-3xl" />
    </motion.button>
  )
}
