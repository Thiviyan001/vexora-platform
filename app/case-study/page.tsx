import Link from "next/link";

const chapters = [
  ["01", "The Student", "The everyday attention problem"], ["02", "The Attention Economy", "Why time became the product"], ["03", "The Algorithm Decides", "Recommendation shapes discovery"], ["04", "The Infinite Feed", "Instagram, TikTok and endless scroll"], ["05", "What Are We Trading?", "Convenience versus attention"], ["06", "The Internet Is Changing", "A new information environment"], ["07", "AI Slop", "When content becomes infinite"], ["08", "Can We Trust What We See?", "Verification in the AI era"], ["09", "The Viral Myth Machine", "Viral does not mean verified"], ["10", "The Digital World", "Cybercrime, scams and safety"], ["11", "Humanity's Unsolved Problems", "Questions still at the frontier"], ["12", "Reach the Frontier", "Students beyond their classroom"], ["13", "The Mentor", "A future direction for guidance"], ["14", "Student → Researcher", "From learning to discovery"], ["15", "Not Another Learning App", "Why VEXORA is an ecosystem"], ["16", "The VEXORA Ecosystem", "Learning, projects and opportunity"], ["17", "A Different Social Network", "Connection without attention traps"], ["18", "Consumption → Creation", "Build instead of endlessly scroll"], ["19", "A National Network", "Connecting student potential"], ["20", "The Future", "The long-term vision"],
] as const;

const groups = [
  ["student", "01–05", "The problem starts with attention", 1, 5], ["internet", "06–10", "The information environment is changing", 6, 10], ["frontier", "11–14", "What if students could reach the frontier?", 11, 14], ["ecosystem", "15–16", "Students don't need another place to consume", 15, 16], ["network", "17–19", "A different kind of network", 17, 19], ["future", "20", "The future is a direction, not a finished product", 20, 20],
] as const;

export default function CaseStudy() {
  return <main className="case-page">
    <aside className="case-sidebar"><Link href="/" className="sidebar-brand">← VEXORA</Link><p className="sidebar-kicker">Case study</p><h2>The VEXORA Story</h2><p className="sidebar-copy">20 chapters, each with a short evidence page explaining the idea behind it.</p><nav className="toc">{chapters.map(([number,title])=><Link href={`/case-study/${number}`} key={number}><span>{number}</span>{title}</Link>)}</nav><small>VEXORA · Project preview</small></aside>
    <div className="case-content">
      <section className="case-hero section-pad"><Link href="/" className="back-link">← Back to VEXORA</Link><p className="eyebrow">VEXORA / Case Study</p><h1>From the problem<br/>to the <em>possibility.</em></h1><p>A concise case study of the ideas behind VEXORA — why it should exist, what it is trying to change, and where the project could go.</p><div className="case-chips"><span>20-part presentation</span><span>Evidence pages</span><span>Project in development</span></div></section>
      <section className="question-block"><p>THE CENTRAL QUESTION</p><h2>What if technology helped students <em>accomplish more</em> instead of simply keeping them online longer?</h2></section>
      {groups.map(([id,range,title,start,end])=><section className={`chapter-group ${id}`} key={id}><div className="group-intro"><span>{range}</span><h2>{title}</h2></div><div className="chapter-list">{chapters.filter(([number])=>{const n=Number(number);return n>=start&&n<=end}).map(([number,title,description])=><Link href={`/case-study/${number}`} id={`slide-${number}`} className="chapter" key={number}><span className="chapter-number">{number}</span><div><h3>{title}</h3><p>{description}</p><small>Open evidence page →</small></div><span className="chapter-arrow">↗</span></Link>)}</div></section>)}
      <section className="case-ending section-pad"><p className="eyebrow">The idea</p><h2>Learn. Build. Lead.<br/><em>Shape the future.</em></h2><p>This is the idea VEXORA is being built around. The next chapter is turning the vision into something students can actually use.</p><Link href="/" className="button button-dark">Return to the project ↗</Link></section>
    </div>
  </main>;
}
