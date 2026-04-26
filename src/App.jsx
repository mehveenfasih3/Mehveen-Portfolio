import { useEffect, useState } from 'react'
import { 
  Mail, Phone, MapPin, Linkedin, Github, ExternalLink, 
  Code2, Smartphone, Database, Brain, Award, GraduationCap,
  Briefcase, ChevronDown, Menu, X, Globe
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">
            <span className="logo-text">MF</span>
          </a>
          
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Globe size={16} />
            <span>Available for opportunities</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mehveen Fasih</span>
          </h1>
          
          <p className="hero-subtitle">
            Senior Mobile Application Developer
          </p>
          
          <p className="hero-description">
            3+ years crafting production-grade mobile solutions with Flutter, 
            React Native, and AI-powered innovations. Building apps that matter.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <Code2 size={18} />
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat">
              <span className="stat-value">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">Platforms</span>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              Senior Mobile Application Developer with <strong>3+ years</strong> of experience 
              specializing in <span className="highlight">Flutter and Dart</span>, with hands-on 
              exposure to React Native and TypeScript.
            </p>
            <p>
              Proven track record of delivering production-grade Android, iOS, Windows, and Web 
              applications. My expertise spans AI-powered mobile solutions, real-time GPS & IoT 
              systems, computer vision integration, Firebase & Supabase backends, REST APIs, and 
              clean scalable architecture.
            </p>
            <p>
              Strong academic background with a <strong>CGPA of 3.75</strong> and active industry 
              recognition including incubation at NIC for my Final Year Design Project.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <Smartphone className="about-icon" size={32} />
              <h3>Mobile First</h3>
              <p>Cross-platform excellence across Android, iOS, Windows & Web</p>
            </div>
            <div className="about-card">
              <Brain className="about-icon" size={32} />
              <h3>AI Integration</h3>
              <p>YOLOv11, Agentic AI, XAI, and ML pipeline development</p>
            </div>
            <div className="about-card">
              <Database className="about-icon" size={32} />
              <h3>Full Stack</h3>
              <p>Firebase, Supabase, REST APIs, Flask backends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Flutter Developer',
      company: 'Bitsframe',
      period: 'June 2025 – Present',
      description: 'Develop and maintain multiple Flutter-based mobile applications with focus on usability, performance, and scalable architecture. Integrate backend services (Firebase, Supabase, REST APIs) and implement real-time features across production apps.',
      tags: ['Flutter', 'Firebase', 'Supabase', 'REST APIs']
    },
    {
      title: 'Data Science Intern',
      company: '10 Pearls',
      period: 'June 2025 – July 2025',
      description: 'Completed Data Science internship involving AI model training, CI/CD pipeline setup, and Weather API integration. Developed automated ML pipelines with real-time data ingestion and 3-day weather prediction dashboard deployed via Hopsworks.',
      tags: ['AI/ML', 'CI/CD', 'Hopsworks', 'Data Pipeline']
    },
    {
      title: 'Mobile Developer Intern',
      company: 'Smart City Lab, NEDUET',
      period: 'Dec 2023 – Jan 2025',
      description: 'Developed sensor-integrated mobile application for farmers enabling real-time IoT sensor data transmission. Ensured cross-device compatibility and conducted stakeholder feedback loops, iterating on UI/UX to meet end-user needs.',
      tags: ['IoT', 'Flutter', 'Real-time Data', 'UX Design']
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <Briefcase className="section-icon" size={32} />
          Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Employee Tracking App',
      tech: 'Flutter – Android / iOS / Windows / Web',
      period: 'February 2026 – Ongoing',
      description: 'Multi-platform employee monitoring solution with geofencing, Google Maps API, face & biometric authentication, and app-usage tracking. Features revenue analytics dashboards and unified codebase across four platforms.',
      tags: ['Flutter', 'Geofencing', 'Maps API', 'Biometric Auth', 'Analytics'],
      featured: true
    },
    {
      title: 'Carpool Application',
      tech: 'Flutter',
      period: 'January 2026 – Ongoing',
      description: 'Real-time carpooling platform with live GPS tracking, map visualization, dynamic ride-matching, and in-app chat. Designed scalable backend architecture for smooth ride management and data efficiency at scale.',
      tags: ['Flutter', 'GPS Tracking', 'Real-time Chat', 'Matching Algorithm'],
      featured: true
    },
    {
      title: 'IRIS – FYDP Project',
      tech: 'Flutter + Flask + YOLOv11',
      period: 'October 2025 – March 2026',
      description: 'NIC Incubated project. Real-time grocery item detection using custom-trained YOLOv11 model. Features AI Agentic and XAI architecture with integrated voice assistant, optimizing live camera-feed processing for low-latency mobile inference.',
      tags: ['YOLOv11', 'Agentic AI', 'XAI', 'Computer Vision', 'Voice Assistant'],
      featured: true
    },
    {
      title: 'Telemedicine App with AI',
      tech: 'Flutter',
      period: 'June 2025 – November 2025',
      description: 'Telemedicine app with video calls and screen sharing capabilities. Integrated AI assistant for hands-free queries and automated appointment booking, revolutionizing remote healthcare access.',
      tags: ['Video Calling', 'AI Assistant', 'Healthcare', 'Flutter'],
      featured: false
    },
    {
      title: 'E-Commerce Application',
      tech: 'React Native + TypeScript',
      period: 'January 2026 – February 2026',
      description: 'Cross-platform mobile e-commerce app implementing product browsing, REST API integration, and modern UI components with TypeScript for type-safe development.',
      tags: ['React Native', 'TypeScript', 'REST API', 'E-commerce'],
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <Code2 className="section-icon" size={32} />
          Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <div className="featured-badge">Featured</div>}
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              <p className="project-period">{project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      skills: ['Flutter & Dart', 'React Native', 'TypeScript', 'Android & iOS', 'Windows & Web Apps']
    },
    {
      title: 'Backend & Database',
      icon: <Database size={24} />,
      skills: ['Firebase (Auth, Firestore, Realtime DB)', 'Supabase', 'REST APIs', 'Python (Flask)']
    },
    {
      title: 'AI / ML',
      icon: <Brain size={24} />,
      skills: ['YOLOv11', 'Agentic AI', 'XAI', 'Hallucination Detection', 'ML Pipeline Development']
    },
    {
      title: 'State Management',
      icon: <Code2 size={24} />,
      skills: ['BLoC', 'Provider', 'Redux']
    },
    {
      title: 'Tools & DevOps',
      icon: <Globe size={24} />,
      skills: ['Git', 'CI/CD', 'Figma', 'Hopsworks']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card">
              <div className="skill-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  const education = [
    {
      school: 'NED University of Engineering & Technology, Karachi',
      degree: 'Bachelor of Engineering – Software Engineering',
      period: 'September 2022 – June 2026',
      details: 'CGPA: 3.75 | Semester 8 (Final Year)',
      icon: <GraduationCap size={24} />
    },
    {
      school: 'BAMM PECHS Govt. College for Women, Karachi',
      degree: 'Pre-Engineering',
      period: 'April 2020 – April 2022',
      details: 'Position: 13th (93.5%)',
      icon: <Award size={24} />
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          <GraduationCap className="section-icon" size={32} />
          Education
        </h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3 className="education-school">{edu.school}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AwardsSection() {
  const awards = [
    {
      title: 'Runner-Up (Solo) – AI Fest 5.0',
      category: 'Mobile App Development',
      date: 'February 2026',
      icon: <Award size={24} />
    },
    {
      title: 'Technical Member, NED Scholars',
      category: 'Delivered Flutter session for batch members',
      date: 'August 2025',
      icon: <Code2 size={24} />
    },
    {
      title: 'Scholarship & Mentorship Recipient',
      category: 'NED Scholars',
      date: 'March 2023',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'NIC Incubation',
      category: 'Final Year Design Project (FYDP) – IRIS',
      date: '2025-2026',
      icon: <Globe size={24} />
    }
  ]

  return (
    <section id="awards" className="awards">
      <div className="container">
        <h2 className="section-title">
          <Award className="section-icon" size={32} />
          Awards & Recognition
        </h2>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card card">
              <div className="award-icon">{award.icon}</div>
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-category">{award.category}</p>
                <span className="award-date">{award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="contact-content">
          <p className="contact-lead">
            Have a project in mind? Let's build something amazing together.
          </p>

          <div className="contact-grid">
            <a href="mailto:mehveenfasih333@gmail.com" className="contact-card card">
              <Mail className="contact-icon" size={28} />
              <h3>Email</h3>
              <p>mehveenfasih333@gmail.com</p>
            </a>

            <a href="tel:+923363118777" className="contact-card card">
              <Phone className="contact-icon" size={28} />
              <h3>Phone</h3>
              <p>0336-3118777</p>
            </a>

            <div className="contact-card card">
              <MapPin className="contact-icon" size={28} />
              <h3>Location</h3>
              <p>Karachi, Pakistan</p>
            </div>
          </div>

          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/mehveen-fasih-94735b255/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/mehveenfasih3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">MF</span>
            <p>Mehveen Fasih</p>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Mehveen Fasih. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default App
