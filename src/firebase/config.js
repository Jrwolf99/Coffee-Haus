import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAuLObNqj8SRRoUiqptSvPo0BJBGTeGVw",
  authDomain: "coffee-haus.firebaseapp.com",
  projectId: "coffee-haus",
  storageBucket: "coffee-haus.appspot.com",
  messagingSenderId: "695144685557",
  appId: "1:695144685557:web:8321d480bba2d06d098abc",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
