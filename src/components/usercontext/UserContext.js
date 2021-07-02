
import React, { useState, createContext } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        {id:'1', name: 'Md Tobibur', position:'Full Stact', salary:25000 },
        {id:'2', name: 'Rohman', position:'WordPress', salary:30000 },
        {id:'3', name: 'Anas Mahmud', position:'Web Designer', salary:20000 }
    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};


