import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    function login() {
        setIsAuth(true);
    }


    return (
        <AuthContext.Provider
            value={{isAuth, login}} >
            {children}
        </AuthContext.Provider>


    );
}