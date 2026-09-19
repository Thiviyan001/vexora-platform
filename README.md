# VEXORA

**Empowering Students to Learn, Innovate, and Lead.**

VEXORA is a National Student Success Ecosystem prototype. The current build demonstrates a student workspace that turns curiosity into focused actions, projects, competitions and opportunities.

## Working prototype

Open **`/prototype`** to use the interactive demo.

The prototype currently demonstrates:
- Student workspace navigation
- XP and level progress
- Daily missions with completion state
- Focus mode toggle
- Learning / Build / Compete / Opportunities views
- Project progress
- Opportunity actions
- Mobile-responsive layout
- Direct connection to the case study

The demo uses local client state; it is a functional product prototype, not a production backend.

## Case study

Open **`/case-study`** for the presentation-based case study. It follows the supplied VEXORA PowerPoint structure from the problem and evidence sections through the VEXORA solution and community/contact slide.

## Routes

- `/` — VEXORA landing page
- `/prototype` — interactive working prototype
- `/case-study` — presentation-based case study

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS
- No external database required for the prototype demo

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Competition demo flow

For the Young Computer Scientist Competition project screening, the recommended live-demo path is:

1. Open `/prototype`.
2. Complete one Daily Mission.
3. Show the XP/progress change.
4. Switch to My Projects / Build.
5. Show project progress.
6. Open Opportunities / Compete.
7. Open the Case Study and explain how the product direction comes from the supplied presentation.

## Source presentation

The case-study wording and structure are based on the VEXORA presentation supplied with this project. Claims in the presentation are preserved as project-source material rather than independently re-verified in this repository.
