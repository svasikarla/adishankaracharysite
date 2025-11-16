"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    {
      title: "About",
      href: "/biography",
      description: "Life and legacy of Adi Shankaracharya"
    },
    {
      title: "Teachings",
      items: [
        { title: "Bhaja Govindam", href: "/teachings/bhaja-govindam", description: "31 verses on devotion and wisdom" },
        { title: "Atma Bodha", href: "/teachings/atma-bodha", description: "68 verses on Self-Knowledge" },
        { title: "All Texts", href: "/teachings", description: "Complete library of authentic texts" },
      ]
    },
    {
      title: "Philosophy",
      items: [
        { title: "Atman", href: "/philosophy/atman", description: "The Individual Self" },
        { title: "Brahman", href: "/philosophy/brahman", description: "Universal Consciousness" },
        { title: "Maya", href: "/philosophy/maya", description: "Cosmic Illusion" },
        { title: "Moksha", href: "/philosophy/moksha", description: "Liberation" },
        { title: "Neti Neti", href: "/philosophy/neti-neti", description: "Not This, Not This" },
        { title: "All Concepts", href: "/philosophy", description: "Explore all Vedanta concepts" },
      ]
    },
    {
      title: "Resources",
      items: [
        { title: "Four Mathas", href: "/mathas", description: "Sacred monasteries established by Shankaracharya" },
        { title: "Modern Teachers", href: "/teachers", description: "Contemporary Vedanta scholars" },
        { title: "Digital Archives", href: "/resources", description: "Online texts and translations" },
        { title: "Study Paths", href: "/study-paths", description: "Guided learning journeys" },
      ]
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e07c24]/20 bg-[#f7f3e9]/95 dark:bg-[#1a1814]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f7f3e9]/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/om-symbol.jpg"
              alt="Om Symbol"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-serif font-semibold text-[#8b5d33] dark:text-[#e07c24] hidden md:inline">
              Wisdom of Adi Shankaracharya
            </span>
            <span className="text-lg font-serif font-semibold text-[#8b5d33] dark:text-[#e07c24] md:hidden">
              Shankaracharya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-[#8b5d33] dark:text-[#e07c24] hover:text-[#e07c24] dark:hover:text-[#f7f3e9]">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                      "hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e] hover:text-[#e07c24]",
                                      "focus:bg-[#e9e1d3] dark:focus:bg-[#2a241e]"
                                    )}
                                  >
                                    <div className="text-sm font-semibold leading-none text-[#8b5d33] dark:text-[#e07c24]">
                                      {subItem.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-[#5a4a3f] dark:text-[#d9c5a9]">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors",
                          "hover:bg-[#e9e1d3] dark:hover:bg-[#2a241e] hover:text-[#e07c24]",
                          "focus:bg-[#e9e1d3] dark:focus:bg-[#2a241e] focus:text-[#e07c24]",
                          "text-[#8b5d33] dark:text-[#e07c24]"
                        )}>
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#8b5d33] dark:text-[#e07c24]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e07c24]/20">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    <div>
                      <div className="font-semibold text-[#8b5d33] dark:text-[#e07c24] mb-2">
                        {item.title}
                      </div>
                      <div className="ml-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-[#5a4a3f] dark:text-[#d9c5a9] hover:text-[#e07c24] py-1"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-semibold text-[#8b5d33] dark:text-[#e07c24] hover:text-[#e07c24]"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
