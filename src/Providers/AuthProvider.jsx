import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(true);
    const [loader, setLoader] = useState(true)

    const signInWithPassword = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignup = () => {
        setLoader(false)
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name) => {
        setLoader(false)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const loginWithGoogle = () => {
        setLoader(false)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        googleSignup,
        signInWithPassword,
        updateUserProfile,
        loginWithGoogle,
        createUser,
        logOut,
        loader,
    }

    //User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
            console.log("Current User:", currentUser);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;