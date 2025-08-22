import {Dialog, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import {useContext} from "react";
import {RegisterContext} from "../Providers/RegisterProvider";
import CloseIcon from "@mui/icons-material/Close";


function Register(){
    const {open, handleRegisterClose} = useContext(RegisterContext);
    return (
        <div>
        <Dialog
            open={open}
            onClose={handleRegisterClose}

            /*PaperComponent={
            styled={
                background: "#571234",

            }
            }*/
        >
            <DialogTitle sx={{background: "#571234"}}>
                <h1>Registration</h1>
                <IconButton><CloseIcon onClick={handleRegisterClose}/></IconButton>
            </DialogTitle>
            <DialogContentText>
                <h2>Already have an account? Login now</h2>
                <div>
                    <form action={"/register.php"} method="POST">
                        <p>Login</p>
                        <input type="text" name="login" placeholder="Username" />
                        <p>Password</p>
                        <input type="password" name="password" placeholder="Password" />
                        <button>Submit</button>
                    </form>
                </div>
            </DialogContentText>
        </Dialog>
        </div>
    )
}

export default Register;