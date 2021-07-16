import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcJvCqxWWOfmhA0MV9GGAWyBYjEv8t5fU",
  authDomain: "eudes-clone-459a5.firebaseapp.com",
  projectId: "eudes-clone-459a5",
  storageBucket: "eudes-clone-459a5.appspot.com",
  messagingSenderId: "598788350207",
  appId: "1:598788350207:web:25cee8f885e246e59c2cca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
