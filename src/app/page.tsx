const projects = [
  {
    number: "01",
    category: "AI / Agentic Systems",
    title: "Ticket Router",
    description:
      "AI-powered support ticket router that classifies, resolves, and escalates customer tickets using a grounded, evaluation-driven workflow.",
    details:
      "Built a LangGraph state machine for classification, RAG-based resolution, confidence-aware escalation, deterministic safety guardrails, and LangSmith observability. The FastAPI + React application includes custom classifier and resolver evaluation suites with a 100% pass rate on evaluation checks.",
    stack: [
      "LangChain",
      "LangGraph",
      "FastAPI",
      "React",
      "RAG",
      "LangSmith",
    ],
    link: "https://ticket-router-pi.vercel.app/",
  },
  {
    number: "02",
    category: "RAG / Research AI",
    title: "EcoResearch AI",
    description:
      "AI-powered sustainability research workspace for multi-document search, synthesis, and citation-grounded report generation.",
    details:
      "Engineered a LangGraph + RAG pipeline using ChromaDB, FastAPI, Pydantic, and NVIDIA NIM for semantic search and cross-document synthesis over research and policy PDFs. Parallel agents generate reports while automated citation verification keeps claims traceable to source evidence.",
    stack: [
      "LangChain",
      "LangGraph",
      "RAG",
      "ChromaDB",
      "FastAPI",
      "Pydantic",
    ],
    link: "https://eco-ai-i3wp.vercel.app/",
  },
  {
    number: "03",
    category: "EdTech / AI",
    title: "AI Teaching Material Generator",
    description:
      "Full-stack educational AI platform that converts textbook chapters, lecture slides, and notes into classroom-ready teaching packages.",
    details:
      "Built a 10-stage LangGraph pipeline with multi-file parsing, parallel period-content generation, automated validation and retry loops, and in-session thread-state checkpointing. The application combines a FastAPI backend with a React interface.",
    stack: [
      "LangGraph",
      "FastAPI",
      "React",
      "Pydantic",
      "Python",
    ],
    link: "https://github.com/ShardaMani/teacher-knowledge-engine",
  },
  {
    number: "04",
    category: "Automation / Backend",
    title: "LinkedIn Stealth Automation API",
    description:
      "RESTful automation API built around Selenium with session persistence and dynamic UI handling.",
    details:
      "Developed a Python automation service with FastAPI and Selenium, focusing on reusable API flows, persistent sessions, and resilient browser interaction logic.",
    stack: ["Python", "FastAPI", "Selenium"],
    link: "https://github.com/sharda1100/linkedin-stealth-automation-api",
  },
  {
    number: "05",
    category: "Full Stack",
    title: "Live Polling Application",
    description:
      "Real-time polling application with live updates and a responsive React interface.",
    details:
      "Implemented real-time communication with Socket.IO, a ReactJS frontend, and an Express.js backend for live poll state updates.",
    stack: ["Express.js", "ReactJS", "Socket.IO"],
    link: "https://live-polling-app-o4i6.vercel.app/",
  },
  {
    number: "06",
    category: "Full Stack",
    title: "My OKR Management System",
    description:
      "Full-stack OKR management application with authentication, role-based access, CRUD workflows, and progress tracking.",
    details:
      "Built dashboards for tracking OKRs, user authentication, role-based access, and database-backed CRUD operations.",
    stack: ["Flask", "HTML", "Bootstrap", "SQLite"],
    link: "https://myokr-goal-management.vercel.app/",
  },
  {
    number: "07",
    category: "Full Stack",
    title: "Library Management System",
    description:
      "Role-based library platform with authentication, book management, dashboards, profile updates, and routing.",
    details:
      "Built librarian and user workflows with Flask, Vue.js, Axios, Bootstrap, and SQLite.",
    stack: ["Flask", "Vue.js", "Axios", "Bootstrap", "SQLite"],
    link: "https://github.com/ShardaMani/Library-Management-System-",
  },
  {
    number: "08",
    category: "Full Stack",
    title: "Influencer Engagement Platform",
    description:
      "Role-based sponsorship and campaign management platform for influencer engagement and tracking.",
    details:
      "Built a portal covering sponsorship coordination, influencer campaigns, engagement workflows, and role-based access.",
    stack: ["Flask", "HTML", "Bootstrap", "SQLite"],
    link: "https://github.com/ShardaMani/Influencer-Engagement-and-Sponsorship-Coordination-Platform",
  },
];

const services = [
  {
    number: "01",
    title: "Domain-specific chatbots",
    description:
      "Conversational AI for knowledge bases, customer support, internal documentation, and domain-specific workflows.",
  },
  {
    number: "02",
    title: "Fully on-premises AI",
    description:
      "Private AI deployments designed to run inside your infrastructure for stronger data control, privacy, and compliance.",
  },
  {
    number: "03",
    title: "ML solutions",
    description:
      "End-to-end machine learning workflows covering training, evaluation, deployment, automation, and monitoring.",
  },
  {
    number: "04",
    title: "AI-powered applications",
    description:
      "Practical AI products using LLM APIs, RAG, semantic search, agents, and intelligent assistants.",
  },
  {
    number: "05",
    title: "Data automation",
    description:
      "Python automations, reporting workflows, dashboards, and data pipelines that reduce repetitive work.",
  },
  {
    number: "06",
    title: "Full-stack development",
    description:
      "Responsive frontends and maintainable backend services for internal tools, data products, and web applications.",
  },
];

const skills = [
  "Python",
  "SQL",
  "JavaScript",
  "FastAPI",
  "Flask",
  "Vue.js",
  "React",
  "LangChain",
  "LangGraph",
  "MCP",
  "RAG",
  "LLMs",
  "Prompt Engineering",
  "AI Agents",
  "Scikit-learn",
  "OCR",
  "Pandas",
  "NumPy",
  "EDA",
  "Feature Engineering",
  "Knowledge Graphs",
  "Ontology Engineering",
  "Semantic Search",
  "R2RML",
  "Protégé",
  "Git",
  "CI/CD",
  "Linux",
  "Pipeline Automation",
];

const certifications = [
  {
    title: "Minor in Economics and Finance",
    href: "https://drive.google.com/file/d/1hcWGxsFybEMjgtxTijAsYHerJs5rpJQv/view?usp=sharing",
  },
  {
    title: "Infosys Springboard Internship Completion Certificates",
    href: "https://drive.google.com/file/d/17h53xGL6kui9Lyibzil4on2fsqtaoxTE/view?usp=sharing",
  },
  {
    title: "Best Software Engineering Project",
    href: "https://drive.google.com/file/d/1ekI6fKmTroydP7ABCKKNpaO-eQSpq_P9/view?usp=sharing",
  },
  {
    title: "Certificate of Excellence for GenAI Project",
    href: "https://drive.google.com/file/d/1xkoQI8OCjv5aV1uy2ZOeU1tlioIEv1L2/view?usp=sharing",
  },
];

const workshops = [
  {
    title: "GenAI Workshop",
    org: "IIT Madras BS Degree",
    date: "14 Jun 2025 – 21 Sep 2025",
    description:
      "Participated in a hands-on workshop on foundational and advanced Generative AI techniques.",
  },
  {
    title: "Agentic AI for Financial Automation",
    org: "Wadhwani School of Data Science and AI",
    date: "Apr 2025",
    description:
      "Attended a hands-on workshop on agentic AI systems to automate financial procedures.",
  },
  {
    title: "Machine Learning Techniques Workshop",
    org: "IIT Madras BS Degree",
    date: "Jul 2024",
    description:
      "Participated in a workshop exploring foundational and advanced ML techniques.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="nav-shell">
        <a className="brand" href="#top">
          Sharda<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="mailto:Sharda7011@gmail.com">
          Let&apos;s talk ↗
        </a>
      </header>

      {/* HERO */}
      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, I&apos;M</p>

          <h1>Sharda</h1>

          <p className="hero-role">
            RAG Engineer <span>·</span> MLOps Engineer <span>·</span>{" "}
            AI-Powered Web Developer
          </p>

          <p className="hero-text">
            I build practical AI systems that connect models, data, retrieval,
            automation, and thoughtful product experiences.
          </p>

          <div className="button-row">
            <a className="button button-dark" href="#contact">
              Contact me
            </a>

            <a className="button button-light" href="#services">
              Explore services ↗
            </a>
          </div>

          <a
            className="scroll-link"
            href="#services"
            aria-label="Scroll to services"
          >
            ↓
          </a>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img
              src="/Sharda.jpeg"
              alt="Portrait of Sharda"
              className="hero-image"
            />
          </div>

          <div className="hero-caption">
            <span>AI / ML</span>
            <span>Data + Systems</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad services-section">
        <div className="section-heading">
          <p className="eyebrow">SERVICES</p>
          <h2>What I can help you build.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section-pad dark-section">
        <div className="section-heading light-heading">
          <p className="eyebrow">EXPERIENCE</p>

          <h2>Building systems that work beyond the demo.</h2>
        </div>

        <div className="experience-grid">
          <article className="experience-item">
            <div>
              <p className="experience-period">SEP 2025 — PRESENT</p>

              <h3>Project Associate</h3>

              <p className="experience-org">
                Computer Center · IIT Madras
              </p>
            </div>

            <div className="experience-content">
              <p>
                Built modules for the institute-wide Asset Management System
                across frontend, backend, and database layers.
              </p>

              <p>
                Created ontology-based knowledge graphs for campus assets and
                built a chatbot combining ontology retrieval with RAG for
                grounded semantic queries.
              </p>

              <p>
                Worked on backend services and schemas, then deployed and
                maintained production applications on IIT Madras
                infrastructure.
              </p>
            </div>
          </article>

          <article className="experience-item">
            <div>
              <p className="experience-period">JAN 2025 — AUG 2025</p>

              <h3>
                Operations Intern — Data Automation &amp; Analytics
              </h3>

              <p className="experience-org">
                CODE · IIT Madras
              </p>
            </div>

            <div className="experience-content">
              <p>
                Automated workflows using Python and Google Apps Script,
                reducing manual effort by 60%.
              </p>

              <p>
                Built dashboards, managed score publishing and reporting for
                250+ students per cycle, and aligned assessment workflows with
                mentors and faculty.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad projects-section">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">PROJECTS</p>

            <h2>Selected things I&apos;ve built.</h2>
          </div>

          <p className="section-note">
            AI systems first, with the full-stack engineering needed to ship
            them.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              <div className="project-main">
                <div>
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project ↗
                </a>
              </div>

              <p className="project-details">
                {project.details}
              </p>

              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION + SKILLS */}
      <section id="about" className="section-pad about-section">
        <div className="section-heading">
          <p className="eyebrow">EDUCATION &amp; SKILLS</p>

          <h2>A strong foundation for thoughtful work.</h2>
        </div>

        <div className="about-grid">
          <div className="education-column">
            <article className="education-card">
              <p className="card-label">2021 — 2025</p>

              <h3>Indian Institute of Technology Madras</h3>

              <p>
                Bachelor of Science (BS), Data Science and Applications
              </p>

              <span>Chennai, India</span>
            </article>

            <article className="education-card">
              <p className="card-label">2021 — 2024</p>

              <h3>University of Delhi</h3>

              <p>
                Bachelor of Arts (BA), Computer Applications and Economics
              </p>

              <span>New Delhi, India</span>
            </article>
          </div>

          <div className="skills-column">
            <p className="skills-intro">
              A cross-functional toolkit spanning machine learning, LLM
              applications, knowledge systems, APIs, automation, and
              deployment.
            </p>

            <div className="skills-cloud">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS + WORKSHOPS */}
      <section className="section-pad learning-section">
        <div className="section-heading">
          <p className="eyebrow">CERTIFICATIONS &amp; WORKSHOPS</p>

          <h2>Always learning, always building.</h2>
        </div>

        <div className="learning-grid">
          <div>
            <p className="subheading">Certifications</p>

            <div className="cert-list">
              {certifications.map((item) => (
                <a
                  href={item.href}
                  key={item.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>✦</span>
                  {item.title} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="subheading">Workshops</p>

            <div className="workshop-list">
              {workshops.map((workshop) => (
                <article
                  key={workshop.title}
                  className="workshop-item"
                >
                  <p className="workshop-date">
                    {workshop.date}
                  </p>

                  <h3>{workshop.title}</h3>

                  <p className="workshop-org">
                    {workshop.org}
                  </p>

                  <p>{workshop.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad contact-section">
        <div>
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>

          <h2>
            Have an idea?
            <br />
            <em>Let&apos;s talk.</em>
          </h2>

          <p className="contact-copy">
            Available for freelance collaborations and full-time
            opportunities.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href="mailto:Sharda7011@gmail.com"
            className="contact-email"
          >
            Sharda7011@gmail.com ↗
          </a>

          <div className="social-row">
            <a
              href="https://linkedin.com/in/sharda-mani"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/ShardaMani"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://github.com/ShardaMani/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio source ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Sharda Mani</span>

        <span>RAG · MLOps · AI Engineering</span>
      </footer>
    </main>
  );
}