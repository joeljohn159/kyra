import classes from './Carousel.module.css';
import rightArrow from '../../../assets/Carousel/right.svg';
import leftArrow from '../../../assets/Carousel/left.svg';
import { useState } from 'react';
import {AnimatePresence,motion} from 'framer-motion'

export default function Carousel(){

const [selectedImage, setSelectedImage] = useState(0);
const [direction, setDirection] = useState(0);



const variants = {
    initial : (direction)=>{
        return {
            x: direction > 0 ?500 : -500 ,
            opacity:0.5,
            scale:1.05
        }
    },
    animate:{
        x:0,
        opacity:1,
        scale:1,
        transition:{
            x: {type:'spring', stiffness: 300, damping: 30},
            opacity : {duration: 0.2},
        }
    },
    exit:(direction)=>{
        return {
            x: direction > 0 ? -500 : 500  ,
            opacity:0
        }
    },
}

const IMAGES = [
    'https://plus.unsplash.com/premium_photo-1661764072587-0050cc57ac17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1559076294-ad5d97e1e7c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1549479732-ee0adb0f5d32?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1568645527914-d1d3edd2ee18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661381007965-b21e0fb0681b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

]

function leftSlide(){
    setDirection(-1);
    if(selectedImage === 0){
        setSelectedImage(IMAGES.length - 1);
        return
    }
    setSelectedImage(selectedImage - 1);

}

function rightSlide(){

    setDirection(1);
    if(selectedImage === IMAGES.length - 1){
        setSelectedImage(0);
        return
    }
    setSelectedImage(selectedImage + 1);

}

    return(
        <div className={classes.container}>
            <div className={classes.title}>
                <h3>Get your first order free with <span>KYRA</span></h3>
            </div>
            <div 
                className={classes.slides}
                variants={variants}
                initial="initial"
                animate="animate"
            >
            <AnimatePresence initial={false}>
                <motion.img 
                    src={IMAGES[selectedImage]} 
                    alt="CarouselImage" 
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={IMAGES[selectedImage]}
                    custom={direction}
                />
            </AnimatePresence>
                <a className={classes.leftArrow} onClick={leftSlide}><img src={leftArrow} alt="left" /></a>
                <a className={classes.rightArrow} onClick={rightSlide}><img src={rightArrow} alt="right" /></a>
            </div>
        </div>
    );
}