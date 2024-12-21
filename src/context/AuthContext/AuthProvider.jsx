import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../../firebase.init';

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    // const [user,setUser] = useState(null)

    const handleGoogleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
      }
    const handleRegister =(email,password)=>
        {
         return createUserWithEmailAndPassword(auth,email,password)
         
        }
        
        const handleLogin = (email,passward)=>{
          return signInWithEmailAndPassword(auth,email,passward)
        }

        

  const authInfo={
        handleGoogleLogin,
        handleRegister,
        handleLogin 
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;