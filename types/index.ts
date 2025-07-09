import type React from "react"
export interface ContactInfo {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  href: string
}

export interface Stat {
  number: string
  label: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export interface Experience {
  company: string
  position: string
  location: string
  period: string
  description: string
  current: boolean
  technologies: string[]
  achievements: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  status: string
  role: string
  category: string
  highlights: string[]
  liveUrl: string
  sourceUrl: string
  bgImageUrl: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  skills: Skill[]
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}
