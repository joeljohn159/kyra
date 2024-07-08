import classes from './CreateShop.module.css';
import { motion } from 'framer-motion';
import { Link, useSubmit } from 'react-router-dom';
import { Form } from 'react-router-dom';
import loadingBuffering from '../../../../assets/Shops/loadingBuffering.gif'
import greenTick from '../../../../assets/Shops/greenTick.png'
import { useState } from 'react';
import { createShop } from '../../../../services/httpShop'
import { toast } from 'react-toastify';


export default function CreateShop() {
    const [myLocation, setMyLocation] = useState();
    const submit = useSubmit();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        if (!myLocation) {
            alert("Click Get Coordinates. to capture your shop location!")
            return
        }
        formData.append('coord', JSON.stringify(myLocation))
        submit(formData, { method: 'post', action: '/CreateShop' })
    }
    const handleCoordinates = (e) => {
        e.preventDefault();
        setMyLocation(null)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => { setMyLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }) })
        } else {
            return alert("not supported by browser!")
        }

    }
    return (
        <div className={classes.mainContainer} >

            <motion.div
                className={classes.container}
                initial={{ x: '500px' }}
                animate={{ x: '0px' }}
                exit={{ x: '-500px' }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <Link to='/' className={classes.Close}>X</Link>
                <h3>Enter Shop Details</h3>
                <Form onSubmit={handleFormSubmit} className={classes.rightForm}>
                    <div>
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="name" >Shop type</label>

                        <select name="shopType" id="shopType" required>
                            <option className={classes.dullOption} selected hidden disabled>Select type</option>
                            <option value="Electric">Grocery</option>
                            <option value="Electric">Electric</option>
                            <option value="Pipe">Pipe</option>
                            <option value="others">others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email">Shop Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Phone No</label>
                        <input type="text" name="phone" id="phone" required />
                    </div>
                    <div className={classes.coordinate}>
                        {/* <input type="text" hidden name='latitude' value={myLocation.latitude || 'null'}/>
                <input type="text" hidden name='longitude' value={myLocation.longitude || 'null'}/> */}
                        <button onClick={handleCoordinates} >Get Coordinates {myLocation === undefined ? undefined : myLocation === null ? (<img src={loadingBuffering} alt="loadingBuffering" />) : (<img src={greenTick} alt="greenTick" />)}</button>
                    </div>
                    <div className={classes.checkbox1}>
                        <input type="checkbox" required />
                        <p>I agree to all the policy provided by the company and I will be responsible for misuses the company resources and strict legal action will be taken.</p>

                    </div>

                    <input type="hidden" name="mode" />

                    <button >Create my Shop</button>
                </Form>
            </motion.div>

        </div>

    )
}


export async function action({ request }) {
    const formData = await request.formData();
    const data = {
        name: formData.get('name'),
        type: formData.get('shopType'),
        shopEmail: formData.get('email'),
        phone: formData.get('phone'),
        coord: formData.get('coord')
    }
    try {
        const res = await createShop(data);

        toast.success("Shop Created", {
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
        return redirect('/');
    } catch (err) {
        return err
    }


}


