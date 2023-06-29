import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Conciergerie Airbnb à Tours et Amboise (37) - Inbed</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Confiez la gestion de votre location à des concierges professionnels en Indre-et-Loire (37). Inbed, c'est aussi des dizaines de biens à louer toute l'année !"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
