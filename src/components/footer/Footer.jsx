import React from 'react'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
    const newDate = new Date();
    const getFullYear = newDate.getFullYear();
    return (
        <>
            <footer className={styles.footerContainer}>

                <div className={styles.footContentWrapper}>
                    <ul className={styles.footerNav}>
                        <a href=""><li>Privacy Policy</li></a>
                        <a href=""><li>Terms and Conditions</li></a>
                    </ul>
                    <div className={styles.footContactInfo}>
                        <div>
                            <h2>Contact Information:</h2>
                            <h3>adam@garden-er.com</h3>
                        </div>

                        <div>
                            <h2>Hours:</h2>
                            <ul>
                                <li>Mon - Fri:</li>
                                <li>8AM - 4PM</li>
                            </ul>
                            <ul>
                                <li>Sat - Sun:</li>
                                <li>Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h5>&copy; {getFullYear} Garden-ER | Developed With Love By <a href="https://campfirecreativegroup.com" target='_blank'>Campfire Creative Group</a></h5>

            </footer>
        </>
    )
}

export default Footer