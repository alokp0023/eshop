import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCH_7R7sTK2NBanGf1-nhZXeTqm6VPQKMo",
  authDomain: "eshop-3a4af.firebaseapp.com",
  projectId: "eshop-3a4af",
  storageBucket: "eshop-3a4af.appspot.com",
  messagingSenderId: "743610606809",
  appId: "1:743610606809:web:ced9fab46c7598265a8ac8",
  measurementId: "G-9FPG13NN82",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
