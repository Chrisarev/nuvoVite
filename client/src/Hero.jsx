import { motion } from 'framer-motion'
import styles from './stylesheets/Hero.module.css'
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import Navbar from './Navbar'
import { useState } from 'react';
import nuvo from './stylesheets/images/nuvo.png'

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    const loadHelper = () => {
        setTimeout(() =>{
            setLoaded(true);
        },2000)
        setLoaded(true);
    }

    return (
        <>
            <div className={styles.panel}>
                {!loaded &&
                    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className={styles.loadingPanel}>
                        Loading...
                    </motion.div>
                }
                <Navbar />
                <div className={styles.content}>
                    <motion.h1 initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 2.5, duration: 0.5 }}>
                        <img src={nuvo} alt="nuvo" />
                        Design
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9, duration: 0.5 }}>Whatever you can envision, we can create.</motion.p>
                </div>
                <div className={styles.wrapper}>
                    <Spline onLoad={() => loadHelper()} className={styles.spline} scene="https://prod.spline.design/tGzMYEwm78FnA3rP/scene.splinecode" />
                </div>
            </div>
        </>
    )
}

export default Hero;
