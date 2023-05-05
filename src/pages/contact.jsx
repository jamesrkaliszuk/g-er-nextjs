import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'
import { Nav } from '../components/export'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Contact us here" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <header className={styles.contactHeader}>
                <Image src={'/cutter.jpg'} fill className={styles.contactHeaderImg} />
                <div>
                    <h1>Get Free Consultation</h1>
                    <h2>Contact Us Today</h2>
                </div>
            </header>
            <main></main>
        </>
    )
};