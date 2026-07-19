"use client";

import Image from "next/image";
import { useEffect } from "react";
import ContactForm from "./contact-form";

const projects = [
  {
    name: "DomestiCare",
    eyebrow: "Mobile + web career platform",
    description:
      "A job recommender and learning companion for overseas Filipino workers seeking clearer guidance and better opportunities.",
    impact: "Supported 100+ applicants with a more trusted path to career matching.",
    stack: ["Laravel", "Flutter", "PostgreSQL", "AI assistance"],
    href: "https://github.com/mesacharlesluigi14/domesticare",
    videoUrl: "https://www.youtube.com/watch?v=aQeh59AXEkA&t=5s",
    videoId: "aQeh59AXEkA",
  },
  {
    name: "Hound",
    eyebrow: "E-commerce for Hound Jewelry Shop",
    description:
      "A polished storefront built to make online shopping feel effortless from discovery to checkout.",
    impact: "Created a more scalable sales experience for daily transactions and stronger product visibility.",
    stack: ["Laravel", "MySQL", "REST APIs", "Analytics"],
    href: "https://github.com/mesacharlesluigi14/hound",
    liveUrl: "https://hound-production-1928.up.railway.app",
    videoUrl: "https://www.youtube.com/watch?v=jjRGxXOtb3Y",
    videoId: "jjRGxXOtb3Y",
  },
  {
    name: "Blender Portfolio",
    eyebrow: "3D visual storytelling",
    description:
      "A creative Blender showcase that blends storytelling, lighting, and presentation into a striking visual portfolio.",
    impact: "Built as a personal space for motion, form, and visual identity beyond traditional web interfaces.",
    stack: ["Blender 3D", "Modeling", "Lighting", "Cinematics"],
    href: "mailto:mesacharlesluigi@gmail.com?subject=Blender%20Portfolio",
  },
];

const credentials = [
  {
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    image: "/certificates/oracle-data-platform.jpg",
    issuer: "Oracle",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    image: "/certificates/oci-ai-foundations.jpg",
    issuer: "Oracle",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    image: "/certificates/oci-foundations.jpg",
    issuer: "Oracle",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    image: "/certificates/oci-genai-professional.jpg",
    issuer: "Oracle",
  },
  {
    name: "Oracle APEX Cloud Developer Certified Professional 2025",
    image: "/certificates/apex-developer.jpg",
    issuer: "Oracle",
  },
  {
    name: "Oracle Cloud Database Services 2025 Professional",
    image: "/certificates/cloud-database-services.jpg",
    issuer: "Oracle",
  },
  {
    name: "SAP Certified Associate – Project Manager – SAP Activate",
    image: "/certificates/sap-activate.jpg",
    issuer: "SAP",
  },
];

const skills = [
  ["Build", "HTML, CSS, JavaScript, Bootstrap, Flutter, Ionic, Figma"],
  ["Engineer", "PHP, Laravel, Java, REST APIs, MySQL, PostgreSQL, Oracle"],
  ["Ship", "Docker, Postman, Android Studio, GitHub, VS Code, DigitalOcean"],
];

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="site-noise" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Charles Luigi Mesa home">
          <span>CLM</span>
          <small>portfolio / 2026</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-mail" href="mailto:mesacharlesluigi@gmail.com">
          Let&apos;s talk <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="section-kicker"><span /> Charles Luigi Mesa — full-stack builder</p>
          <h1>
            Designing thoughtful digital experiences with
            <em> calm, clarity, and craft.</em>
          </h1>
          <p className="hero-intro">
            I build products that feel natural to use — from web platforms and admin systems to creative visual experiences rooted in good architecture and strong communication.
          </p>
          <div className="hero-text-row">
            <p className="hero-highlight">Magna Cum Laude</p>
            <p className="hero-highlight">Valedictorian</p>
            <p className="hero-highlight">Highest GPA Overall</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <span>↓</span></a>
            <a className="button button-quiet" href="mailto:mesacharlesluigi@gmail.com">Start a conversation <span>↗</span></a>
          </div>
          <div className="hero-footnotes">
            <p><b>based in</b><br />Marikina City, Philippines</p>
            <p><b>currently seeking</b><br />Entry-level IT opportunities</p>
          </div>
        </div>

        <div className="portrait-stage reveal">
          <div className="portrait-orbit orbit-one" aria-hidden="true" />
          <div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-label label-top">available for<br />great work</div>
          <div className="portrait-label label-bottom">full-stack<br />database / ai</div>
          <div className="portrait-frame">
            <Image
              src="/charles-luigi-mesa.jpg"
              alt="Charles Luigi Mesa"
              width={1365}
              height={2048}
              priority
              className="portrait-image"
            />
          </div>
          <div className="portrait-stamp" aria-hidden="true">C<br />L<br />M</div>
        </div>
      </section>

      <section className="feature-band reveal" aria-label="Highlights">
        <article>
          <div className="feature-icon">▹</div>
          <strong>Full stack</strong>
          <p>Web and mobile experiences designed to feel polished and dependable.</p>
        </article>
        <article>
          <div className="feature-icon">▹</div>
          <strong>Database thinking</strong>
          <p>Clearer systems, cleaner workflows, and stronger long-term maintainability.</p>
        </article>
        <article>
          <div className="feature-icon">▹</div>
          <strong>Creative direction</strong>
          <p>Blender, visual storytelling, and thoughtful presentation as part of the product.</p>
        </article>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading reveal">
          <p className="section-kicker"><span /> Selected work</p>
          <h2>Built with care.<br /><em>Made to feel effortless.</em></h2>
          <p>Each project is shaped by a practical goal: clarity, useful outcomes, and a strong experience from first click to final handoff.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.name} style={{ transitionDelay: `${index * 120}ms` }}>
              <div className="project-main">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-result">{project.impact}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-actions">
                  {"liveUrl" in project && project.liveUrl && (
                    <a className="project-link project-link-live" href={project.liveUrl} target="_blank" rel="noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                      Live Site <span>↗</span>
                    </a>
                  )}
                  <a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    View details <span>↗</span>
                  </a>
                  {"videoUrl" in project && project.videoUrl && (
                    <a className="project-link project-link-video" href={project.videoUrl} target="_blank" rel="noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                      Video Demo <span>↗</span>
                    </a>
                  )}
                </div>
                {"videoId" in project && project.videoId && (
                  <div className="project-video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
                      title={`${project.name} Demo Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro reveal">
          <p className="section-kicker"><span /> The person behind the build</p>
          <h2>I bring an <em>outcome-first</em> mindset to every screen, query, and system.</h2>
        </div>
        <div className="about-grid">
          <p className="about-copy reveal">
            I&apos;m Charles, a creative and responsible problem-solver who enjoys translating complex requirements into clear, useful technology. My work is shaped by strong communication, ethical practice, and the habit of learning quickly when a problem asks for more.
          </p>
          <div className="experience-card reveal">
            <p className="card-label">Recent experience</p>
            <h3>Accenture Philippines</h3>
            <p>SAP Academy Delegate · Technology</p>
            <p className="muted">SAP FICO curriculum · Jan – May 2026 · 500 hours</p>
          </div>
        </div>
      </section>

      <section className="skills-section reveal">
        <p className="section-kicker"><span /> Toolbox</p>
        <div className="skill-grid">
          {skills.map(([title, content], index) => (
            <div className="skill-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="credentials-section" id="credentials">
        <div className="reveal">
          <p className="section-kicker"><span /> Credentials</p>
          <h2>Learning with<br /><em>intention.</em></h2>
        </div>
        <div className="credential-grid">
          {credentials.map((credential, index) => (
            <div className="credential-card reveal" key={credential.name} style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="credential-number">0{index + 1}</div>
              <div className="credential-image-wrap">
                <Image
                  src={credential.image}
                  alt={credential.name}
                  width={800}
                  height={600}
                  className="credential-image"
                />
                <div className="credential-overlay">
                  <span className="credential-badge">{credential.issuer}</span>
                </div>
              </div>
              <p className="credential-name">{credential.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker"><span /> Get in touch</p>
        <div className="contact-heading">
          <h2>Have a good<br /><em>challenge?</em></h2>
          <p>Let&apos;s make something that performs beautifully and solves a real problem.</p>
        </div>
        <ContactForm />
      </section>

      <footer>
        <p>© 2026 Charles Luigi Mesa</p>
        <a href="mailto:mesacharlesluigi@gmail.com">mesacharlesluigi@gmail.com</a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
