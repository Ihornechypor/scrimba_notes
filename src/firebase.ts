import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBODmjiqaMWw2S6tBH1AIu6whW1Z1Z3LI4',
  authDomain: 'reactnotes-67d80.firebaseapp.com',
  projectId: 'reactnotes-67d80',
  storageBucket: 'reactnotes-67d80.appspot.com',
  messagingSenderId: '525532337167',
  appId: '1:525532337167:web:b72a0e1ba9325229a83f7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
