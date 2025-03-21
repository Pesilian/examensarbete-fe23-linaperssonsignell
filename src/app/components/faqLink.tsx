'use client'
import Link from 'next/link'
import { CiCircleInfo } from 'react-icons/ci'

// This component is a link to the FAQ page is used in layout.tsx

export default function FaQLink() {
  return (
    <Link
      href="/faq"
      className="flex lg:h-40 justify-center lg:pt-10 lg:pr-10 lg:justify-self-end lg:col-span-1 lg:col-start-7"
    >
      <CiCircleInfo className="w-10 h-10" />
    </Link>
  )
}
