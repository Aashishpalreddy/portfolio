import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';

function useAniScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const els = ref.current?.querySelectorAll('.ani-scroll');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const projects = [
  {
    id: 1,
    title: 'CareerPilot-AI',
    period: '2025 — Present',
    org: 'Personal Project',
    description:
      'An AI-powered career platform that automates job discovery, resume optimization, recruiter outreach, interview preparation, and career management using a multi-agent AI architecture built with Python, LangChain, and FastAPI.',
    tags: ['Python', 'Multi-Agent AI', 'LangChain', 'FastAPI'],
    link: 'https://career-pilot-ai-delta-three.vercel.app',
    linkText: 'Visit Live Demo',
  },
  {
    id: 2,
    title: 'HabitQuest',
    period: 'Spring 2025',
    org: 'Personal Project',
    description:
      'A gamified habit-tracking application that helps users build positive habits through game mechanics. Users create tasks, earn XP, level up, maintain streaks, and compete on a leaderboard, all wrapped in a space-themed UI.',
    tags: ['TypeScript', 'Full-Stack', 'Gamification'],
    link: 'https://github.com/Aashishpalreddy/golden-warriors',
    linkText: 'View on GitHub',
  },
  {
    id: 3,
    title: 'JWKS Server',
    period: 'Spring 2025',
    org: 'CSCE 3550 — Computer Security, University of North Texas',
    description:
      'A secure JSON Web Key Set server built with FastAPI. Implements AES-encrypted private key storage, Argon2-hashed passwords, RS256-signed JWT issuance, request logging, rate limiting, and expired-key handling.',
    tags: ['Python', 'FastAPI', 'Security', 'Cryptography'],
    link: 'https://github.com/Aashishpalreddy/Project-3',
    linkText: 'View on GitHub',
  },
  {
    id: 4,
    title: 'Food Log',
    period: 'Fall 2025',
    org: 'Capstone I Team Project — Coding Warriors',
    description:
      'A collaborative food-logging web application built with a five-person team as part of Capstone coursework, covering meal tracking, team-based feature planning, and full-stack collaboration.',
    tags: ['Web App', 'Team Project', 'Capstone'],
    link: 'https://github.com/Aashishpalreddy/Project-Food-Log',
    linkText: 'View on GitHub',
  },
];

function Projects() {
  const pageRef = useAniScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [closing, setClosing] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  // Clicking the folder always toggles open/close
  const handleFolderClick = () => {
    if (!selected) setIsOpen(prev => !prev);
  };

  // Clicking a file card:
  //  - If folder is CLOSED → do nothing, let click bubble to toggle folder
  //  - If folder is OPEN → open detail, stop propagation
  const handleFileClick = (e, project) => {
    if (isOpen) {
      e.stopPropagation();
      setSelected(project);
    }
    // When closed: don't stopPropagation → click reaches .fdr → toggleFolder fires
  };

  const closeDetail = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setSelected(null);
      setClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') {
        if (selected) closeDetail();
        else if (isOpen) setIsOpen(false);
      }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [selected, isOpen, closeDetail]);

  return (
    <div className="page-wrapper" ref={pageRef}>
      {/* Hero */}
      <section className="proj-hero">
        <div className="container">
          <span className="section-label ani-scroll">Portfolio</span>
          <h1 className="proj-hero__title ani-scroll ani-delay-1">Selected Projects</h1>
          <p className="proj-hero__sub ani-scroll ani-delay-2">
            Hover to peek, click to explore.
          </p>
        </div>
      </section>

      {/* Folder */}
      <section className="folder-area">
        <div className={`fdr ${isOpen ? 'fdr--open' : ''}`} onClick={handleFolderClick}>

          {/* Back wall */}
          <div className="fdr__back">
            <div className="fdr__back-shine" />
          </div>

          {/* Files */}
          <div className="fdr__files">
            {projects.map((p, i) => {
              const n = projects.length;
              const mid = (n - 1) / 2;
              const rot = (i - mid) * 18;
              const tx = (i - mid) * 170;
              const ty = 180 + Math.abs(i - mid) * 26;
              return (
                <div
                  key={p.id}
                  className="fcard"
                  style={{
                    '--rot': `${rot}deg`,
                    '--tx': `${tx}px`,
                    '--ty': `-${ty}px`,
                    '--delay': `${i * 40}ms`,
                    zIndex: 10 + (n - i),
                  }}
                  onClick={(e) => handleFileClick(e, p)}
                >
                  <div className="fcard__notch" />
                  <div className="fcard__body">
                    <span className="fcard__num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="fcard__title">{p.title}</h3>
                    <p className="fcard__org">{p.org}</p>
                    <div className="fcard__tags">
                      {p.tags.slice(0, 2).map(t => (
                        <span key={t} className="fcard__tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Front cover */}
          <div className="fdr__front">
            <div className="fdr__front-gloss" />
          </div>
        </div>

        <div className={`fdr__shadow ${isOpen ? 'fdr__shadow--open' : ''}`} />
      </section>

      {/* Detail Overlay via Portal */}
      {selected && createPortal(
        <div className={`overlay ${closing ? 'overlay--out' : ''}`} onClick={closeDetail}>
          <div className={`overlay__card ${closing ? 'overlay__card--out' : ''}`} onClick={e => e.stopPropagation()}>
            <button className="overlay__x" onClick={closeDetail} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
              </svg>
            </button>
            <span className="overlay__period">{selected.period}</span>
            <h2 className="overlay__title">{selected.title}</h2>
            <p className="overlay__org">{selected.org}</p>
            <div className="overlay__divider" />
            <p className="overlay__desc">{selected.description}</p>
            <div className="overlay__tags">
              {selected.tags.map(t => <span key={t} className="overlay__tag">{t}</span>)}
            </div>
            {selected.link && (
              <a href={selected.link} target="_blank" rel="noopener noreferrer"
                className="btn btn--primary overlay__cta">
                {selected.linkText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </a>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* CTA */}
      <section className="cta section">
        <div className="container">
          <div className="cta-card glass-panel ani-scroll">
            <h2 className="cta-card__title ani-scroll">Want to collaborate?</h2>
            <p className="cta-card__desc ani-scroll ani-delay-1">
              I am always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="cta-card__actions ani-scroll ani-delay-2">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aashishpalsai1111@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Get in Touch</a>
              <a href="https://github.com/Aashishpalreddy" target="_blank" rel="noopener noreferrer"
                className="btn btn--glass">
                <span>All Repositories</span>
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

export default Projects;
