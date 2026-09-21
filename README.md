# VEXORA

**The ecosystem, research and case-study layer behind BEAT.**

VEXORA is the parent project. It contains the problem research, evidence, case studies, product story and competition documentation.

**Case studies:** https://vexora-platform-bqij.vercel.app/case-study

## BEAT

**Beat your ideas.**

BEAT is VEXORA's social platform product — a student social network for discovering people and ideas, sharing projects and questions, collaborating, and finding opportunities.

**Live demo:** https://vexora-platform-bqij.vercel.app/beat  
**Case study:** https://vexora-platform-bqij.vercel.app/case-study  
**Video demo:** see the video file included with the competition submission  
**GitHub:** https://github.com/Thiviyan001/vexora-platform

BEAT is the working product layer; VEXORA provides the surrounding research, evidence and case-study layer.

## Product loop

**Discover → Connect → Beat → Collaborate → Showcase → Opportunities**

## Project description

### Problem

Students increasingly use large social and video platforms alongside traditional learning tools. These platforms are primarily designed around social discovery and engagement rather than a dedicated student collaboration environment.

VEXORA's case-study layer documents research and public evidence concerning algorithmic feeds, online attention, youth social-media use, privacy and digital platforms. These case studies provide the problem context behind BEAT; they are not presented as proof that BEAT itself has solved these issues.

### Solution

BEAT is a purpose-built student social platform for discovering ideas, sharing projects and questions, collaborating with other students, and finding opportunities.

Its content model supports a structured **Problem → Insight → Challenge** format for educational and idea-driven posts, alongside social features such as profiles, stories, communities, discovery, messaging, saved content, likes and comments.

### Novelty

BEAT combines a student-focused social experience with a structured educational content model and the wider VEXORA ecosystem. The goal is to connect social discovery with learning, creation and collaboration rather than treating the social feed as the entire product.

---

## Architecture

### Current implementation

The live BEAT experience is implemented in Next.js. The repository also contains a separate React + Vite frontend and a Django REST backend.

For the current competition build, the live BEAT feed and social interactions use local frontend state. Django is integrated as the backend foundation for authentication and is available for local verification. The broader REST API and data models provide the foundation for future persistent social operations.

```
VEXORA
│
├── Research & Case Studies
│   └── /case-study
│
└── BEAT
    └── /beat
        │
        ├── Next.js frontend
        │
        └── Django REST backend
            │
            └── PostgreSQL-ready data layer
```

> **Current state:** BEAT is a working Next.js social platform with a Django REST backend in the repository. The live demonstration currently uses local frontend state for the main social experience. Django authentication and the broader backend API can be run and verified locally. Production backend deployment and full database-backed social operations are planned as the next integration milestone.

## Backend capabilities

The Django application contains models and REST endpoints for:

- Users and profiles
- Authentication
- Posts
- Likes
- Comments
- Stories
- Following
- Messages
- Notifications

The production backend is **not currently deployed**. PostgreSQL is prepared as the intended production database layer but is **not yet connected to the live Vercel deployment**.

## API endpoints

The repository includes endpoints including:

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

These endpoints describe the backend implementation in the repository; they should not be interpreted as all being connected to the current live demo.

## Data model

Django is designed to persist:

**users and profiles · follows · posts · likes · comments · stories · messages · notifications**

---

## Installation

### Option A — Live deployment

Open:

https://vexora-platform-bqij.vercel.app/beat

No installation is required.

> **Note:** The live Vercel deployment may lag behind the latest GitHub `main` branch when Vercel's deployment quota is exhausted. The GitHub repository is the source of truth for the latest code.

### Option B — Run the Next.js BEAT frontend locally

#### Requirements

| Tool | Version |
| --- | --- |
| Node.js | 18.x LTS or higher |
| npm | 9.x or higher |
| Python | 3.12.x recommended for the current backend configuration |
| pip | 23.x or higher |

#### Next.js / BEAT

```bash
git clone https://github.com/Thiviyan001/vexora-platform.git
cd vexora-platform
npm install
npm run dev
```

Open:

http://localhost:3000/beat

### React + Vite frontend

A separate React + Vite frontend is also included in `frontend/`.

```bash
cd frontend
npm install
npm run dev
```

### Django backend

The backend is included in `backend/` and can be run locally.

```bash
cd backend
python -m venv .venv
```

Activate the environment:

**Windows**
```bash
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

The backend will run at:

http://localhost:8000

Verify the health endpoint:

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

> **Important:** The local Django backend is not connected to the current live Vercel deployment. It is provided so judges and developers can inspect and run the backend independently.

---

## Technical direction

BEAT uses:

- **Next.js / React** for the main web experience
- **React + Vite** for the standalone social frontend
- **Python + Django + Django REST Framework** for the backend
- **PostgreSQL** as the intended persistent production database

The next backend milestone is to connect persistent post, like, comment, follow, message and notification operations to the production API and database.

VEXORA remains the parent research and case-study layer, while BEAT is the product layer built on top of that ecosystem.

## Competition documentation

The repository and accompanying submission folder contain the project description, screenshots, architecture material, innovation explanation, backend documentation, demonstration material and supporting VEXORA case studies.

## Contact

vcthivi@gmail.com

<!-- Vercel deployment sync marker 2 -->
