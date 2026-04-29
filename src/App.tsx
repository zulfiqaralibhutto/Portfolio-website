import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, Download, 
  ChevronRight, Code2, Terminal, Globe, Brain,
  Twitter, Facebook, Instagram
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, SERVICES } from './constants';
import portfolioImg from './images/portfolio.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          {PERSONAL_INFO.name.split(' ')[0].toUpperCase()}<span className="text-cyan-400">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-xs font-bold hover:bg-cyan-400 hover:text-black transition-all uppercase tracking-widest"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-400 max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-20 bg-cyan-400 mt-6" />
  </div>
);

export default function App() {
  return (
    <div className="bg-[#0A0A0B] min-h-screen text-slate-100 selection:bg-cyan-400 selection:text-black">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e293b,transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">Welcome to my space</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-xl font-light">
                {PERSONAL_INFO.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-full hover:bg-white transition-colors uppercase text-sm tracking-widest"
                >
                  Get In Touch
                </a>
                <div className="flex items-center gap-4 px-4 bg-white/5 rounded-full border border-white/10">
                  {PERSONAL_INFO.socials.map((social) => (
                    <a 
                      key={social.label} 
                      href={social.href}
                      className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto xl:max-w-lg"
            >
              <div className="absolute inset-0 bg-cyan-400 rounded-3xl rotate-6 opacity-20 blur-2xl" />
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={portfolioImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Discover the path I've taken and where I'm headed next.">
              About Me
            </SectionHeading>
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Career Objective</h3>
                  <p className="text-white text-lg">
                    {PERSONAL_INFO.careerObjective}
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-white text-2xl font-bold mb-6">Education</h3>
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <motion.div 
                    key={edu.degree} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-cyan-400/30"
                  >
                    <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-cyan-400 rounded-full" />
                    <span className="text-cyan-400 font-mono text-sm mb-1 block">{edu.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-slate-400 mb-2 font-medium">{edu.institution}</p>
                    <p className="text-slate-500 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="My technical toolkit and areas of exploration.">
              Skills & Expertise
            </SectionHeading>
            <div className="grid md:grid-cols-3 gap-8">
              {SKILLS.map((cat, idx) => (
                <motion.div 
                  key={cat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-slate-900/50 rounded-3xl border border-white/5 hover:border-cyan-400/20 transition-all"
                >
                  <h3 className="text-white font-bold mb-8 flex items-center gap-3">
                    <span className="p-2 bg-cyan-400/10 rounded-lg text-cyan-400"><Code2 size={20} /></span>
                    {cat.category}
                  </h3>
                  <div className="space-y-6">
                    {cat.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-end mb-2">
                          <div className="flex items-center gap-2 text-slate-300">
                            <skill.icon size={14} className="text-cyan-400" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full bg-cyan-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="A showcase of things I've built and the problems I've solved.">
              Selected Works
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#151619] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors" title="View Source">
                        <Github size={18} />
                      </a>
                      <a href={project.demo} className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors" title="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">How I Can Add Value</h2>
            <p className="text-slate-400 text-lg">I offer specialized services tailored to engineering and web excellence.</p>
          </motion.div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="p-8 text-center bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Have a project in mind or just want to say hi? Fix a time for a chat.">
                Let's Connect
              </SectionHeading>
              <div className="space-y-6 mt-12">
                <a href="mailto:22cs30@quest.edu.pk" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Email Me</p>
                    <p className="text-white font-medium">Email</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/mirzulfiqarbhutto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">LinkedIn</p>
                    <p className="text-white font-medium">www.Linkedin.com</p>
                  </div>
                </a>
                <a href="https://twitter.com/mirzulfiqarb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <Twitter size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Twitter (x)</p>
                    <p className="text-white font-medium">www.x.com</p>
                  </div>
                </a>
                <a href="https://facebook.com/mirzulfiqarbhutto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Facebook</p>
                    <p className="text-white font-medium">www.facebook.com</p>
                  </div>
                </a>
                <a href="https://instagram.com/mirzulfiqarbhutto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Instagram</p>
                    <p className="text-white font-medium">www.instagram.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#151619] p-8 md:p-12 rounded-[40px] border border-white/10"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder="Hello Zulfiqar, I'd love to work with you on..." />
                </div>
                <button type="submit" className="w-full py-5 bg-cyan-400 text-black font-bold rounded-2xl hover:bg-white transition-all uppercase text-sm tracking-widest shadow-lg shadow-cyan-400/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tighter">
              Zulfiqar Ali <span className="text-cyan-400">Bhutto</span>
            </h2>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {PERSONAL_INFO.socials.map((social) => (
              <a key={social.label} href={social.href} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-500 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/30 transition-all">
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
