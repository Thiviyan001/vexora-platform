import Link from "next/link";

const chapters = [
  ["01","The Crisis Is Real — And It's Engineered","The deck frames YouTube, Instagram and TikTok as attention-optimized systems and connects that design to student focus and wellbeing."],
  ["02","The Evidence Is Overwhelming","The presentation groups its evidence around youth mental health, political communication, and government investigations or restrictions."],
  ["03","You Are Being Watched","The deck introduces PRISM, XKEYSCORE and related surveillance programs as part of its argument for privacy-first student infrastructure."],
  ["04","Evidences of the Mass Surveillance Programs","A visual evidence section in the deck is used to move from the surveillance claim to documented-program material."],
  ["05","Even Politicians Can't Resist the Manipulation","The presentation discusses political communication around TikTok and congressional scrutiny of social-media harms."],
  ["06","Clearview AI — Facial Recognition Database","The deck uses Clearview AI as an example of how publicly shared images can enter large-scale facial-recognition databases."],
  ["07","TikTok Algorithm Leak (2024)","The presentation describes internal-algorithm reporting and uses it to illustrate how recommendation systems can optimize for engagement."],
  ["08","AI Slop (2026)","The deck highlights the rise of low-quality AI-generated video and its relationship to view-driven content production."],
  ["09","Deepfakes (2026)","The presentation asks how students can distinguish authentic photos, videos, voices and headlines in an AI-heavy information environment."],
  ["10","Your Brain Has Been Rewired","The deck argues that infinite-scroll and variable-reward systems can affect attention and learning, and cites an APA advisory."],
  ["11","Why Existing Platforms Will Never Fix This","The presentation argues that products built around advertising, data and attention have incentives that differ from a student-first ecosystem."],
  ["12","Introducing VEXORA","VEXORA is presented as a student platform built around distraction-free use, privacy-first principles and a Gen-Z/Gen-Alpha-oriented experience."],
  ["13","How VEXORA Changes Everything","The core flow is Discover → Focus → Create → Lead: a structured path from curiosity to creation instead of an algorithmic rabbit hole."],
  ["14","The Question Isn't Whether to Act — It's Whether You Will","The closing argument addresses educators, parents and supporters and asks them to consider student-focused infrastructure."],
  ["15","Join the Community","The final slide provides the project contact details, WhatsApp community invitation and the VEXORA project URL."],
] as const;

const details = [
  "YouTube, Instagram and TikTok are described in the deck as systems designed to maximize time-on-screen and engagement. The project uses this as its opening problem statement.",
  "The deck lists three evidence areas: mental-health concerns, political manipulation, and government investigations or restrictions. It attributes some material to Inc.com, NPR, LPM.org, Pew Research and Time.",
  "PRISM and XKEYSCORE are used in the presentation's privacy argument. The deck's stated concern is that student data and communications can become accessible to powerful institutions.",
  "This section is intentionally evidence-led in the presentation: it is the visual bridge between the surveillance argument and the proposed alternative.",
  "The presentation names Donald Trump, Kamala Harris and congressional hearings as examples in its political-manipulation section. These are presented as part of the deck's argument, not as a ranking of political actors.",
  "Clearview AI is presented as a facial-recognition case study. The deck describes large-scale image scraping and law-enforcement access as the privacy risk it wants students to understand.",
  "The deck describes recommendation systems as capable of using many behavioral signals and amplifying content that produces strong reactions. This is presented as a reason for a different information architecture.",
  "The AI-slop section argues that synthetic low-quality content can scale rapidly when platforms reward views. The deck cites Kapwing research and presents its 2026 figures as estimates.",
  "The deepfake section moves from statistics to a practical student question: can an online claim still be trusted simply because it looks or sounds convincing?",
  "The attention section connects the presentation's social-media argument to learning. It cites an American Psychological Association advisory and frames attention as a design issue rather than only an individual habit.",
  "The presentation's key product thesis is that changing settings on an existing attention-driven platform is different from building a platform whose core incentives are student progress.",
  "VEXORA is defined in the deck as a student platform with three highlighted principles: distraction-free, privacy-first and Gen-Z native.",
  "The product model is summarized as Discover, Focus, Create and Lead. This is the clearest bridge from the case study to the working prototype.",
  "The final argument is addressed to educators, parents and supporters. The deck describes VEXORA as infrastructure for the next generation's independence.",
  "The deck lists +94 71 123 4571, vcthivi@gmail.com and the VEXORA community/project URL. The contact details are reproduced from the supplied presentation.",
] as const;

export default function CaseStudy() {
  return (
    <main className="case-page">
      <aside className="case-sidebar">
        <Link href="/" className="sidebar-brand">← VEXORA</Link>
        <p className="sidebar-kicker">Case study</p>
        <h2>The VEXORA Story</h2>
        <p className="sidebar-copy">A presentation-led investigation into attention, privacy, manipulation, synthetic media and the case for a different kind of student technology.</p>
        <nav className="toc">
          {chapters.map(([number,title]) => <a href={`#chapter-${number}`} key={number}><span>{number}</span>{title}</a>)}
        </nav>
        <small>VEXORA · Working prototype</small>
      </aside>

      <div className="case-content">
        <section className="case-hero section-pad">
          <Link href="/" className="back-link">← Back to VEXORA</Link>
          <p className="eyebrow">VEXORA / CASE STUDY / 15 SLIDES</p>
          <h1>From the problem<br/><em>to the prototype.</em></h1>
          <p>This case study is based directly on the supplied VEXORA presentation. It keeps the deck's structure and terminology, while connecting the final product sections to the working prototype.</p>
          <div className="case-chips"><span>15-slide source deck</span><span>Problem → evidence → solution</span><span>Prototype connected</span></div>
        </section>

        <section className="question-block">
          <p>THE CENTRAL PRODUCT QUESTION</p>
          <h2>What if a student platform optimized for progress instead of time spent?</h2>
        </section>

        <section className="chapter-group crisis">
          <div className="group-intro"><span>01–05</span><h2>The problem the deck starts with</h2></div>
          <div className="chapter-list">
            {chapters.slice(0,5).map(([number,title,description], index) => (
              <article id={`chapter-${number}`} className="chapter" key={number}>
                <span className="chapter-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p><small>{details[index]}</small></div>
                <span className="chapter-arrow">↓</span>
              </article>
            ))}
          </div>
        </section>

        <section className="chapter-group surveillance">
          <div className="group-intro"><span>06–10</span><h2>The information environment</h2></div>
          <div className="chapter-list">
            {chapters.slice(5,10).map(([number,title,description], index) => (
              <article id={`chapter-${number}`} className="chapter" key={number}>
                <span className="chapter-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p><small>{details[index+5]}</small></div>
                <span className="chapter-arrow">↓</span>
              </article>
            ))}
          </div>
        </section>

        <section className="chapter-group solution">
          <div className="group-intro"><span>11–15</span><h2>From argument to product</h2></div>
          <div className="chapter-list">
            {chapters.slice(10,15).map(([number,title,description], index) => (
              <article id={`chapter-${number}`} className="chapter" key={number}>
                <span className="chapter-number">{number}</span>
                <div><h3>{title}</h3><p>{description}</p><small>{details[index+10]}</small></div>
                <span className="chapter-arrow">↓</span>
              </article>
            ))}
          </div>
        </section>

        <section className="case-ending section-pad">
          <p className="eyebrow">The prototype</p>
          <h2>Discover. Focus.<br/><em>Create. Lead.</em></h2>
          <p>The supplied deck describes this four-stage product direction. The working prototype turns it into an interactive student workspace with missions, focus mode, project progress, competitions and opportunities.</p>
          <Link href="/prototype" className="button button-dark">Open the working prototype ↗</Link>
        </section>
      </div>
    </main>
  );
}
