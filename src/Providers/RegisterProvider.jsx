import {createContext, useState} from "react";

export const RegisterContext = createContext();

export default function RegisterProvider({children}) {
    const [open, setOpen] = useState(false);
    const handleRegisterOpen = ()=>setOpen(true);
    const handleRegisterClose = ()=>setOpen(false);


    return <RegisterContext.Provider value={{open, setOpen, handleRegisterOpen, handleRegisterClose}}>
        {children}
    </RegisterContext.Provider>
}