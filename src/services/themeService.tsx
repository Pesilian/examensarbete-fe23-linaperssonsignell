'use client'
import { useEffect, useState } from 'react'

// DarkMode hook – detects if the user prefers dark mode using the browser's color scheme settings.
// Returns true if dark mode is active.

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
