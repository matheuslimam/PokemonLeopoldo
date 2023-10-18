// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebase = require("firebase");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJnSYJ1wqYotEcBB9z5UI7o4fMP00Dl1s",
    authDomain: "pokemonleopoldo-4c89a.firebaseapp.com",
    databaseURL: "https://pokemonleopoldo-4c89a-default-rtdb.firebaseio.com",
    projectId: "pokemonleopoldo-4c89a",
    storageBucket: "pokemonleopoldo-4c89a.appspot.com",
    messagingSenderId: "626398900153",
    appId: "1:626398900153:web:57d06fd74445011d6b9068"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Adicione um documento vazio na coleção 'user_opinion'
db.collection("user_opinion").add({
    text: ""
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

// Escute o evento de envio do formulário
document.getElementById('yourOpinion').addEventListener('submit', function(evt) {
    evt.preventDefault();

    // Obtenha o valor da opinião
    var opinion = document.getElementById('opnion').value;

    // Adicione a opinião ao Firestore
    db.collection("user_opinion").add({
        opinion: opinion,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});
