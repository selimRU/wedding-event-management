import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    // password create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signi with password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
    }
    // on auth state management
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const autheValues = {
        googleLogin,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={autheValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;