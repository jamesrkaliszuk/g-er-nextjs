import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Services.module.css'
import { Nav, Footer } from '../components/export'
import { useState } from 'react'

export default function Services() {
    const [clicked, setClicked] = useState(null);

    const isClicked = (i) => {
        setClicked(i === clicked ? null : i);
    }
    return (
        <>
            <Head>
                <title>Check out some projects</title>
                <meta name="description" content="Projects that we have done" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* NAVIGATION COMPONENT */}
            <Nav />

            {/* START OF HEADER */}
            <header className={styles.serviceHeaderWrapper}>
                <p>At Garden ER we provide a fully licensed, insured & WCB garden service to all residential, strata and commercial clients. All enquiries are dealt with promptly and a free consultation can be arranged within days at your convenience. After the consultation you will receive a detailed estimate on the garden work discussed along with a confirmed schedule when the work will be performed. We provide a full range of services from a one off garden clean up visit to an ongoing regular garden maintenance service and everything else in between as found below.</p>
                <Image src={'/house3.jpg'} fill className={styles.serviceHeaderImg} alt='image of a nicely gardened yard and a big brick house' />
            </header>
            {/* END OF HEADER */}

            <div className={styles.serviceInfo}>
                <h2>Select A Service Below To View</h2>
                <h5>All Garden Emergencies & More – Let us know to see if we can help.</h5>
            </div>

            <div className={styles.serviceBtnsContainer}>
                <h2 className={clicked === 2 ? styles.active : ''} onPointerDown={() => isClicked(2)}>Garden Maintenance</h2>
                <h2 className={clicked === 0 ? styles.active : ''} onPointerDown={() => isClicked(0)}>Trimming</h2>
                <h2 className={clicked === 1 ? styles.active : ''} onPointerDown={() => isClicked(1)}>Lawn Maintenance</h2>
            </div>

            <article className={styles.servicesSection}>
                <div className={`${styles.servicesArticle} ${clicked === 2 ? styles.showArticle : styles.hideArticle}`}>
                    <article>
                        <ul>
                            <li>Garden Maintenance</li>
                            <li>Weekly, bi-weekly or monthly garden maintenance services. Gardens are weeded, debris is raked clear, deadheading of flowers, shrubs plants trimmed, property blown out.</li>
                        </ul>
                        <ul>
                            <li>Garden Design</li>
                            <li>From the simple installation of new plants in an existing garden bed to the blueprint design of a complete new garden. Our extensive knowledge of plants will let you decide on what options are available for you unique garden.</li>
                        </ul>
                        <ul>
                            <li>Garden Clean Ups</li>
                            <li>A one off complete garden clean up to remove of all unwanted plants & debris/weeding & trimming.</li>
                        </ul>
                        <ul>
                            <li>Seasonal Planting</li>
                            <li>Bright annual flowers for the spring & summer, along with perennial planting all year round.</li>
                        </ul>
                        <ul>
                            <li>Soil, Mulch & Rock Delivery</li>
                            <li>We can deliver & install a variety of materials for your every need. Garden blend, turf blend, soil ammender, top dressing, bark mulch & river rock.</li>
                        </ul>
                        <ul>
                            <li>Power Washing</li>
                            <li>All ground surfaces pressure washed such as decks, walkways & driveways.</li>
                        </ul>
                        <ul>
                            <li>Snow Removal</li>
                            <li>Snow shovelled from walkways & driveways.</li>
                        </ul>
                    </article>
                </div>

                <div className={`${styles.servicesArticle} ${clicked === 0 ? styles.showArticle : styles.hideArticle}`}>
                    <article>
                        <ul>
                            <li>Hedge Trimming</li>
                            <li>Laurel, Cedar, Yew & Boxwood Hedges trimmed.</li>
                        </ul>
                        <ul>
                            <li>Tree Pruning</li>
                            <li>Dead branches removed, trees shaped & pruned.</li>
                        </ul>
                        <ul>
                            <li>Tree, Hedge & Plant Installation</li>
                            <li>We can purchase, deliver & install any plant material you request.</li>
                        </ul>
                    </article>
                </div>

                <div className={`${styles.servicesArticle} ${clicked === 1 ? styles.showArticle : styles.hideArticle}`}>
                    <article>
                        <ul>
                            <li>Lawn Maintenance</li>
                            <li>Weekly and bi-weekly lawn mowing services with all grass clippings taken away.</li>
                        </ul>
                        <ul>
                            <li>New Lawn Installation</li>
                            <li>We remove the old lawn & replace it with new turf or grass seed.</li>
                        </ul>
                        <ul>
                            <li>Lawn Applications</li>
                            <li>Lawn Fertilizing Programs, Aerating, Power Raking & Overseeding</li>
                        </ul>
                    </article>
                </div>
            </article>

            {/* FOOTER COMPONENT */}
            <Footer />
        </>
    )
}