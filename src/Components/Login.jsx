import {Dialog, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useContext} from "react";
import {LogInContext} from "../Providers/LogInProvider";

function LogIn(){
    const {open, handleLogInClose} = useContext(LogInContext);
    return <>
        <Dialog
        open={open}
        onClose={handleLogInClose}
        >
            <DialogTitle sx={{background: "#571234"}}>
                <h1>Log In</h1>
                <IconButton><CloseIcon onClick={handleLogInClose}/></IconButton>
            </DialogTitle>
            <DialogContentText>
                <h2>Already have an account? Login now</h2>
                <div>
                    <form action={"/login.php"} method="POST">
                        <p>Login</p>
                        <input type="text" name="login" placeholder="Username" />
                        <p>Password</p>
                        <input type="password" name="password" placeholder="Password" />
                        <button>Submit</button>
                    </form>
                </div>
            </DialogContentText>
        </Dialog>
    </>
}

export default LogIn;