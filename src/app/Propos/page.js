import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Propos() {
    return (
        <>
            <Head>
                <title>À Propos - Giga Boulet</title>

                {/* SEO : Meta description pour résumer la page */}
                <meta name="description" content="Découvrez l&apos;histoire de Giga Boulet, notre mission, nos valeurs et notre engagement envers nos clients et la communauté." />

                {/* SEO : Mots-clés stratégiques */}
                <meta name="keywords" content="Giga Boulet, à propos, histoire, mission, valeurs, engagement, restauration rapide, burger, fast food" />

                {/* SEO : Open Graph pour améliorer le partage social */}
                <meta property="og:title" content="À Propos - Giga Boulet" />
                <meta property="og:description" content="Apprenez-en plus sur Giga Boulet : notre histoire, nos valeurs et notre vision pour l'avenir." />
                <meta property="og:image" content="/images/a-propos.jpg" />
                <meta property="og:url" content="https://www.gigaboulet.com/a-propos" />
                <meta property="og:type" content="website" />
            </Head>

            <header className="bg-teal-900 text-white py-4 text-center shadow-md">
                <nav>
                    <ul className="flex justify-center space-x-6">
                        {/* Navigation avec des liens internes */}
                        <li><Link href="/" className="hover:underline">Accueil</Link></li>
                        <li><Link href="/Carte" className="hover:underline">Menu</Link></li>
                        <li><Link href="/famille" className="hover:underline">Famille</Link></li>
                        <li><Link href="/Propos" className="underline">À Propos</Link></li>
                        <li><Link href="/Engagements" className="hover:underline">Contact</Link></li>
                        <li><Link href="/Recrutement" className="hover:underline">Recrutement</Link></li>
                        <li><Link href="/Offre" className="hover:underline">Offre</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* Section héroïque avec un message clair */}
                <section className="bg-cover bg-center text-white py-16" style={{ backgroundImage: 'url(/images/a-propos-hero.jpg)' }}>
                    <h1 className="text-4xl font-bold">À Propos de Giga Boulet</h1>
                    <p className="mt-4 text-lg">Découvrez notre passion pour la restauration rapide, notre mission et nos valeurs qui nous guident chaque jour.</p>
                </section>

                {/* Section Histoire avec des détails riches */}
                <section className="p-8 bg-white shadow-lg rounded-lg mt-8 mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Notre Histoire</h2>
                    <p>Depuis 2010, Giga Boulet s&apos;engage à offrir des repas délicieux et accessibles. Ce qui a commencé comme une petite aventure locale est aujourd&apos;hui devenu une chaîne appréciée dans toute la région. Nous croyons en la puissance de la bonne nourriture pour rassembler les gens et créer des souvenirs.</p>
                    <Image src="/images/histoire.jpg" alt="Chronologie de Giga Boulet" width={600} height={400} className="mt-4 rounded-lg shadow-md" />
                </section>

                {/* Section Valeurs enrichie */}
                <section className="p-8 bg-gray-100 shadow-lg rounded-lg mt-8 mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Nos Valeurs</h2>
                    <article className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">Qualité</h3>
                        <p>Nous utilisons des ingrédients frais et locaux pour garantir le meilleur goût dans chaque bouchée. Chez Giga Boulet, la qualité n&apos;est pas un compromis, c&apos;est une priorité.</p>
                    </article>
                    <article className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">Engagement</h3>
                        <p>Nos équipes travaillent sans relâche pour offrir une expérience exceptionnelle à chaque client. Nous nous engageons également à soutenir les communautés locales où nous opérons.</p>
                    </article>
                    <article className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800">Durabilité</h3>
                        <p>Nous investissons dans des pratiques respectueuses de l&apos;environnement, comme le recyclage et l&apos;utilisation de matériaux biodégradables, pour un avenir meilleur.</p>
                    </article>
                </section>

                {/* Section Mission enrichie avec des objectifs clairs */}
                <section className="p-8 bg-white shadow-lg rounded-lg mt-8 mx-auto max-w-4xl text-center">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Notre Mission</h2>
                    <p>Chez Giga Boulet, notre mission est simple mais puissante : offrir des repas savoureux et de qualité tout en créant un environnement chaleureux pour nos clients. Nous croyons que chaque repas est une occasion de se connecter et de partager des moments précieux.</p>
                </section>

                {/* Témoignages étoffés */}
                <section className="p-8 bg-gray-100 shadow-lg rounded-lg mt-8 mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Ce Que Dit Notre Équipe</h2>
                    <blockquote className="italic text-gray-600 border-l-4 border-teal-900 bg-teal-100 p-4 rounded-md shadow">
                        "Travailler chez Giga Boulet, c&apos;est bien plus qu&apos;un emploi. C&apos;est faire partie d&apos;une aventure où l&apos;innovation et le respect des clients sont au cœur de tout ce que nous faisons."
                        <cite className="block text-right text-sm text-gray-500 mt-2">- Marie, chef cuisinière</cite>
                    </blockquote>
                    <blockquote className="italic text-gray-600 border-l-4 border-teal-900 bg-teal-100 p-4 rounded-md shadow mt-6">
                        "Je suis fier de contribuer à offrir des repas qui apportent de la joie à nos clients. Voir les sourires sur leurs visages est ma plus grande récompense."
                        <cite className="block text-right text-sm text-gray-500 mt-2">- Jacques, employé depuis 2015</cite>
                    </blockquote>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6 text-center mt-8">
                <p>&copy; 2025 Giga Boulet. Tous droits réservés.</p>
                <p>Suivez-nous sur&nbsp;
                    <Link href="https://facebook.com/gigaboulet" className="text-teal-400 hover:underline">Facebook</Link>,&nbsp;
                    <Link href="https://instagram.com/gigaboulet" className="text-teal-400 hover:underline">Instagram</Link>,&nbsp;
                    <Link href="https://twitter.com/gigaboulet" className="text-teal-400 hover:underline">Twitter</Link>
                </p>
            </footer>
        </>
    );
}
