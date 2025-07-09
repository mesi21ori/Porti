"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Coffee, Rocket, Zap } from "lucide-react"
import { User } from "lucide-react"

const stats = [
  { number: "15+", label: "Projects Completed", icon: Rocket },
  { number: "3+", label: "Years Experience", icon: Coffee },
  { number: "100%", label: "Client Satisfaction", icon: Heart },
  { number: "24/7", label: "Problem Solving", icon: Zap },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23123458' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-4 bg-gradient-to-r from-navy/10 to-taupe/10 rounded-2xl mb-6"
          >
            <User className="text-navy" size={32} />
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black text-navy mb-6">
            About
            <span className="bg-gradient-to-r from-taupe to-navy bg-clip-text text-transparent"> Me</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-2 bg-gradient-to-r from-navy to-taupe mx-auto rounded-full mb-8"
          />

          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-taupe/30 shadow-xl">
              <h3 className="text-3xl font-bold text-navy mb-6">My Journey</h3>

              <div className="space-y-6 text-navy/80 leading-relaxed">
                <p className="text-lg">
                  I'm a <strong>full-stack developer</strong> with an unwavering passion for building clean, fast, and
                  user-friendly web applications. My journey spans from crafting intuitive user interfaces to
                  architecting robust backend systems.
                </p>

                <p className="text-lg">
                  With hands-on experience in{" "}
                  <strong>
                    delivery platforms, e-commerce solutions, reporting systems, and AI-powered learning tools
                  </strong>
                  , I've developed a comprehensive understanding of modern web development challenges and solutions.
                </p>

                <p className="text-lg">
                  Whether working remotely or on-site, I excel at <strong>independent task management</strong> while
                  being a collaborative and supportive team member. I believe in the power of clean code, innovative
                  thinking, and continuous learning.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-navy/10 to-taupe/10 p-6 rounded-2xl border-l-4 border-navy"
                >
                  <p className="text-lg font-medium text-navy">
                    "I'm always curious, always learning, and always looking for ways to grow—not just as a developer,
                    but as someone who creates tools that make life easier and better for others."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-taupe/30 shadow-xl text-center group hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-navy/10 to-taupe/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-navy/20 group-hover:to-taupe/20 transition-all duration-300"
                >
                  <stat.icon className="text-navy" size={28} />
                </motion.div>
                <div className="text-4xl font-black text-navy mb-2">{stat.number}</div>
                <div className="text-navy/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
