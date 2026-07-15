import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to</h1>
      <h1 className={styles.brandName}>Husite</h1>
      <Image width={100} height={100} src={"/favicon.png"} alt="brand logo"></Image>
    </div>
  );
}
