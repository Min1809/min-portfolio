import { useState, useEffect } from "react";
import {
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
  Terminal,
  Database,
  Palette,
  Server,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // const skills = [
  //   { icon: Code, name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  //   { icon: Server, name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "REST APIs"] },
  //   { icon: Database, name: "Database", items: ["MongoDB", "Firebase", "Supabase", "Redis"] },
  //   { icon: Palette, name: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Responsive"] },
  // ];

  const skills = [
    { icon: Code, name: "Frontend", items: ["JavaScript", "HTML", "CSS"] },
    { icon: Server, name: "Backend", items: ["PHP", "Laravel", "Odoo"] },
    { icon: Database, name: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
    { icon: Palette, name: "Tools & Design", items: ["Figma", "WordPress", "Adobe AEM"] },
  ];

  const projects = [
    {
      title: "Infinity IT Success Website",
      description: "A dynamic website for Infinity IT Success, showcasing their services and contact form that directly creates leads in ODOO CRM.",
      tech: ["Laravel", "PHP", "JavaScript", "SEO"],
      image: `${import.meta.env.BASE_URL}images/infinityitsuccess.png?w=600&q=80`,
      link: "https://infinityitsuccess.com/",
    },
    {
      title: "Yangon Thanlwin Website",
      description: "A comprehensive website for Yangon Thanlwin Hotel, featuring modern design and seamless user experience.",
      tech: ["WordPress", "PHP", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/yangon thanlwin.png?w=600&q=80`,
      link: "https://yangonthanlwinhotel.com/",
    },
    {
      title: "Breakthrough Myanmar LMS",
      description: "An online learning management system for Breakthrough Leadership Academy, enabling interactive courses and student management.",
      tech: ["WordPress", "PHP", "JavaScript", "LMS"],
      image: `${import.meta.env.BASE_URL}images/breakthroughLMS.png?w=600&q=80`,
      link: "https://breakthroughleadershipacademy.com/",
    },
    {
      title: "SAGA Electronic Ecommerce",
      description: "An ecommerce platform for SAGA Electronics, featuring product listings, shopping cart, and secure checkout.",
      tech: ["WordPress", "PHP", "JavaScript", "WooCommerce"],
      image: `${import.meta.env.BASE_URL}images/saga-electronic-ecommerce.png?w=600&q=80`,
      link: "https://sagaelectronic.com/",
    },
    {
      title: "ASEAN CHAM Website",
      description: "A professional website for the ASEAN Chamber of Commerce, highlighting their mission, events, and membership information.",
      tech: ["WordPress", "PHP", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/aseancham.png?w=600&q=80`,
      link: "https://www.aseancham.eu/",
    },
    {
      title: "Thalun International School Website",
      description: "A comprehensive website for Thalun International School, providing information about their academic programs and admissions.",
      tech: ["WordPress", "PHP", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/thalun-international-school.png?w=600&q=80`,
      link: "https://www.thaluninternationalschool.com/",
    },
    {
      title: "Global Stage Entertainment Website",
      description: "A vibrant website for Global Stage Entertainment, featuring event listings, artist profiles, and ticket booking functionality.",
      tech: ["WordPress", "PHP", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/global-stage-entertainment.png?w=600&q=80`,
      link: "https://globalstage-ent.com/",
    },
    {
      title: "Visukara Construction Website",
      description: "A modern website for Visukara Construction, showcasing their projects and services in the construction industry.",
      tech: ["WordPress", "PHP", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/visukara-construction.png?w=600&q=80`,
      link: "https://visukara.com/",
    },
    {
      title: "BIM Group of Companies Website",
      description: "A professional website for BIM Group of Companies, highlighting their diverse business ventures and corporate information.",
      tech: ["WordPress", "PHP", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/bim-group-of-company.png?w=600&q=80`,
      link: "https://bimgoc.com/",
    },
    {
      title: "AIA Myanmar Website",
      description: "A corporate website for AIA Myanmar, providing information about their insurance products and services.",
      tech: ["Adobe AEM", "CSS", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/aia-mm.png?w=600&q=80`,
      link: "https://www.aia.com.mm/en/index.html",
    },
    {
      title: "POS System",
      description: "A robust point-of-sale system with inventory tracking, sales reporting, and customer management features.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/pos.jpg?w=600&q=80`,
    },
    {
      title: "Visitor Management System",
      description: "A secure visitor management system for offices, including check-in/check-out, QR code printing, and visitor logs.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/visitor-management-system.jpg?w=600&q=80`,
    },
    {
      title: "Survey Collecting System",
      description: "A system for collecting and analyzing survey data efficiently.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/survey-collecting-system.jpg?w=600&q=80`,
    },
    {
      title: "Student Management System",
      description: "A comprehensive student management system for schools, including attendance, grades, and communication features.",
      tech: ["CodeIgniter", "PHP", "MySQL", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/student-management-system.jpg?w=600&q=80`,
    },
    {
      title: "Odoo Customization",
      description: "Custom modules and features development for Odoo ERP to meet specific business requirements.",
      tech: ["CodeIgniter", "PHP", "MySQL", "JavaScript"],
      image: `${import.meta.env.BASE_URL}images/odoo.jpg?w=600&q=80`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-mono text-xl font-bold text-foreground">
              <span className="text-accent">&lt;</span>min.dev<span className="text-accent">/&gt;</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm transition-colors duration-300 ${activeSection === link.href.slice(1)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/30 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_transparent_70%)] opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Hi, I'm <span className="text-gradient">Min Pyae Sone</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display">
              Full Stack Web Developer
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12">
              I craft modern, scalable web applications with clean code and beautiful interfaces.
              Passionate about turning complex problems into elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 glow-accent"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <a href="https://github.com/Min1809" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/min-pyae-sone-515637217/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-[49%] -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-muted-foreground" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Terminal className="text-accent" size={32} />
              <h2 className="text-4xl font-bold font-display">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 6 years of experience building web applications.
                  I started my tech journey out of curiosity, and over time it has grown into a strong commitment
                  to creating useful and enjoyable experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, learning new skills to stay current
                  in the fast-evolving tech world, and working on personal projects that help me grow as a developer.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="glass-card px-6 py-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent">30+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="glass-card px-6 py-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent">6+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="glass-card px-6 py-4 rounded-lg">
                    <div className="text-3xl font-bold text-accent">20+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-6 rounded-2xl">
                  <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
                    <code>{`const developer = {
  name: "Min Pyae Sone",
  role: "Web Developer",
  location: "Bangkok, TH",
  skills: ["Laravel", "WordPress", "Python", "SEO"],
  passions: [
    "Clean Code",
    "User Experience",
    "Performance"
  ],
  currentFocus: "Building the future",
  isHireable: true
};`}</code>
                  </pre>
                </div>
                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl bg-accent/10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Code className="text-accent" size={32} />
              <h2 className="text-4xl font-bold font-display">Skills & Expertise</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 rounded-xl hover:border-accent/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-bold mb-4 font-display">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-accent" size={32} />
              <h2 className="text-4xl font-bold font-display">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="glass-card rounded-xl overflow-hidden group hover:border-accent/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-display flex items-center gap-2">
                      {project.title}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <ExternalLink size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/50 rounded-full text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Mail className="text-accent" size={32} />
              <h2 className="text-4xl font-bold font-display">Get In Touch</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-12">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's build something amazing together.
            </p>

            {/* <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors font-mono"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors font-mono"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors font-mono"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-6 py-4 bg-background border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none font-mono"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 glow-accent"
              >
                Send Message
              </button>
            </form> */}

            <div className="flex items-center justify-center gap-6 mt-12 pt-12 border-t border-border/30">
              <a href="mailto:minpyaesone.dev@gmail.com" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
                <Mail size={20} />
                minpyaesone.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-muted-foreground">
              © 2025 Min Pyae Sone. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Min1809" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/min-pyae-sone-515637217/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
