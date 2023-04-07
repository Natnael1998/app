import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7Y3Ax9z99aNSEYMO77zm-tPxZvkm6e9w",
  authDomain: "schh-e57f3.firebaseapp.com",
  projectId: "schh-e57f3",
  storageBucket: "schh-e57f3.appspot.com",
  messagingSenderId: "1022228616937",
  appId: "1:1022228616937:web:94aad075e2e8777a8e0278",
  measurementId: "G-97PW884TDM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
