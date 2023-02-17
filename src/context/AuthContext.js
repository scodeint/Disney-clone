import  { useContext, createContext } from "react";
import { GoogleAuthProvider, 
         signInWithPopup, 
         signInWithRedirect, 
         signOut,
         onAuthStateChanged 
        } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";


 
 export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({})
        const googleSignIn = () =>{
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        };

        useEffect (() =>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser);
            });
            return () =>{
                unsubscribe();
            }
        }, []);
    return(
        <AuthContext.Provider value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () =>{
    return useContext(AuthContext);
}



