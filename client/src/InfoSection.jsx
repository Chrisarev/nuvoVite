import styles from './stylesheets/InfoSection.module.css'
import couch from './stylesheets/images/couch.png'
import ui from './stylesheets/images/uiux.png'
import {  motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const InfoSection = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 1.2, bounce: 0.2, delay: 0.1
                }
            })
            console.log('inview')
        }
        if (!inView) {
            animation.start({ y: '30vh', opacity: 0 })
        }
    }, [inView])

    return (
        <div className={styles.panel}>
            <motion.h1 animate={animation}id="infoHeader" className={styles.infoHeader}>We are a multi-talented group of developers looking to push the web forward.</motion.h1>
            <motion.div ref={ref} className={styles.visualsHolder}>
                <motion.div animate={animation} className={styles.visual}>
                    <div className={styles.mediaHolder}>
                        <img src={couch} alt="" />
                    </div>
                    <h2>3D Modeling</h2>
                    <p>Make your website stand out with custom 3D visuals.</p>
                </motion.div>
                <motion.div animate={animation} className={styles.visual}>
                    <div className={styles.mediaHolder}>
                        <svg width="100%" height="100%" viewBox="0 0 717 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint0_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint1_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint2_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint3_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint4_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint5_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint6_linear_1_2)" />
                            <circle className={styles.circle} cx="358" cy="192" r="25" fill="url(#paint7_linear_1_2)" />
                            <circle className={styles.largeCircle} cx="358.5" cy="192.5" r="72.5" fill="url(#paint8_linear_1_2)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint6_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint7_linear_1_2" x1="358" y1="167" x2="358" y2="217" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#7C15FF" />
                                    <stop offset="0.979167" stop-color="#0019FF" stop-opacity="0.5" />
                                    <stop offset="1" stop-color="#FF00E6" stop-opacity="0.5" />
                                </linearGradient>
                                <linearGradient id="paint8_linear_1_2" x1="358.5" y1="120" x2="358.5" y2="265" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3300FF" />
                                    <stop offset="0.765625" stop-color="#AD00FF" />
                                    <stop offset="1" stop-color="#EB00FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h2>Animation</h2>
                    <p>Captivate your users with fluid animations for your 3D/2D visuals</p>
                </motion.div>
                <motion.div animate={animation} className={styles.visual}>
                    <div className={styles.mediaHolder}>
                        <img src={ui} alt="" />
                    </div>
                    <h2>UI/UX Design</h2>
                    <p>We create a fluid, responsive user experience on all devices.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default InfoSection;
