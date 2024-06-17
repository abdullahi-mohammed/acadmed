import { app } from "../firebase/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [popup, setPopup] = useState(null);


    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setPopup({ type: "success", msg: "Login Successful" })
            // ...
        })
        .catch((error) => {
            setPopup({ type: "error", msg: error.message.replace("Firebase: ", "") })
        });
    }

    const signUp = (email, password, username) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            updateUserData(username, "")
            const user = userCredential.user;
            setPopup({ type: "success", msg:  "Signup Successful" })
            // ...
        })
        .catch((error) => {
            setPopup({ type: "error", msg:  error.message.replace("Firebase: ", "") })
        });
    }
    
    const socialSignIn = (type) => {
        if(type === "Google") {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user
                console.log(user, token)
                setPopup({ type: "success", msg:  "Login Successful" })

            })
            .catch(error => {
                const msg = error.message;
                setPopup({ type: "error", msg: msg.replace("Firebase: ", "") })
            })
        }
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setPopup({ type: "success", msg:  "Logout Successful" })
            // Sign-out successful.
          }).catch((error) => {
            setPopup({ type: "error", msg:  error.message.replace("Firebase: ", "") })
            // An error happened.
          });
    }
    
    const updateUserData = (displayName, photoURL) => {
        updateProfile(auth.currentUser, { displayName, photoURL })
        .then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, [setUser]);

    return (
        <AuthContext.Provider value={{ user, popup, setPopup, signIn, signUp, socialSignIn, logOut }}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;