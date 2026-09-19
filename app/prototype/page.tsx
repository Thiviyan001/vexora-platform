'use client';

import Link from "next/link";
import { useMemo, useState } from "react";

type Mission = {
  title: string;
  category: string;
  minutes: number;
  xp: number;
  description: string;
};

const missions: Mission[] = [
  { title: "Build a 3-step study plan", category: "Focus", minutes: 8, xp: 40, description: "Turn one subject you need to improve into three concrete actions." },
  { title: "Python loop challenge", category: "Coding", minutes: 12, xp: 60, description: "Solve a short loop problem and explain why your solution works." },
  { title: "Spot the misinformation", category: "Digital literacy", minutes: 7, xp: 35, description: "Inspect a claim, identify what needs verification, and choose a reliable source." },
];

const projects = [
  { name: "NFC Jukebox", type: "Hardware", progress: 72 },
  { name: "VEXORA Study Path", type: "Product", progress: 48 },
  { name: "CPU Simulator", type: "Computer Science", progress: 31 },
];

const opportunities = [
  { title: "School coding challenge", tag: "Competition", action: "Explore" },
  { title: "Student innovation showcase", tag: "Innovation", action: "Prepare" },
  { title: "Maths Olympiad practice", tag: "Olympiad", action: "Practice" },
];

export default function Prototype() {
  const [tab, setTab] = useState("Today");
  const [xp, setXp] = useState(320);
  const [completed, setCompleted] = useState<string[]>([]);
  const [focus, setFocus] = useState(false);
  const [notice, setNotice] = useState("");

  const level = useMemo(() => Math.floor(xp / 100) + 1, [xp]);
  const nextLevel = level * 100;
  const progress = Math.min(100, Math.round(((xp - (level - 1) * 100) / 100) * 100));

  function completeMission(mission: Mission) {
    if (completed.includes(mission.title)) return;
    setCompleted((items) => [...items, mission.title]);
    setXp((value) => value + mission.xp);
    setNotice(`Mission completed: +${mission.xp} XP`);
  }

  function startFocus() {
    setFocus((value) => !value);
    setNotice(focus ? "Focus mode paused." : "Focus mode started — one task, no feed.");
  }

  return (
    <main className="prototype-shell">
      <header className="prototype-nav">
        <Link href="/" className="proto-brand">VEXORA<span>.</span></Link>
        <div className="proto-nav-center">
          {["Today", "Learn", "Build", "Compete", "Opportunities"].map((item) => (
            <button key={item} onClick={() => setTab(item)} className={tab === item ? "active" : ""}>{item}</button>
          ))}
        </div>
        <div className="proto-user"><span className="live-dot" /> Prototype <b>VT</b></div>
      </header>

      <div className="prototype-body">
        <aside className="proto-sidebar">
          <div className="sidebar-profile">
            <div className="avatar">VT</div>
            <div><strong>Student workspace</strong><small>Level {level} · {xp} XP</small></div>
          </div>
          <div className="side-label">Workspace</div>
          {["Today", "My learning", "My projects", "Competitions", "Opportunities"].map((item) => (
            <button key={item} onClick={() => setTab(item)} className={tab.toLowerCase().startsWith(item.toLowerCase().slice(0, 4)) ? "side-active" : ""}>{item}<span>›</span></button>
          ))}
          <div className="side-note">
            <span>VEXORA principle</span>
            <strong>Creation before consumption.</strong>
            <p>No infinite feed. No popularity race. You choose what to work on.</p>
          </div>
          <Link href="/case-study" className="case-link">Read the case study ↗</Link>
        </aside>

        <section className="proto-main">
          <div className="proto-topline">
            <div>
              <p className="proto-eyebrow">{tab} / Student workspace</p>
              <h1>{tab === "Today" ? <>Make progress.<br /><em>Not just time.</em></> : tab}</h1>
            </div>
            <button className={focus ? "focus-button on" : "focus-button"} onClick={startFocus}>◉ {focus ? "Focus mode on" : "Start focus mode"}</button>
          </div>

          {notice && <button className="notice" onClick={() => setNotice("")}>{notice} <span>×</span></button>}

          {tab === "Today" && (
            <>
              <div className="progress-card">
                <div><span className="mini-label">YOUR PATH</span><h2>Curiosity → Skill → Project → Opportunity</h2><p>VEXORA turns scattered student activity into a visible path of progress.</p></div>
                <div className="level-ring"><strong>{level}</strong><span>LEVEL</span></div>
                <div className="progress-bar"><i style={{ width: `${progress}%` }} /></div>
                <small>{xp} / {nextLevel} XP toward the next level</small>
              </div>

              <div className="proto-grid two">
                <section className="panel mission-panel">
                  <div className="panel-head"><div><span className="mini-label">TODAY'S MISSIONS</span><h3>Do something real.</h3></div><span className="count">{completed.length}/3 done</span></div>
                  {missions.map((mission) => (
                    <article className={completed.includes(mission.title) ? "mission done" : "mission"} key={mission.title}>
                      <div className="mission-icon">{completed.includes(mission.title) ? "✓" : "→"}</div>
                      <div className="mission-copy"><span>{mission.category} · {mission.minutes} min</span><strong>{mission.title}</strong><p>{mission.description}</p></div>
                      <button onClick={() => completeMission(mission)}>{completed.includes(mission.title) ? "Done" : `+${mission.xp} XP`}</button>
                    </article>
                  ))}
                </section>

                <section className="panel path-panel">
                  <div className="panel-head"><div><span className="mini-label">YOUR DIRECTION</span><h3>Build toward something.</h3></div></div>
                  <div className="path-line">
                    {["Learn", "Practice", "Build", "Prove"].map((step, index) => <div key={step} className={index < 2 ? "path-step reached" : "path-step"}><i>{index + 1}</i><strong>{step}</strong><small>{index === 0 ? "3 skills" : index === 1 ? "12 challenges" : index === 2 ? "2 projects" : "0 submissions"}</small></div>)}
                  </div>
                  <button className="primary-wide" onClick={() => { setTab("My projects"); setNotice("Your project workspace is ready."); }}>Continue your path →</button>
                </section>
              </div>
            </>
          )}

          {tab !== "Today" && (
            <div className="proto-grid two">
              <section className="panel">
                <div className="panel-head"><div><span className="mini-label">LIVE PROTOTYPE</span><h3>{tab === "My projects" || tab === "Build" ? "Build something you can show." : tab === "Competitions" || tab === "Compete" ? "Turn preparation into proof." : tab === "Opportunities" ? "Find your next opening." : "Learn with a purpose."}</h3></div></div>
                {tab === "My projects" || tab === "Build" ? projects.map((project) => (
                  <article className="project-row" key={project.name}><div className="project-symbol">✦</div><div><strong>{project.name}</strong><span>{project.type}</span><div className="tiny-progress"><i style={{ width: `${project.progress}%` }} /></div></div><b>{project.progress}%</b></article>
                )) : opportunities.map((opportunity) => (
                  <article className="opportunity-row" key={opportunity.title}><div><span>{opportunity.tag}</span><strong>{opportunity.title}</strong></div><button onClick={() => setNotice(`${opportunity.title}: action opened in prototype.`)}>{opportunity.action} →</button></article>
                ))}
              </section>
              <section className="panel dark-panel">
                <span className="mini-label">WHY VEXORA</span>
                <h3>{tab === "My learning" ? "Learning is the input. Capability is the output." : tab === "Opportunities" ? "Opportunities should meet students where their evidence is." : "A student platform should help you finish things."}</h3>
                <p>Instead of an endless stream, this prototype gives the student a small number of intentional actions and connects them to projects, competitions and opportunities.</p>
                <div className="dark-stat"><strong>{completed.length + 2}</strong><span>actions completed this session</span></div>
              </section>
            </div>
          )}

          <footer className="prototype-footer"><span>VEXORA prototype · local demo state</span><Link href="/case-study">Evidence & case study ↗</Link><Link href="/">Back to landing page ↗</Link></footer>
        </section>
      </div>
    </main>
  );
}
