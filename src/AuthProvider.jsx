import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import auth from "./Firebase/firebase.config.js"
import {  GoogleAuthProvider,  onAuthStateChanged,  signInWithPopup, signOut } from "firebase/auth";


 export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,SetUser]=useState(null);
    const[loading,setLoading]=useState(true);
   const provider=new GoogleAuthProvider();
   const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup( auth ,provider)
    
   }
   const logOut=()=>{
    return signOut(auth)
   }
   useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        SetUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        return unSubscribe();
    }
   },[])
    const authInfo={
        user,loading,googleSignIn,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;