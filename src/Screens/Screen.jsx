import Header from "../Components/Header";
import {theme} from "../Components/Theme";
import "../Style/screen.css";

function Screen({children, className=''}){
    return <div className={'screen ' + className}>
        <Header />
        <div className='content' style={{background: theme.palette.primary.dark}} >
            {children}
        </div>
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