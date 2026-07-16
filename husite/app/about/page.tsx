import styles from "./page.module.css";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <h1 className={styles.pageTitle}>About This Service</h1>
            <p className={styles.paragraph}>This is a site where you can request a site to your preferences, style, and ideas. It will be built with the Next.js framework, a very advantageous tool. This site is built using this framework as well. Your site is built by only humans, and there is no guarantee the site can be made. </p>
            <h3 className={styles.subheading}>Payments</h3>
            <p className={styles.paragraph}>Our site is unique in terms of payments. For now, all services are FREE. (Yup, really). A credit card is not required. This 100% free offer with no catches is for my personal promotion, so it won't last long. Request NOW!</p>

            <a className={styles.imageLink} href="../requestsite"><Image src="/claim-site-button.png" width={200} height={100} alt="Claim Site"/></a>


        </div>
    );
}