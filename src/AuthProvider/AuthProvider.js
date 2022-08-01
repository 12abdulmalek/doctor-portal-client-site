import React, { createContext } from 'react';
import useHooks from '../hooks/useHooks';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useHooks();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;