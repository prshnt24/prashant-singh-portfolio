import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Cloud, Copy, ExternalLink, Github, Linkedin, Menu, X } from 'lucide-react';
import { education, experience, projects, skillGroups } from './data';
import './styles.css';

const email = 'singhprashant2403@gmail.com';
const publicAsset = (file: string) => `${import.meta.env.BASE_URL}${file}`;
const nav = [
  ['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'], ['Skills', 'skills'], ['Education', 'education'], ['Research', 'research'], ['Contact', 'contact'],
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('top');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id || 'top');
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.45] });
    document.querySelectorAll('section[id], header[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll<HTMLElement>('.section, .impact-band, .contact-section, .experience-card, .project-card, .metric, .education-card, .skill-row');
    targets.forEach((target, index) => {
      target.classList.add('scroll-motion');
      target.style.setProperty('--motion-delay', `${Math.min(index % 5, 4) * 65}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let speed = 0;
    const orbits = document.querySelectorAll<HTMLElement>('.solar-system .orbit');
    const setOrbitSpeed = () => {
      orbits.forEach((orbit) => orbit.getAnimations().forEach((animation) => { animation.playbackRate = 1 + speed * 2.8; }));
    };
    const easeOrbitSpeed = () => {
      speed *= .88;
      setOrbitSpeed();
      if (speed > .015) frame = requestAnimationFrame(easeOrbitSpeed);
      else speed = 0;
    };
    const updateOrbitSpeed = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const now = performance.now();
        const deltaTime = Math.max(now - lastTime, 1);
        const deltaY = Math.abs(window.scrollY - lastY);
        speed = Math.min(deltaY / deltaTime, 3);
        setOrbitSpeed();
        lastY = window.scrollY;
        lastTime = now;
        if (speed > .015) frame = requestAnimationFrame(easeOrbitSpeed);
      });
    };
    window.addEventListener('scroll', updateOrbitSpeed, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateOrbitSpeed);
    };
  }, []);

  function closeMenu() { setMenuOpen(false); }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = `mailto:${email}`; }
  }

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="cosmos-backdrop" aria-hidden="true">
      <div className="cosmos-stars" />
      <div className="solar-system"><div className="orbit orbit-mercury"><span className="planet planet-mercury" /></div><div className="orbit orbit-venus"><span className="planet planet-venus" /></div><div className="orbit orbit-earth"><span className="planet planet-earth"><i /></span></div><div className="orbit orbit-mars"><span className="planet planet-mars" /></div><div className="orbit orbit-jupiter"><span className="planet planet-jupiter" /></div><div className="sun-core" /></div>
      <div className="shooting-star-field"><span /><span /><span /><span /><span /></div>
    </div>
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-inner wrap">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Prashant Singh, home"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRASHANT SINGH</span></a>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={closeMenu}>{label}</a>)}
          <a className="nav-resume mobile-resume" href={publicAsset('resume.pdf')} download>Resume <ArrowDown size={13} /></a>
        </div>
        <div className="nav-actions">
          <a className="nav-social" href="https://www.linkedin.com/in/prashant-singh-04a0471b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} /><span>LinkedIn</span></a>
          <a className="nav-resume" href={publicAsset('resume.pdf')} download>Resume <ArrowDown size={13} /></a>
          <button className="icon-button menu-button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </nav>

    <main id="main">
      <header className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> DEVOPS <i /> CLOUD <i /> INFRASTRUCTURE</div>
          <h1>Building cloud<br />systems that <span className="accent-text">hold up.</span></h1>
          <p className="hero-intro">I’m Prashant Singh — a DevOps Consultant and postgraduate student in Auckland, New Zealand. I automate infrastructure, improve delivery workflows, and help cloud systems run reliably.</p>
          <div className="hero-buttons"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a><a className="button button-quiet" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={15} /></a></div>
          <div className="hero-meta"><span><span className="meta-dot" /> Available for graduate opportunities</span><span className="meta-separator">·</span><span>Auckland, New Zealand</span></div>
        </div>

        <div className="hero-visual" aria-label="Infrastructure workflow: code to production">
          <div className="visual-top"><span>DEPLOYMENT FLOW</span><span className="visual-live"><span className="live-dot" /> OPERATIONAL</span></div>
          <div className="flow">
            <div className="flow-item"><span className="flow-icon"><Github size={17} /></span><span className="flow-text"><strong>Source</strong><small>Git · Version control</small></span><span className="flow-check"><Check size={13} /></span></div>
            <div className="flow-line"><span /></div>
            <div className="flow-item"><span className="flow-icon flow-icon-accent"><span className="ci-mark">CI</span></span><span className="flow-text"><strong>Build &amp; deliver</strong><small>GitHub Actions · Pipelines</small></span><span className="flow-check"><Check size={13} /></span></div>
            <div className="flow-line"><span /></div>
            <div className="flow-item"><span className="flow-icon flow-icon-accent"><span className="tf-mark">TF</span></span><span className="flow-text"><strong>Provision</strong><small>Terraform · Infrastructure as code</small></span><span className="flow-check"><Check size={13} /></span></div>
            <div className="flow-line"><span /></div>
            <div className="flow-item"><span className="flow-icon cloud-icon"><Cloud size={17} /></span><span className="flow-text"><strong>Run in the cloud</strong><small>AWS · Monitor · Iterate</small></span><span className="flow-check"><Check size={13} /></span></div>
          </div>
          <div className="visual-bottom"><span><span className="live-dot" /> DELIVERY PIPELINE</span><span>REPEATABLE BY DESIGN <ArrowUpRight size={13} /></span></div>
          <span className="visual-index">FIG. 01 &nbsp;·&nbsp; ENGINEERING WORKFLOW</span>
        </div>
        <a className="scroll-cue" href="#impact"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </header>

      <section id="impact" className="impact-band" aria-label="Selected impact"><div className="wrap impact-grid">
        <div className="impact-heading"><span className="section-index">01 / IMPACT</span><h2>Measured in<br />outcomes.</h2></div>
        <div className="metric"><strong>25<span>+</span></strong><span>cloud servers managed<br />with automation</span><small>PROXMED</small></div>
        <div className="metric"><strong>50<span>%</span></strong><span>better deployment<br />efficiency</span><small>CI/CD OPTIMISATION</small></div>
        <div className="metric"><strong>20<span>%</span></strong><span>infrastructure cost<br />reduction</span><small>PERFORMANCE WORK</small></div>
        <div className="metric"><strong className="metric-money">~$400</strong><span>saved monthly on<br />non-production cloud</span><small>US DOLLARS / MONTH</small></div>
      </div></section>

      <section id="about" className="section wrap"><SectionHeading number="02" kicker="A LITTLE CONTEXT" title="Infrastructure, with intent." />
        <div className="about-grid"><div className="about-story"><p className="lead">I like the engineering behind the scenes: the code that provisions an environment, the pipeline that makes a release repeatable, and the monitoring that tells you when something needs attention.</p><p>My experience spans hands-on DevOps roles in Melbourne and Auckland, working with AWS, Terraform, containers, scripting, and CI/CD. I’m now completing a Master of Computer and Information Sciences at Auckland University of Technology, while continuing as a part-time DevOps Consultant.</p><p>I bring a practical mindset to solving infrastructure problems: understand the system, automate the repeatable work, and keep reliability in view.</p><aside className="facts-card"><div className="facts-title"><span>PROFILE / 001</span><span className="live-dot" /></div><Fact label="LOCATION" value="Auckland, New Zealand" /><Fact label="CURRENT ROLE" value="DevOps Consultant · Part-time" /><Fact label="STUDYING" value="MCIS · Auckland University of Technology" /><Fact label="FOCUS" value="AWS · Terraform · CI/CD" /><Fact label="CAREER DIRECTION" value="Graduate cloud engineering" last /></aside></div><figure className="about-portrait"><img src={publicAsset('prashant-cutout-v2.webp')} alt="Portrait of Prashant Singh with the background removed" /><figcaption><span>PRASHANT SINGH</span><span>AUCKLAND · NEW ZEALAND</span></figcaption></figure></div>
      </section>

      <section id="experience" className="section section-tinted"><div className="wrap"><SectionHeading number="03" kicker="WHERE I’VE WORKED" title="Experience in the systems." description="Hands-on engineering across cloud infrastructure, deployment automation, and operational support." />
        <div className="experience-list">{experience.map((item, i) => <article className="experience-card" key={item.company}><div className="exp-marker"><span>0{i + 1}</span><i /></div><div className="exp-main"><div className="exp-head"><div><h3>{item.role}</h3><div className="exp-company">{item.company}<span> / </span>{item.kind}</div></div><div className="exp-date">{item.period}<small>{item.location}</small></div></div><p className="exp-intro">{item.intro}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="tag-list">{item.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div></div></article>)}</div>
      </div></section>

      <section id="projects" className="section wrap"><SectionHeading number="04" kicker="SELECTED ENGINEERING" title="Work that does the work." description="Automation, infrastructure, and the engineering behind reliable delivery." />
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-arrow"><ArrowUpRight size={16} /></span></div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-result"><span>OUTCOME</span><strong>{project.result}</strong></div><div className="tag-list">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></article>)}</div>
      </section>

      <section id="skills" className="section skills-section"><div className="wrap"><SectionHeading number="05" kicker="TOOLS OF THE TRADE" title="A practical toolkit." description="Technologies and practices used in my work and projects." />
        <div className="skills-layout"><div className="skills-lead"><div className="skills-symbol"><Cloud size={27} strokeWidth={1.4} /></div><h3>Cloud to code.<br /><span>Code to production.</span></h3><p>Building blocks for provisioning, delivery, scripting, and day-to-day operations.</p></div><div className="skill-groups">{skillGroups.map((group, i) => <div className="skill-row" key={group.label}><span className="skill-number">0{i + 1}</span><div className="skill-content"><h4>{group.label}</h4><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></div>)}</div></div>
      </div></section>

      <section id="research" className="section research-section"><div className="wrap research-grid"><div><SectionHeading number="06" kicker="CURRENT RESEARCH" title="Security, expressed as code." /><p className="research-description">My ongoing dissertation asks how effectively large language models can detect security misconfigurations in Terraform infrastructure-as-code. It connects my cloud engineering practice with a careful look at how emerging tools can support safer infrastructure.</p><div className="tag-list"><span className="tag">Terraform IaC</span><span className="tag">Security misconfiguration</span><span className="tag">LLM evaluation</span></div></div><div className="research-art" aria-hidden="true"><div className="research-orbit orbit-one"/><div className="research-orbit orbit-two"/><div className="research-core"><span>IaC</span><small>SECURITY</small></div><span className="orbit-path path-a"><span className="orbit-node node-a"><span className="orbit-label">TF</span></span></span><span className="orbit-path path-b"><span className="orbit-node node-b"><span className="orbit-label">LLM</span></span></span><span className="orbit-path path-c"><span className="orbit-node node-c"><span className="orbit-label">✓</span></span></span><span className="research-caption">DISSERTATION / IN PROGRESS</span></div></div></section>

      <section id="education" className="section wrap"><SectionHeading number="07" kicker="EDUCATION" title="Learning, in practice." />
        <div className="education-list">{education.map((item) => <article className="education-card" key={item.institution}><div className="edu-year">{item.year}</div><div className="edu-main"><h3>{item.qualification}</h3><p>{item.institution}</p><span>{item.detail}</span></div>{item.current && <span className="current-badge"><span className="live-dot" /> IN PROGRESS</span>}</article>)}</div>
      </section>

      <section id="contact" className="contact-section"><div className="wrap contact-wrap"><div className="section-index">08 / NEXT STEPS</div><div className="contact-grid"><div><div className="eyebrow"><span className="live-dot" /> OPEN TO GRADUATE OPPORTUNITIES</div><h2>Good systems start<br />with a <span className="accent-text">conversation.</span></h2><p>Looking to grow in cloud and DevOps engineering. Based in Auckland and open to connecting with teams building thoughtful, reliable infrastructure.</p><div className="contact-buttons"><a className="button button-primary" href={`mailto:${email}`}>Email me <ArrowUpRight size={16} /></a><button className="button button-outline" onClick={copyEmail}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Copied to clipboard' : 'Copy email'}</button></div><a className="email-address" href={`mailto:${email}`}>{email}</a><div className="contact-socials"><a href="https://github.com/prshnt24" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/prashant-singh-04a0471b9/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a></div></div><div className="contact-side"><div className="contact-side-line"/><span className="section-index">BASED IN</span><strong>Auckland</strong><span>New Zealand <span className="meta-separator">·</span> NZST</span><a href="https://maps.google.com/?q=Auckland+New+Zealand" target="_blank" rel="noreferrer">47° 28′ S &nbsp; 167° 20′ E <ExternalLink size={12} /></a></div></div></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#top"><span className="brand-mark">P<span>.</span></span><span className="brand-name">PRASHANT SINGH</span></a><span className="footer-note">Built with intention. Auckland, New Zealand.</span><div className="footer-socials"><a className="footer-social" href="https://github.com/prshnt24" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a><a className="footer-social" href="https://www.linkedin.com/in/prashant-singh-04a0471b9/" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a></div><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a><span className="footer-copy">© {new Date().getFullYear()} PRASHANT SINGH</span></div></footer>
  </>;
}

function SectionHeading({ number, kicker, title, description }: { number: string; kicker: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="section-index">{number} / {kicker}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
function Fact({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return <div className={`fact${last ? ' fact-last' : ''}`}><span>{label}</span><strong>{value}</strong></div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
