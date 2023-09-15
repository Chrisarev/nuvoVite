import styles from './stylesheets/WorkSection.module.css'
import cleancards from './stylesheets/images/cleancardsIMG.png'
import e2 from './stylesheets/images/designe2IMG.png'
import yelpcamp from './stylesheets/images/yelpcampNEW.jpg'
import redd from './stylesheets/images/redd.jpg'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const WorkSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [imageShowIndex, setImageShowIndex] = useState(0);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [imageOffset, setImageOffset] = useState(400);

    /* returns screen dimensions in width and height */
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    /* Index passed in onMouseOver of workHolder decides which image to display*/
    const handleHover = (index) => {
        setImageShowIndex(index);
    }

    /* resets index to 0 onMouseOut of workHolder, hiding all images */
    const handleHoverEnd = (index) => {
        setImageShowIndex(index);
    }

    /* sets image position to that of the cursor +- some pixels depending on screen size */
    const imgStyle = {
        top: `${mousePos.y - imageOffset}px`, left: `${mousePos.x + 30}px`
    }

    useEffect(() => {
        /* Sets mousePos state x and y to cursor position */
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        }

        /* Sets windowDimensions state to screen size width and height on screen resize */
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        if(windowDimensions.width < 800){
            setImageOffset(50)
        }else{
            setImageOffset(400)
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove',handleMouseMove)
            window.removeEventListener('resize', handleResize);

        }
    }, []);

    return (
        <div className={styles.panel}>
            <h1 id="worksTitle">Works</h1>
            <Link to="https://www.google.com/" onMouseOver={() => handleHover(1)} onMouseOut={() => handleHoverEnd(0)} className={styles.workHolder}>
                <div className={styles.content}>
                    <div
                        className={styles.number}>01</div>
                    <div className={styles.projectTitle}>Cleancards</div>
                </div>
                <div className={styles.inverse}>
                    <div className={styles.number}>01</div>
                    <div className={styles.projectTitle}>Cleancards</div>
                </div>
            </Link>
            <Link to="https://www.google.com/" onMouseOver={() => handleHover(2)} onMouseOut={() => handleHoverEnd(0)} className={styles.workHolder}>
                <div className={styles.content}>
                    <div className={styles.number}>02</div>
                    <div className={styles.projectTitle}>ReddSupplements</div>
                </div>
                <div className={styles.inverse}>
                    <div className={styles.number}>02</div>
                    <div className={styles.projectTitle}>ReddSupplements</div>
                </div>
            </Link>
            <Link to="https://www.google.com/" onMouseOver={() => handleHover(3)} onMouseOut={() => handleHoverEnd(0)} className={styles.workHolder}>
                <div className={styles.content}>
                    <div className={styles.number}>03</div>
                    <div className={styles.projectTitle}>E2Design</div>
                </div>
                <div className={styles.inverse}>
                    <div className={styles.number}>03</div>
                    <div className={styles.projectTitle}>E2Design</div>
                </div>
            </Link>
            <Link to="https://www.google.com/" onMouseOver={() => handleHover(4)} onMouseOut={() => handleHoverEnd(0)} className={styles.workHolder}>
                <div className={styles.content}>
                    <div className={styles.number}>04</div>
                    <div className={styles.projectTitle}>Yelpcamp</div>
                </div>
                <div className={styles.inverse}>
                    <div className={styles.number}>04</div>
                    <div className={styles.projectTitle}>Yelpcamp</div>
                </div>
            </Link>
            {imageShowIndex == 1 &&
                <img className={styles.cursorIMG} style={imgStyle} src={cleancards}></img>
            }
            {imageShowIndex == 2 &&
                <img className={styles.cursorIMG} style={imgStyle} src={redd}></img>
            }
            {imageShowIndex == 3 &&
                <img className={styles.cursorIMG} style={imgStyle} src={e2}></img>
            }
            {imageShowIndex == 4 &&
                <img className={styles.cursorIMG} style={imgStyle} src={yelpcamp}></img>
            }


        </div>
    )
}

export default WorkSection;
