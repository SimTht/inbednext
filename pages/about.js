import Link from "next/link";

import styles from "./about.module.css";

const AboutUs = () => {
  return (
    <main>
      <section className={styles.aboutUsTop}>
        <h1>Qui sommes nous ?</h1>
      </section>
      <section className={styles.aboutUsMiddle}>
        <div className={`container ${styles.aboutUsMiddleMain}`}>
          <div className={styles.left}>
            <h3>À votre service ...</h3>
            <p>
              Fondée en 2020, Inbed est né d'une passion commune pour
              l'immobilier et d'une envie d'entreprendre en Touraine, région
              forte d'une grande attractivité économique et touristique.
            </p>
            <p>
              Inbed est une agence de conciergerie locale à taille humaine. Nos
              racines tourangelles nous permettent de proposer des services de
              grande qualité aux voyageurs et une réactivité inégalée aux
              propriétaires.
            </p>
            <p>
              Notre but est d'accompagner les propriétaires dans la gestion de
              leurs biens en location saisonnière (Airbnb, Booking.com, Abritel)
              en offrant une solution tout compris.
            </p>
          </div>
          <div className={styles.right}>
            <img src="/assets/starskyandhutch.jpg" alt="Starsky_and_Hutch" />
            <small>
              Maxime (gauche) et Alexi (droite) - Fondateurs de Inbed - Source :{" "}
              <a
                href="https://www.lanouvellerepublique.fr/indre-et-loire/commune/athee-sur-cher/ouverture-d-une-conciergerie-immobiliere-a-athee-sur-cher"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nouvelle République
              </a>
            </small>
          </div>
        </div>
        <Link href="/contact" className="btn">
          Nos prestations en détails
        </Link>
      </section>
      <section className={`${styles.aboutUsBottom} container`}>
        <div>
          <h4>Ils parlent de nous :</h4>
          <img src="/assets/article-print.png" alt="article_NR" />
          <a
            href="https://www.lanouvellerepublique.fr/indre-et-loire/commune/athee-sur-cher/ouverture-d-une-conciergerie-immobiliere-a-athee-sur-cher"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire l'article
          </a>
        </div>
        <div>
          <h4>Nos partenaires :</h4>
          <ul>
            <li>Elis Touraine</li>
            <li>Axeo Amboise</li>
            <li>Airbnb</li>
            <li>Booking.com</li>
            <li>Abritel</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
