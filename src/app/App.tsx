import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  Palette,
  Pen,
  Layout,
  Workflow,
  Eye,
  Sparkles,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Award
} from 'lucide-react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const skills = [
    { name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Wireframing', icon: Layout, color: 'from-blue-500 to-cyan-500' },
    { name: 'Prototyping', icon: Pen, color: 'from-violet-500 to-purple-500' },
    { name: 'User Flows', icon: Workflow, color: 'from-fuchsia-500 to-pink-500' },
    { name: 'Visual Design', icon: Eye, color: 'from-indigo-500 to-blue-500' },
    { name: 'Interaction Design', icon: Sparkles, color: 'from-cyan-500 to-teal-500' },
    { name: 'Design Thinking', icon: Lightbulb, color: 'from-purple-500 to-blue-500' }
  ];

  const scrollToWork = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-16 h-16 border-2 border-purple-500/30 ${i % 2 === 0 ? 'rounded-lg' : 'rounded-full'} backdrop-blur-sm`} />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl w-full mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.4)',
                  '0 0 60px rgba(168, 85, 247, 0.6)',
                  '0 0 20px rgba(168, 85, 247, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold tracking-wide">
                UI/UX Designer
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              Sanjivani
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              Rohilla
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-purple-200/80 mb-12 max-w-3xl mx-auto font-light"
          >
            Designing simple, meaningful and user-friendly experiences
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToWork}
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View My Work</span>
          </motion.button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-purple-400/60" />
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                About Me
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl" />

              <p className="relative text-xl md:text-2xl text-purple-100/90 leading-relaxed font-light">
                A passionate UI/UX designer with a strong foundation in design thinking,
                wireframing, and prototyping. Currently pursuing BCA and continuously
                learning to create engaging digital experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-20 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Skills & Expertise
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${skill.color} p-3 shadow-lg`}
                >
                  <skill.icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="relative text-2xl font-semibold text-white mb-2">
                  {skill.name}
                </h3>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className={`h-1 w-full bg-gradient-to-r ${skill.color} rounded-full origin-left`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-20 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Education
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-12"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500" />

            {/* Glowing Dot */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.8)',
                  '0 0 40px rgba(59, 130, 246, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.8)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-0 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            />

            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl" />

              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xl text-purple-300 mb-2">2022 – 2025</p>
                <p className="text-lg text-purple-200/70">Kurukshetra University</p>
                <p className="text-lg text-purple-200/70">Dr. Bhim Rao Ambedkar Govt. College</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-20 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Certifications
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 30px 80px rgba(168, 85, 247, 0.4)'
            }}
            className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border-2 border-transparent bg-clip-padding"
            style={{
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #a855f7, #3b82f6, #a855f7)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl" />

            <div className="relative flex items-start gap-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">
                  UI/UX Design Course
                </h3>
                <p className="text-xl text-purple-300 mb-3">Physics Wallah (Virtual)</p>

                <motion.div
                  animate={{
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                >
                  <span className="text-green-400 font-semibold">● Ongoing</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-20 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Get In Touch
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mail, label: 'Email', value: 'Sanjurohilla2322@gmail.com', gradient: 'from-purple-500 to-pink-500' },
              { icon: Phone, label: 'Phone', value: '+91 9350164254', gradient: 'from-blue-500 to-cyan-500' },
              { icon: MapPin, label: 'Location', value: 'Yamunanagar', gradient: 'from-violet-500 to-purple-500' }
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${contact.gradient} p-3 shadow-lg`}
                >
                  <contact.icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="relative text-lg font-semibold text-purple-300 mb-2">
                  {contact.label}
                </h3>
                <p className="relative text-xl text-white break-words">
                  {contact.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-purple-200/60 text-lg"
          >
            Designed with passion by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
              Sanjivani Rohilla
            </span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
