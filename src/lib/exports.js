export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"; //eslint-disable-line

export {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  orderBy,
  addDoc,
  updateDoc,
  where,
  arrayRemove,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"; //eslint-disable-line

export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"; //eslint-disable-line
