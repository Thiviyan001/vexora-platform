"use client";

import { usePathname } from "next/navigation";

type Source = { name: string; kind: string; url: string; logo?: string };
type Exhibit = { title: string; label: string; url: string; description: string };
type CaseVisual = { kicker: string; title: string; description: string; sources: Source[]; metrics: { label: string; value: string; note: string }[]; bars?: { label: string; value: number; display: string }[]; exhibits?: Exhibit[] };

const officialFbiSeal = "https://www.fbi.gov/image-repository/color-fbi-seal.png";
const officialNsaLogo = "https://www.nsa.gov/portals/75/images/nsa-logo.png";

const surveillanceExhibits: Exhibit[] = [
  {
    title: "PRISM — NSA FOIA record",
    label: "OFFICIAL NSA DOCUMENT",
    url: "https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/media-leaks/prism_email.pdf",
    description: "An NSA-hosted declassified/FOIA document containing contemporaneous internal discussion of PRISM-related records. Open the scan and inspect the original markings yourself."
  },
  {
    title: "FISA Section 702 implementation",
    label: "OFFICIAL NSA DOCUMENT",
    url: "https://www.nsa.gov/portals/75/documents/news-features/speeches-testimonies/NSAImplementationofFISA70216Apr2014.FINAL.pdf",
    description: "NSA's own implementation document explains selector tasking, provider assistance and the distinction between PRISM and Upstream collection."
  },
  {
    title: "Section 702 — by the numbers",
    label: "OFFICIAL FBI INFOGRAPHIC",
    url: "https://www.fbi.gov/file-repository/section-702-by-the-numbers-092623.pdf/view",
    description: "An FBI-published infographic. This is the kind of primary evidence VEXORA should show beside its interpretation rather than relying on a screenshot from a third-party article."
  },
  {
    title: "FISA surveillance court records",
    label: "FBI VAULT / FOIA",
    url: "https://vault.fbi.gov/d1-release",
    description: "The FBI Vault provides public scans of released FISA surveillance court orders and applications."
  }
];

const visuals: Record<string, CaseVisual> = {
  "01": {
    kicker: "PRIMARY EVIDENCE",
    title: "Youth social-media use — measured, not guessed",
    description: "The evidence base is large enough to visualize, but the numbers need context. These figures come from public-health and psychology sources rather than VEXORA estimates.",
    metrics: [
      { label: "Teen platform use", value: "95%", note: "U.S. ages 13–17 reporting use" },
      { label: "Almost constant", value: "1 in 3", note: "Teenagers in the 2023 advisory" },
      { label: "Higher-risk threshold", value: "3h/day", note: "Associated with roughly double the risk in cited research" },
    ],
    bars: [
      { label: "Use a social platform", value: 95, display: "95%" },
      { label: "Almost constant use", value: 33, display: "≈33%" },
      { label: "Feel worse about body image", value: 46, display: "46%" },
    ],
    sources: [
      { name: "U.S. Surgeon General", kind: "2023 Advisory", url: "https://www.hhs.gov/surgeongeneral/reports-and-publications/youth-mental-health/social-media/index.html" },
      { name: "American Psychological Association", kind: "Health Advisory", url: "https://www.apa.org/topics/social-media-internet/health-advisory-adolescent-social-media-use" },
    ],
  },
  "02": {
    kicker: "HOW THE SYSTEM WORKS",
    title: "From behavior → prediction → ranking",
    description: "Recommendation systems can use behavioral signals such as viewing time, likes, comments, searches and follows to decide what appears next. The point is not that every system is malicious; it is that ranking is an engineered objective.",
    metrics: [
      { label: "Core mechanism", value: "RANK", note: "Software orders candidate content" },
      { label: "Common signal", value: "TIME", note: "Viewing/engagement can influence recommendations" },
      { label: "Policy question", value: "WHY?", note: "What objective is the product optimizing?" },
    ],
    bars: [
      { label: "Viewing / watch time", value: 92, display: "signal" },
      { label: "Likes / reactions", value: 76, display: "signal" },
      { label: "Comments / sharing", value: 64, display: "signal" },
      { label: "Search / follows", value: 52, display: "signal" },
    ],
    sources: [
      { name: "Federal Trade Commission", kind: "2024 social-media study", url: "https://www.ftc.gov/system/files/ftc_gov/pdf/Social-Media-6b-Report-9-11-2024.pdf" },
      { name: "American Psychological Association", kind: "Youth design guidance", url: "https://www.apa.org/topics/social-media-internet/youth-social-media-2024" },
    ],
  },
  "05": {
    kicker: "SURVEILLANCE ARCHITECTURE",
    title: "PRISM • XKEYSCORE • Section 702 — inspect the record",
    description: "This chapter now puts the primary documents beside the explanation. PRISM and XKEYSCORE should not be presented as vague internet lore: the NSA has publicly acknowledged XKEYSCORE as an analytic tool, and an NSA implementation document explicitly describes PRISM as one form of compelled provider assistance under Section 702.",
    metrics: [
      { label: "Section 702 targets", value: "246,073", note: "FBI testimony: authorized targets in 2022" },
      { label: "NSA reporting", value: "≈20%", note: "2022 NSA reporting containing Section 702 information" },
      { label: "Official record", value: "4 DOCS", note: "PRISM, 702 implementation, FBI infographic and FBI Vault" },
    ],
    bars: [
      { label: "Foreign-intelligence target", value: 100, display: "01" },
      { label: "Selector / tasking", value: 82, display: "02" },
      { label: "Provider assistance", value: 64, display: "03" },
      { label: "Analysis / reporting", value: 46, display: "04" },
    ],
    sources: [
      { name: "FBI", kind: "FISA & Section 702", url: "https://www.fbi.gov/how-we-investigate/intelligence/foreign-intelligence-surveillance-act-fisa-and-section-702", logo: officialFbiSeal },
      { name: "NSA", kind: "Official XKEYSCORE statement", url: "https://www.nsa.gov/serve-from-netstorage/Press-Room/Press-Releases-Statements/Press-Release-View/Article/1620989/press-statement-on-30-july-2013/index.html", logo: officialNsaLogo },
      { name: "NSA FOIA / PRISM", kind: "Official declassified record", url: "https://www.nsa.gov/Press-Room/Digital-Media-Center/Document-Gallery/igphoto/2002760598/", logo: officialNsaLogo },
      { name: "FBI Vault", kind: "Declassified records", url: "https://vault.fbi.gov/", logo: officialFbiSeal },
    ],
    exhibits: surveillanceExhibits,
  },
  "09": {
    kicker: "BIOMETRIC SCALE",
    title: "A face can become a searchable identifier",
    description: "The Clearview case is about scale as much as recognition accuracy: photographs collected from the web can be transformed into a biometric index intended for searching and matching.",
    metrics: [
      { label: "Reported image index", value: "20B", note: "House document described 20 billion images in 2022" },
      { label: "Data type", value: "FACE", note: "Biometric identifier tied to physical identity" },
      { label: "Core question", value: "CONSENT", note: "Publicly visible does not automatically mean unrestricted reuse" },
    ],
    bars: [
      { label: "Web photographs", value: 100, display: "source" },
      { label: "Face detection", value: 82, display: "extract" },
      { label: "Biometric index", value: 64, display: "index" },
      { label: "Search / match", value: 48, display: "query" },
    ],
    sources: [
      { name: "U.S. House", kind: "Clearview AI hearing document", url: "https://www.congress.gov/117/meeting/house/114964/documents/HHRG-117-SY21-20220629-SD002.pdf" },
      { name: "House Financial Services", kind: "Privacy concerns", url: "https://financialservices.house.gov/news/documentsingle.aspx?DocumentID=407570" },
    ],
  },
  "10": {
    kicker: "RECOMMENDATION SYSTEM",
    title: "The feed is an intervention layer",
    description: "A feed is not a neutral window. It is a selection system. The case study distinguishes internal-document allegations from independently established facts and shows the pathway a recommendation can take.",
    metrics: [
      { label: "Input", value: "DATA", note: "Behavior, content and account signals" },
      { label: "Model", value: "RANK", note: "Candidate content is scored and ordered" },
      { label: "Output", value: "FEED", note: "The user sees a selected sequence" },
    ],
    bars: [
      { label: "Observed behavior", value: 35, display: "input" },
      { label: "Candidate generation", value: 58, display: "process" },
      { label: "Ranking", value: 78, display: "model" },
      { label: "Delivered feed", value: 96, display: "output" },
    ],
    sources: [
      { name: "NPR", kind: "2024 reporting on internal documents", url: "https://www.npr.org/2024/10/12/g-s1-28040/teens-tiktok-addiction-lawsuit-investigation-documents" },
      { name: "U.S. Department of Justice", kind: "Public litigation resources", url: "https://www.justice.gov/" },
    ],
  },
};

const generic: CaseVisual = {
  kicker: "RESEARCH LAYER",
  title: "Claim → source → document → conclusion",
  description: "Every case study should make its evidence trail visible. The cards below distinguish primary records from interpretation and give readers a direct route to the underlying material.",
  metrics: [
    { label: "Step 01", value: "CLAIM", note: "What exactly is being asserted?" },
    { label: "Step 02", value: "SOURCE", note: "Who published or recorded it?" },
    { label: "Step 03", value: "CHECK", note: "Does the document support the claim?" },
  ],
  bars: [
    { label: "Claim", value: 100, display: "01" },
    { label: "Primary source", value: 78, display: "02" },
    { label: "Independent check", value: 56, display: "03" },
    { label: "Conclusion", value: 34, display: "04" },
  ],
  sources: [
    { name: "U.S. Congress", kind: "Public records", url: "https://www.congress.gov/" },
    { name: "FBI Vault", kind: "Declassified records", url: "https://vault.fbi.gov/" },
  ],
};

export default function CaseStudyEnhancements() {
  const pathname = usePathname();
  const chapter = pathname?.split("/").filter(Boolean).pop() ?? "01";
  const data = visuals[chapter] ?? generic;

  return (
    <section className="research-layer" aria-label="Research evidence layer">
      <div className="research-layer__head">
        <div>
          <span className="research-kicker">{data.kicker}</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="research-stamp">VEXORA<br /><span>PRIMARY SOURCES</span></div>
      </div>

      <div className="research-metrics">
        {data.metrics.map((m) => (
          <article className="research-metric" key={m.label}>
            <span>{m.label}</span><strong>{m.value}</strong><small>{m.note}</small>
          </article>
        ))}
      </div>

      <div className="research-grid">
        <div className="research-chart">
          <div className="research-chart__title"><span>01</span> EVIDENCE GRAPH</div>
          <div className="research-bars">
            {data.bars?.map((bar) => (
              <div className="research-bar-row" key={bar.label}>
                <div className="research-bar-label"><span>{bar.label}</span><b>{bar.display}</b></div>
                <div className="research-bar-track"><i style={{ width: `${bar.value}%` }} /></div>
              </div>
            ))}
          </div>
          <p className="research-note">Graphs use only figures or clearly labelled process scores supported by the cited material. They are not VEXORA survey results.</p>
        </div>

        <div className="research-sources">
          <div className="research-chart__title"><span>02</span> SOURCE DESK</div>
          {data.sources.map((source) => (
            <a className="source-card" href={source.url} target="_blank" rel="noreferrer" key={source.name}>
              <div className="source-logo">
                {source.logo ? <img src={source.logo} alt="" /> : <span>{source.name.slice(0, 2).toUpperCase()}</span>}
              </div>
              <div><strong>{source.name}</strong><small>{source.kind}</small></div>
              <span className="source-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      {data.exhibits && (
        <div className="research-exhibits">
          <div className="research-chart__title"><span>03</span> OFFICIAL DOCUMENT EXHIBITS</div>
          <p className="research-exhibits__intro">These are direct links to government-hosted records. VEXORA does not recreate the documents or present third-party screenshots as originals. Each exhibit opens the official source, where the reader can inspect the scan, classification markings and surrounding context.</p>
          <div className="research-exhibit-grid">
            {data.exhibits.map((exhibit) => (
              <article className="research-exhibit" key={exhibit.title}>
                <div className="research-exhibit__preview">
                  <div className="research-docbar"><span>OFFICIAL RECORD</span><b>PDF / FOIA</b></div>
                  <div className="research-docpage">
                    <div className="research-docseal">U.S.<br />GOV</div>
                    <div className="research-doctext"><i>{exhibit.label}</i><strong>{exhibit.title}</strong><span>DOCUMENT PREVIEW</span><em>Open the original record ↗</em></div>
                  </div>
                </div>
                <div className="research-exhibit__body">
                  <span>{exhibit.label}</span><h3>{exhibit.title}</h3><p>{exhibit.description}</p>
                  <a href={exhibit.url} target="_blank" rel="noreferrer">OPEN OFFICIAL DOCUMENT ↗</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      <div className="research-method">
        <div><span>RESEARCH STANDARD</span><strong>Primary evidence first.</strong></div>
        <p>Official documents, court records, agency reports and peer-reviewed or institutional research are separated from commentary. Allegations remain labelled as allegations; estimates remain labelled as estimates.</p>
      </div>
    </section>
  );
}
