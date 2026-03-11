# 💻 Travel Cart - Frontend (React)

The user interface for the Travel Cart ecosystem, built for speed, responsiveness, and a premium travel experience.

## 🚀 Project Overview
A React-based Single Page Application (SPA) that allows users to interact with AI travel tools, view travel news, and manage their personal itineraries through a secure dashboard.

## 🛠 Tech Stack
- **React.js (Vite):** Core framework for fast development and bundling.
- **Tailwind CSS:** Utility-first styling for a modern, responsive UI.
- **React Router DOM:** For client-side routing and Protected Routes.
- **Axios:** For handling API requests to the Node.js backend.

## ✨ Creative Features
- **AI Itinerary Interface:** A dynamic form that communicates with the backend AI Agent to render interactive travel plans.
- **Global News Feed:** Integrated with the News API to show real-time travel alerts.
- **Moving Car Animation:** A custom CSS-driven visual feature that maintains the travel theme across pages.
- **Scroll Restoration:** Custom `ScrollToTop` component to ensure a seamless navigation experience.

## ⚙️ Setup Instructions
1. **Install Dependencies:** `npm install`
2. **Environment Variables:** Create a `.env` file:
   ```env
   VITE_BASE_URL=http://localhost:2100

   ### Deployment Settings
* **Netlify (Frontend):** Set `VITE_BASE_URL` to your Render API link. Use a `_redirects` file for routing support.
---

## 🔐 Authentication & Authorization
* **Security:** Passwords are encrypted using **Bcrypt** with 10 salt rounds.
* **Persistence:** Upon login, a **JWT** is stored in `localStorage`.
* **Protected Routes:** A custom `ProtectedRoute` wrapper ensures that only authenticated users can access the AI Planner and Personal Dashboard.

---

## 🤖 AI Agent Design & Purpose
The **AI Planner Agent** is the core of the experience.
* **Design:** It utilizes a structured prompt to convert user constraints (budget, days, location) into a clean, parsed JSON object.
* **Purpose:** It acts as a 24/7 travel consultant, providing instantly generated, logical, and diverse travel plans that would otherwise take hours of manual research.

---

## ✨ Creative Features
* **"Moving Car" Animation:** A custom CSS-driven car animation that provides a playful, consistent visual theme across all pages.

---

## ⚖️ Key Design Decisions & Trade-offs
* **Case-Sensitive Routing:** All components and imports follow strict PascalCase to ensure 100% compatibility with Linux-based deployment servers (Netlify/Render).
* **CORS Strategy:** Implemented a dynamic origin array to allow seamless switching between local development and production environments.

---

**Developed by SARITA**
