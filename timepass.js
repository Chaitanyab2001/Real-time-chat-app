// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM9BEzW6thsJqTJ08EJr93PFfprcacVG8",
  authDomain: "real-time-chat-app-dd334.firebaseapp.com",
  projectId: "real-time-chat-app-dd334",
  storageBucket: "real-time-chat-app-dd334.appspot.com",
  messagingSenderId: "368074025840",
  appId: "1:368074025840:web:17b29676392de0dfdb3db5",
  measurementId: "G-3Z7S44JM64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);