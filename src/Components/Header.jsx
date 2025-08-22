import {Button, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {theme} from "./Theme";
import "../Style/header.css";
import {useContext} from "react";
import {RegisterContext} from "../Providers/RegisterProvider";
import {LogInContext} from "../Providers/LogInProvider";




function Header({isAuthenticated, balance, openMenu, setOpenMenu}){ //isAuthenticated має імпортуватись з authProvider, balance з історії поповнення
    const {handleRegisterOpen} = useContext(RegisterContext);
    const {handleLogInOpen} = useContext(LogInContext);

    return <>
        <header
            style={{borderBottom: openMenu ? "1px solid #6C2B3F" :  "none"}}
        >
            {isAuthenticated ?(
            <div className="header">
                <div className='wrap_menu'>
                    <ButtonsMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                    <h1>XCasino</h1>
                </div>
                <div className='wrap_buttons'>
                    <p>${balance}</p>
                    <IconButton><AccountCircleIcon /></IconButton>
                </div>
            </div>
                ):(
            <div className="header">
                <div className='wrap_menu'>
                    <ButtonsMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                    <h1>XCasino</h1>
                </div>
                <div className='wrap_buttons'>
                    <ButtonsAuth title="Log In" onclick={handleLogInOpen}/>
                    <ButtonsAuth title="Register" onclick={handleRegisterOpen} />
                </div>
            </div>
            )}
        </header>
    </>
}

export function ButtonsAuth({title, icon, onclick}) {
    return <>
        <Button sx={{background: theme.palette.secondary.main, color: "#fff", textTransform: "none", marginRight: "14px"}} onClick={onclick}>
            {title}
            {icon && <span>{icon}</span>}
        </Button>
    </>
}

function ButtonsMenu({openMenu, setOpenMenu}){
    return <div>

            <IconButton sx={{margin: 0, padding: 0}} onClick={() =>setOpenMenu(!openMenu)}>
                {openMenu ? <CloseIcon />:<MenuIcon />}
            </IconButton>


    </div>
}

export default Header;