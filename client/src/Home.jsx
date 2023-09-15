import { motion } from 'framer-motion'
import styles from './stylesheets/Home.module.css'
import Hero from './Hero'
import InfoSection from './InfoSection'
import WorkSection from './WorkSection'
import Contact from './Contact'

const Home = () => {


    return (
        <div className={styles.home}>
            <Hero />
            <InfoSection />
            <WorkSection />
            <Contact />
        </div>
    )
}

export default Home;
