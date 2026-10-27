# 🚀 TaskFlow — Node.js + React

![Node](https://img.shields.io/badge/Node.js-Express-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Auth](https://img.shields.io/badge/Auth-JWT-orange)

---

## 📌 Description

Application web permettant à un utilisateur authentifié de gérer ses tâches personnelles avec gestion de médias (avatar, image, vidéo).

---

## ⚙️ Stack

- Front : React
- Back : Node.js (Express)
- BDD : MySQL
- Auth : JWT

---

## ✨ Fonctionnalités

### 🔐 Authentification
- Inscription
- Connexion
- Accès sécurisé

### 📋 Tâches
- CRUD complet
- Filtres (statut / priorité)

### 🖼️ Médias
- Avatar utilisateur
- Image par tâche
- Vidéo (bonus)

---

## 🧠 Logique métier

- Accès limité à l’utilisateur
- Validation des données
- Vérification des droits
- Sécurité JWT

---

## 🗄️ Base de données

### Users
- id, username, email, password, avatar_path

### Tasks
- id, title, description, status, priority, image_path, video_path, user_id

---

## 📡 API

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Tasks
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

---

## 📁 Structure

```

backend/
frontend/

```

---

## 🎯 Objectifs

- Consolider Node.js
- Travailler auth + sécurité
- Implémenter upload fichiers

---

## 📸 Aperçu

*(à compléter)*

---

## 📌 Améliorations possibles

- Recherche
- Pagination
- Catégories