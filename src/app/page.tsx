import Image from "next/image";
import ContactForm from "./contact-form";

const featuredProjects = [
  {
    title: "DomestiCare",
    subtitle: "Mobile-web job recommender with chatbot and training programs",
    year: "2025 - 2026",
    summary:
      "Built a mobile and web platform that recommends jobs, integrates training programs, and guides overseas Filipino workers with chatbot assistance and structured career support.",
    impact: "Reached at least 100 applicants with accurate guidance and opportunity matching.",
    tags: ["Flutter", "Laravel", "Chatbot", "Training Integration"],
  },
  {
    title: "Hound",
    subtitle: "E-commerce website for Hound Jewelry Shop",
    year: "2024",
    summary:
      "Developed a dynamic e-commerce experience with transaction processing, analytics, API integrations, and categorized navigation tailored for high-volume storefront operations.",
    impact: "Supported 100+ daily orders and improved sales conversion by 35%.",
    tags: ["Laravel", "MySQL", "Analytics", "API Integrations"],
  },
  {
    title: "Efficient Dental Appointment Management",
    subtitle: "Oracle-based clinical database system for Igliane's Dental Clinic",
    year: "2024",
    summary:
      "Designed a database-driven appointment platform that improved data integrity, reduced scheduling errors, and moved paper records into a secure digital workflow.",
    impact: "Migrated over 80% of appointment data into a safer digital platform.",
    tags: ["Oracle", "Database Design", "Scheduling", "Digital Records"],
  },
];

const skills = [
  "HTML, CSS, JavaScript, Bootstrap, Flutter, Ionic, Figma",
  "PHP, Laravel, Java, REST API, MySQL, PostgreSQL, Oracle, SAP S/4HANA",
  "Docker, Postman, Android Studio, Unity, Blender, GitHub, Visual Studio Code, Digital Ocean",
];

const certifications = [
  "Oracle Data Platform 2025 Certified Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
  "Oracle Cloud Infrastructure 2025 Generative AI Professional",
  "Oracle APEX Cloud Developer Certified Professional 2025",
  "Oracle Cloud Database Services 2025 Professional",
  "SAP Certified Associate - Project Manager - SAP Activate",
];

const achievements = [
  "Bachelor of Science in Information Technology, June 2026 - Magna Cum Laude",
  "STEM, Senior High School, August 2022 - With Highest Honors and Valedictorian",
  "President's Lister, VPAA's Lister, and Dean's Lister across multiple academic years",
  "Best in Mathematics and multiple academic excellence awards since high school",
];

const references = [
  {
    name: "Dr. Jasmin A. Caliwag",
    role: "OJT Faculty-in-Charge, T.I.P. - Quezon City",
    email: "jcaliwag.it@tip.edu.ph",
    phone: "+63-917-895-0496",
  },
  {
    name: "Aira P. Estanislao",
    role: "Medical Claim Analyst, Medmetrix - Pasig City",
    email: "estanislaoaira201@gmail.com",
    phone: "+63-969-218-0135",
  },
];

const highlights = [
  { value: "3", label: "featured projects" },
  { value: "100+", label: "applicants guided" },
  { value: "7", label: "certifications" },
  { value: "2026", label: "ready to deploy" },
];

const highlightDelays = [120, 180, 240, 300];

export default function Home() {
  return (
    <main className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,148,77,0.28),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(79,209,197,0.24),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.12),_transparent_25%),linear-gradient(180deg,_#080b16_0%,_#0b1220_52%,_#06070d_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-10 top-24 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl animate-drift" />
      <div className="absolute right-8 top-72 h-64 w-64 rounded-full bg-orange-300/10 blur-3xl animate-drift-slow" />
      <div className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-glide" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent opacity-35" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl animate-rise">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">Portfolio Website</p>
            <p className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Charles Luigi Gonzales Mesa
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-white/75">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative animate-rise" style={{ animationDelay: "80ms" }}>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/55">
              <span className="h-px w-12 bg-white/35" />
              Cinematic intro
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.18)] animate-shimmer">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Ready for Vercel deployment
            </div>

            <h1
              className="mt-6 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight text-white md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A high-impact portfolio for building products,
              <span className="bg-gradient-to-r from-orange-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                launching ideas,
              </span>
              and proving results.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 md:text-xl">
              Charles Luigi Gonzales Mesa is a BSIT student and builder focused on full-stack development,
              Oracle databases, AI-powered systems, and polished product experiences that turn technical work
              into measurable outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:-translate-y-0.5"
              >
                Explore projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact me
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl animate-rise"
                  style={{ animationDelay: `${highlightDelays[highlights.indexOf(item)]}ms` }}
                >
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/55">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl animate-rise" style={{ animationDelay: "140ms" }}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/75">Featured Media</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Portfolio reel and live demo reference
                  </h2>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.28em] text-white/65">
                  Press play
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/65">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Now playing
                  </div>
                  <div>Reference video / ui motion / storytelling</div>
                </div>
                <div className="grid gap-4 p-4 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
                  <div className="flex flex-col justify-between rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/75">Creative direction</p>
                      <h3 className="mt-2 text-lg font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                        Portfolio as a media experience
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/72">
                        Clean motion, cinematic composition, and a real embedded reference video framed like a product reel.
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/72">
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">Featured projects</div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">Motion system</div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">Portrait hero</div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-3">Vercel ready</div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/IjylQ6b1ets"
                        title="Portfolio reference video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -right-8 bottom-6 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl animate-rise" style={{ animationDelay: "120ms" }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_36%)]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/60">Profile</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Full-stack creator, database thinker, AI explorer
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-right text-xs text-white/70">
                  <div>Vercel URL</div>
                  <div className="mt-1 font-semibold text-white">mesacharlesluigi-8916</div>
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:border-cyan-200/30 hover:shadow-[0_24px_80px_rgba(79,209,197,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,209,197,0.18),transparent_34%)]" />
                <div className="relative grid gap-4 md:grid-cols-[0.82fr_1.18fr] md:items-center">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                    <Image
                      src="/profile.jpg"
                      alt="Charles Luigi Gonzales Mesa"
                      width={600}
                      height={720}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100 animate-shimmer">
                      Creative media profile
                    </div>
                    <p className="text-sm leading-7 text-white/78">
                      Seeking an entry-level role in Information Technology with a focus on real-world delivery,
                      clean systems, and practical product outcomes.
                    </p>
                    <div className="grid gap-3 text-sm text-white/72 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/5 p-4">Web and mobile applications</div>
                      <div className="rounded-2xl bg-white/5 p-4">Oracle and SQL database systems</div>
                      <div className="rounded-2xl bg-white/5 p-4">AI and chatbot-assisted workflows</div>
                      <div className="rounded-2xl bg-white/5 p-4">Product design and analytics</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Education</p>
                  <p className="mt-2 text-sm text-white/80">Technological Institute of the Philippines - Quezon City</p>
                  <p className="mt-1 text-sm text-cyan-100">BSIT, Magna Cum Laude</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Focus</p>
                  <p className="mt-2 text-sm text-white/80">Delivery, reliability, and polished user experiences</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="section-divider mx-auto w-full max-w-7xl px-6 lg:px-10" />

      <section id="projects" className="relative mx-auto w-full max-w-7xl px-6 pb-6 pt-12 lg:px-10 scroll-mt-24">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Featured Work</p>
            <h2 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Projects that show range and results
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/8 animate-rise"
              style={{ animationDelay: project.title === "DomestiCare" ? "80ms" : project.title === "Hound" ? "140ms" : "200ms" }}
            >
              <div className="flex items-center justify-between gap-4 text-sm text-white/60">
                <span>{project.year}</span>
                <span>Selected project</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {project.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-100/70">{project.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-white/76">{project.summary}</p>
              <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-50">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider mx-auto w-full max-w-7xl px-6 lg:px-10" />

      <section id="skills" className="relative mx-auto grid w-full max-w-7xl gap-6 px-6 py-12 lg:grid-cols-3 lg:px-10 scroll-mt-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Technical Skills</p>
          <h2 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Built for shipping
          </h2>
          <div className="mt-6 space-y-4">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-7 text-white/80 transition duration-300 hover:border-white/20 hover:bg-slate-950/50 animate-rise">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl animate-rise" style={{ animationDelay: "120ms" }}>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Certifications</p>
          <h2 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Credentials
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-white/78">
            {certifications.map((certification) => (
              <li key={certification} className="rounded-2xl border border-white/10 bg-slate-950/35 p-3">
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section-divider mx-auto w-full max-w-7xl px-6 lg:px-10" />

      <section className="relative mx-auto grid w-full max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 scroll-mt-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl animate-rise">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Academic Achievements</p>
          <h2 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Consistent performance
          </h2>
          <div className="mt-6 space-y-3 text-sm leading-7 text-white/78">
            {achievements.map((achievement) => (
              <div key={achievement} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                {achievement}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl animate-rise" style={{ animationDelay: "120ms" }}>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">References</p>
          <h2 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            People who can vouch for the work
          </h2>
          <div className="mt-6 space-y-4">
            {references.map((reference) => (
              <div key={reference.name} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
                <p className="text-lg font-semibold text-white">{reference.name}</p>
                <p className="mt-1 text-sm text-cyan-100/75">{reference.role}</p>
                <p className="mt-3 text-sm text-white/76">{reference.email}</p>
                <p className="mt-1 text-sm text-white/76">{reference.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto w-full max-w-7xl px-6 lg:px-10" />

      <section id="contact" className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-8 lg:px-10 scroll-mt-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 via-white/6 to-white/10 p-8 backdrop-blur-xl animate-rise">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Let&apos;s build something that looks as good as it performs.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76">
            Email: mesacharlesluigi@gmail.com | Mobile: +639391482211 | Location: Marikina City, Philippines
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
