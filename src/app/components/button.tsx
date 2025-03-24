'use client'
import Link from 'next/link'

//Button component, is used in newtranscription.tsx, is made to be reusable w. different colors and links

interface ButtonProps {
  label: string
  textColor: string
  color?:
    | 'primary'
    | 'secondary'
    | 'darkModePrimary'
    | 'darkModeSecondary'
    | 'danger'
  link?: string
  disabled?: boolean
}

export default function Button({
  label,
  textColor,
  color = 'primary',
  link,
  disabled,
}: ButtonProps) {
  const colors: Record<string, string> = {
    primary: 'bg-[#EDD896]',
    secondary: 'bg-stone-300',
    darkModePrimary: 'bg-stone-800',
    darkModeSecondary: 'bg-stone-700',
    danger: 'bg-red-500',
  }

  let buttonClasses = `${colors[color]} text-${textColor} px-4 py-2 rounded border justify-self-center self-center w-auto h-auto`

  if (disabled) {
    buttonClasses += ' opacity-50 cursor-not-allowed'
  }

  if (link) {
    return (
      <Link href={link} className={buttonClasses}>
        {label}
      </Link>
    )
  }
}
