"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_INFO } from "@/lib/constants"
import type { FormData, FormStatus } from "@/types"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" })
      return
    }
    setStatus({ type: "loading", message: "Sending your message..." })
    try {
      const response = await fetch("/api/send-email-alternative", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Server error")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later or email me directly.",
      })
    }
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border-2 border-taupe/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-48 h-48 bg-navy/5 rounded-lg"
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 1.1, 1],
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block relative mb-6"
          >
            <div className="p-6 bg-cream border-4 border-taupe rounded-3xl">
              <Mail className="text-navy" size={40} />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -inset-3 border-2 border-navy/30 rounded-3xl"
            />
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-navy mb-6">
            Let's Work{" "}
            <motion.span
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-taupe via-navy to-taupe bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Together
            </motion.span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="h-2 w-32 bg-gradient-to-r from-navy via-taupe to-navy mx-auto rounded-full mb-8"
          />
          <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Get in Touch</h3>
              <p className="text-navy/70 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>
            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-cream/60 backdrop-blur-sm rounded-2xl border border-taupe/20 hover:border-taupe/40 transition-all duration-300 group"
                >
                  <div className="bg-navy/10 p-3 rounded-xl group-hover:bg-navy/20 transition-colors duration-300">
                    <item.icon className="text-navy" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{item.label}</div>
                    <div className="text-navy/70">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <h4 className="font-semibold text-navy mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/mesi21ori/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-navy text-cream p-3 rounded-full hover:bg-navy/90 transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="mailto:Mesiori21@gmail.com"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-taupe text-cream p-3 rounded-full hover:bg-taupe/90 transition-colors duration-300"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-cream/70 backdrop-blur-xl p-8 rounded-3xl border border-taupe/20"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="bg-white/50 border-taupe/30 focus:border-navy"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Mesiori21@gmail.com"
                    className="bg-white/50 border-taupe/30 focus:border-navy"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-white/50 border-taupe/30 focus:border-navy"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me .............."
                  className="bg-white/50 border-taupe/30 focus:border-navy resize-none"
                  required
                />
              </div>
              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    status.type === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : status.type === "error"
                        ? "bg-red-50 border-red-200 text-red-800"
                        : "bg-navy/5 border-navy/20 text-navy"
                  }`}
                >
                  {status.type === "loading" && <Loader2 className="animate-spin" size={20} />}
                  {status.type === "success" && <CheckCircle size={20} />}
                  {status.type === "error" && <AlertCircle size={20} />}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status.type === "loading"}
                  className="w-full bg-navy hover:bg-navy/90 text-cream py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === "loading" ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
            <div className="mt-6 pt-6 border-t border-taupe/20">
              <p className="text-sm text-navy/60 text-center mb-4">Having trouble with the form? You can also:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <motion.a
                  href="mailto:Mesiori21@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium hover:bg-navy/20 transition-colors"
                >
                  <Mail size={16} />
                  Email directly
                </motion.a>
                <motion.a
                  href="tel:+251975336956"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-taupe/20 text-navy px-4 py-2 rounded-full text-sm font-medium hover:bg-taupe/30 transition-colors"
                >
                  <Phone size={16} />
                  Call me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-taupe/20"
        >
          <p className="text-navy/70">© 2025 Meseret Shumet.</p>
        </motion.div>
      </div>
    </section>
  )
}
