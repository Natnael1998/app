import { createContext, useContext, useEffect, useState } from "react";
import { auth,db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc,doc} from "firebase/firestore"

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user,setUser] = useState({})
 
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)

    }
    function logOut(){
        return signOut(auth) 
    }
        useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });
          return () => {
            unsubscribed();
          };
        });
  return <AuthContext.Provider value={{user,logIn,logOut}}>{children}</AuthContext.Provider>;
}
export function UserAuth() {
  return useContext(AuthContext);
}
