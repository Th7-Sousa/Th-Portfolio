"use client"

import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import ActiveLink from "./components/Navbar";

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

  const pathname = usePathname()
  console.log(pathname)

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
                <ActiveLink href='/'>
                  Home
                </ActiveLink>
                <ActiveLink href='/portfolio'>
                  Portifólio
                </ActiveLink>
                <ActiveLink href='/contact'>
                  Contato
                </ActiveLink>
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
