# 📱 AppStore – Discover & Manage Your Favorite Apps

Welcome to **AppStore**, a user-friendly platform to discover, explore, install, and review apps across various categories like Education, Productivity, and Gaming. Built with React and Firebase, it offers a smooth, responsive, and engaging experience for all users.

---

## 🚀 Live Demo

👉 [Visit Live Site](https://appstore-by-ratul.web.app)

---

## 🎯 Project Purpose

This project simulates a modern App Store platform with essential features including:
- Category-based browsing
- Secure authentication
- Dynamic routing
- Personalized profiles
- Interactive reviews

It focuses on real-world SPA features and responsive design to create a professional user experience.

---

## 🔑 Key Features

- 🔐 **Authentication** (Email/Password + Google Login) with Firebase
- 🎞️ **Homepage Slider** showcasing featured/promoted apps
- 📈 **Trending Apps** section sorted by top ratings
- 🗂️ **Browse Apps by Category**: Education, Gaming, Productivity
- 📦 **App Details Page** with install/uninstall toggle
- 📝 **Submit Reviews** (text + 1–5 rating) – allowed only if app is installed
- 🧑‍💻 **My Profile Page**: view and update name & photoURL
- ➕ **Extra Route/Page** for additional custom functionality
- ❌ **404 Not Found Page** for invalid routes
- 🔁 **Persistent Login** using `onAuthStateChanged`
- 🌐 **Dynamic Page Titles** using `react-helmet-async`
- 📱 **Responsive Design**: Mobile, Tablet, Desktop

---

## 🛠️ Tech Stack

### ⚛️ Frontend
- **React.js** (Vite)
- **React Router DOM**
- **Tailwind CSS + DaisyUI**
- **Firebase Authentication**
- **SweetAlert2 / React Toastify**
- **React Helmet Async**
- **Heroicons** or **React Icons**
- **Imgbb** for image hosting

---

- Step 1: Clone the client repository

- Step 2: Navigate into the project folder

- Step 3: Install dependencies
npm install

- Step 4: Create a `.env` file with the following variables
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_appId


- Step 5: Run the development server
npm run dev

## 📦 NPM Packages

```bash
firebase
react-router-dom
react-toastify
sweetalert2
react-helmet-async
