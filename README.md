# VEXORA

**The ecosystem, research and case-study layer behind BEAT.**

VEXORA is the parent project and wider student-success ecosystem. It contains the problem research, evidence, case studies, product story, competition documentation and the BEAT social platform.

**Case studies:** https://vexoraplatform.netlify.app/case-study

## BEAT

**Beat your ideas.**

BEAT is VEXORA's social platform product — a student social network for discovering people and ideas, sharing projects and questions, collaborating in communities, and finding opportunities.

**Live demo:** https://vexoraplatform.netlify.app/beat  
**Case study:** https://vexoraplatform.netlify.app/case-study  
**Video demo:** see the video file included in the competition submission  
**GitHub:** https://github.com/Thiviyan001/vexora-platform

> **Demo account:** `demo@beat.com` / `demo1234`

BEAT is the working product layer; VEXORA provides the surrounding research, evidence and case-study layer.

---

## Product loop

**Discover → Connect → Beat → Collaborate → Showcase → Opportunities**

## Project description

### Problem

Students increasingly use large social and video platforms alongside traditional learning tools. These platforms are primarily designed around social discovery and engagement rather than a dedicated student collaboration environment.

VEXORA's case-study layer documents research and public evidence concerning algorithmic feeds, online attention, youth social-media use, privacy and digital platforms. These case studies provide the problem context behind BEAT; they are not presented as proof that BEAT itself has solved these issues.

### Solution

BEAT is a purpose-built student social platform for discovering ideas, sharing projects and questions, collaborating with other students, and finding opportunities.

Its content model supports a structured **Problem → Insight → Challenge** format for educational and idea-driven posts, alongside profiles, stories, communities, discovery, messaging, saved content, likes and comments.

### Novelty

BEAT combines a student-focused social experience with a structured educational content model and the wider VEXORA ecosystem. The goal is to connect social discovery with learning, creation and collaboration rather than treating the social feed as the entire product.

---

## Post structure

Every BEAT idea can be organized around:

**Problem → Insight → Challenge**

This turns a conventional social post into a structured learning and creation interaction.

![BEAT Post](images/screenshot-post.png)

---

## Authentication

![BEAT Sign In](images/screenshot-signin.png)

The BEAT interface includes a simple sign-in experience for the competition demo.

> **Demo account:** `demo@beat.com` / `demo1234`

The repository also contains the Django REST authentication layer and broader backend implementation. The public competition demo uses a local demo-authentication path so the demo account does not depend on backend authentication availability.

---

## Case study

![BEAT Case Study](images/screenshot-casestudy.png)

The full case study is available at:

https://vexoraplatform.netlify.app/case-study

It documents the problem research, evidence, design decisions and product story behind BEAT and VEXORA.

---

# Architecture

BEAT uses a separated frontend, API-proxy and backend architecture.

```
                         VEXORA
              National Student Success
                       Ecosystem
                            │
                            ▼
                          BEAT
                    "Beat your ideas"
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       Social            Discover        Communities
       Feed              Subjects        Group Chat
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                 Problem → Insight → Challenge
                            │
                            ▼
                    Next.js / React
                       Frontend
                            │
                            ▼
                         Netlify
                            │
                            ▼
                    /api/beat/* Proxy
                            │
                            ▼
                    Django REST API
                            │
                 ┌──────────┼──────────┐
                 │          │          │
                 ▼          ▼          ▼
            Auth / Users  Social     Messages
                 │          │          │
                 └──────────┼──────────┘
                            ▼
                       PostgreSQL
```

### Request flow

```
Browser
   │
   ▼
Netlify / Next.js
   │
   │ /api/beat/*
   ▼
Next.js API proxy
   │
   │ HTTPS
   ▼
Faable Django server
   │
   ▼
Django REST Framework
   │
   ▼
PostgreSQL
```

The Next.js API proxy forwards BEAT API requests and authorization headers to the Django service.

## Current deployment

### Frontend

**Netlify**

https://vexoraplatform.netlify.app/

BEAT:

https://vexoraplatform.netlify.app/beat

### Backend

**Faable Django service**

https://vexora-beat-api-l5c7b.faable.link

Health endpoint:

https://vexora-beat-api-l5c7b.faable.link/api/health/

The health endpoint has been verified and reports the Django service and database connection status.

### Database

The deployed Django service uses a PostgreSQL-compatible production database layer.

---

## Backend capabilities

The Django application provides the foundation for:

- Users and profiles
- Authentication
- Posts
- Likes
- Comments
- Stories
- Following
- Messages
- Notifications
- Feed operations

Backend repository:

https://github.com/Thiviyan001/vexora-beat-api

## API endpoints

The backend includes routes such as:

- `GET /api/health/`
- `POST /api/auth/register/`
- `POST /api/auth/login/`
- `POST /api/auth/logout/`
- `GET /api/auth/me/`
- `GET /api/feed/`
- `GET /api/posts/`
- `POST /api/posts/<id>/like/`
- `POST /api/posts/<id>/comment/`
- `GET /api/stories/`
- `POST /api/follow/`
- `GET /api/messages/`
- `GET /api/notifications/`

These describe backend capabilities; not every endpoint is necessarily exercised by the public competition demo.

## Data model

Django is designed to persist:

**users and profiles · follows · posts · likes · comments · stories · messages · notifications**

```
User
 │
 ├── Profile
 ├── Posts
 │    ├── Likes
 │    └── Comments
 ├── Stories
 ├── Messages
 ├── Notifications
 └── Follows ───────► User
```

---

## AI mentor

BEAT includes an AI mentor endpoint for student assistance.

```
BEAT
  │
  │ @chatgpt
  ▼
/api/beat/assistant
  │
  ▼
OpenRouter
  │
  ▼
AI model
  │
  ▼
Student response
```

The assistant is intended for mathematics, coding, science, projects and study questions.

---

## Group collaboration

BEAT includes student group spaces such as:

- **VEXORA Builders**
- **Robotics Lab**
- **Math Olympiad**
- **Space & Astronomy**

The group chat interface also provides entry points for AI assistance and future creative-tool integrations.

The current `@canva` command is a design-request placeholder. A full Canva Connect integration is a future milestone.

---

# Repository structure

```
vexora-platform/
│
├── app/
│   ├── page.tsx                    # VEXORA homepage
│   │
│   ├── beat/
│   │   ├── page.tsx                # BEAT route
│   │   ├── beat.tsx                # BEAT application
│   │   ├── beat.css                # BEAT styling
│   │   └── post/
│   │       └── [id]/
│   │           └── page.tsx         # Full post pages
│   │
│   ├── case-study/
│   │   └── [id]/                   # VEXORA case studies
│   │
│   └── api/
│       └── beat/
│           ├── [...path]/
│           │   └── route.ts         # Django API proxy
│           └── assistant/
│               └── route.ts         # AI mentor endpoint
│
├── public/
│   └── beat/                       # BEAT local assets
│
├── frontend/                       # Separate React + Vite frontend
├── backend/                        # Django REST backend
├── package.json
└── README.md
```

---

# Installation

## Option A — Live deployment

Open:

https://vexoraplatform.netlify.app/beat

No installation is required.

> **Demo account:** `demo@beat.com` / `demo1234`

## Option B — Run Next.js / BEAT locally

### Requirements

| Tool | Version |
| --- | --- |
| Node.js | 18.x LTS or higher |
| npm | 9.x or higher |
| Python | 3.11+ |
| pip | 23.x or higher |

### Next.js / BEAT

```bash
git clone https://github.com/Thiviyan001/vexora-platform.git
cd vexora-platform
npm install
npm run dev
```

Open:

http://localhost:3000/beat

### React + Vite frontend

A separate React + Vite frontend is included in `frontend/`.

```bash
cd frontend
npm install
npm run dev
```

### Django backend

The backend is included in `backend/`.

```bash
cd backend
python -m venv .venv
```

Activate the environment:

**Windows**

```text
.venv\\Scripts\\activate
```

**macOS / Linux**

```bash
source .venv/bin/activate
```

Install dependencies and migrate:

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The backend runs at:

http://localhost:8000

Verify:

```bash
curl http://localhost:8000/api/health/
```

Expected response:

```json
{
  "ok": true,
  "service": "vexora-django",
  "database": "connected"
}
```

---

# Technical stack

| Layer | Technology |
| --- | --- |
| Ecosystem / product | VEXORA + BEAT |
| Main frontend | Next.js / React |
| Styling | CSS |
| Standalone frontend | React + Vite |
| Backend | Python / Django |
| API | Django REST Framework |
| Database | PostgreSQL |
| AI mentor | OpenRouter |
| Frontend hosting | Netlify |
| Backend hosting | Faable |
| Source control | GitHub |

---

# Competition documentation

The competition submission includes:

```
BEAT_SUBMISSION/
│
├── Project description
├── BEAT screenshots
├── Architecture
├── Innovation explanation
├── Backend explanation
├── Demo links
├── GitHub documentation
├── VEXORA case studies
└── Video demonstration
```

The VEXORA case-study layer contains the supporting research and evidence, while BEAT remains focused on the actual product experience.

---

## Project direction

BEAT is being developed as the social layer of the wider VEXORA ecosystem.

The architecture is designed to grow into a persistent student platform with:

- database-backed social activity
- richer communities
- persistent messaging
- student opportunities
- AI mentorship
- creative-tool integrations
- Focus Mode
- Mission Board
- competitions
- student portfolios

The central product idea remains:

> **Problem → Insight → Challenge**

VEXORA provides the ecosystem and research layer.

**BEAT turns that ecosystem into a place where students can discover, create and collaborate.**

---

## Contact

**vcthivi@gmail.com**

For project questions, please use the contact information above.
