import classes from './HomePage.module.css';
import { NavLink, Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import Navbar from '../../features/navbar/Navbar';
import shopTemplate from '../../assets/Shops/shopTemplate.svg';
import addShop from '../../assets/Shops/addShop.svg';


export default function HomePage(){

    // const [pop, setPop] = useState(false);

    // function handlePopup(){
    //     console.log("Am I here")
    //     setPop(!pop)
    // }

    const homePage = <>
    <Navbar />
    <div className = {classes.container}>
        <div className={classes.myShopsContainer}>
            <p>My Shops</p>
            <div className={classes.myShops}>
                <div className={classes.block}>
                    <img src={shopTemplate} alt="#" />
                    <p>Shop Name</p>
                </div>
                <Link to='/CreateShop' className={classes.block}>
                    <img src={addShop} alt="#" />
                    <p>Add Shop</p>
                    
                </Link>
            </div>
        </div>
    </div></>
    return homePage 
        
    
      {/* <NavLink to='/createAccount'> Click here to create Account</NavLink> */}

}