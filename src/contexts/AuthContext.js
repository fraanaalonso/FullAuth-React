import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    const [currentUser, setUser] = useState();
    const [loading, setloading] = useState(true);
    
    const signUp = (email, password) => { 
        return auth.createUserWithEmailAndPassword(email, password);

     }

     const login = (email, password) => {
         return auth.signInWithEmailAndPassword(email, password);
     }

     const logout = () => {
        return auth.signOut();
     }

     const reset = (email) => { 
         return auth.sendPasswordResetEmail(email);
      }

      const updateEmail = (email) => {
            return currentUser.updateEmail(email)
      } 

      const updatePassword = (password) => {
          currentUser.updatePassword(password);
    } 



     useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setloading(false);
        })

        return unsuscribe;
     }, [])

    
    const value = {
        currentUser,
        signUp,
        login,
        logout,
        reset,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
