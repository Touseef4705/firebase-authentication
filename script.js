const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth , 
    onAuthStateChanged ,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDknQKvSS5py0dwZRgYzLkn3yRoYhAmAYE",
    authDomain: "my-first-project-in-fb-e7ebf.firebaseapp.com",
    projectId: "my-first-project-in-fb-e7ebf",
    storageBucket: "my-first-project-in-fb-e7ebf.appspot.com",
    messagingSenderId: "989023782622",
    appId: "1:989023782622:web:2010ba2c97e40028c0a44f",
    measurementId: "G-X6GWF75KG0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  console.log(auth)

  
const sinup_email = document.getElementById("sinup_email");
const sinup_password = document.getElementById("sinup_password");
const sinup_btn = document.getElementById("sinup_btn");

const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");
const login_btn = document.getElementById("login_btn");


onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("Welcome!")
  } else {
    alert("Sorry Your Email/Password Didn't Match")
  }
});



sinup_btn.addEventListener("click" , ()=>{
  createUserWithEmailAndPassword(auth, sinup_email.value, sinup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
});

login_btn.addEventListener("click" , () => {
  signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
})