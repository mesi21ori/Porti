"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code, ChevronRight } from "lucide-react"
import { SKILL_CATEGORIES } from "@/lib/constants"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border-2 border-taupe/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 bg-navy/10"
          animate={{
            rotate: [0, 45, 0],
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-24 h-24 border-2 border-navy/20"
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-6"
          >
            <div className="p-6 bg-cream border-4 border-taupe rounded-3xl">
              <Code className="text-navy" size={40} />
            </div>
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -inset-3 border-2 border-navy/30 rounded-3xl"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black text-navy mb-6"
          >
            Technical{" "}
            <motion.span
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-taupe via-navy to-taupe bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Skills
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-1 w-36 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`cursor-pointer relative group ${activeCategory === index ? "scale-105" : ""}`}
            >
              <motion.div
                className="absolute inset-0 bg-taupe/20 rounded-3xl"
                animate={activeCategory === index ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <div
                className={`relative bg-cream/80 backdrop-blur-xl p-8 rounded-3xl border-2 transition-all duration-500 ${
                  activeCategory === index ? "border-navy shadow-2xl" : "border-taupe/40 hover:border-taupe/60"
                }`}
              >
                <motion.div
                  animate={
                    activeCategory === index
                      ? {
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    activeCategory === index ? "bg-navy text-cream" : "bg-taupe/30 text-navy"
                  }`}
                >
                  <category.icon size={28} />
                </motion.div>
                <h3
                  className={`text-xl font-bold mb-4 transition-colors ${
                    activeCategory === index ? "text-navy" : "text-navy/80"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-navy/70 text-sm">{category.skills.length} Technologies</span>
                  <ChevronRight
                    className={`transition-transform ${activeCategory === index ? "rotate-90" : ""}`}
                    size={16}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-cream/80 backdrop-blur-xl border-2 border-taupe/40 rounded-[3rem] p-8 lg:p-12 mb-16 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center"
            >
              {React.createElement(SKILL_CATEGORIES[activeCategory].icon, {
                className: "text-cream",
                size: 24,
              })}
            </motion.div>
            <h3 className="text-3xl font-black text-navy">{SKILL_CATEGORIES[activeCategory].title}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-navy text-lg">{skill.name}</span>
                  <motion.span
                    animate={hoveredSkill === index ? { scale: 1.1 } : { scale: 1 }}
                    className="text-navy/70 font-bold text-lg"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="relative">
                  <div className="w-full h-4 bg-taupe/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-navy to-taupe rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, x: 0 }}
                    animate={{
                      scale: hoveredSkill === index ? 1 : 0,
                      x: `${skill.level * 0.85}%`,
                    }}
                    className="absolute -top-8 w-8 h-8 bg-navy rounded-full flex items-center justify-center transform -translate-x-1/2"
                  >
                    <div className="w-2 h-2 bg-cream rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
