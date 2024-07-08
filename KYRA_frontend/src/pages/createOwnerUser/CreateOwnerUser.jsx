import Navbar from "../../features/navbar/Navbar";
import CreateOwnerUserBody from "./components/CreateOwnerUserBody";
import classes from './CreateOwnerUser.module.css';

export default function CreateOwnerUser() {
    return <div className={classes.creation}>
        <Navbar />
        <CreateOwnerUserBody />
    </div>
}

