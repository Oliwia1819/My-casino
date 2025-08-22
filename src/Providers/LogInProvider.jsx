import {createContext, useState} from "react";

export const LogInContext = createContext();

export default function LogInProvider ({children}){
    const [open, setOpen] = useState(false);
    const handleLogInOpen = () => setOpen(true);
    const handleLogInClose = () => setOpen(false);
    return <LogInContext.Provider value={{open, setOpen, handleLogInOpen, handleLogInClose}}>
        {children}
    </LogInContext.Provider>
}

