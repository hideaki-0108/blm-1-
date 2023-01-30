import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBy2NTXpapUVySmg1dMtk-q0XvX5fZB_s0',
  authDomain: 'bluetooth-indoormap.firebaseapp.com',
  projectId: 'bluetooth-indoormap',
  storageBucket: 'bluetooth-indoormap.appspot.com',
  messagingSenderId: '961498286889',
  appId: '1:961498286889:web:a1df6ecb71003f7546c538',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;
