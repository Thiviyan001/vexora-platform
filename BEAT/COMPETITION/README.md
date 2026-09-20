# BEAT — Competition Submission

**Beat your ideas.**

BEAT is the working social-platform prototype inside the VEXORA project. VEXORA is the parent research and case-study layer; BEAT is the product being demonstrated.

## 1. Specific problem

Student creators have ideas, projects, questions and experiments, but mainstream social platforms are primarily designed around general-purpose engagement. BEAT explores a student-focused social environment where the main actions are discovering people, sharing ideas/projects, discussing them and collaborating.

## 2. Solution

BEAT provides a familiar visual-social experience with:
- Feed and stories
- Create/post flow
- Likes and comments
- Discover/search
- Following
- Communities
- Short-form project/reel showcase
- Direct messages
- Notifications
- Student profiles
- Saved posts
- Responsive desktop/mobile UI
- Persistent demo state in the browser

The prototype is designed around the loop:

**Discover → Connect → Beat → Collaborate → Showcase → Opportunities**

A post is called a **Beat**.

## 3. Novelty

The novelty is not simply making another social feed. BEAT applies social-media interaction patterns to a student creator context: projects, questions, experiments, communities and collaboration are first-class content.

## 4. Technical implementation

### Frontend
- JavaScript
- React
- Vite
- Axios
- Responsive CSS

### Backend
- Python
- Django 5.2
- Django REST Framework
- SQLite for development
- Django CORS headers
- Pillow

### Demonstration prototype
The repository also contains a Next.js `/beat` route used as the polished competition-facing visual prototype. It demonstrates the product interaction model without requiring a production database.

## 5. Repository structure

    VEXORA/
    ├── app/
    │   ├── beat/                 # BEAT route
    │   ├── prototype/            # visual prototype implementation
    │   └── case-study/           # VEXORA research/case studies
    ├── BEAT/
    │   ├── README.md
    │   └── COMPETITION/
    │       └── README.md
    ├── frontend/                 # React frontend implementation
    ├── backend/                  # Django REST backend
    └── README.md

## 6. Running the visual prototype

Requirements:
- Node.js
- npm

    npm install
    npm run dev

Then open:

    http://localhost:3000/beat

## 7. Running the React + Django implementation

### Backend

    cd backend
    python -m venv .venv
    # Windows:
    .venv\Scripts\activate
    # macOS/Linux:
    source .venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver

### Frontend

In a second terminal:

    cd frontend
    npm install
    npm run dev

The React app is configured for the development API at:

    http://127.0.0.1:8000/api

## 8. Hardware requirements

No special hardware is required for the software prototype.

Recommended:
- Any modern Windows/macOS/Linux computer
- 4 GB+ RAM
- Modern web browser
- Internet connection for installing dependencies

## 9. Video demo

Record a maximum 5-minute demonstration showing:
1. VEXORA → BEAT relationship
2. BEAT home/feed
3. Create a Beat
4. Like/comment
5. Discover/search
6. Follow a creator
7. Communities
8. Messages
9. Profile
10. Mobile/responsive layout
11. Explain the technical architecture

## 10. Budget and sustainability

The prototype is built with open-source technologies and can be demonstrated with minimal infrastructure cost.

A production version would require budgeting for:
- Domain registration
- Web hosting
- Database infrastructure
- Media/file storage
- Backups
- Security
- Moderation
- Monitoring
- Ongoing maintenance

The project can begin as a low-cost prototype and scale infrastructure as the number of users and media uploads increases.

## 11. Current prototype scope

This submission should be described as a **working prototype / proof of concept**, not as a production-scale social network. The competition demonstration focuses on the implemented interaction model, UI, architecture and future scalability.

## 12. Competition checklist

- [x] Specific problem
- [x] Proposed solution
- [x] Novelty
- [x] Working prototype
- [x] Installation/setup instructions
- [x] Hardware requirements
- [x] Software/library requirements
- [ ] Final ≤5-minute demo video
- [ ] Final screenshots
- [ ] Final competition folder ZIP