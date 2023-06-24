import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const { VITE_APP_FIREBASE_API_KEY, VITE_APP_FIREBASE_PROJECT_ID } = import.meta.env;

const firebaseApp = initializeApp({
  apiKey: VITE_APP_FIREBASE_API_KEY,
  authDomain: `${VITE_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${VITE_APP_FIREBASE_PROJECT_ID}.appspot.com`,
});

export const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence);
