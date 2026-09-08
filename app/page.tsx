'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  Menu,
  X,
  Terminal,
  Database,
  Cloud,
  ShieldCheck,
  Braces,
  Send,
  Smartphone,
  Globe,
  MessageCircle,
  Layers3,
  GitBranch,
} from 'lucide-react'

const nav = ['About', 'Skills', 'Projects', 'Experience', 'Blog', 'Contact']

const skills = [
  [
    '01',
    'Backend Engineering',
    'NestJS, Fastify, Express, Node.js, REST APIs, API architecture',
    Braces,
  ],
  [
    '02',
    'Frontend Development',
    'React, Next.js, TailwindCSS, responsive interfaces',
    Globe,
  ],
  [
    '03',
    'Mobile Development',
    'Flutter, Java, Android Studio, SQLite',
    Smartphone,
  ],
  [
    '04',
    'Data & Backend Services',
    'PostgreSQL, Prisma, MongoDB, Redis, Supabase, Firebase',
    Database,
  ],
  [
    '05',
    'Cloud & DevOps',
    'Docker, Nginx, AWS, CI/CD, Linux, deployment',
    Cloud,
  ],
  [
    '06',
    'Security & Reliability',
    'Better Auth, JWT, RBAC, validation, rate limiting',
    ShieldCheck,
  ],
  [
    '07',
    'Programming Languages',
    'TypeScript, JavaScript, Python, Java, C++',
    Terminal,
  ],
  [
    '08',
    'Engineering Workflow',
    'Git, GitHub, debugging, testing, documentation',
    GitBranch,
  ],
]

const projects = [
  {
    name: 'Online Registration System',
    type: 'FULL-STACK / 2026',
    text: 'A production-oriented student registration platform designed around modular backend architecture, secure authentication, role-based access, course registration, and relational data management.',
    tags: [
      'NestJS',
      'Fastify',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Better Auth',
    ],
    accent: 'teal',
    github:
      'https://github.com/Yohannes2730/Online-Registration-System.git',
  },

  {
    
 name: 'Student Management System',
type: 'MOBILE / 2026',
text: 'A role-based mobile application for managing student attendance, class schedules, permissions, academic activities, and communication between administrators, students, and parents.',
tags: [
'Flutter',
'Dart',
'Supabase',
'PostgreSQL',
'Provider',
],
accent: 'sand',
github:
'https://github.com/Yohannes2730/studentManagment_System.git',
},


  {
name: 'MERN Authentication System',
type: 'WEBSITE / 2026',
text: 'A full-stack authentication platform built with the MERN stack, featuring secure user registration, login, JWT-based authentication, protected routes, and MongoDB data persistence.',
tags: [
'React',
'Node.js',
'Express',
'MongoDB',
'JWT',
],
accent: 'blue',
github: 'https://github.com/Yohannes2730/Mern-Authenticate-system.git',
},
  {
name: 'E-commerce Backend System',
type: 'WEBSITE / 2025',
text: 'A backend system for an e-commerce platform, built with the MERN stack, providing secure user authentication, product management, order processing, and data storage using MongoDB.',
tags: [
'React',
'Node.js',
'Express',
'MongoDB',
'JWT',
],
accent: 'blue',
github: 'https://github.com/Yohannes2730/E-commerce-Backend-System-.git',
}

]

export default function Page() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main>
      {/* HEADER */}

      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Yohannes Girma home"
        >
          <span>Yohannes Girma</span>
          <i>•</i>
        </a>

        <nav className={open ? 'nav open' : 'nav'}>
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}

      <section id="top" className="hero section-wrap">
        <div className="eyebrow">
          <span className="status-dot" />
          AVAILABLE FOR SELECT PROJECTS
          <span className="line" />
        </div>

        <div className="hero-grid">
          <div>
            <p className="kicker">
              BACKEND SOFTWARE ENGINEER
            </p>

            <h1>
              Systems that
              <br />
              <em>hold up.</em>
            </h1>

            <p className="hero-copy">
              I design and build reliable software across the
              backend, frontend, and mobile stack — from
              database architecture and APIs to production-ready
              applications.
            </p>

            <div className="hero-actions">
              <a
                className="button primary"
                href="#projects"
              >
                View my work
                <ArrowUpRight size={16} />
              </a>

              <a
                className="text-link"
                href="#about"
              >
                More about me <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-aside">
            <div className="terminal-card">
              <div className="terminal-top">
                <span />
                <span />
                <span />
                <small>engineer.ts</small>
              </div>

              <pre>{`const engineer = {
  name: "Yohannes Girma",
  role: "Software Engineer",
  focus: [
    "Backend",
    "APIs",
    "Distributed Systems"
  ],
  stack: "TypeScript",
  status: "shipping",
};`}</pre>
            </div>

            <p>
              Addis Ababa, Ethiopia
              <br />
              Working globally
            </p>
          </div>
        </div>

        <div className="scroll-note">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="about section-wrap section-border"
      >
        <div className="section-label">
          01 / ABOUT
        </div>

        <div className="about-grid">
          <div className="portrait-frame">
            <img
              src="/about-portrait.png"
              alt="Yohannes Girma"
            />
permanently
            <span className="portrait-caption">
              YG / 2026
            </span>
          </div>

          <div className="about-copy">
            <p className="kicker">
              THE SHORT VERSION
            </p>

            <h2>
              Engineering with
              <br />
              <em>purpose.</em>
            </h2>

            <p>
              I&apos;m Yohannes, a software engineer focused on
              backend development and scalable application
              architecture.
            </p>

            <p>
              I enjoy designing APIs, modeling data, building
              authentication systems, and connecting services
              into software that is reliable, maintainable, and
              easy to evolve.
            </p>

            <p>
              My stack spans backend, frontend, mobile, cloud,
              and databases — but my strongest focus is building
              dependable systems behind the interface.
            </p>

            <a
              className="text-link"
              href="#contact"
            >
              Start a conversation <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="section-wrap section-border"
      >
        <div className="section-label">
          02 / CAPABILITIES
        </div>

        <div className="section-intro">
          <div>
            <p className="kicker">
              WHAT I BRING
            </p>

            <h2>
              Built across
              <br />
              <em>the stack.</em>
            </h2>
          </div>

          <p>
            From designing backend services and data models to
            building interfaces and mobile applications, I work
            across the stack while keeping architecture,
            performance, and maintainability in focus.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map(
            ([num, title, desc, Icon]) => (
              <article
                className="skill-card"
                key={title as string}
              >
                <span className="card-num">
                  {num as string}
                </span>

                <Icon
                  className="skill-icon"
                  size={27}
                  strokeWidth={1.3}
                />

                <h3>{title as string}</h3>

                <p>{desc as string}</p>

                <span className="card-arrow">
                  ↗
                </span>
              </article>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="section-wrap section-border"
      >
        <div className="section-label">
          03 / SELECTED WORK
        </div>

        <div className="section-intro projects-heading">
          <div>
            <p className="kicker">
              A FEW THINGS I&apos;VE BUILT
            </p>

            <h2>
              Real projects.
              <br />
              <em>Real systems.</em>
            </h2>
          </div>

          <a
            className="text-link"
            href="https://github.com/Yohannes2730"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile <span>↗</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.name}
            >
              <div className="project-visual">
                <span>
                  0{i + 1}
                </span>

                <Terminal
                  size={44}
                  strokeWidth={1}
                />
              </div>

              <div className="project-body">
                <p className="kicker">
                  {project.type}
                </p>

                <h3>{project.name}</h3>

                <p>{project.text}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  View on GitHub
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="section-wrap section-border experience"
      >
        <div className="section-label">
          04 / EXPERIENCE
        </div>

        <div className="section-intro">
          <div>
            <p className="kicker">
              THE PATH SO FAR
            </p>

            <h2>
              Learn.
              <br />
              <em>Build. Ship.</em>
            </h2>
          </div>

          <p>
            A journey shaped by academic projects, real
            applications, backend engineering, and continuous
            experimentation with modern technologies.
          </p>
        </div>

        <div className="timeline">
          <div>
            <span>
              2026 — NOW
            </span>

            <h3>
              Software Engineering
            </h3>

            <p>
              Building full-stack and backend systems using
              NestJS, Fastify, PostgreSQL, Prisma, React,
              Next.js, Docker, and modern authentication.
            </p>
          </div>

          <div>
            <span>
              2024 — 2026
            </span>

            <h3>
              Backend Development
            </h3>

            <p>
              Developing APIs, database-driven applications,
              authentication flows, CRUD systems, and
              production-oriented backend architectures.
            </p>
          </div>

          <div>
            <span>
              FOUNDATION
            </span>

            <h3>
              Computer Science & Software Engineering
            </h3>

            <p>
              Building a strong foundation in programming,
              algorithms, databases, software architecture,
              Java, C++, Python, and web development.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG */}

      <section
        id="blog"
        className="section-wrap section-border"
      >
        <div className="section-label">
          05 / NOTES
        </div>

        <div className="section-intro">
          <div>
            <p className="kicker">
              FROM THE LOGBOOK
            </p>

            <h2>
              Thinking in
              <br />
              <em>systems.</em>
            </h2>
          </div>

          <p>
            Notes and ideas about backend engineering,
            architecture, databases, APIs, and the process of
            becoming a better software engineer.
          </p>
        </div>

        <div className="blog-list">
          <a href="#contact">
            <span>01</span>

            <div>
              <p>
                BACKEND · 8 MIN READ
              </p>

              <h3>
                Designing APIs that age well
              </h3>
            </div>

            <ArrowUpRight />
          </a>

          <a href="#contact">
            <span>02</span>

            <div>
              <p>
                DATABASES · 7 MIN READ
              </p>

              <h3>
                PostgreSQL, Prisma and clean data models
              </h3>
            </div>

            <ArrowUpRight />
          </a>

          <a href="#contact">
            <span>03</span>

            <div>
              <p>
                DEVOPS · 6 MIN READ
              </p>

              <h3>
                From localhost to Docker
              </h3>
            </div>

            <ArrowUpRight />
          </a>
        </div>
      </section>

      ```tsx
{/* CONTACT */}

<section
  id="contact"
  className="contact section-wrap"
>
  <div className="contact-grid">
    <div>
      <p className="kicker">
        06 / CONTACT
      </p>

      <h2>
        Have a hard
        <br />
        problem?{' '}
        <em>Let&apos;s talk.</em>
      </h2>

      <p className="contact-copy">
        Have a project, technical challenge, or idea you&apos;d
        like to discuss? Send me a message and I&apos;ll get back
        to you as soon as possible.
      </p>

      <div className="socials">
        <a href="mailto:yohannesg218@gmail.com">
          <Mail size={17} />
          Email
        </a>

        <a
          href="https://t.me/John_loveM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={17} />
          Telegram
        </a>

        <a
          href="https://github.com/Yohannes2730"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2 size={17} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yohannesg123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BriefcaseBusiness size={17} />
          LinkedIn
        </a>
      </div>
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="contact-form"
    >
      {sent ? (
        <div className="success">
          <span className="success-icon">✓</span>

          <h3>Message received.</h3>

          <p>
            Thanks for reaching out. I&apos;ll be in touch soon.
          </p>

          <button
            type="button"
            className="text-link"
            onClick={() => setSent(false)}
          >
            Send another message <span>→</span>
          </button>
        </div>
      ) : (
        <>
          <label htmlFor="contact-name">
            Name

            <input
              id="contact-name"
              required
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
            />
          </label>

          <label htmlFor="contact-email">
            Email

            <input
              id="contact-email"
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
            />
          </label>

          <label htmlFor="contact-message">
            Message

            <textarea
              id="contact-message"
              required
              name="message"
              rows={5}
              placeholder="Tell me about your project or idea..."
            />
          </label>

          <button
            className="button primary"
            type="submit"
          >
            Send message
            <Send size={15} />
          </button>
        </>
      )}
    </form>
  </div>
</section>
```


      {/* FOOTER */}

      <footer>
        <span>
          © 2026 YOHANNES GIRMA.
        </span>

        <span>
          BUILT WITH INTENTION <i>•</i> 01
        </span>
      </footer>
    </main>
  )
}