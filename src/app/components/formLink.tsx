import Link from 'next/link'
import { MdLaunch } from 'react-icons/md'

// This component is a link to the newtranscription page
// It is used in aboutUs.tsx

export default function FormLink() {
  return (
    <Link
      href="/newtranscription"
      className="text-md font-Roboto hover:text-stone-400 flex mt-4"
    >
      <span className="mr-2"> Påbörja ny transkription</span>

      <MdLaunch className="self-center" />
    </Link>
  )
}
