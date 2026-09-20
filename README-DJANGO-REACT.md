# VEXORA — Full-stack social architecture

VEXORA now contains a Next.js product frontend, a dedicated React/Vite social frontend, and a Django REST backend.

## Architecture

```
VEXORA Next.js
  └── /beat
       └── Next.js Route Handler /api/beat/*
                    │
                    ▼
             Django REST API
                    │
                    ▼
              PostgreSQL
```

The standalone React frontend in `frontend/` also talks directly to the same Django API.

### Backend

```
cd backend
python -m venv .venv
# Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

API endpoints include:

- `/api/health/`
- `/api/auth/register/`
- `/api/auth/login/`
- `/api/auth/logout/`
- `/api/auth/me/`
- `/api/feed/`
- `/api/posts/`
- `/api/posts/<id>/like/`
- `/api/posts/<id>/comment/`
- `/api/stories/`
- `/api/follow/`
- `/api/messages/`
- `/api/notifications/`

### React social frontend

```
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` to the Django API URL.

### Next.js / BEAT

The main VEXORA app is the repository root:

```
npm install
npm run dev
```

BEAT is available at `/beat`.

BEAT now uses the Next.js same-origin proxy at `/api/beat/*`. Set this Vercel environment variable on the Next.js project:

```
DJANGO_API_URL=https://YOUR-BACKEND.vercel.app
```

BEAT authentication uses the Django token API. When a BEAT user signs in, posts, likes and comments can be persisted by Django instead of only using local browser state.

## Production deployment

Create two Vercel projects from this repository.

### 1. VEXORA frontend

Import the repository with root directory:

```
./
```

Framework: Next.js.

Environment variable:

```
DJANGO_API_URL=https://YOUR-BACKEND.vercel.app
```

### 2. Django backend

Import the same repository as a second Vercel project and set Root Directory to:

```
backend
```

Vercel now has zero-configuration Django support and recognizes `manage.py` and the WSGI application. The backend project should have:

```
DJANGO_SECRET_KEY=<random-production-secret>
DJANGO_DEBUG=false
DJANGO_ALLOWED_HOSTS=.vercel.app
DATABASE_URL=<production-postgres-connection-string>
FRONTEND_URL=https://YOUR-FRONTEND.vercel.app
```

Add a production PostgreSQL database through Vercel Marketplace Storage or another managed Postgres provider. Do not use SQLite for production.

The backend's `pyproject.toml` runs Django migrations during the Vercel build.

After the backend deploys, test:

```
https://YOUR-BACKEND.vercel.app/api/health/
```

It should return JSON containing `"ok": true`.

Then put that backend URL into the Next.js project's `DJANGO_API_URL` and redeploy the frontend.

## Data model

Django currently persists:

- users and profiles
- follows
- posts
- likes
- comments
- stories
- messages
- notifications

Post, like, comment, follow, message and notification operations are API-backed.

## Important

Never commit real `DJANGO_SECRET_KEY`, `DATABASE_URL`, or other production credentials to GitHub.
