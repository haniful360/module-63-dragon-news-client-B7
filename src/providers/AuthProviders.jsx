import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
    const user = null;
    const authInfo = { user }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;