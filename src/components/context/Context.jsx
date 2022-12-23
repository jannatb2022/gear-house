import React, { createContext, useContext } from 'react';
import {
   getAuth,
   onAuthStateChanged,
   signInWithPopup, 
   GoogleAuthProvider ,
   signOut ,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
   deleteUser } from "firebase/auth";

const AuthContext = createContext();
const Context = () => {



  return (
    <>
    
    </>
  )
}

export default Context