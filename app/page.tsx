"use client"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/layout/navigation"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { FloatingElements } from "@/components/layout/floating-elements"
import { Education } from "@/components/sections/education"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-cream to-taupe/20 relative overflow-x-hidden">
      <FloatingElements />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
