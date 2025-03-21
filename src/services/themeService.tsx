'use client'
import { useEffect, useState } from 'react'

export const DarkMode = (): boolean => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)

    setIsDarkMode(prefersDark.matches)
    prefersDark.addEventListener('change', handleChange)

    return () => prefersDark.removeEventListener('change', handleChange)
  }, [])

  return isDarkMode
}
