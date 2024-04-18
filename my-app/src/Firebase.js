// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOt0IxDaKaFc01sLDCG3pNHi2sTYFPs3M",
  authDomain: "interviewprep-d2fc1.firebaseapp.com",
  projectId: "interviewprep-d2fc1",
  storageBucket: "interviewprep-d2fc1.appspot.com",
  messagingSenderId: "174096538807",
  appId: "1:174096538807:web:58d152e0929694075e8132",
  measurementId: "G-VKSJSB2WM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);