"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="education"
      className="py-32 bg-gradient-to-br from-taupe/10 to-cream relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border-2 border-navy/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-taupe/20"
          animate={{
            rotate: [0, 45, 90, 45, 0],
            borderRadius: ["0%", "25%", "50%", "25%", "0%"],
          }}
          transition={{
            duration: 15,
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-6"
          >
            <div className="p-6 bg-cream border-4 border-taupe rounded-3xl">
              <GraduationCap className="text-navy" size={40} />
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
            Education{" "}
            <motion.span
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-taupe via-navy to-taupe bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Journey
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-1 w-24 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/70 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-taupe/20 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-navy/10 p-4 rounded-2xl"
              >
                <GraduationCap className="text-navy" size={48} />
              </motion.div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl lg:text-3xl font-bold text-navy mb-2"
                    >
                      Bachelor of Science in Computer Science
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl text-taupe font-semibold mb-4"
                    >
                      Hope Enterprise University College
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium shadow-lg"
                  >
                    Graduated
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                  className="grid md:grid-cols-2 gap-4 mb-6 text-navy/70"
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>December 2021 – February 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.8 }}
                  className="grid md:grid-cols-3 gap-6 mt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-navy/5 rounded-xl border border-navy/10 hover:border-navy/30 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Award className="text-navy mx-auto mb-2" size={32} />
                    </motion.div>
                    <div className="text-2xl font-bold text-navy">3.59</div>
                    <div className="text-sm text-navy/70">Overall GPA</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-taupe/10 rounded-xl border border-taupe/20 hover:border-taupe/40 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Award className="text-navy mx-auto mb-2" size={32} />
                    </motion.div>
                    <div className="text-2xl font-bold text-navy">3.54</div>
                    <div className="text-sm text-navy/70">Major Courses GPA</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 bg-navy/5 rounded-xl border border-navy/10 hover:border-navy/30 transition-all duration-300"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Award className="text-navy mx-auto mb-2" size={32} />
                    </motion.div>
                    <div className="text-lg font-bold text-navy">Honor</div>
                    <div className="text-sm text-navy/70">Student Award</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
