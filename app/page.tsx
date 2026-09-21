import Link from "next/link";

const ecosystem = [
  ["01", "Learn", "School subjects, technical skills, projects, and resources built around how students actually learn.", "book"],
  ["02", "Compete", "Discover competitions, challenges, olympiads, and ways to prove what you can do.", "trophy"],
  ["03", "Innovate", "Turn ideas into projects and give student creativity a place to become visible.", "spark"],
  ["04", "Connect", "Meet peers, mentors, communities, and people who can help you move forward.", "users"],
  ["05", "Opportunities", "Surface scholarships, pathways, internships, and future-facing opportunities.", "arrow"],
  ["06", "Direction", "Build a clearer path from where you are now to where you want to go.", "compass"],
];

const principles = [
  "No endless-feed design",
  "No public popularity race",
  "No algorithm deciding your attention",
  "Creation before consumption",
];

function Icon({ name }: { name: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "book") return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 5.5V19a2.5 2.5 0 0 1 2.5-2.5H20"/></svg>;
  if (name === "trophy") return <svg {...common}><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6"/></svg>;
  if (name === "spark") return <svg {...common}><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Z"/><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/></svg>;
  if (name === "users") return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14.5a5 5 0 0 1 4 5.5"/></svg>;
  if (name === "compass") return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>;
  return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <Link href="/" className="brand">VEXORA<span>.</span></Link>
        <div className="nav-links">
          <Link href="#vision">Vision</Link>
          <Link href="#ecosystem">Ecosystem</Link>
          <Link href="/case-study">Case study</Link>
        </div>
        <div className="nav-actions">
          <a href="https://chat.whatsapp.com/DdZJX2lpAsiDyuJdlAQ1jZ" target="_blank" rel="noopener noreferrer" className="button button-dark community-button">Join the community <span>↗</span></a>
          <span className="status-pill"><i /> Prototype ready</span>
        </div>
      </nav>

      <section className="hero section-pad">
        <div className="hero-grid" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="hero-copy reveal">
          <p className="eyebrow">A project in progress</p>
          <h1>Student success,<br /><em>reimagined.</em></h1>
          <p className="hero-lead">VEXORA is a National Student Success Ecosystem — built to help students learn, innovate, lead, and shape the future.</p>
          <div className="hero-actions">
            <Link href="#vision" className="button button-dark">Explore the project <span>↓</span></Link>
            <Link href="/case-study" className="button button-light">Read the case study <span>↗</span></Link>
            <a href="https://chat.whatsapp.com/DdZJX2lpAsiDyuJdlAQ1jZ" target="_blank" rel="noopener noreferrer" className="button button-light">Join the community <span>↗</span></a>
          </div>
        </div>
        <div className="hero-meta"><span>01 / 06</span><span>Currently in development</span></div>
      </section>

      <section id="vision" className="dark-section section-pad">
        <div className="section-label">The idea</div>
        <div className="vision-grid">
          <div><p className="eyebrow light">Not another learning app.</p><h2>Students need an <span>ecosystem.</span></h2></div>
          <div className="body-copy light-copy"><p>Students already have thousands of places to consume information. What is missing is a place that connects learning with action.</p><p>VEXORA is being designed around what happens <strong>after</strong> you learn: building something, entering a competition, finding an opportunity, meeting the right people, and discovering what comes next.</p></div>
        </div>
        <div className="case-teaser"><div className="case-number">01</div><div className="case-words"><span>One minute.</span><span>Then another.</span><span>An hour disappears.</span></div><div className="case-question">What if a student platform optimized for <strong>progress</strong> instead of time spent?</div></div>
      </section>

      <section id="ecosystem" className="section-pad ecosystem-section">
        <div className="section-heading"><div><p className="eyebrow">The ecosystem</p><h2>One place.<br /><span>Many directions.</span></h2></div><p>VEXORA connects the pieces of student growth that are usually scattered across different platforms.</p></div>
        <div className="ecosystem-grid">
          {ecosystem.map(([number, title, text, icon]) => (
            <article className="eco-card" key={title}>
              <div className="eco-top"><span className="card-number">{number}</span><span className="eco-icon"><Icon name={icon} /></span></div>
              <h3>{title}</h3><p>{text}</p><span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section section-pad network-section">
        <div className="section-label">A different network</div>
        <div className="network-grid"><h2>The internet should give students their <span>time back.</span></h2><div><p className="large-copy">VEXORA is not designed around the question “How long can we keep you here?”</p><p className="light-copy">It starts with a different question: <strong>“What can you accomplish while you’re here?”</strong></p></div></div>
        <div className="principles">{principles.map((principle) => <div key={principle}><span>✓</span>{principle}</div>)}</div>
      </section>

      <section className="coming section-pad">
        <p className="eyebrow">The beginning</p><h2>Coming <em>soon.</em></h2><p className="coming-copy">This is not a finished product pretending to be one. It is a public preview of an idea currently being built.</p>
        <div className="roadmap"><div><span>01</span><strong>Core platform</strong><p>Foundation, identity, profiles, and the architecture for the ecosystem.</p></div><div><span>02</span><strong>Learning + projects</strong><p>Learn by doing, build real things, document progress, and show what you can create.</p></div><div><span>03</span><strong>National ecosystem</strong><p>Opportunities, communities, competitions, and pathways connecting student potential.</p></div></div>
        <div className="final-line"><span>Learn.</span><span>Build.</span><span>Lead.</span><span>Shape the future.</span></div>
      </section>

      <footer className="footer"><span>VEXORA © 2026</span><span>National Student Success Ecosystem</span><Link href="/case-study">Case study ↗</Link>
        <Link href="/beat">BEAT ↗</Link></footer>
    </main>
  );
}
