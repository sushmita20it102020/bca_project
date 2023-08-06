import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection,addDoc,setDoc,updateDoc,doc,onSnapshot,query,where,getDocs,getDoc} from "firebase/firestore"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile,signInWithCredential,sendPasswordResetEmail} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBrKii-D2-XHFSqNQpz6fbDDbMzWPuEArc",
  authDomain: "chatbot-a4c4e.firebaseapp.com",
  projectId: "chatbot-a4c4e",
  storageBucket: "chatbot-a4c4e.appspot.com",
  messagingSenderId: "1060272548963",
  appId: "1:1060272548963:web:3bcdbf85f4b2643ab99c56"
};

 export {app,query,where,getDocs,getDoc,signInWithPopup,GoogleAuthProvider,doc,updateDoc,addDoc,setDoc,ref,uploadBytes, getDownloadURL,signInWithCredential,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile,onSnapshot,sendPasswordResetEmail} 