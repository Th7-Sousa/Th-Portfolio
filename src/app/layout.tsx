
import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Th Web Designer",
  description: "Person Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const style = {
    marginRight: 10,
    color: 'black',
  };



  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main className={styles.main}>
          <div className={styles.containerBlur}>
            <nav className={styles.nav}>
              <div className={styles.logoContainer}>
                <a className={styles.logoBackHome} href="index.html">
                  <p>Th</p>
                  <img src="/images/iconth.svg" alt="Image-th" />
                </a>
              </div>
              <div className={styles.navMenu}>
                <Link id="linkHome" className={styles.menuLink} href="/">
                  Home
                </Link>
                <Link id="menuLink" className={styles.menuLink} href="/portfolio">
                  Portifólio
                </Link>
                <Link id="menuLink" className={styles.menuLink} href="/contact">
                  Contato
                </Link>
              </div>
            </nav>

            <section className={styles.containerCenter}>{children}</section>
          </div>
          <footer className="footer">
          <p className={styles.copyright}>Th Web Designer 2023 - Alguns direitos resevardos</p>
        </footer>
        </main>
      </body>
    </html>
  );
}
