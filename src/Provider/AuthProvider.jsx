import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Component/Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // observed auth state changed
  useEffect(()=>{
    const subscribe =onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        console.log('observed the curren state field',currentUser)
        setLoading(false)
    })
    return()=>{
        subscribe()
    }
  },[])
  
 
   const authInfo={user,createUser,signInUser,logOutUser,loading,signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;