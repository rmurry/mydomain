import { ArrowUpRight, Github, Linkedin, Mail, Server, Database, BrainCircuit } from "lucide-react";

const projects = [
  {
    title: "Enterprise Data Platform",
    description:
      "Centralized analytics architecture focused on governed data, scalable reporting, and practical self-service access.",
    tags: ["Data", "Analytics", "Architecture"],
    href: "#",
  },
  {
    title: "Applied AI",
    description:
      "Exploring secure, useful AI patterns including retrieval, enterprise search, and workflow automation.",
    tags: ["AI", "RAG", "Automation"],
    href: "#",
  },
  {
    title: "Homelab",
    description:
      "A growing home infrastructure environment for virtualization, media, game servers, automation, and learning.",
    tags: ["Proxmox", "Networking", "Self-hosting"],
    href: "#",
  },
];

const focusAreas = [
  {
    icon: Database,
    title: "Data & Analytics",
    text: "Building systems that turn complex operational data into reliable, useful decision support.",
  },
  {
    icon: BrainCircuit,
    title: "AI",
    text: "Focused on practical AI systems, governance, retrieval, and responsible enterprise adoption.",
  },
  {
    icon: Server,
    title: "Technology",
    text: "Interested in infrastructure, self-hosting, networking, and building useful systems end to end.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Rylan Murry home">
            RM
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="hero container">
          <div className="eyebrow">Data · Analytics · AI · Technology</div>

          <h1>
            I build practical systems
            <span> that make complex work simpler.</span>
          </h1>

          <p className="hero-copy">
            I’m Rylan Murry. I work across data, analytics, AI, and technology,
            with a focus on building useful systems that are reliable,
            understandable, and designed to last.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View projects <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-card">
            <div>
              <span className="hero-card-label">Currently focused on</span>
              <strong>Enterprise data platforms, applied AI, and homelab infrastructure.</strong>
            </div>
            <span className="status-dot" aria-label="Active" />
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>Technology should solve real problems.</h2>
          </div>

          <div className="about-grid">
            <p className="about-copy">
              My interests sit at the intersection of analytics, engineering,
              architecture, and AI. I like taking complicated environments and
              making them easier to use, easier to govern, and easier to scale.
            </p>

            <div className="focus-grid">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <article className="focus-card" key={title}>
                  <div className="icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-heading row">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Things I’m building and exploring.</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact-card">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Want to connect?</h2>
              <p>
                The links below are placeholders—replace them with the profiles
                and contact method you want to make public.
              </p>
            </div>

            <div className="social-links">
              <a href="mailto:you@example.com">
                <Mail size={19} />
                Email
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={19} />
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={19} />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Rylan Murry</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}

export default App;
