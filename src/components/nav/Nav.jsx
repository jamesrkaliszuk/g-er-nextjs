import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {IoCloseCircleSharp, IoCaretDownCircleSharp} from 'react-icons/io5'

const Nav = () => {
    // ALL OF OUR STATE VARIABLES
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerClick, setHamburgerClick] = useState(false);
    
    // LISTENING FOR THE SCROLL OF THE WINDOW SO THE NAV CAN SHRINK
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 500) {
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

    useEffect(() => {
        const pageWidth = () => {
            if(window.innerWidth <= 800){
                setIsMobile(true);
            }else {
                setIsMobile(false);
            }
        }

        window.addEventListener('resize', pageWidth);

        return () => {
            window.removeEventListener('resize', pageWidth);
        }
    }, [])

    // DETERMINING WHICH NAV ELEMENT IS USING THE ACTIVE CLASS 
    const router = useRouter();

    const isActive = (href) => {
        return router.pathname === href ? styles.active : '';
    }
    // END OF DETERMINING WHICH NAV ELEMENT IS USING THE ACTIVE CLASS 

    
    // MAKING THE NAV ICON CLICKABLE AND A DROPDOWN APPEAR
    const showDropdown = () => {
        setHamburgerClick(prev => !prev);
    }

    // VARIABLES FOR NAV ICONS
    const open = <IoCaretDownCircleSharp className={styles.navIcon} onPointerDown={showDropdown}/>;
    const close = <IoCloseCircleSharp className={styles.navIcon} onPointerDown={showDropdown}/>


    return (
        <>
        {!isMobile && <nav className={`${styles.navContainer} ${addSmallNav}`}>
            <a href={'/'} className={styles.navLogo}><Image src={'/logo.png'} fill alt='garden-er company logo' /></a>
            <ul>
                <Link href='/'><li className={isActive('/')}>Home</li></Link>
                <Link href='/services'><li className={isActive('/services')}>Services</li></Link>
                <Link href='/contact'><li className={isActive('/contact')}>Contact</li></Link>
            </ul>
        </nav>}
        
        {isMobile && <nav className={styles.mobileNavContainer}>
            <a href={'/'} className={styles.mobileNavLogo}><Image src={'/logo.png'} fill alt='garden-er company logo' /></a>
            {hamburgerClick ? close : open}
            {hamburgerClick && <ul>
                <Link href='/'><li className={isActive('/')}>Home</li></Link>
                <Link href='/services'><li className={isActive('/services')}>Services</li></Link>
                <Link href='/contact'><li className={isActive('/contact')}>Contact</li></Link>
            </ul>}
        </nav>}
        </>
    )
}

export default Nav