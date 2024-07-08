import Navbar from '../../features/navbar/Navbar.jsx'
import LoginBody from './components/LoginBody.jsx';
import classes from './LoginOwnerUser.module.css'

export default function LoginOwnerUser() {
    return (
        <div className={classes.container}>
            <Navbar></Navbar>
            <LoginBody></LoginBody>
        </div>

    )
}