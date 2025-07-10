"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Layers,
  Code,
  Zap,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PROJECTS } from "@/lib/constants"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
  }

  React.useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const currentProject = PROJECTS[currentIndex]

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-taupe/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["50%", "30%", "50%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-navy/5"
          animate={{
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.3, 0.8, 1.1, 1],
            borderRadius: ["0%", "50%", "25%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-taupe/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-6"
          >
            <motion.div
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="p-6 bg-cream border-4 border-taupe rounded-3xl shadow-2xl"
            >
              <FolderOpen className="text-navy" size={40} />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-8"
            >
              <div className="relative w-full h-full">
                <motion.div className="absolute top-0 left-1/2 w-3 h-3 bg-navy/40 rounded-full transform -translate-x-1/2" />
                <motion.div className="absolute bottom-0 left-1/2 w-3 h-3 bg-taupe/40 rounded-full transform -translate-x-1/2" />
                <motion.div className="absolute left-0 top-1/2 w-3 h-3 bg-navy/40 rounded-full transform -translate-y-1/2" />
                <motion.div className="absolute right-0 top-1/2 w-3 h-3 bg-taupe/40 rounded-full transform -translate-y-1/2" />
              </div>
            </motion.div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black text-navy mb-6"
          >
            Featured{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
                textShadow: [
                  "0 0 0px rgba(18, 52, 88, 0)",
                  "0 0 20px rgba(18, 52, 88, 0.3)",
                  "0 0 0px rgba(18, 52, 88, 0)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-taupe via-navy to-taupe bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-2 w-40 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8 shadow-lg"
          />
          <motion.button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-2 bg-cream/80 backdrop-blur-sm border-2 border-taupe/40 px-4 py-2 rounded-full text-navy hover:border-navy/60 transition-colors"
          >
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
            <span className="text-sm font-medium">{isAutoPlay ? "Pause" : "Play"} Slideshow</span>
          </motion.button>
        </motion.div>

        <div className="relative mb-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 300 : -300,
                rotateY: direction > 0 ? 45 : -45,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -300 : 300,
                rotateY: direction > 0 ? -45 : 45,
                scale: 0.8,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute -inset-4 bg-gradient-to-r from-navy/20 via-taupe/20 to-navy/20 rounded-[4rem] blur-xl"
              />
              <div className="relative bg-cream/90 backdrop-blur-xl border-2 border-taupe/40 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-96 bg-gradient-to-br from-taupe/20 via-navy/10 to-taupe/30 flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${"#123458"} 1px, transparent 0)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <motion.img
                        src={currentProject.bgImageUrl}
                        alt={currentProject.title}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent rounded-2xl" />

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <h4 className="text-2xl lg:text-3xl font-black text-cream mb-2 drop-shadow-lg">
                          {currentProject.title}
                        </h4>
                        <p className="text-cream/90 text-sm drop-shadow-md">{currentProject.category}</p>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute top-8 right-8 w-16 h-16 bg-cream/20 backdrop-blur-sm rounded-2xl border border-cream/30"
                    />

                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 45, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute top-1/2 left-8 w-8 h-8 bg-cream/30"
                      style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    />

                    {currentProject.status === "Current" && (
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.8, 1, 0.8],
                          boxShadow: [
                            "0 0 0px rgba(245, 242, 237, 0)",
                            "0 0 20px rgba(245, 242, 237, 0.5)",
                            "0 0 0px rgba(245, 242, 237, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute top-6 left-6 bg-cream text-navy px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm"
                      >
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"
                        />
                        Live Project
                      </motion.div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12 space-y-6 relative">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute top-4 right-4 w-6 h-6 bg-taupe/20 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="outline" className="border-taupe text-navy bg-taupe/10 px-3 py-1">
                            {currentProject.role}
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="outline" className="border-navy/30 text-navy/70 bg-navy/5 px-3 py-1">
                            {currentProject.category}
                          </Badge>
                        </motion.div>
                      </div>
                      <motion.h3
                        animate={{
                          textShadow: [
                            "0 0 0px rgba(18, 52, 88, 0)",
                            "0 0 10px rgba(18, 52, 88, 0.2)",
                            "0 0 0px rgba(18, 52, 88, 0)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="text-3xl lg:text-4xl font-black text-navy mb-4"
                      >
                        {currentProject.title}
                      </motion.h3>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-navy/80 text-lg leading-relaxed"
                    >
                      {currentProject.description}
                    </motion.p>
                    <div>
                      <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Zap size={18} />
                        </motion.div>
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.highlights.map((highlight, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              boxShadow: "0 5px 15px rgba(18, 52, 88, 0.2)",
                            }}
                            className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium border border-taupe/40 cursor-default"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Code size={18} />
                        </motion.div>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            whileHover={{
                              scale: 1.1,
                              y: -3,
                              rotateY: 10,
                              boxShadow: "0 8px 25px rgba(212, 201, 190, 0.3)",
                            }}
                            className="bg-taupe/20 text-navy px-3 py-1 rounded-full text-sm font-medium border border-taupe/40 hover:bg-taupe/30 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-navy hover:bg-navy/90 text-cream px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                            <ExternalLink className="mr-2" size={18} />
                            View Project
                          </Button>
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                        <a href={currentProject.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            className="border-2 border-taupe text-navy hover:bg-taupe hover:text-cream px-6 py-3 rounded-2xl font-semibold bg-cream/50 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Github className="mr-2" size={18} />
                            Source Code
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-[600px] sm:bottom-8 left-0 right-0 px-4 flex justify-between items-center z-10">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.15, x: -8, rotateY: -15 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-16  sm:h-16 bg-cream/90 backdrop-blur-sm border-2 border-taupe/40 rounded-full flex items-center justify-center text-navy hover:border-navy/60 transition-colors shadow-xl hover:shadow-2xl"
            >
              <ChevronLeft size={20} className="sm:size-7" />
            </motion.button>

            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.15, x: 8, rotateY: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-cream/90 backdrop-blur-sm border-2 border-taupe/40 rounded-full flex items-center justify-center text-navy hover:border-navy/60 transition-colors shadow-xl hover:shadow-2xl"
            >
              <ChevronRight size={20} className="sm:size-7" />
            </motion.button>
          </div>

        </div>

        <div className="flex justify-center gap-4 mb-16">
          {PROJECTS.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlay(false)
              }}
              whileHover={{ scale: 1.3, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative transition-all duration-300 ${index === currentIndex ? "w-12 h-4" : "w-4 h-4"}`}
            >
              <div
                className={`w-full h-full rounded-full transition-all duration-300 ${index === currentIndex ? "bg-navy" : "bg-taupe/40 hover:bg-taupe/60"
                  }`}
              />
              {index === currentIndex && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-navy/30 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -30 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -15,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(18, 52, 88, 0.15)",
              }}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlay(false)
              }}
              className={`cursor-pointer bg-cream/60 backdrop-blur-sm p-6 rounded-2xl border-2 transition-all duration-500 group relative overflow-hidden ${index === currentIndex ? "border-navy shadow-2xl scale-105" : "border-taupe/30 hover:border-taupe/60"
                }`}
            >
              <motion.div
                animate={
                  index === currentIndex
                    ? {
                      opacity: [0, 0.1, 0],
                      scale: [1, 1.2, 1],
                    }
                    : {}
                }
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-gradient-to-br from-navy/10 to-taupe/10"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Layers className="text-navy" size={20} />
                  </motion.div>
                  <h4 className="font-bold text-navy group-hover:text-navy/80 transition-colors">
                    {project.title.length > 20 ? project.title.substring(0, 20) + "..." : project.title}
                  </h4>
                </div>
                <p className="text-navy/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.div key={techIndex} whileHover={{ scale: 1.1 }}>
                      <Badge variant="secondary" className="text-xs bg-taupe/20 text-navy border-taupe/40">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-navy/10 text-navy border-navy/30">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
