# VEXORA — React + Django

The social prototype now has a dedicated React frontend and Python/Django backend.

## Architecture
React (JavaScript) → Axios REST calls → Django REST Framework → SQLite during development.

## Frontend
cd frontend
npm install
npm run dev

Set VITE_API_URL if Django is not at http://127.0.0.1:8000/api.

## Backend
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

API:
GET /api/feed/
GET/POST /api/posts/
POST /api/posts/<id>/like/
POST /api/posts/<id>/comment/
GET/POST /api/messages/
GET /api/notifications/

The existing Next.js prototype remains in app/prototype as the visual reference while this React/Django stack is developed into the production architecture.
