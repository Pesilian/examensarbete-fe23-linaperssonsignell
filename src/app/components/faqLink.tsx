'use client'
import Link from 'next/link'
import { CiCircleInfo } from 'react-icons/ci'

// This component is a link to the FAQ page is used in layout.tsx

export default function FaQLink() {
  return (
    <Link href="/faq" className="pt-10 pr-10 justify-self-end max-h-20">
      <CiCircleInfo className="w-10 h-10" />
    </Link>
  )
}
