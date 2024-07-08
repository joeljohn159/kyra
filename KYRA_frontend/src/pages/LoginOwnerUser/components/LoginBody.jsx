import classes from './LoginBody.module.css';
import { Navigate, useSearchParams, Form, Link, redirect, useNavigation, useActionData } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';

import { setToken } from '../../../utils/authToken';


export default function LoginBody() {
    const { auth, setAuth } = useContext(AuthContext);

   
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');

    if (mode != 'owner' && mode != 'user') {
        return <Navigate to='/'></Navigate>
    }

    const navigation = useNavigation();
    const httpStatus = navigation.state === 'submitting';
    const variants = {
        initial: {
            scale: 1.03,
        },
        animate: {
            scale: 1,
            transition: { scale: { duration: 0.3 }, type: 'spring' }
        }
    }

    return (
        <div className={classes.mainContainer}>
            <motion.div className={classes.centerContainer}
                variants={variants}
                initial="initial"
                animate="animate"
                key={mode}
            >
                <Form method='post' action='/login'>
                    <h2>{mode[0].toUpperCase() + mode.slice(1)} Login</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input placeholder='login' type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input placeholder='password' type="password" name="password" id="password" required />
                    </div>
                    <input type="hidden" name='mode' value={mode} />
                    <button disabled={httpStatus}>{httpStatus ? 'submitting...' : 'Login'}</button>

                </Form>
                {mode === 'owner' ? undefined : (<p>Are you Shop owner? <Link to='/Login?mode=owner'>Click here to login</Link></p>)}
            </motion.div>
        </div>
    );
}


export async function action({ request }) {


    const url = 'http://127.0.0.1:3000'
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const mode = formData.get('mode')

    const path = await axios.post(`${url}/login`, { email, password }).then(res => {
        if (res.status === 200) {
            toast.success("Logged In", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            setToken(res.data)
            return redirect(`/shop`)
        }
        return redirect(`/Login?mode=${mode}`);
    }).catch(err => {
        console.log(err)
        toast.error("please try again with correct credentials", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        });
        return redirect(`/Login?mode=${mode}`);
    })

    return path;
}