import {Button, List, SwipeableDrawer} from "@mui/material";
import "../App.css";
import "../Style/menu.css";
import {Link} from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {ButtonsAuth} from "./Header";
import {logIn} from "../Icons/login";

function Menu({isAuthenticated, openMenu, setOpenMenu}) {  //відбулося піднесення стану до батьківського компонента, в такому випадку у Screen
    const menuList = isAuthenticated ? [
        {url: '/', title: 'Games'},
        {url: '/live-casino', title: 'Live Casino'},
        {url: '/promotions', title: 'Promotions'},
        {url: '/tournaments', title: 'Tournaments'},
        {url: '/achievements', title: 'Achievements'},
        {url: '/shop', title: 'Shop'},
        {url: '/profile', title: 'Profile'},
    ] : [
        {url: '/', title: 'Games'},
        {url: '/live-casino', title: 'Live Casino'},
        {url: '/promotions', title: 'Promotions'},
        {url: '/tournaments', title: 'Tournaments'},
        {url: '/achievements', title: 'Achievements'},
        {url: '/shop', title: 'Shop'},
    ]

    return (
        <SwipeableDrawer
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            onOpen={() => setOpenMenu(true)}
        >
            <nav className="nav-menu">
                <List>
                    {menuList.map(
                        ({url, title}) =>
                            <Link to={url}>
                                <Button
                                    fullWidth
                                    endIcon={<ArrowForwardIosIcon color="#A86D7A"/>}
                                >
                                    {title}
                                </Button>
                            </Link>
                    )}

                </List>
            </nav>

            {isAuthenticated ? (
                <Button>Logout</Button>
            ) : (
                <div className="auth_buttons_menu">
                <ButtonsAuth  icon={logIn} title="Log In"/>
                <ButtonsAuth  title="Register"/>
                </div>
            )}
        </SwipeableDrawer>
    )

}

export default Menu;