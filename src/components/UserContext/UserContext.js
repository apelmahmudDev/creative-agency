import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [user, setUser] = useState({
        isSigned: false,
        name: '',
        email: '',
        photo: ''
    });
    
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};
