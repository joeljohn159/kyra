import CreateAccountBody from "./components/CreateAccountBody.jsx";
import Navbar from "../../features/navbar/Navbar.jsx";
import classes from './CreateAccount.module.css'

export default function CreateAccount(){
    
    return (
        <div className={classes.createAccount}>
        <Navbar />
        <CreateAccountBody />
        </div>
        
    );
}