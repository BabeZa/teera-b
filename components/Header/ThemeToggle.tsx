'use client'
import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null // ป้องกัน hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-2xl text-black dark:text-white hover:text-purple-500 transition duration-200 hover:scale-110"
    >
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  )
}

export default ThemeToggle