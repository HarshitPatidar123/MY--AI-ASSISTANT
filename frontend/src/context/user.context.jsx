import React, { useState } from 'react';
import { UserContext } from './UserContext';

// Create a provider component
export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


