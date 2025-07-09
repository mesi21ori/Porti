import { Heart, Coffee, Rocket, Zap, Mail, Phone, MapPin, Github, Code, Database, Globe, Wrench } from "lucide-react"
import type { ContactInfo, Stat, Experience, Project, SkillCategory } from "@/types"

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "Mesiori21@gmail.com",
    href: "mailto:Mesiori21@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+251) 975336956",
    href: "tel:+251975336956",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mesi21ori",
    href: "https://github.com/mesi21ori/",
  },
]

export const STATS: Stat[] = [
  { number: "15+", label: "Projects Completed", icon: Rocket },
  { number: "3+", label: "Years Experience", icon: Coffee },
  { number: "100%", label: "Client Satisfaction", icon: Heart },
  { number: "24/7", label: "Problem Solving", icon: Zap },
]

export const EXPERIENCES: Experience[] = [
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

export const PROJECTS: Project[] = [
  {
    title: "Moteregna Delivery System",
    description:
      "A cross-platform delivery coordination system supporting both web and mobile interfaces with dashboards for Super Admin, Admin, and Motorists.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Flutter", "PostgreSQL"],
    status: "Current",
    role: "Full Stack Developer",
    category: "Web & Mobile",
    highlights: ["Real-time tracking", "Multi-user dashboards", "Cross-platform"],
    liveUrl: "https://moteregna-slpo.vercel.app",
    sourceUrl: "#",
    bgImageUrl: "/mote.png?height=400&width=600&text=Moteregna+Delivery",
  },
  {
    title: "Ethiopian History Preservation System",
    description:
      "A secure platform for institutions to register and upload historical materials including text, photos, audio, and video content.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN", "Framer Motion", "TypeScript"],
    status: "Completed",
    role: "Full Stack Developer",
    category: "Web Application",
    highlights: ["Secure uploads", "Multi-media support", "Institution management"],
    liveUrl: "https://history-preservation.vercel.app",
    sourceUrl: "https://github.com/mesi21ori/ethiopian-history",
    bgImageUrl: "/ehp.jpg?height=400&width=600&text=Ethiopian+History",
  },
  {
    title: "Gibe Market - E-Commerce Platform",
    description:
      "An online marketplace enabling suppliers to showcase and sell products directly to customers with intuitive dashboards.",
    technologies: ["Next.js", "Tailwind CSS", "Material UI", "TypeScript"],
    status: "Current",
    role: "Frontend Developer",
    category: "E-Commerce",
    highlights: ["Supplier dashboards", "Product management", "Order tracking"],
    liveUrl: "#",
    sourceUrl: "#",
    bgImageUrl: "/gibe.png?height=400&width=600&text=Gibe+Market",
  },
  {
    title: "mYFeel - AI Study Platform",
    description:
      "AI-powered platform converting educational documents into interactive, collaborative learning resources with quiz generation.",
    technologies: ["Next.js 14", "Python Flask", "Google Gemini AI", "PyMuPDF"],
    status: "Current",
    role: "Backend & AI Integration",
    category: "AI Platform",
    highlights: ["AI integration", "Document parsing", "Quiz generation"],
    liveUrl: "#",
    sourceUrl: "https://github.com/mesi21ori/mYFeel",
    bgImageUrl: "/mYFeel.png?height=400&width=600&text=mYFeel+AI",
  },
  {
    title: "Lemi Kura Reporting System",
    description:
      "Secure reporting system with verifiable submissions, timestamped data, audit trails, and real-time admin monitoring.",
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "Sequelize"],
    status: "Completed",
    role: "Full Stack Developer",
    category: "Government System",
    highlights: ["Security focused", "Audit trails", "Real-time monitoring"],
    liveUrl: "https://reporting.lemikurapp.org",
    sourceUrl: "",
    bgImageUrl: "/lemikura.png?height=400&width=600&text=Lemi+Kura",
  },
  {
    title: "Mesi - Amharic Learning App",
    description:
      "AI-powered Amharic language learning app with Fidel practice, speech recognition, and interactive writing modules.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN", "TypeScript"],
    status: "Completed",
    role: "Frontend Developer",
    category: "Educational App",
    highlights: ["Speech recognition", "Interactive learning", "Cultural preservation"],
    liveUrl: "https://mesa-amharic-learning-app.vercel.app",
    sourceUrl: "https://github.com/mesi21ori/mesa-amharic-learning-app",
    bgImageUrl: "/amharic.png?height=400&width=600&text=Mesi+Amharic",
  },
  {
    title: "Development for Peace Organization Website",
    description:
      "A multilingual, user-friendly website built to communicate the organization's mission and showcase global projects.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    role: "Frontend Developer",
    category: "NGO Website",
    highlights: [
      "Responsive and accessible UI",
      "Integrated lightweight CMS for easy content updates",
      "Optimized for multilingual support and accessibility",
    ],
    liveUrl: "https://devforpeace.org",
    sourceUrl: "#",
    bgImageUrl: "/dpo.png?height=400&width=600&text=Peace+Organization",
  },
  {
    title: "Mesicv - Personal Portfolio",
    description:
      "A modern, responsive portfolio showcasing my skills, projects, and professional journey with interactive animations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    status: "Current",
    role: "Full Stack Developer",
    category: "Portfolio",
    highlights: ["Interactive animations", "Responsive design", "SEO optimized"],
    liveUrl: "#",
    sourceUrl: "#",
    bgImageUrl: "/placeholder.svg?height=400&width=600&text=Portfolio",
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "ShadCN UI", level: 88 },
      { name: "Material UI", level: 88 },
    ],
  },
  {
    icon: Database,
    title: "Databases & ORM",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Prisma", level: 85 },
      { name: "Drizzle ORM", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Flutter", level: 80 },
      { name: "Framer Motion", level: 85 },
      { name: "Swagger", level: 75 },
    ],
  },
]
