import app from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = 
{
    apiKey: "AIzaSyCS6dlPLA0GO3t06yPUPgFfwbFXdvaJtLQ",
    authDomain: "joblistin1.firebaseapp.com",
    projectId: "joblistin1",
    storageBucket: "joblistin1.appspot.com",
    messagingSenderId: "182249865848",
    appId: "1:182249865848:web:6e7714691f32f87ff6a38d"
}; 


// Initialize Firebase  
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore()

export { firebase, firestore, app};