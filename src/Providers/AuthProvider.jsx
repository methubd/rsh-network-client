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
            setLoader(true)
            setUser(currentUser);

            console.log("Current User:", currentUser? currentUser.displayName : 'No User');

            if(currentUser){

                fetch('http://localhost:5000/jwt', {
                    method: 'POST', 
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('Access_Token', data.token)
                    setLoader(false)
                })

            }
            
            localStorage.removeItem('Access_Token')
            
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