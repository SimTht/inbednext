import { useState, useEffect } from "react";
import Link from "next/link";
import RentCard from "../components/RentCard";
import TopRates from "../components/TopRates";

import styles from "./Home.module.css";

import rents from "../public/data/rentals.json";

export default function Home() {
  const carrouselPaths = [
    "/assets/carrousel/1.webp",
    "/assets/carrousel/2.webp",
    "/assets/carrousel/3.webp",
    "/assets/carrousel/4.webp",
  ];
  const [currentCarrouselIndex, setCurrentCarrouselIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCurrentCarrouselIndex(
        (prevIndex) => (prevIndex + 1) % carrouselPaths.length
      );
    }, 5000);

    return () => clearInterval(timeout);
  }, [currentCarrouselIndex, carrouselPaths.length]);

  return (
    <main>
      <div></div>
      <div className={styles.carrouselContainer}>
        {carrouselPaths.map((carrouselPath, index) => (
          <div
            className={styles.carouselItem}
            style={{
              backgroundImage: `url(${carrouselPath})`,
              opacity: `${currentCarrouselIndex === index ? "1" : 0}`,
            }}
            key={index}
          ></div>
        ))}
        <div className={styles.carouselFilter}>
          <div className={styles.carouselText}>
            <h3>Trouver votre location de vacences en Touraine</h3>
            <h1>Conciergerie Airbnb à Tours et Amboise</h1>
          </div>
        </div>
      </div>

      <section className={`container ${styles.prestationsSection}`}>
        <h3>Propriétaire et désireux de déléguer la gestion de votre bien ?</h3>
        <h3>De l'accueil au ménage, nous gérons tout à votre place !</h3>
        <div className={styles.prestationsBtn}>
          <Link href="/contact" className="btn">
            Nos prestations en détails
          </Link>
        </div>
        <div className={styles.prestationCards}>
          <div className={styles.prestationCard}>
            <h3>Ménage premium</h3>
            <p>
              Par notre partenaire de confiance (respect des normes d'hygiènes
              COVID-19)
            </p>
          </div>
          <div className={styles.prestationCard}>
            <h3>Blanchisserie haut de gamme</h3>
            <p>
              En gérant l'ensemble du linge de maison (draps, serviettes,
              torchons)
            </p>
          </div>
          <div className={styles.prestationCard}>
            <h3>Accueil personnalisé 24/7</h3>
            <p>
              A toute heure du jour en personne et de la nuit grâce à nos
              boitiers à clés
            </p>
          </div>
          <div className={styles.prestationCard}>
            <h3>Création des annonces</h3>
            <p>
              Photos professionnelles, description attrayante et personnalisée
            </p>
          </div>
          <div className={styles.prestationCard}>
            <h3>Optimisation des prix</h3>
            <p>
              Sur toutes les plateformes de locations courtes durées grâce a
              notre logiciel de management
            </p>
          </div>
          <div className={styles.prestationCard}>
            <h3>Entretien des propriétés</h3>
            <p>
              Fournitures des consommables pour la 1ére nuit et gestion des
              incidents
            </p>
          </div>
        </div>
      </section>
      <section className={styles.locationSection}>
        <div className="container">
          <div className={styles.locationSectionTop}>
            <div>
              <h2>Nos Locations</h2>
              <p>Découvrez notre selection du moment</p>
            </div>
            <a
              href="https://www.airbnb.fr/users/479186120/listings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Découvrir toutes nos locations
            </a>
          </div>
          <div className={styles.rentSelection}>
            {rents.map((rent) => (
              <div className={styles.selectionCardContainer} key={rent.id}>
                <RentCard rent={rent} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.topRate}>
        <TopRates />
      </section>
    </main>
  );
}
