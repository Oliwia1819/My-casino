import {Button, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {theme} from "./Theme";
import "../Style/header.css";


function Header({isAuthenticated, balance}){ //isAuthenticated має імнортуватись з authProvider, balance з історії поповнення
    return <>
        <header>
            {isAuthenticated ?(
            <div className="header">
                <div className='wrap_menu'>
                    <IconButton sx={{margin: 0, padding: 0}} ><MenuIcon  /></IconButton>
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
                    <IconButton sx={{margin: 0, padding: 0}} ><MenuIcon /></IconButton>
                    <h1>XCasino</h1>
                </div>
                <div className='wrap_buttons'>
                    <ButtonsAuth title="Log In" />
                    <ButtonsAuth title="Register" />
                </div>
            </div>
            )}
        </header>
    </>
}

function ButtonsAuth({title}) {
    return <>
    <Button sx={{background: theme.palette.secondary.main, color: "#fff", textTransform: "none"}}>{title}</Button>
    </>
}

export default Header;