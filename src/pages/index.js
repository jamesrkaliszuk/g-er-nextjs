import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Nav, Footer, ServiceBlock } from '../components/export'
import serviceData from './serviceBlockInfo'

export default function Home() {

  // MAPPING OVER SERVICEBLOCKINFO JS FILE WITH AN ARRAY OF OBJECTS IN IT
  const mappedServiceData = serviceData.map(data => (<ServiceBlock key={data.id} data={data} />));
  // END MAPPING OVER SERVICEBLOCKINFO JS FILE WITH AN ARRAY OF OBJECTS IN IT
  return (
    <>
      <Head>
        <title>Garden-ER Home Page</title>
        <meta name="description" content="Welcome to Garden-ER" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* START OF THE NAV */}
      <Nav />
      {/* END OF THE NAV */}

      {/* START OF THE HEADER */}
      <header className={styles.homeHeader}>
        <div className={styles.headerImg}>
          <Image src={'/pexels-skitterphoto.jpg'} fill className={styles.headerImg} alt="a wonderfully trimmed hedge and tree" />
        </div>

        <div className={styles.headerContent}>
          <h1>Garden and Lawn Care</h1>
          <h2>In North & West Vancouver</h2>
          <a href={'/contact'} className={styles.btnStyle}>Consult</a>
        </div>
      </header>
      {/* END  OF THE HEADER */}

      <main>
        {/* START OF THE INFO CONTAINERS */}
        <div className={styles.infoContainer}>
          <article className={`${styles.info1} ${styles.infoColor}`}>

            <Image src={'/house_1.jpg'} width={600} height={400} className={styles.imgBorder} alt="a large modern house with a freshly cut lawn" />
            <p>Garden ER is a North Vancouver owned & operated gardening & landscaping company, dedicated to servicing North & West Vancouver lawns & gardens. </p>
          </article>
          <article className={`${styles.info2} ${styles.infoColor}`}>
            <Image src={'/house_2.jpg'} width={600} height={400} className={styles.imgBorder} alt="a big house with a freshly cut lawn and some small hedges" />
            <p>We provide a complete, reliable and professional garden service.</p>
          </article>
          <article className={`${styles.info3} ${styles.infoColor}`}>
            <Image src={'/house_3.jpg'} width={600} height={400} className={styles.imgBorder} alt="front portrait of a large home with a large cut lawn" />
            <p>Let Garden ER take care of any job, large or small, our services range from regular lawn mowing to the installation of a new garden. </p>
          </article>
        </div>
        {/* END OF THE INFO CONTAINERS */}

        {/* START OF THE SERVICE BLOCKS */}
        <section className={styles.serviceBlockContainer}>
          <h2 className={styles.servicesHeader}>Our Services</h2>
          <div className={styles.main_service_blocks}>
            {mappedServiceData}
          </div>
          <a href={'/services'} className={`${styles.btnStyle} ${styles.btnCenter}`}>More Info</a >
        </section>
        {/* END OF THE SERVICE BLOCKS */}

      </main>

      {/* FOOTER COMPONENT */}
      <Footer />
    </>
  );
}
