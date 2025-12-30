# Pastebin Lite API

A lightweight Pastebin-like backend application built with **Node.js, Express, and MongoDB**.  
This service allows users to create text pastes with optional **time-to-live (TTL)** and **maximum view limits**, and access them via a public URL.

---

## 🚀 Features

- Create text pastes via REST API
- Optional expiration using TTL (time-based)
- Optional max view limit (auto-expire after views)
- Unique short paste IDs
- Publicly accessible paste URLs
- Deployed and accessible online

---
## how to run server file in local
node server.js

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ORM:** Mongoose
- **ID Generation:** nanoid
- **Deployment:** Render

---

## 📦 API Endpoints

### Create a Paste
**POST** `/api/pastes`
**GET** `/api/pastes/:id`


