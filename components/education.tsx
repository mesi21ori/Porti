"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-taupe/10 to-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Education</h2>
          <div className="w-24 h-1 bg-taupe mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-taupe/20">
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-navy/10 p-4 rounded-2xl"
              >
                <GraduationCap className="text-navy" size={48} />
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-2">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-xl text-taupe font-semibold mb-4">Hope Enterprise University College</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium"
                  >
                    Graduated
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6 text-navy/70">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>December 2021 – February 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-navy/5 rounded-xl">
                    <Award className="text-navy mx-auto mb-2" size={32} />
                    <div className="text-2xl font-bold text-navy">3.59</div>
                    <div className="text-sm text-navy/70">Overall GPA</div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-taupe/10 rounded-xl">
                    <Award className="text-navy mx-auto mb-2" size={32} />
                    <div className="text-2xl font-bold text-navy">3.54</div>
                    <div className="text-sm text-navy/70">Major Courses GPA</div>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 bg-navy/5 rounded-xl">
                    <Award className="text-navy mx-auto mb-2" size={32} />
                    <div className="text-lg font-bold text-navy">Honor</div>
                    <div className="text-sm text-navy/70">Student Award</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
