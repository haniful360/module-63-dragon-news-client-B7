// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbtS00IaDu75ddHXYoe-8R4xls2dTGmvE",
  authDomain: "the-dragon-news-e95da.firebaseapp.com",
  projectId: "the-dragon-news-e95da",
  storageBucket: "the-dragon-news-e95da.appspot.com",
  messagingSenderId: "186811793426",
  appId: "1:186811793426:web:8ba02084b5547e32de58cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;