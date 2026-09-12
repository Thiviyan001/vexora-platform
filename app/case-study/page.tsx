import Link from "next/link";

const chapters = [
  ["01", "The Student", "The everyday attention problem"],
  ["02", "The Attention Economy", "Why time became the product"],
  ["03", "The Algorithm Decides", "Recommendation shapes discovery"],
  ["04", "The Infinite Feed", "Instagram, TikTok and endless scroll"],
  ["05", "What Are We Trading?", "Convenience versus attention"],
  ["06", "The Internet Is Changing", "A new information environment"],
  ["07", "AI Slop", "When content becomes infinite"],
  ["08", "Can We Trust What We See?", "Verification in the AI era"],
  ["09", "The Viral Myth Machine", "Viral does not mean verified"],
  ["10", "The Digital World", "Cybercrime, scams and safety"],
  ["11", "Humanity's Unsolved Problems", "Questions still at the frontier"],
  ["12", "Reach the Frontier", "Students beyond their classroom"],
  ["13", "The Mentor", "A future direction for guidance"],
  ["14", "Student → Researcher", "From learning to discovery"],
  ["15", "Not Another Learning App", "Why VEXORA is an ecosystem"],
  ["16", "The VEXORA Ecosystem", "Learning, projects and opportunity"],
  ["17", "A Different Social Network", "Connection without attention traps"],
  ["18", "Consumption → Creation", "Build instead of endlessly scroll"],
  ["19", "A National Network", "Connecting student potential"],
  ["20", "The Future", "The long-term vision"],
];

const groups = [
  ["student", "01–05", "The problem starts with attention"],
  ["internet", "06–10", "The information environment is changing"],
  ["frontier", "11–14", "What if students could reach the frontier?"],
  ["ecosystem", "15–16", "Students don't need another place to consume"],
  ["network", "17–19", "A different kind of network"],
  ["future", "20", "The future is a direction, not a finished product"],
];

export default function CaseStudy() {
  return (
    <main className="case-page">
      <aside className="case-sidebar">
        <Link href="/" className="sidebar-brand">← VEXORA</Link>
        <p className="sidebar-kicker">Case study</p>
        <h2>The VEXORA Story</h2>
        <p className="sidebar-copy">A brief guide through the 20-part presentation.</p>
        <nav className="toc">
          {chapters.map(([number, title]) => <a href={`#slide-${number}`} key={number}><span>{number}</span>{title}</a>)}
        </nav>
        <small>VEXORA · Project preview</small>
      </aside>

      <div className="case-content">
        <section className="case-hero section-pad">
          <Link href="/" className="back-link">← Back to VEXORA</Link>
          <p className="eyebrow">VEXORA / Case Study</p>
          <h1>From the problem<br />to the <em>possibility.</em></h1>
          <p>A concise case study of the ideas behind VEXORA — why it should exist, what it is trying to change, and where the project could go.</p>
          <div className="case-chips"><span>20-part presentation</span><span>Project in development</span></div>
        </section>

        <section className="question-block"><p>THE CENTRAL QUESTION</p><h2>What if technology helped students <em>accomplish more</em> instead of simply keeping them online longer?</h2></section>

        {groups.map(([id, range, title]) => (
          <section className={`chapter-group ${id}`} key={id}>
            <div className="group-intro"><span>{range}</span><h2>{title}</h2></div>
            <div className="chapter-list">
              {chapters.filter(([number]) => number >= range.split("–")[0] && number <= (range.includes("–") ? range.split("–")[1] : range)).map(([number, title, description]) => (
                <article id={`slide-${number}`} className="chapter" key={number}>
                  <span className="chapter-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="chapter-arrow">↗</span>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="case-ending section-pad"><p className="eyebrow">The idea</p><h2>Learn. Build. Lead.<br /><em>Shape the future.</em></h2><p>This is the idea VEXORA is being built around. The next chapter is turning the vision into something students can actually use.</p><Link href="/" className="button button-dark">Return to the project ↗</Link></section>
      </div>
    </main>
  );
}
