# VEXORA

**A social platform where students discover, connect, create, collaborate, and grow.**

VEXORA is a student-first social platform prototype. The core experience is social: students share ideas and projects, ask questions, join communities, connect with other students, collaborate, discover opportunities, and build a visible identity around what they create.

Learning, competitions, projects, mentorship and opportunities support the social ecosystem rather than defining it as a learning dashboard.

## Working prototype

Open **`/prototype`** to use the interactive demo.

The prototype currently demonstrates:
- Social home feed with student posts
- Create/post composer
- Likes and local interaction state
- Discover page for people, topics and opportunities
- Communities with join/leave interaction
- Messages/collaboration area
- Notifications
- Student profile with projects, communities and interests
- Trending communities and people to connect with
- Opportunity discovery
- Responsive mobile navigation
- Direct connection to the case study

The demo uses local client state; it is a functional product prototype, not a production backend.

## Product loop

**Discover → Connect → Create → Collaborate → Showcase → Opportunities**

A typical VEXORA interaction starts with a student discovering an idea, person or community, then joining a conversation, creating or sharing something, finding collaborators, and eventually turning that activity into a project, showcase or opportunity.

## Case study

Open **`/case-study`** for the presentation-based case study. It follows the supplied VEXORA PowerPoint structure from the problem and evidence sections through the VEXORA solution and community/contact slide.

## Routes

- `/` — VEXORA landing page
- `/prototype` — interactive social-platform prototype
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

For the Young Computer Scientist Competition project screening, the live demo should show the actual social-platform loop:

1. Open `/prototype`.
2. Start on the Home feed and show real interactive posts.
3. Like a post and demonstrate local state.
4. Open Discover and explore topics/opportunities.
5. Join a community and show the joined state.
6. Open Create and publish a new post.
7. Open Profile, Messages or Notifications to show the broader social ecosystem.
8. Open the Case Study and explain how the product direction connects to the supplied presentation.

## Source presentation

The case-study wording and structure are based on the VEXORA presentation supplied with this project. Claims in the presentation are preserved as project-source material rather than independently re-verified in this repository.
