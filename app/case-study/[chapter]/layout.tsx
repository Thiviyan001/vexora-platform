import type { ReactNode } from "react";
import "../../detail.css";
import "../research-layer.css";
import CaseStudyEnhancements from "../CaseStudyEnhancements";

export default function ChapterLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {children}
      <CaseStudyEnhancements />
    </>
  );
}
