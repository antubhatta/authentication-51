import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Component/Firebase/Firebase.config";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const subScribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log("observing current user side effect properties used",currentUser)
        })
        return ()=>{
            subScribe()
        }
    },[])
  
 
   const authInfo={user,createUser,signInUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;