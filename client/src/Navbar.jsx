import styles from './stylesheets/Navbar.module.css'
import nuvo from './stylesheets/images/nuvo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [clickedState, setClickedState] = useState(false);
    const [dropDownShowState, setDropDownShowState] = useState(false);

    const handleClick = () => {
        if (clickedState) {
            setClickedState(false);
            setDropDownShowState(false);
        } else {
            setClickedState(true);
            setDropDownShowState(true);
        }
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.imgHolder}>
                <img src={nuvo} alt="" />
            </div>
            <div className={styles.links}>
                <ul>
                    <Link onClick={(e) => { e.preventDefault(); window.location.replace("/#skillsHeader") }}><li>Skills</li></Link>
                    <Link onClick={(e) => { e.preventDefault(); window.location.replace("/#worksHeader") }}><li>Our Work</li></Link>
                    <Link onClick={(e) => { e.preventDefault(); window.location.replace("/#contactHeader") }}><li>Contact</li></Link>
                </ul>
            </div>
            <div className={styles.dropDown}>
                <div className={styles.icon} onClick={handleClick}>
                    <div class={`${(clickedState ? 'change' : '')} ${styles.bar1}`}></div>
                    <div class={`${(clickedState ? 'change' : '')} ${styles.bar2}`}></div>
                    <div class={`${(clickedState ? 'change' : '')} ${styles.bar3}`}></div>
                </div>
                {dropDownShowState &&
                    <div className={styles.dropDownItems}>
                        <Link onClick={(e) => { e.preventDefault(); window.location.replace("/#skillsHeader") }}><li>Skills</li></Link>
                        <Link onClick={(e) => { e.preventDefault(); window.location.replace("/#worksHeader") }}><li>Our Work</li></Link>
                        <Link onClick={(e) => { e.preventDefault(); window.location.replace("/#contactHeader") }}><li>Contact</li></Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;
