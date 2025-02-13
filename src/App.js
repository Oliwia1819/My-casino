import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./Screens/Main";
import {ThemeProvider} from "@mui/material";
import {theme} from "./Components/Theme";
import NotFound from "./Screens/NotFound";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },{
    path: "*",
    element: <NotFound />,
  },
]);



function App() {
  return <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
}

export default App;
