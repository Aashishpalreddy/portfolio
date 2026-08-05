import React, { useEffect, useRef } from 'react';
import './Home.css';

// Ani-Scroll Hook: elements scale up from the "tunnel depth" as you scroll to them
function useAniScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // Optional: Re-hide when out of view for continuous repeat animations
            // entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.ani-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

function Home() {
  const pageRef = useAniScroll();

  return (
    <div className="page-wrapper" ref={pageRef}>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__content container">
          <p className="hero__eyebrow ani-scroll">Portfolio</p>
          <h1 className="hero__title ani-scroll ani-delay-1">
            Aashishpal Reddy Kandala
          </h1>
          <p className="hero__subtitle ani-scroll ani-delay-2">
            Generative AI Engineer · ML Engineer · Software Engineer
          </p>
          <p className="hero__description ani-scroll ani-delay-3">
            2+ years building enterprise AI applications — from RAG systems
            and agentic workflows to production-grade LLM infrastructure.
          </p>
          <div className="hero__status ani-scroll ani-delay-3">
            <span className="hero__status-dot" />
            Open to full-time opportunities
          </div>
          <div className="hero__actions ani-scroll ani-delay-4">
            <a href="#about" className="btn btn--primary">
              Learn More
            </a>
            <a href="https://github.com/Aashishpalreddy" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aashishpal-reddy-kandala-45118b28b" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about__content">
            <span className="section-label ani-scroll">About</span>
            <h2 className="section-title ani-scroll ani-delay-1">
              Building intelligent systems,<br />one model at a time.
            </h2>
            <div className="about__body ani-scroll ani-delay-2">
              <p>
                I'm a Generative AI Engineer currently building enterprise AI applications
                at <strong>Cubefore LLC</strong> in Frisco, TX. Over 2+ years, I've designed,
                developed, and deployed production systems using <strong>Python</strong>,
                <strong> LangChain</strong>, <strong>OpenAI APIs</strong>, and <strong> FastAPI</strong> —
                turning large language models into reliable, enterprise-grade tools.
              </p>
              <p>
                My work centers on <strong>Retrieval-Augmented Generation</strong>, agentic AI
                workflows, and intelligent decision engines, backed by scalable data pipelines
                and cloud-native deployment on <strong>AWS</strong> and <strong>Azure</strong>. I
                completed my B.S. in Computer Science at the{' '}
                <strong>University of North Texas</strong> in an accelerated 3-year timeline,
                graduating <strong>Cum Laude</strong> with a <strong>3.54 GPA</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats section">
        <div className="container">
          <span className="section-label ani-scroll">Metrics</span>
          <h2 className="section-title ani-scroll ani-delay-1">Academics & Milestones</h2>
          <div className="stats__grid">
            <div className="stat-card glass-panel ani-scroll ani-delay-1">
              <span className="stat-card__number">2+ Yrs</span>
              <span className="stat-card__label">AI Engineering Experience</span>
            </div>
            <div className="stat-card glass-panel ani-scroll ani-delay-1">
              <span className="stat-card__number">100K+</span>
              <span className="stat-card__label">Records Processed in Pipelines</span>
            </div>
            <div className="stat-card glass-panel ani-scroll ani-delay-2">
              <span className="stat-card__number">30%</span>
              <span className="stat-card__label">Efficiency Improvement Delivered</span>
            </div>
            <div className="stat-card glass-panel ani-scroll ani-delay-3">
              <span className="stat-card__number">3.54</span>
              <span className="stat-card__label">GPA — Cum Laude</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERSONAL DETAILS ===== */}
      <section className="details section" id="details">
        <div className="container">
          <span className="section-label ani-scroll">Details</span>
          <h2 className="section-title ani-scroll ani-delay-1">Personal Information</h2>
          <div className="details__grid">
            <div className="detail-card glass-panel ani-scroll ani-delay-1">
              <span className="detail-card__label">Name</span>
              <span className="detail-card__value">Aashishpal Reddy Kandala</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-2">
              <span className="detail-card__label">Phone</span>
              <span className="detail-card__value">+1 (469) 252-3355</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-3">
              <span className="detail-card__label">Email</span>
              <span className="detail-card__value">aashishpalsai1111@gmail.com</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-4">
              <span className="detail-card__label">LinkedIn</span>
              <span className="detail-card__value">aashishpal-reddy-kandala</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-5">
              <span className="detail-card__label">Current Role</span>
              <span className="detail-card__value">AI & Data Analyst — Cubefore LLC</span>
            </div>
            <div className="detail-card glass-panel ani-scroll ani-delay-6">
              <span className="detail-card__label">Location</span>
              <span className="detail-card__value">Frisco, TX 75068</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="skills section" id="skills">
        <div className="container">
          <span className="section-label ani-scroll">Skills</span>
          <h2 className="section-title ani-scroll ani-delay-1">Expertise</h2>
          <div className="skills__grid">
            <div className="skill-category glass-panel ani-scroll ani-delay-1">
              <h3 className="skill-category__title">Programming Languages</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-2">
              <h3 className="skill-category__title">Generative AI & LLMs</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">OpenAI APIs</span>
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">RAG</span>
                <span className="skill-tag">Agentic AI Workflows</span>
                <span className="skill-tag">Semantic Search</span>
                <span className="skill-tag">Vector Embeddings</span>
                <span className="skill-tag">FAISS</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-3">
              <h3 className="skill-category__title">Machine Learning</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Scikit-learn</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Feature Engineering</span>
                <span className="skill-tag">Predictive Modeling</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-4">
              <h3 className="skill-category__title">Software Engineering</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-5">
              <h3 className="skill-category__title">Data Engineering</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">ETL Pipelines</span>
                <span className="skill-tag">Data Processing</span>
                <span className="skill-tag">Data Validation</span>
                <span className="skill-tag">Workflow Automation</span>
              </div>
            </div>
            <div className="skill-category glass-panel ani-scroll ani-delay-6">
              <h3 className="skill-category__title">Cloud & DevOps</h3>
              <div className="skill-category__tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">GitHub Actions CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS OF INTEREST ===== */}
      <section className="research section" id="research">
        <div className="container">
          <span className="section-label ani-scroll">Interests</span>
          <h2 className="section-title ani-scroll ani-delay-1">Areas of Interest</h2>
          <div className="research__grid">
            <div className="research-card glass-panel ani-scroll ani-delay-1">
              <h3 className="research-card__title">Agentic AI Systems</h3>
              <p className="research-card__desc">
                Building autonomous, multi-agent architectures that plan, retrieve,
                and act using LLMs as reasoning engines.
              </p>
            </div>
            <div className="research-card glass-panel ani-scroll ani-delay-2">
              <h3 className="research-card__title">Retrieval-Augmented Generation</h3>
              <p className="research-card__desc">
                Exploring vector search, embeddings, and grounding techniques
                for more accurate, hallucination-resistant LLM systems.
              </p>
            </div>
            <div className="research-card glass-panel ani-scroll ani-delay-3">
              <h3 className="research-card__title">Intelligent Decision Systems</h3>
              <p className="research-card__desc">
                Combining business rules with AI-generated insights to build
                recommendation and decision-support systems for the enterprise.
              </p>
            </div>
            <div className="research-card glass-panel ani-scroll ani-delay-4">
              <h3 className="research-card__title">Cloud-Native AI Infrastructure</h3>
              <p className="research-card__desc">
                Deploying and scaling AI applications with Docker, AWS,
                and PostgreSQL for reliable, production-ready systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="experience section" id="experience">
        <div className="container">
          <span className="section-label ani-scroll">Experience</span>
          <h2 className="section-title ani-scroll ani-delay-1">Background</h2>
          <div className="experience__list">
            <div className="exp-card glass-panel ani-scroll ani-delay-1">
              <div className="exp-card__meta">
                <span className="exp-card__date">May 2025 — Present</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">AI & Data Analyst</h3>
                <p className="exp-card__org">Cubefore LLC, Frisco, TX</p>
                <ul className="exp-card__list">
                  <li>Designed and deployed enterprise AI applications using Python, LangChain, OpenAI APIs, FastAPI, TensorFlow, and PyTorch.</li>
                  <li>Built RAG systems with semantic search, vector embeddings, and FAISS to power intelligent enterprise decision-making.</li>
                  <li>Developed agentic AI workflows automating knowledge retrieval, document understanding, and business processes.</li>
                  <li>Built Python data pipelines processing 100K+ structured and unstructured records for AI inference and analytics.</li>
                  <li>Deployed production AI systems on AWS using Docker, Kubernetes, and GitHub Actions CI/CD.</li>
                  <li>Optimized SQL queries, APIs, and AI workflows, improving processing efficiency by 30%.</li>
                </ul>
              </div>
            </div>

            <div className="exp-card glass-panel ani-scroll ani-delay-2">
              <div className="exp-card__meta">
                <span className="exp-card__date">Jan 2024 — Apr 2025</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">AI / ML Intern</h3>
                <p className="exp-card__org">Graks Info, Remote</p>
                <ul className="exp-card__list">
                  <li>Built AI-powered enterprise applications with Python, LangChain, OpenAI APIs, TensorFlow, and PyTorch.</li>
                  <li>Developed RAG systems integrating semantic search, vector databases, and Hugging Face Transformers.</li>
                  <li>Designed agentic AI workflows for intelligent document search and automated reasoning.</li>
                  <li>Built Python data pipelines processing 50K+ records supporting model training and inference.</li>
                  <li>Exposed enterprise AI services via REST APIs integrating LLMs into production software.</li>
                </ul>
              </div>
            </div>

            <div className="exp-card glass-panel ani-scroll ani-delay-3">
              <div className="exp-card__meta">
                <span className="exp-card__date">Aug 2023 — May 2026</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">B.S. Computer Science — Cum Laude</h3>
                <p className="exp-card__org">University of North Texas, Denton, TX</p>
                <p className="exp-card__desc">
                  Completed the degree in an accelerated 3-year timeline, graduating <strong>Cum Laude</strong> with
                  a <strong>3.54 GPA</strong>. Relevant coursework: Machine Learning, Artificial Intelligence, NLP,
                  Deep Learning Fundamentals, Data Mining, Statistical Methods for
                  Data Science, Data Structures & Algorithms, Software Engineering.
                </p>
              </div>
            </div>

            <div className="exp-card glass-panel ani-scroll ani-delay-4">
              <div className="exp-card__meta">
                <span className="exp-card__date">Certifications</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">Certifications & Training</h3>
                <ul className="exp-card__list">
                  <li>AWS Cloud Fundamentals — Amazon Web Services</li>
                  <li>Azure AI Fundamentals (AI-900) — Microsoft</li>
                  <li>TensorFlow Developer Certificate Preparation — Google</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPEN TO WORK CTA ===== */}
      <section className="cta section">
        <div className="container">
          <div className="cta-card glass-panel ani-scroll">
            <h2 className="cta-card__title ani-scroll">Open to full-time opportunities</h2>
            <p className="cta-card__desc ani-scroll ani-delay-1">
              I'm actively looking for full-time Generative AI, Applied AI, and LLM
              Engineer roles. If you're hiring or know a team that is, I'd love to talk.
            </p>
            <div className="cta-card__actions ani-scroll ani-delay-2">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aashishpalsai1111@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Get in Touch</a>
              <a href="https://www.linkedin.com/in/aashishpal-reddy-kandala-45118b28b" target="_blank" rel="noopener noreferrer"
                className="btn btn--glass">
                <span>Connect on LinkedIn</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
