import Image from "next/image";
import ContactForm from "./contact-form";

const projects = [
  {
    number: "01",
    name: "DomestiCare",
    eyebrow: "Mobile + web career platform",
    description:
      "A job recommender with associated training programs and chatbot assistance designed to help overseas Filipino workers navigate opportunities with confidence.",
    result: "100+ applicants guided with accurate career support and opportunity matching.",
    stack: ["Laravel", "Flutter", "PostgreSQL", "AI assistance"],
    href: "https://github.com/mesacharlesluigi14/domesticare",
  },
  {
    number: "02",
    name: "Hound",
    eyebrow: "E-commerce for Hound Jewelry Shop",
    description:
      "A dynamic Laravel storefront with transaction processing, reporting analytics, API connections, and category-led product discovery.",
    result: "Built to support 100+ daily orders and improve sales conversion by 35%.",
    stack: ["Laravel", "MySQL", "REST APIs", "Analytics"],
    href: "https://github.com/CharlesLuigiMesa14/hound",
  },
  {
    number: "03",
    name: "Dental Flow",
    eyebrow: "Clinical database system",
    description:
      "An Oracle-based appointment management system for Igliane’s Dental Clinic, created to protect records and streamline scheduling.",
    result: "Migrated 80%+ of paper appointment data into a secure digital workflow.",
    stack: ["Oracle", "Database design", "Scheduling", "Data integrity"],
    href: "mailto:mesacharlesluigi@gmail.com?subject=Dental%20Flow%20case%20study",
  },
];

const credentials = [
  "Oracle Data Platform 2025 Certified Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Generative AI Professional",
  "Oracle APEX Cloud Developer Certified Professional 2025",
  "Oracle Cloud Database Services 2025 Professional",
  "SAP Certified Associate – Project Manager – SAP Activate",
];

const skills = [
  ["Build", "HTML, CSS, JavaScript, Bootstrap, Flutter, Ionic, Figma"],
  ["Engineer", "PHP, Laravel, Java, REST APIs, MySQL, PostgreSQL, Oracle"],
  ["Ship", "Docker, Postman, Android Studio, GitHub, VS Code, DigitalOcean"],
];

export default function Home() {
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
        <div className="hero-copy">
          <p className="section-kicker"><span /> Charles Luigi Mesa — full-stack builder</p>
          <h1>
            Growing ideas into
            <em> dependable digital</em>
            experiences.
          </h1>
          <p className="hero-intro">
            A Magna Cum Laude BSIT graduate from T.I.P. Quezon City, combining full-stack craft,
            database thinking, and AI curiosity to make useful products feel effortless.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <span>↓</span></a>
            <a className="button button-quiet" href="mailto:mesacharlesluigi@gmail.com">Start a conversation <span>↗</span></a>
          </div>
          <div className="hero-footnotes">
            <p><b>based in</b><br />Marikina City, Philippines</p>
            <p><b>currently seeking</b><br />Entry-level IT opportunities</p>
          </div>
        </div>

        <div className="portrait-stage">
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

      <section className="metrics" aria-label="Career highlights">
        <div><strong>500</strong><span>hours in SAP FICO<br />Academy training</span></div>
        <div><strong>7</strong><span>industry certifications<br />across Oracle &amp; SAP</span></div>
        <div><strong>100+</strong><span>applicants supported<br />through DomestiCare</span></div>
        <div><strong>35%</strong><span>sales conversion lift<br />targeted by Hound</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker"><span /> Selected work</p>
          <h2>Built with care.<br /><em>Measured by impact.</em></h2>
          <p>From a recommendation engine for global careers to commerce and clinical systems, each project starts with the people who need it.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-result">{project.result}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                View project <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro">
          <p className="section-kicker"><span /> The person behind the build</p>
          <h2>I bring an <em>outcome-first</em> mindset to every screen, query, and system.</h2>
        </div>
        <div className="about-grid">
          <p className="about-copy">
            I&apos;m Charles, a creative and responsible problem-solver who enjoys translating complex requirements into clear, useful technology. My work is shaped by strong communication, ethical practice, and the habit of learning quickly when a problem asks for more.
          </p>
          <div className="experience-card">
            <p className="card-label">Recent experience</p>
            <h3>Accenture Philippines</h3>
            <p>SAP Academy Delegate · Technology</p>
            <p className="muted">SAP FICO curriculum · Jan – May 2026 · 500 hours</p>
          </div>
        </div>
      </section>

      <section className="skills-section">
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

      <section className="credentials-section">
        <div>
          <p className="section-kicker"><span /> Credentials</p>
          <h2>Learning with<br /><em>intention.</em></h2>
        </div>
        <ol>
          {credentials.map((credential, index) => <li key={credential}><span>0{index + 1}</span>{credential}</li>)}
        </ol>
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
