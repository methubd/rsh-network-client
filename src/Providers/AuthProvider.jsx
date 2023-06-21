import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(true);

    const googleSignup = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        googleSignup,
        updateUserProfile,
        loginWithGoogle,
        logOut,
    }

    //User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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