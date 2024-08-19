  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyALLfsdknDF_TxSXCptDrfxcA4POYGu4Iw",
    authDomain: "gokulweb123-36816.firebaseapp.com",
    projectId: "gokulweb123-36816",
    storageBucket: "gokulweb123-36816.appspot.com",
    messagingSenderId: "920756853305",
    appId: "1:920756853305:web:aa495b2745af221f20cbe8",
    measurementId: "G-00Z42HLRR6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db,'user/'+document.getElementById("username").value),{
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    });
    alert("Login SuccessFull");
  })
