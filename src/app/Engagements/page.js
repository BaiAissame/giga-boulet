import Head from 'next/head'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Page() {
  return (
    <>
      <Head>
        <title>
          Nos Engagements - Gigaboulet, Restaurant de Burger de
          Qualité
        </title>
        <meta
          name="description"
          content="Découvrez les engagements de Gigaboulet, un restaurant spécialisé dans les burgers de qualité. Nos engagements incluent des produits frais, un service rapide et une expérience inoubliable. Inspiré par les couleurs des Dalton !"
        />
        <meta
          name="keywords"
          content="restaurant, qualité, Dalton, burger, Gigaboulet, burgers de qualité, restaurant burger, engagement qualité"
        />
        <meta
          property="og:title"
          content="Nos Engagements - Gigaboulet, Restaurant de Burger de Qualité"
        />
        <meta
          property="og:description"
          content="Chez Gigaboulet, nous nous engageons à offrir des burgers de qualité, un service rapide et respectueux de l'environnement. Découvrez nos valeurs inspirées des Dalton."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.gigaboulet.com/nos-engagements"
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Nos Engagements chez Gigaboulet
          </h1>
          <p className="text-xl text-gray-700">
            Chez <strong>Gigaboulet</strong>, votre restaurant de
            burger, nous avons à cœur de vous offrir une expérience
            unique avec des ingrédients de qualité, inspirée par les
            Dalton.
          </p>
        </header>

        <ul className="space-y-6"> {/* Ajout d'un espace vertical entre les éléments li */}
          <li>
            <Card className="h-50"> {/* Hauteur fixe pour les cartes */}
              <CardHeader>
                <CardTitle>Des Ingrédients de Qualité</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between">
                <article>
                  <p className="text-lg text-gray-600">
                    Chez Gigaboulet, un restaurant de burgers de qualité, nous sélectionnons rigoureusement nos ingrédients. 
                    Nous privilégions les produits frais, locaux et de haute qualité pour vous offrir un burger digne de votre appétit. 
                    Nos viandes viennent de producteurs respectueux du bien-être animal, et nous nous engageons à vous fournir un produit final qui respecte nos standards de qualité.
                  </p>
                </article>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card className="h-50">
              <CardHeader>
                <CardTitle>Un Service Rapide et Chaleureux</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between">
                <article>
                  <p className="text-lg text-gray-600">
                    Nous savons que le service est une part essentielle de l'expérience dans notre restaurant de burgers. C'est pourquoi nous mettons un point d'honneur à vous servir rapidement et avec sourire. Inspirés par les Dalton, notre équipe est dynamique et toujours prête à vous offrir une expérience rapide mais mémorable.
                  </p>
                </article>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card className="h-50">
              <CardHeader>
                <CardTitle>Respect de l'Environnement</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between">
                <article>
                  <p className="text-lg text-gray-600">
                    Notre engagement envers la qualité ne s'arrête pas aux produits. Chez Gigaboulet, nous agissons également pour l'environnement. 
                    Nous utilisons des emballages recyclables et cherchons à réduire notre empreinte écologique. 
                    Notre objectif est de limiter le gaspillage alimentaire tout en offrant des burgers de qualité supérieure.
                  </p>
                </article>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card className="h-50">
              <CardHeader>
                <CardTitle>Une Offre Variée et Adaptée à Tous</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between">
                <article>
                  <p className="text-lg text-gray-600">
                    Que vous soyez amateur de viande, végétarien ou vegan, Gigaboulet a une option pour chaque gourmand. 
                    Nous nous assurons que nos burgers soient personnalisables pour satisfaire tous les goûts. 
                    Notre offre de burgers de qualité répond à une variété de préférences alimentaires, sans compromis sur le goût.
                  </p>
                </article>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card className="h-50">
              <CardHeader>
                <CardTitle>Une Transparence Totale</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between">
                <article>
                  <p className="text-lg text-gray-600">
                    La transparence est au cœur de nos engagements. Nous vous offrons une totale visibilité sur la provenance de nos ingrédients, 
                    afin que vous puissiez savourer nos burgers de qualité en toute confiance. Chez Gigaboulet, nous vous garantissons des produits frais et de qualité, 
                    tout en respectant notre engagement envers l'environnement et le bien-être animal.
                  </p>
                </article>
              </CardContent>
            </Card>
          </li>
        </ul>

        <footer className="text-center mt-16">
          <p className="text-xl text-gray-700">
            Merci de choisir Gigaboulet pour savourer des burgers de
            qualité. Nous sommes impatients de vous servir et de
            vous offrir une expérience inoubliable inspirée des
            Dalton !
          </p>
        </footer>
      </div>
    </>
  )
}
