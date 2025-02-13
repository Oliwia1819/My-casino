import {Button, List} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";
import '../Style/footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return <footer style={{background: "#571234"}}>
        <Dropdown h4="Casino">
            <Link to="/top">Top</Link>
            <Link to='/new'>New</Link>
            <Link to='/halloween'>Halloween</Link>
            <Link to='/popular'>Popular</Link>
            <Link to='/excusive'>Exclusive</Link>
            <Link to='/slots'>Slots</Link>
        </Dropdown>

        <Dropdown h4="Promotions">
            <Link to='/achievements'>Achievements</Link>
            <Link to='/tournaments'>Tournaments</Link>
        </Dropdown>

        <Dropdown h4="Security and Privacy">
            <Link to='/security-policy'>Security Policy</Link>
            <Link to='/cookie-policy'>Cookie Policy</Link>
            <Link to='/responsible-gambling'>Responsible Gambling</Link>
            <Link to='/terms-and-conditions'>Terms and Conditions</Link>
        </Dropdown>

        <Dropdown h4="General Info">
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/payments'>Payments</Link>
            <Link to='/partners'>Partners</Link>
        </Dropdown>


    </footer>
}

function Dropdown({h4, children}) {
    const [open, setOpen] = useState(false);
    const Icon = open ? KeyboardArrowUpIcon : KeyboardArrowDownIcon
    return <div className="footer_section">
        <Button
            variant="contained" // заливка середини
            fullWidth
            onClick={() => {
                setOpen(!open)
            }} //при кліку змінюється стан open
            endIcon={<Icon/>}
        >
            {h4}
        </Button>
        {open && <List
            sx={{padding: 0}}>{children}</List>} {/* && повертає перше значення яке false, якщо open true, то повертає наступне*/}
    </div>
}

export default Footer;