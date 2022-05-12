// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD3jpudb3oGNCRYALrjuLlOiIDmWyLb8o",
    authDomain: "campagg-37239.firebaseapp.com",
    databaseURL: "https://campagg-37239-default-rtdb.firebaseio.com",
    projectId: "campagg-37239",
    storageBucket: "campagg-37239.appspot.com",
    messagingSenderId: "644856905905",
    appId: "1:644856905905:web:4c9b50b386807e49cd6290",
    measurementId: "G-RD0FKLGX2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth()
export default app