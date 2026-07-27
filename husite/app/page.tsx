'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className={styles.page}>
      <button className={styles.button} onClick={() => redirect('/loginpage')} >I'm an Admin</button>
      <h1>Welcome to</h1>
      <h1 className={styles.brandName}>Husite</h1>
      <Image width={100} height={100} src={"/favicon.png"} alt="brand logo"></Image>
      <a className={styles.tapToContinueImage} href="./about"><Image src="/continue.png" width={200} height={200} alt="Tap To Continue"></Image></a>
    </div>
  );
}
