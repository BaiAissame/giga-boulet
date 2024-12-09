import Head from 'next/head';
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <Head>
        <title>Le Coin Famille - Giga Boulet</title>
        <meta name="description" content="Chez Giga Boulet, la famille est à l'honneur ! Découvrez nos menus enfants et notre offre spéciale avec des réductions." />
        <meta name="keywords" content="Giga Boulet, menus enfants, offres famille, anniversaire Giga Boulet, aire de jeux Giga Boulet, Boulet Junior, Giga Burger" />
        <meta property="og:title" content="Le Coin Famille - Giga Boulet" />
        <meta property="og:description" content="Offrez à vos enfants un moment unique avec les menus enfants de Giga Boulet. Profitez des aires de jeux et des réductions !" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <section className="coin-famille">
          <h1>Le Coin Famille - Chez Giga Boulet, la famille est à l'honneur !</h1>

          <p>Les enfants ont l'embarras du choix !</p>
          
          <h2>Nos menus enfants</h2>
          <p>Découvrez nos menus Boulet Junior et Boulet Junior +, spécialement conçus pour les plus jeunes. Profitez d'une réduction immédiate de 0,30€ si vous ne souhaitez pas de jouet avec le menu !</p>
          
          <div className="cta-buttons">
            <a href="/commander" className="button">Commander</a>
            <a href="/trouver-restaurant" className="button">Trouver un restaurant</a>
            <a href="/anniversaire" className="button">Réservez votre anniversaire</a>
          </div>

          <section className="aires-de-jeux">
            <h2>Nos aires de jeux</h2>
            <p>Nos aires de jeux sont prêtes à accueillir vos enfants pour un moment de plaisir, pendant que vous dégustez votre Giga Burger® en toute tranquillité !</p>
            <a href="/trouver-restaurant" className="button">Trouver un restaurant avec aire de jeux</a>
          </section>

          <section className="anniversaire">
            <h2>Le plus incroyable des anniversaires</h2>
            <p>Offrez à vos enfants un anniversaire inoubliable avec Giga Boulet ! Des animations, des surprises et bien plus encore.</p>
            <a href="/anniversaire" className="button">Réservez l'anniversaire</a>
          </section>

          <section className="fidelite">
            <h2>Exclusivement avec votre programme de fidélité Giga Club</h2>
            <p>Profitez de nos avantages et réductions supplémentaires en vous inscrivant à notre programme de fidélité Giga Club.</p>
          </section>
        </section>
      </main>
    </div>
  );
}
