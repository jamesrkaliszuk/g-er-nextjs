import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'
import { Nav, Footer } from '../components/export'
import { useState } from 'react'

export default function Contact() {
    // ALL OF THE STATE
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', maint: false, trim: false, lawn: false });
    const [isSent, setIsSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // START OF FORM DATA USESTATE, HANDLECHANGE, AND HANDLESUBMIT FUNCTIONS
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    formData,
                })
            })

            if (response.ok) {
                setIsSent(true);
            } else {
                alert('Failed to send email. Please try again later.')
                setIsSent(false);
                setSending(false);
            }

        } catch (error) {
            console.error(error);
            alert('Failed to send email. Please try again later.')
        }


    };
    // END OF FORM DATA USESTATE, HANDLECHANGE, AND HANDLESUBMIT FUNCTIONS
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
                {!isSent && <form onSubmit={handleSubmit} className={styles.contactFormContainer}>
                    <div className={styles.formArea1}>
                        <label htmlFor="name">Name (required)</label>
                        <input type="text" name='name' placeholder='Your Name' required onChange={handleChange} value={formData.name} />
                        <label htmlFor="email">Email (required)</label>
                        <input type="email" name='email' placeholder='john@johndoe.com' required onChange={handleChange} value={formData.email} />
                        <label htmlFor="phone">Phone (optional)</label>
                        <input type="tel" name='phone' placeholder='867-5309' onChange={handleChange} value={formData.phone} />
                    </div>
                    <div className={styles.formArea2}>
                        <div className={styles.formInput1}>
                            <label htmlFor="maint">Maintenance</label>
                            <input type="checkbox" name='maint' id='maint' onChange={handleChange} checked={formData.maint} />
                        </div>
                        <div className={styles.formInput2}>
                            <label htmlFor="trim">Trimming</label>
                            <input type="checkbox" name='trim' id='trim' onChange={handleChange} checked={formData.trim} />
                        </div>
                        <div className={styles.formInput3}>
                            <label htmlFor="lawn">Lawn</label>
                            <input type="checkbox" name='lawn' id='lawn' onChange={handleChange} checked={formData.lawn} />
                        </div>
                    </div>
                    <div className={styles.formArea3}>
                        <label htmlFor="message">Message</label>
                        <textarea name='message' placeholder='Message here...' required onChange={handleChange} value={formData.message} />
                        {!isSubmitting && <button type='submit' className={styles.contactFormBtn}>Submit</button>}
                        {isSubmitting && <div className={styles.sendingContainer}><div className={`${styles.sendingCircle} ${styles.rotate_center}`}></div></div>}
                    </div>
                </form>}
                {/* END OF FORM */}
                {/* IF THE FORM IS SENT, SHOW THIS */}
                {isSent && <div className={styles.formSent}><h2>Thank you for contacting us. We will be with you soon!</h2> <a href={'/'} className={styles.btnStyle}>Home Page</a></div>}
            </main >
            {/* END OF MAIN CONTENT */}

            {/* START OF FOOTER COMPONENT */}
            <Footer />
            {/* END OF FOOTER COMPONENT */}
        </>
    )
};