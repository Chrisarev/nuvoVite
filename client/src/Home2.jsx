import { motion } from 'framer-motion'
import styles from './stylesheets/Home2.module.css'

import { Application } from '@splinetool/runtime';
import Spline from '@splinetool/react-spline'
import { useEffect } from 'react';

const Home2 = () => {

    useEffect(() => {

    }, [])

    return (
        <div className={styles.panel}>
            <Spline className={styles.splineScene} scene="https://prod.spline.design/AmPNUxrN1cVcLvdZ/scene.splinecode" />
        </div>
    )
}

export default Home2;
