import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/about">About Me</Link>
      </main>
      <footer className={styles.footer}>
       Find me on Social Media
      </footer>
    </div>
  );
}
