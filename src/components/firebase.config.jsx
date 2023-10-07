// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx66zCb5C14m3GXlqm3e4tGrQKjiY5S_k",
    authDomain: "wedding-event-management-63ba7.firebaseapp.com",
    projectId: "wedding-event-management-63ba7",
    storageBucket: "wedding-event-management-63ba7.appspot.com",
    messagingSenderId: "743942196019",
    appId: "1:743942196019:web:cde60cda23ee106159cc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;