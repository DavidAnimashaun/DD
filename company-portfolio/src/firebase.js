// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvFpRPA-PK4CQRcFRSudCCgqc5u23sfYg",
  authDomain: "versa-web-design-7a546.firebaseapp.com",
  projectId: "versa-web-design-7a546",
  storageBucket: "versa-web-design-7a546.appspot.com",
  messagingSenderId: "651038715404",
  appId: "1:651038715404:web:c454ac2085624b7262c829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };