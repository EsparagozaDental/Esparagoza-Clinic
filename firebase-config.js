// Esparagoza Dental Hub - Firebase Configuration
// ----------------------------------------------
// Keep this file in the SAME FOLDER as index.html
// Example structure:
//   /esparagoza-dental-hub/
//     ├── index.html
//     └── firebase-config.js

// Import Firebase core SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

// Import optional Analytics (you can comment this out if not needed)
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV39b2CkzS_tt75SVXa6z95s6f4qVlfLg",
  authDomain: "esparagozadentalclinic-6a744.firebaseapp.com",
  databaseURL: "https://esparagozadentalclinic-6a744-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esparagozadentalclinic-6a744",
  storageBucket: "esparagozadentalclinic-6a744.firebasestorage.app",
  messagingSenderId: "959639046373",
  appId: "1:959639046373:web:ccf39df13d94e527fcec0c",
  measurementId: "G-KZT5J1LHHQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Optional: enable analytics (safe to leave commented if not needed)
try {
  getAnalytics(app);
} catch (err) {
  console.warn("Analytics not supported in this environment");
    }
