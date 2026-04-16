import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Briefcase, 
  Code2, 
  Database, 
  Cpu, 
  Terminal, 
  Zap,
  MapPin,
  FileText,
  Sparkles
} from "lucide-react";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["about", "experience", "projects", "tech-stack", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "AI/ML Intern",
      company: "Akscellence Info Solutions LLP",
      duration: "Jun 2025 - Jul 2025",
      description: [
        "Built a RAG-based QA pipeline using LangChain, HuggingFace, Gemini, and FAISS — significantly reducing query response time",
        "Improved question-answering accuracy through fine-tuned PyTorch models on domain-specific data",
        "Developed a Streamlit interface with distributed backend orchestration using Celery and Redis",
        "Achieved 25% improvement in overall pipeline efficiency through architecture optimizations"
      ]
    }
  ];

  const projects = [
    {
      title: "AI Agent PDF Analyzer",
      category: "Multi-Agent Backend System",
      description: "A distributed multi-agent system for intelligent PDF analysis with real-time job tracking and async processing.",
      features: [
        "FastAPI backend with Celery + Redis for async task execution",
        "LLM integration via LLaMA 3.1 (Groq) + LangChain agents",
        "PostgreSQL + async ORM for structured workflow management",
        "Real-time job status tracking and distributed orchestration"
      ],
      tags: ["FastAPI", "Celery", "Redis", "LangChain", "LLaMA 3.1", "PostgreSQL"],
      github: "https://github.com/me-apoorv-01"
    },
    {
      title: "OCR + Agentic AI Prescription System",
      category: "Medical Data Extraction Pipeline",
      description: "An intelligent OCR pipeline that extracts, classifies, and explains medical prescription data using agentic AI.",
      features: [
        "Tesseract OCR pipeline for medical data extraction",
        "Gemini-based agent for classification and explanation",
        "Session-aware Streamlit chatbot interface",
        "CI/CD integrated deployment pipeline"
      ],
      tags: ["Tesseract OCR", "Gemini", "Streamlit", "CI/CD", "Python"],
      github: "https://github.com/me-apoorv-01"
    },
    {
      title: "Domain-Specific RAG System",
      category: "Advanced Retrieval Pipeline",
      description: "A high-precision RAG pipeline with two-stage retrieval that reduced noise by 30% using clustering and vector search.",
      features: [
        "Built RAG pipeline using LLaMA for domain-specific QA",
        "Reduced retrieval noise by 30% using HDBSCAN clustering",
        "Two-stage retrieval with embeddings and vector database"
      ],
      tags: ["LLaMA", "HDBSCAN", "FAISS", "RAG", "Embeddings"],
      github: "https://github.com/me-apoorv-01"
    }
  ];

  const techStack = [
    {
      category: "LANGUAGES",
      icon: <Terminal className="w-4 h-4 text-brand-primary" />,
      items: ["Python", "Java", "SQL"]
    },
    {
      category: "AI / ML",
      icon: <Zap className="w-4 h-4 text-brand-primary" />,
      items: ["Machine Learning", "Deep Learning", "NLP", "RAG"]
    },
    {
      category: "FRAMEWORKS",
      icon: <Code2 className="w-4 h-4 text-brand-primary" />,
      items: ["PyTorch", "HuggingFace", "LangChain", "Streamlit"]
    },
    {
      category: "TOOLS",
      icon: <Cpu className="w-4 h-4 text-brand-primary" />,
      items: ["FastAPI", "Redis", "Celery", "FAISS", "Tesseract OCR"]
    },
    {
      category: "DATABASES",
      icon: <Database className="w-4 h-4 text-brand-primary" />,
      items: ["PostgreSQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/20 bg-bg-deep overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-brand z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="bg-orb w-[600px] h-[600px] bg-brand-primary/10 -top-48 -left-48" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="bg-orb w-[500px] h-[500px] bg-brand-secondary/10 top-1/2 -right-24" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="bg-orb w-[400px] h-[400px] bg-brand-accent/10 bottom-0 left-1/4" 
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-sm">AS</div>
          <span className="text-slate-200">Apoorv</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-full relative">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full relative z-10 ${
                activeSection === link.id ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-6 leading-[0.9] flex flex-col"
        >
          <span className="text-white">Apoorv</span>
          <span className="text-gradient">Srivastava</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl font-medium text-slate-400 mb-4 max-w-2xl flex items-center gap-3 justify-center"
        >
          AI Engineer <span className="w-1 h-1 rounded-full bg-white/20" /> ML Developer <span className="w-1 h-1 rounded-full bg-white/20" /> Backend Systems Builder
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-slate-500 max-w-xl mb-12"
        >
          Building production-grade AI systems using LLMs, RAG, and scalable backend architectures.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="bg-gradient-brand text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20 group">
            <Zap className="w-5 h-5 group-hover:fill-white transition-all" />
            View Projects
          </a>
          <a href="https://github.com/me-apoorv-01" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/apoorv-srivastava-257827383/" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a 
            href="https://drive.google.com/file/d/1M3pulf2gAXIUxDUek04aBPlRU-oCMNbp/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Scroll</span>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card flex flex-col justify-between"
          >
            <div>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                I'm an AI/ML engineer who doesn't stop at training models — I build the systems around them. 
                From designing RAG pipelines that cut retrieval noise to architecting async backends with FastAPI, Celery, and Redis, 
                my focus is on turning AI capabilities into production-ready software.
              </p>
              <p className="text-slate-500 leading-relaxed mb-12">
                I work across the stack where LLMs meet infrastructure: embeddings, vector databases, distributed task execution, 
                and real-time processing. If it involves making AI actually work in the real world, I'm interested.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span className="text-sm">Gurugram, Haryana</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span className="text-sm">srivastavapoorv01@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-rows-3 gap-6">
            {[
              { label: "RAG SYSTEMS", value: "Production", icon: <Sparkles className="w-3 h-3" /> },
              { label: "LLM APPS", value: "End-to-End", icon: <Zap className="w-3 h-3" /> },
              { label: "PIPELINE EFFICIENCY", value: "+25%", icon: <Zap className="w-3 h-3" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex flex-col justify-center"
              >
                <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-2 flex items-center gap-2">
                  {stat.icon} {stat.label}
                </span>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>

        <div className="relative pl-8 md:pl-12 border-l-2 border-white/5 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-full bg-bg-deep border-2 border-brand-primary flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-brand-primary" 
                />
              </div>
              
              <div className="glass-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-brand-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Zap className="w-4 h-4 text-brand-accent" />
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                      <span className="text-brand-primary mt-1.5 flex-shrink-0">
                        <Sparkles className="w-3 h-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card group"
            >
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold px-3 py-1 rounded-lg bg-brand-accent/10 border border-brand-accent/20">
                        {project.category}
                      </span>
                      {index === 0 && (
                        <span className="text-[10px] uppercase tracking-widest text-brand-primary font-bold px-3 py-1 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                    <a href={project.github} className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex gap-3 text-slate-400 text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                        <span className="text-brand-primary mt-1 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-brand-primary/10">
                  {stack.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  {stack.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span key={item} className={`tag-pill ${item === "Machine Learning" || item === "FastAPI" ? "border-brand-primary/30 text-brand-primary bg-brand-primary/5" : ""}`}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold mb-4 block">GET IN TOUCH</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Let's build something <span className="text-gradient">impactful</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-16 text-lg">
            Whether you have a project, opportunity, or just want to talk AI — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Mail className="w-6 h-6 text-brand-primary" />, label: "Email", value: "srivastavapoorv01@gmail.com", href: "mailto:srivastavapoorv01@gmail.com" },
            { icon: <Github className="w-6 h-6 text-brand-primary" />, label: "GitHub", value: "me-apoorv-01", href: "https://github.com/me-apoorv-01" },
            { icon: <Linkedin className="w-6 h-6 text-brand-primary" />, label: "LinkedIn", value: "Apoorv Srivastava", href: "https://linkedin.com/in/apoorv-srivastava-257827383/" }
          ].map((contact, i) => (
            <motion.a 
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group cursor-pointer hover:bg-white/5 block"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all duration-500">
                {contact.icon}
              </div>
              <h3 className="font-bold mb-1 group-hover:text-brand-primary transition-colors">{contact.label}</h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-brand text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto shadow-xl shadow-brand-primary/20"
        >
          Say Hello <ExternalLink className="w-5 h-5" />
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center relative z-10">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Apoorv Srivastava. Built with passion for AI.
        </p>
      </footer>
    </div>
  );
};

// New icon for features
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default App;
