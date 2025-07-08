# 🎬 My Movies App

A cross-platform mobile app built with **React Native** and **Expo Go** that lets users browse and explore movie content with rich details and modern UI. Authenticated users can sign in using **Google** or **Email/Password** via Firebase Authentication.

---

## 📱 Features

- 🔍 **Browse Movies**: Discover a vast collection of movies.
- 📄 **Detailed Info**: View description, ratings, cast, and production budget.
- 🧠 **Smart Categories**:
  - Trending
  - Popular
  - Similar Movies
- 🔐 **Authentication**:
  - Google Sign-In (OAuth 2.0)
  - Email & Password
- 🧠 **Global State Management** using Context API
- 🚀 Built and previewed with **Expo Go**

---

## 🛠️ Tech Stack

| Tool/Library        | Purpose                                |
|---------------------|----------------------------------------|
| React Native        | Cross-platform mobile development      |
| Expo Go             | Rapid testing & development            |
| Firebase Auth       | User authentication (Google & Email)   |
| Firebase Firestore  | Data storage & real-time sync          |
| Context API         | State management                       |
| TMDB API *(or similar)* | Movie data and content             |

---

## 🚧 Installation

```bash
git clone https://github.com/yourusername/my-movies.git
cd my-movies
npm install
npx expo start or npm start
```

📲 Scan the QR code with your **Expo Go** app to run on your phone.

---

## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project and enable:
   - Email/Password Auth
   - Google Auth
3. Set up Firestore Database
4. Add your Firebase config to the project (typically in a `firebase.js` file)


```js
// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  ...
};

const app = initializeApp(firebaseConfig);
export default app;
```

---

## 📌 To-Do

- [ ] Add search functionality
- [ ] Implement user favorites/watchlist
- [ ] Improve accessibility
- [ ] Add animations and transitions

---

## 💬 Feedback

Feel free to fork, star ⭐ and open issues if you encounter any bugs or want to suggest features!

---

### Made with ❤️ by Anton Nageh
