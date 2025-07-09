"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, FolderOpen, Code, GraduationCap, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/90 backdrop-blur-xl border-b border-taupe/30 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-navy to-taupe rounded-xl flex items-center justify-center">
                <span className="text-cream font-bold text-xl">M</span>
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-navy to-taupe rounded-xl opacity-30 blur"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? "text-cream" : "text-navy/70 hover:text-navy"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon size={16} />
                    {item.name}
                  </span>
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-navy to-taupe rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-navy hover:bg-taupe/20 w-12 h-12 rounded-xl"
              >
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-taupe/30"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 text-navy/70 hover:text-navy hover:bg-taupe/10 rounded-xl transition-all duration-200"
                  >
                    <item.icon size={20} />
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
      >
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-2 border border-taupe/30">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`relative w-12 h-12 rounded-xl mb-2 last:mb-0 flex items-center justify-center transition-all duration-300 group ${
                activeSection === item.href.slice(1)
                  ? "bg-navy text-cream shadow-lg"
                  : "text-navy/60 hover:text-navy hover:bg-white/30"
              }`}
            >
              <item.icon size={20} />
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 px-3 py-1 bg-navy text-cream text-sm rounded-lg whitespace-nowrap pointer-events-none"
              >
                {item.name}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
