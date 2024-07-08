import classes from './Navbar.module.css';
import navIconInfo from '../../assets/navIcons/navIconInformation.svg';
import navIconContact from '../../assets/navIcons/navIcon.svg';
import navIconHome from '../../assets/navIcons/navIcon2.svg';

export default function Navbar(){
    return (
        <nav className={classes.navbar}>
            <img src="/KYRALogo.svg" alt="Logo" width="5%" />
            <ul>
                <li><img src={navIconHome} alt="Home" /></li>
                <li><img src={navIconContact} alt="contact" /></li>
                <li><img src={navIconInfo} alt="Info" /></li>
            </ul>
        </nav>
    )
}