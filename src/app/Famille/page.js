import Head from 'next/head';
import Link from 'next/link';


export default function Famille() {
    return (
        <>
            <Head>
                <title>Famille - Giga Boulet</title>

                {/* SEO : Meta description pour décrire succinctement la page */}
                <meta name="description" content="Découvrez notre espace famille dédié, conçu pour le plaisir des petits et des grands chez Giga Boulet." />

                {/* SEO : Mots-clés stratégiques pour les moteurs de recherche */}
                <meta name="keywords" content="Giga Boulet, espace famille, repas en famille, jeux pour enfants, fast food" />

                {/* SEO : Open Graph pour un meilleur partage sur les réseaux sociaux */}
                <meta property="og:title" content="Famille - Giga Boulet" />
                <meta property="og:description" content="Profitez de moments inoubliables en famille avec des repas délicieux et des espaces ludiques pour les enfants." />
                <meta property="og:image" content="/images/famille.jpg" />
            </Head>


            <main>
                {/* Section héroïque  */}
<section
  className="relative bg-cover bg-center text-white py-16"
  style={{ backgroundImage: 'url(/offres.webp)' }}
>
  {/* Superposition semi-transparente */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Contenu textuel */}
  <div className="relative z-10 text-center px-4 sm:px-8">
    <h1 className="text-4xl font-bold drop-shadow-lg">
      Bienvenue dans l&apos;Espace Famille 
    </h1>
    <p className="mt-4 text-lg drop-shadow-md">
      Un endroit dédié au plaisir des petits et des grands. Chez Giga Boulet, 
      nous savons que chaque famille est unique, et nous faisons en sorte de 
      créer un espace où chacun se sent chez soi.
    </p>
  </div>
</section>


                {/* Section enfants pour décrire les offres et l&apos;aire de jeux */}
                <section className="p-8 bg-white shadow-lg rounded-lg mt-8 mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Pour les Enfants</h2>
                    <p>Des menus enfants équilibrés, des cadeaux surprises et une aire de jeux sécurisée pour que vos petits passent un moment inoubliable. Nos repas pour enfants sont conçus pour répondre à leurs besoins nutritionnels tout en étant délicieux et amusants. De plus, notre aire de jeux est régulièrement entretenue pour garantir leur sécurité et leur plaisir.</p>
                    <img src="/images/aire-de-jeux.jpg" alt="Aire de jeux pour enfants chez Giga Boulet" className="mt-4 rounded-lg shadow-md" />
                </section>

                {/* Section parents pour mettre en avant leur confort */}
                <section className="p-8 bg-teal-50 shadow-lg rounded-lg mt-8 mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Pour les Parents</h2>
                    <p>Détendez-vous dans un cadre confortable tout en dégustant nos spécialités. Nous avons pensé à tout pour que votre expérience soit parfaite. Chez Giga Boulet, nous savons qu’un moment de détente pour les parents est aussi important. C’est pourquoi nous offrons un cadre agréable, des sièges confortables et un menu varié pour répondre à toutes vos envies.</p>
                </section>

                {/* Section supplémentaire pour les offres spéciales */}
                <section className="p-8 bg-gray-100 shadow-lg rounded-lg mt-8 mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Offres Spéciales Famille</h2>
                    <p>Chez Giga Boulet, nous aimons récompenser les moments passés en famille. Profitez de nos packs familiaux à des prix avantageux, comprenant des repas pour tous les âges. Chaque pack est soigneusement élaboré pour inclure une variété de nos spécialités, afin que chacun y trouve son bonheur.</p>
                </section>
            </main>


        </>

        //backlink
        //lien interne
    );
}
