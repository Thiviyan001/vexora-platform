import Link from "next/link";

const chapters = [
  ["01", "The Crisis Is Real", "Mental health, attention and the evidence"],
  ["02", "It Is Engineered", "Products are designed around measurable attention"],
  ["03", "Political Manipulation", "When information systems meet elections"],
  ["04", "Bans & Investigations", "Governments are no longer ignoring the problem"],
  ["05", "You Are Being Watched", "PRISM, XKEYSCORE and digital surveillance"],
  ["06", "The Evidence Is Public", "Official records, hearings and investigations"],
  ["07", "Politicians Aren't Immune", "Trump, Harris and the attention battlefield"],
  ["08", "Congressional Hearings", "Platforms questioned in public"],
  ["09", "Your Face Became Data", "Clearview AI and biometric surveillance"],
  ["10", "The TikTok Algorithm", "The 2024 internal-document revelations"],
  ["11", "AI Slop", "When synthetic content becomes infinite"],
  ["12", "Deepfakes", "When seeing is no longer enough"],
  ["13", "The Viral Myth Machine", "Why repetition can beat verification"],
  ["14", "The Toaster Myth", "A case study in invented internet history"],
  ["15", "Your Brain Has Been Rewired", "Attention, novelty and reinforcement"],
  ["16", "The Psychological Evidence", "APA, youth development and platform design"],
  ["17", "Why Existing Platforms Won't Fix It", "The incentive problem"],
  ["18", "Introducing VEXORA", "A student success ecosystem"],
  ["19", "How VEXORA Changes Everything", "Progress instead of retention"],
  ["20", "The Question", "The choice is whether we act"],
] as const;

const groups = [
  ["crisis", "01–04", "The crisis is real — and measurable", 1, 4],
  ["surveillance", "05–10", "The systems behind the screen", 5, 10],
  ["synthetic", "11–16", "When information itself becomes unstable", 11, 16],
  ["solution", "17–19", "Why VEXORA exists", 17, 19],
  ["future", "20", "The decision", 20, 20],
] as const;

export default function CaseStudy() {
  return <main className="case-page">
    <aside className="case-sidebar"><Link href="/" className="sidebar-brand">← VEXORA</Link><p className="sidebar-kicker">Case study</p><h2>The VEXORA Story</h2><p className="sidebar-copy">A 20-part evidence-led investigation into attention, surveillance, manipulation, synthetic media and the case for a different kind of student technology.</p><nav className="toc">{chapters.map(([number,title])=><Link href={`/case-study/${number}`} key={number}><span>{number}</span>{title}</Link>)}</nav><small>VEXORA · Project preview</small></aside>
    <div className="case-content">
      <section className="case-hero section-pad"><Link href="/" className="back-link">← Back to VEXORA</Link><p className="eyebrow">VEXORA / CASE STUDY</p><h1>The crisis is real.<br/><em>The evidence is overwhelming.</em></h1><p>This case study follows the evidence from youth mental-health concerns and attention engineering through surveillance programs, political communication, biometric databases, algorithmic systems and synthetic media — then asks what technology should do differently.</p><div className="case-chips"><span>20-part investigation</span><span>Evidence pages</span><span>Project in development</span></div></section>
      <section className="question-block"><p>THE CENTRAL QUESTION</p><h2>What happens when the systems built to capture human attention become the environment in which a generation learns, thinks, communicates and grows?</h2></section>
      {groups.map(([id,range,title,start,end])=><section className={`chapter-group ${id}`} key={id}><div className="group-intro"><span>{range}</span><h2>{title}</h2></div><div className="chapter-list">{chapters.filter(([number])=>{const n=Number(number);return n>=start&&n<=end}).map(([number,title,description])=><Link href={`/case-study/${number}`} id={`slide-${number}`} className="chapter" key={number}><span className="chapter-number">{number}</span><div><h3>{title}</h3><p>{description}</p><small>Open detailed evidence →</small></div><span className="chapter-arrow">↗</span></Link>)}</div></section>)}
      <section className="case-ending section-pad"><p className="eyebrow">The idea</p><h2>Learn. Build. Lead.<br/><em>Shape the future.</em></h2><p>VEXORA is the proposed response: a student ecosystem designed around capability, opportunity, creation and intentional connection rather than maximizing time spent inside the product.</p><Link href="/" className="button button-dark">Return to the project ↗</Link></section>
    </div>
  </main>;
}
