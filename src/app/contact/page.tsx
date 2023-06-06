import Image from "next/image";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>Entre em contato para fazer um orçamento:</h1>

      <div className={styles.subContainer}>
        <div className={styles.whatsapp}>
          <h3>Whatsapp</h3>
          <div className={styles.whatsContainer}>
            <Image
              width={240}
              height={250}
              className={styles.ImageWhats}
              src="/images/qr-whatsapp.jpg"
              alt="QR code - Whatsapp"
              title="Código QR do Whatsapp"
            />
            <p>Ou</p>
            <a href="https://wa.me/qr/VUTXDTXEL6WOO1">Clique aqui</a>
          </div>
        </div>

        <div className={styles.email}>
          <h3>Email</h3>
          <div className={styles.contentEmail}>
            <Image
              width={50}
              height={50}
              src="/images/icon-email.svg"
              alt="Ícone de email"
            />
            <p>thiagof.profissional@gmail.com</p>
          </div>
        </div>

        <div className={styles.social}>
          <h3>Redes sociais</h3>
          <div className={styles.contentSocial}>
            <div className={styles.linkedin}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/thiago-fernandes-de-sousa/"
              >
                <Image
                  width={50}
                  height={40}
                  className={styles.iconSocial}
                  src="/images/icon-linkedin.png"
                  alt="Linkendin"
                  title="Linkedin"
                />
              </a>
            </div>

            <div className={styles.linkedin}>
              <a target="_blank" href="https://github.com/Th7-Sousa">
                <Image
                  width={50}
                  height={40}
                  className={styles.iconSocial}
                  src="/images/icon-github.png"
                  alt="Github"
                  title="Github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
