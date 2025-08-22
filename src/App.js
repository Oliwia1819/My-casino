import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from "./Screens/Main";
import {ThemeProvider} from "@mui/material";
import {theme} from "./Components/Theme";
import NotFound from "./Screens/NotFound";
import RegisterProvider from "./Providers/RegisterProvider";
import LogInProvider from "./Providers/LogInProvider";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    }, {
        path: "*",
        element: <NotFound/>,
    },
]);


function App() {
    return <>
        <ThemeProvider theme={theme}>
            <RegisterProvider>
                <LogInProvider>
                    <RouterProvider router={router}/>
                </LogInProvider>
            </RegisterProvider>
        </ThemeProvider>
    </>
}

export default App;
