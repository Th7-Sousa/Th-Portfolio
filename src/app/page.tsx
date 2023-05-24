import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    

          <>
            <section className={styles.presentation}>
              <div className={styles.flashyText}>
                <h1>Olá visitante!</h1>
                <h2>Sou Thiago e trabalho como Web Designer.</h2>          
              </div>

              <div className={styles.description}>
                <p>Se você presisa de um site, landing page ou portifólio, entre em contato para alavancar seu negócio.</p>
                <Link  className={styles.btnContact} href="/contact">
                  Entrar em contato
                  <img className={styles.arrowRight} src="/images/arrow-right.svg" alt="Arrow" />
                </Link>
              </div>

            </section>

            <div className={styles.containerCharacter}>
              <img className={styles.characterTh} src="/images/character-th.svg" alt="Character Th" />
            </div>

          </>
       
      
  );
}
