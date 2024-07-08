import { useSearchParams, Form, Navigate, redirect } from 'react-router-dom';
import { motion } from 'framer-motion'
import classes from './CreateOwnerUserBody.module.css'
import Carousel from "./Carousel";
import { signup } from '../../../services/auth';
import { toast, Bounce } from 'react-toastify';
import axios from 'axios';

export default function CreateOwnerUserBody() {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    if (mode === 'user' || mode === 'owner') {
    } else {
        return <Navigate to='/'></Navigate>
    }


    return (
        <div className={classes.mainContainer}>
            <div className={classes.left}>
                <Carousel />
            </div>
            <motion.div
                className={classes.right}
                initial={{ x: '500px' }}
                animate={{ x: '0px' }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <h3>Create {mode} account</h3>
                <Form method='post' action='/CreateOwnerUser' className={classes.rightForm}>
                    <div>
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" id="dob" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div>
                        <label htmlFor="Cpassword">Confirm password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" required />
                    </div>
                    <input type="hidden" name="mode" value={mode} />
                    <button type="submit">Create {mode}</button>
                </Form>
            </motion.div>
        </div>
    );
}

export async function action({ request, params }) {

    const formData = await request.formData();
    const mode = formData.get('mode');
    if (formData.get('password') !== formData.get('confirmPassword')) {
        toast.error('Password mismatch!', {
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

        return redirect(`/CreateOwnerUser?mode=${mode}`);
    }
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        name: formData.get('name'),
        dob: formData.get('dob'),
        role: mode
    }


    const URL = 'http://127.0.0.1:3000'


   const path =  await axios.post(`${URL}/signup`, data).then(res => {
        if (res.status === 201) {
            toast.success("Success", {
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
            return redirect(`/Login?mode=${mode}`);

        }
    }).catch(err => {
        toast.error(err.response.data.message[0].msg, {
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

        return redirect(`/CreateOwnerUser?mode=${mode}`);

    })

    return path;

};


