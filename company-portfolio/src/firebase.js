/*import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP9RPFp6U5_O63lAyhp1e_E80IfZyTIJY",
  authDomain: "versa-web-design-71956.firebaseapp.com",
  projectId: "versa-web-design-71956",
  storageBucket: "versa-web-design-71956.appspot.com",
  messagingSenderId: "963275800079",
  appId: "1:963275800079:web:12facecd6f770a473bad7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };*/

  //import firebase from 'firebase';
  import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore';
  const firebaseConfig = {
  //var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAP9RPFp6U5_O63lAyhp1e_E80IfZyTIJY",
    authDomain: "versa-web-design-71956.firebaseapp.com",
    projectId: "versa-web-design-71956",
    storageBucket: "versa-web-design-71956.appspot.com",
    messagingSenderId: "963275800079",
    appId: "1:963275800079:web:12facecd6f770a473bad7a"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  //var db = firebaseApp.firestore();

  console.log('Firestore database:', db);

  export { db };