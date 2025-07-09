"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Building, Briefcase, ArrowRight, Star, Play } from "lucide-react"

const experiences = [
  {
    company: "Cross Light Africa",
    position: "Full Stack Developer",
    location: "Addis Ababa, Ethiopia",
    period: "11/2024 – Current",
    description:
      "Built a web app to help manage motorcycle delivery services. Created dashboards for different users like admins and drivers, with features like delivery tracking and login systems. Also helped design a website for a non-profit organization that works in different countries.",
    current: true,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Dashboard Design"],
    achievements: ["Multi-user dashboard system", "Real-time tracking", "Multilingual support"],
  },
  {
    company: "Gumi Softs",
    position: "Frontend Developer",
    location: "Remote, Ethiopia",
    period: "02/2025 – 05/2025",
    description:
      "Worked on an online shopping website where sellers can post products and buyers can order them. Designed clean and mobile-friendly pages using modern tools. Focused on making the buying process easy and smooth.",
    current: false,
    technologies: ["React.js", "Mobile-First Design", "E-commerce", "UX/UI"],
    achievements: ["Mobile-responsive design", "Smooth user experience", "Seller dashboard"],
  },
  {
    company: "XYZ PLC",
    position: "Frontend Developer",
    location: "Addis Ababa, Ethiopia",
    period: "06/2024 – 04/2025",
    description:
      "Created a reporting system for a government office to improve transparency and stop report changes or cheating. Designed easy-to-use forms and admin tools so users can send, check, and track reports in real-time.",
    current: false,
    technologies: ["React.js", "Government Systems", "Security", "Real-time"],
    achievements: ["Transparency improvement", "Anti-fraud measures", "Real-time tracking"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-taupe/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-24 h-24 bg-navy/10 rounded-full"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 border-2 border-navy/20 rounded-lg"
          animate={{
            rotate: [-45, 45, -45],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
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
              <Briefcase className="text-navy" size={40} />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-2 border-2 border-navy/30 rounded-3xl"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black text-navy mb-6"
          >
            Work{" "}
            <motion.span
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-taupe via-navy to-taupe bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Experience
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-1 w-32 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8"
          />
        </motion.div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-taupe/10 rounded-[3rem] transform"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <div className="relative bg-cream/80 backdrop-blur-xl border-2 border-taupe/30 rounded-[3rem] p-8 lg:p-12 hover:border-navy/40 transition-all duration-500">
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                    className="absolute top-6 right-6 w-8 h-8 bg-navy/20 rounded-full"
                  />

                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-taupe/40"
                      >
                        {exp.current && (
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                            className="inline-flex items-center gap-2 bg-navy text-cream px-3 py-1 rounded-full text-sm font-bold mb-4"
                          >
                            <Play size={12} />
                            Current Role
                          </motion.div>
                        )}

                        <h3 className="text-2xl font-black text-navy mb-2">{exp.position}</h3>

                        <div className="flex items-center gap-2 text-taupe font-bold mb-4">
                          <Building size={18} />
                          {exp.company}
                        </div>

                        <div className="space-y-2 text-navy/70">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                      <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-taupe/30">
                        <p className="text-navy/80 leading-relaxed text-lg">{exp.description}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-taupe/30">
                          <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                            <Star size={18} />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: index * 0.2 + techIndex * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium border border-taupe/40 hover:bg-taupe/20 transition-colors"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-taupe/30">
                          <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                            <ArrowRight size={18} />
                            Key Results
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.7 }}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-3 text-navy/80"
                              >
                                <motion.div
                                  animate={{ rotate: [0, 360] }}
                                  transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: achIndex * 0.5,
                                  }}
                                  className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"
                                />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
