import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

//eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    
    const registerwithEmailPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }


    const authData = {
        registerwithEmailPassword,
        setUser, 
        user,
    };
    
    return <AuthContext.Provider value={authData}>
        {children}
        </AuthContext.Provider>
    
};



export default AuthProvider;