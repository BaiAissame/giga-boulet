import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Giga Boulet - Accueil</title>
                <meta name="description" content="Bienvenue chez Giga Boulet, votre destination incontournable pour des burgers savoureux, des ingrédients frais et une ambiance conviviale." />
                <meta name="keywords" content="Giga Boulet, fast food, burger, restauration rapide, menu, restaurant" />
                <meta property="og:title" content="Giga Boulet - Accueil" />
                <meta property="og:description" content="Découvrez nos burgers délicieux, nos valeurs et notre engagement envers nos clients." />
                <meta property="og:image" content="/images/home-hero.jpg" />
                <meta property="og:url" content="https://www.gigaboulet.com" />
                <meta property="og:type" content="website" />
            </Head>

           
            <main>
                {/* Section héroïque */}
          <section
  className="relative bg-cover bg-center text-white py-16"
  style={{ backgroundImage: 'url(/offres.webp)' }}
>
  {/* Superposition semi-transparente */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Contenu textuel */}
  <div className="relative z-10 text-center px-4 sm:px-8">
<h1 className="text-5xl font-bold">Bienvenue chez Giga Boulet</h1>
                    <p className="mt-4 text-lg">Des burgers savoureux, des ingrédients frais, et une expérience inoubliable.</p>
                    <Link href="/Carte" className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700">Découvrir le Menu</Link>
  </div>
</section>


                {/* Section Nos Spécialités */}
                <section className="p-8 bg-white shadow-lg rounded-lg mt-8 mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-teal-900 mb-6">Nos Spécialités</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <article className="shadow-md rounded-lg p-4 bg-gray-50">
                            <Image src="/images/burger-special.jpg" alt="Burger Spécial" width={400} height={300} className="rounded-lg" />
                            <h3 className="mt-4 text-xl font-bold text-teal-900">Le Giga Burger</h3>
                            <p className="text-gray-600 mt-2">Un mélange parfait de saveurs avec notre viande 100% locale et des ingrédients frais.</p>
                        </article>
                        <article className="shadow-md rounded-lg p-4 bg-gray-50">
                            <Image src="/images/frites-special.jpg" alt="Frites Maison" width={400} height={300} className="rounded-lg" />
                            <h3 className="mt-4 text-xl font-bold text-teal-900">Frites Maison</h3>
                            <p className="text-gray-600 mt-2">Des frites croustillantes préparées avec soin pour accompagner votre repas.</p>
                        </article>
                        <article className="shadow-md rounded-lg p-4 bg-gray-50">
                            <Image src="/images/dessert-special.jpg" alt="Desserts Gourmands" width={400} height={300} className="rounded-lg" />
                            <h3 className="mt-4 text-xl font-bold text-teal-900">Desserts Gourmands</h3>
                            <p className="text-gray-600 mt-2">Terminez votre repas avec nos desserts maison, un vrai délice.</p>
                        </article>
                    </div>
                </section>

                {/* Section Engagements */}
                <section className="p-8 bg-gray-100 shadow-lg rounded-lg mt-8 mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-teal-900 mb-6">Pourquoi Nous Choisir ?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-900">Ingrédients Locaux</h3>
                            <p className="text-gray-600 mt-2">Nous nous engageons à utiliser des produits locaux pour soutenir notre communauté.</p>
                        </div>
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-900">Service Chaleureux</h3>
                            <p className="text-gray-600 mt-2">Un accueil souriant et une expérience client exceptionnelle.</p>
                        </div>
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-teal-900">Engagement Écologique</h3>
                            <p className="text-gray-600 mt-2">Nous investissons dans des pratiques durables pour préserver notre planète.</p>
                        </div>
                    </div>
                </section>

                {/* Section Call-to-Action */}
                <section className="p-8 bg-teal-900 text-white rounded-lg mt-8 mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold">Prêt à Commander ?</h2>
                    <p className="mt-4 text-lg">Parcourez notre menu et passez votre commande dès aujourd'hui !</p>
                    <Link href="/Carte" className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700">Voir le Menu</Link>
                </section>
            </main>
        </>
    );
}
