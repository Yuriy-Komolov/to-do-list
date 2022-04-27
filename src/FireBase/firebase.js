import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDwsIzImmaV9mLn57trL1I4ai3VFUlPlH4",
  authDomain: "mytodolist-d0447.firebaseapp.com",
  projectId: "mytodolist-d0447",
  storageBucket: "mytodolist-d0447.appspot.com",
  messagingSenderId: "142152646358",
  appId: "1:142152646358:web:d2947370e1be6903e69377",
  measurementId: "G-Q6YK0CDZSV",
};

const app = initializeApp(config);

export const auth = getAuth(app);

export const monitorAuthChange = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("it is working");
    } else {
      console.log("not working");
    }
  });
};

export const logout = async () => {
  await signOut(auth);
};

export default app;
