import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'
import { Nav, Footer } from '../components/export'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', maint: false, trim: false, lawn: false });

    const handleChange = (e) => {

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Contact us here" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* START OF NAV COMPONENT */}
            <Nav />
            {/* END OF NAV COMPONENT */}

            {/* START OF CONTACT PAGE HEADER */}
            <header className={styles.contactHeader}>
                <Image src={'/cutter.jpg'} fill className={styles.contactHeaderImg} />
                <div className={styles.contactHeaderTitle}>
                    <h1>Get Free Consultation</h1>
                    <h2>Contact Us Today</h2>
                </div>
            </header>
            {/* END OF CONTACT PAGE HEADER */}

            {/* START OF MAIN CONTENT */}
            <main>
                {/* START OF FORM */}
                <form onSubmit={handleSubmit} className={styles.contactFormContainer}>
                    <div className={styles.formArea1}>
                        <label htmlFor="name">Name (required)</label>
                        <input type="text" name='name' placeholder='Viktor Brem' required onChange={handleSubmit} value={formData.name} />
                        <label htmlFor="email">Email (required)</label>
                        <input type="email" name='email' placeholder='viktor@brem.com' required onChange={handleSubmit} value={formData.email} />
                        <label htmlFor="phone">Phone (optional)</label>
                        <input type="tel" name='phone' placeholder='867-5309' onChange={handleSubmit} value={formData.phone} />
                    </div>
                    <div className={styles.formArea2}>
                        <div className={styles.formInput1}>
                            <label htmlFor="maint">Maintenance</label>
                            <input type="checkbox" name='maint' id='maint' onChange={handleSubmit} checked={formData.maint} />
                        </div>
                        <div className={styles.formInput2}>
                            <label htmlFor="trim">Trimming</label>
                            <input type="checkbox" name='trim' id='trim' onChange={handleSubmit} checked={formData.trim} />
                        </div>
                        <div className={styles.formInput3}>
                            <label htmlFor="lawn">Lawn</label>
                            <input type="checkbox" name='lawn' id='lawn' onChange={handleSubmit} checked={formData.lawn} />
                        </div>
                    </div>
                    <div className={styles.formArea3}>
                        <label htmlFor="text">Message</label>
                        <textarea name='text' placeholder='Message here...' onChange={handleSubmit} value={formData.text} />
                        <button type='submit' className={styles.contactFormBtn}>Submit</button>
                    </div>
                </form>
                {/* END OF FORM */}
            </main >
            {/* END OF MAIN CONTENT */}

            {/* START OF FOOTER COMPONENT */}
            <Footer />
            {/* END OF FOOTER COMPONENT */}
        </>
    )
};