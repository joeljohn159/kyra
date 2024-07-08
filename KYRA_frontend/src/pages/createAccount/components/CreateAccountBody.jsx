import classes from './CreateAccountBody.module.css';
import insta from '../../../assets/connectWithUs/instaLogo.svg'
import fb from '../../../assets/connectWithUs/fbIcon.svg'
import twitter from '../../../assets/connectWithUs/twitter.svg'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion';

export default function CreateAccountBody() {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.left}>
                <div className={classes.innerLeft}>
                    <h6>Welcome to</h6>
                    <h1>KYRA</h1>
                    <p>Make your shopping easier with KYRA.<br />
                        Place your order and pick up once you are free.
                    </p>
                </div>
            </div>


            <div className={classes.right}>

                <div className={classes.innerTopBlank}></div>

                <motion.div className={classes.innerRight}
                initial={{ opacity: 1, x: '50rem' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{type:'spring', duration:1.5}}
                >
                    <h3>Create Account</h3>
                    <div
                        className={classes.innerRightButtons}>
                            <button><Link to='/CreateOwnerUser?mode=owner'>Sign up as shop owner</Link></button>
                            <button><Link to='/CreateOwnerUser?mode=user'>Sign up as Customer</Link></button>
                            
                    </div>
                    <p>already have an account. <Link to='/Login?mode=user'>Login</Link> </p>
                    <div className={classes.connectWithUs}>
                        <p>Connect with us.</p>
                        <div className={classes.innerConnectWithUs}>
                            <img src={insta} alt="insta" />
                            <img src={fb} alt="fb" />
                            <img src={twitter} alt="twitter" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}