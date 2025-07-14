# 🏆 Real-Time Leaderboard App

A full-stack web application that allows users to claim random points and view a dynamic leaderboard in real-time.

---

## ✨ Features

- 🎯 Select users from a dropdown and claim random points (1–10)
- ➕ Add new users dynamically from the frontend
- 📈 Real-time leaderboard that updates rankings instantly
- 🕓 Claim history stored in MongoDB
- 💻 Backend built with Node.js & Express
- 🌐 Frontend built with React + TailwindCSS

---

## 🚀 Live Demo

- 🔗 **Frontend (Netlify)**: [https://6874aa2913bcbda99eeba2d3--leaderboardfrontend.netlify.app](https://6874aa2913bcbda99eeba2d3--leaderboardfrontend.netlify.app)
- 🔗 **Backend (Render)**: [https://leaderboard-backend-ol9f.onrender.com/api/users](https://leaderboard-backend-ol9f.onrender.com/api/users)
- 📦 **MongoDB**: Hosted on MongoDB Atlas (secured via environment variables)

---

## 🗃️ Technologies Used

| Layer     | Stack                       |
|-----------|-----------------------------|
| Frontend  | React, Axios, TailwindCSS   |
| Backend   | Node.js, Express            |
| Database  | MongoDB (Atlas)             |
| Deployment| Netlify (frontend), Render (backend) |

---

## 📂 Project Structure

leaderboard-app/
│
├── backend/
│ ├── models/
│ ├── controllers/
│ ├── routes/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── api/
│ │ └── App.jsx
│ └── index.html
│
├── .env
├── README.md
└── package.json

