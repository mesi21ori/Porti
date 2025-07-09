"use client"

import { motion, useAnimation } from "framer-motion"
import { ArrowDown, Github, Mail, MapPin, Phone, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
    })
  }, [controls])

  const scrollToAbout = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

const downloadCV = () => {
  const link = document.createElement("a")
  link.href = "/mesicv.pdf" 
  link.download = "mesicv.pdf" 
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${`#123458`}20 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="inline-block"
              >
                <span className="text-2xl">👋</span>
              </motion.div>
              <span className="text-xl text-navy/70 font-medium ml-3">Hello, I'm</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-6xl lg:text-8xl font-black leading-none">
                <motion.span className="block text-navy relative" whileHover={{ scale: 1.05 }}>
                  Meseret
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Sparkles className="text-taupe" size={24} />
                  </motion.div>
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-taupe to-navy bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Shumet
                </motion.span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="relative">
                <h2 className="text-3xl lg:text-4xl font-bold text-navy/90">Full Stack Developer</h2>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-navy to-taupe rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: MapPin, text: "Addis Ababa, Ethiopia" },
                { icon: Phone, text: "(+251) 975336956" },
                { icon: Mail, text: "Mesiori21@gmail.com" },
                { icon: Github, text: "github.com/mesi21ori" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-taupe/30 hover:border-taupe/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-navy/10 p-2 rounded-lg">
                      <item.icon className="text-navy" size={18} />
                    </div>
                    <span className="text-navy/80 text-sm font-medium">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={scrollToAbout}
                  className="bg-gradient-to-r from-navy to-taupe hover:from-navy/90 hover:to-taupe/90 text-cream px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore My Work
                  <ArrowDown className="ml-2" size={20} />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={downloadCV}
                  size="lg"
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-cream px-8 py-4 rounded-2xl text-lg font-semibold bg-white/50 backdrop-blur-sm"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </motion.div>
              
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-96 h-96 mx-auto transform-gpu"
            >
              <motion.div className="absolute inset-0 border-4 border-taupe/30 rounded-full" animate={controls} />
              <motion.div
                className="absolute inset-4 border-2 border-navy/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              
              <div className="absolute inset-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-3xl border border-taupe/30 shadow-2xl overflow-hidden">
  <div className="h-2/3 bg-gradient-to-br from-navy/10 via-taupe/20 to-navy/5 flex items-center justify-center relative">
    <motion.img
      whileHover={{ scale: 1.1 }}
      src="/meseret.png" 
      alt="Meseret Shumet"
      className="w-32 h-32 object-cover rounded-full shadow-xl"
    />
    <motion.div
      className="absolute top-4 right-4 w-8 h-8 bg-taupe/40 rounded-full"
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
    />
    <motion.div
      className="absolute bottom-4 left-4 w-6 h-6 bg-navy/30 rounded-full"
      animate={{ x: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
    />
  </div>
  <div className="h-1/3 p-6 flex flex-col justify-center">
    <h3 className="text-xl font-bold text-navy mb-1">Meseret Shumet</h3>
    <p className="text-navy/70 text-sm mb-3">Full Stack Developer</p>
    <div className="flex gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-xs text-navy/60">Available for work</span>
    </div>
  </div>
</div>

              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-taupe to-navy/50 rounded-2xl"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-navy to-taupe/50 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-3/4 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="cursor-pointer flex flex-col items-center gap-2"
          onClick={scrollToAbout}
        >
          <span className="text-navy/60 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-navy/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
