import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
    // LISTENING FOR THE SCROLL OF THE WINDOW SO THE NAV CAN SHRINK
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 800) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const addSmallNav = scrolled ? styles.smallNav : '';
    //END OF LISTENING FOR THE SCROLL OF THE WINDOW SO THE NAV CAN SHRINK

    // DETERMINING WHICH NAV ELEMENT IS USING THE ACTIVE CLASS 
    const router = useRouter();

    const isActive = (href) => {
        return router.pathname === href ? styles.active : '';
    }

    // END OF DETERMINING WHICH NAV ELEMENT IS USING THE ACTIVE CLASS 



    return (
        <nav className={`${styles.navContainer} ${addSmallNav}`}>
            <a href={'/'} className={styles.navLogo}><Image src={'/logo.png'} fill /></a>
            <ul>
                <Link href='/'><li className={isActive('/')}>Home</li></Link>
                <Link href='/services'><li className={isActive('/services')}>Services</li></Link>
                <Link href='/contact'><li className={isActive('/contact')}>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav