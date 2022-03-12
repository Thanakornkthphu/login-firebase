import React, { useState, useEffect, createContext, useContext } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect
} from 'firebase/auth'


import { auth } from '../services/firebase/firebase'

const userAuthContext = createContext();

export function useUserAuth() {
    return useContext(userAuthContext);
}

export function UserAuthContextProvider({ children }) {
    
    const [user, setUser] = useState('');
    
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function signInWithGoogle() {
        const googleProvider = new GoogleAuthProvider();
        return signInWithRedirect(auth, googleProvider)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        })
        return unsub();
    }, [])

    const value = {
        user,
        signUp,
        signIn,
        logOut,
        signInWithGoogle
    }

    return <userAuthContext.Provider value={value}>
                {children}
            </userAuthContext.Provider>
}
