import styles from './stylesheets/Contact.module.css'
import { useScroll, useTransform, motion, useAnimation } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import desk from './stylesheets/images/desk.png'
import {useInView} from 'react-intersection-observer'

const Contact = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('')
    const [message, setMessage] = useState('');
    const {ref, inView} = useInView();
    const animation = useAnimation();

    //Need the useRef hook to get position of parent element 
    const targetRef = useRef(null);
    //Ref is the target of useScroll hook
    //number scrollYProgress contains num between 0-1 referring to 
    //how far user has scrolled in element 
    const { scrollYProgress } = useScroll({
        target: targetRef,
        //takes two strings ex:["start end", "end end"] which describe intersections between the target
        //and a container element(container is window if not defined)
        //Any range between those intersections is where scroll progress is applied
        offset: ["start end", "end start"]
    })

    //useTransform maps one set of numbers to another given set
    //ex: if useTransform(scrollYProgress[0,0.5,1], [1,0.5,0]) then if scrollYProgress 
    //is 1(element is fully scrolled), then opacity would be set to 0 
    //once element is half way scrolled thru, opacity set to 0 
    const translateY = useTransform(scrollYProgress, [0, 0.3, 1], [100, -125, -150])
    
    const handleSubmit = () =>{
        console.log('submitted')
    }

    useEffect(() =>{
        if (inView) {
            animation.start({
                y: -70,
                opacity:1,
                transition: {
                    type: 'spring', duration: 1.2, bounce: 0.2, delay:0.1
                }
            })
        }
        if (!inView) {
            animation.start({ y: '15vh', opacity:0 })
        }
    },[inView])

    return (
        <div ref={targetRef} className={styles.panel}>
            <motion.h1 id="contactHeader" style={{translateY}}>Have an idea?</motion.h1>
            <div ref={ref} className={styles.container}>
                <motion.div animate={animation} className={styles.graphic}>
                    <img src={desk} alt="" />
                </motion.div>
                <motion.div animate={animation} className={styles.contactForm}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="message">Message:</label>
                        <textarea name="" id="" cols="30" rows="8" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;
