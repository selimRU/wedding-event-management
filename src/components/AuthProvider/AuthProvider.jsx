import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // password create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signi with password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // on auth state management
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const autheValues = {
        user,
        loading,
        googleLogin,
        createUser,
        login,
        profileUpdate,
        logOut,


    }
    return (
        <AuthContext.Provider value={autheValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;