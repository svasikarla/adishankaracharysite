"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for dark mode preference on initial load
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setIsDarkMode(true)
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="text-[#8b5d33] dark:text-[#e07c24]"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  )
}

