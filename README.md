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
<img src="https://i.ibb.co/WN8djb1j/Screenshot-2025-06-25-145241.png" alt="Project Screenshot" style="border:1px solid #ccc; border-radius:8px;" width="600" />

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

![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_DOM-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0FC8?style=for-the-badge&logo=daisyui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF4154?style=for-the-badge&logo=sweetalert&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-1B1F23?style=for-the-badge&logo=react&logoColor=white)
![React Helmet](https://img.shields.io/badge/React_Helmet_Async-222222?style=for-the-badge&logo=react&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Heroicons](https://img.shields.io/badge/Heroicons-0F172A?style=for-the-badge&logo=heroicons&logoColor=white)
![ImgBB](https://img.shields.io/badge/ImgBB_Image_Hosting-0099FF?style=for-the-badge&logo=imgur&logoColor=white)


---

- Step 1: Clone the client repository
--https://github.com/yourusername/appstore-client.git
- Step 2: Navigate into the project folder
--cd appstore-client

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
