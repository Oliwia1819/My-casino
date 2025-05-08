import Header from "../Components/Header";
import {theme} from "../Components/Theme";
import "../Style/screen.css";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";
import {useState} from "react";
import Register from "../Components/register";

function Screen({children, className=''}){
    const [openMenu, setOpenMenu]=useState(false);  // створено тут, а не у Menu, щоб передавати пропсами одразу у два компоненти

    return <div className={'screen ' + className}>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Register />
        <div className='content' style={{background: theme.palette.primary.dark}} >
            {children}
        </div>
        <Footer />
        <Copyright />
    </div>
}

function Copyright(){
    return <div className="copyright"  style={{background: theme.palette.primary.dark, color:"white"}} >
        ©
        XCasino
    </div>
}

export default Screen;