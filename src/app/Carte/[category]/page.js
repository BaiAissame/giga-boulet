import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { drizzleDb } from '@/lib/drizzle';
import { categories } from '@/lib/schema';

async function getMenus() {
  const query = drizzleDb
    .select({
      id: categories.id,
      title: categories.title,
      image: categories.image,
      link: categories.link,
    })
    .from(categories)
    .orderBy(categories.id);


  const result = await query;
  return result.map((row) => ({
    id: row.id,
    title: row.title,
    image: row.image,
    link: `/Carte/${encodeURIComponent(row.title)}`,
  }));
}

// Cette page récupère tous les menus associés à une catégorie donnée
export default async function CategoryPage({ params }) {
  const { category } =  await params
  const decodeCategory = decodeURIComponent(category); // Décoder le paramètre 'category'
  const menus = await getMenus();


  // Exemple de données qui pourraient être récupérées pour chaque catégorie
  // Vous pouvez récupérer ces données depuis une API ou une base de données

  const cards = [
      { id: 1, title: 'Burger Nouveauté 1', image: '/burgerblack.jpg', link: '/Carte/Nouveauté/1' },
      { id: 2, title: 'Burger Nouveauté 2', image: '/burgerblack.jpg', link: '/Carte/Nouveauté/2' },
      { id: 3, title: 'Burger Nouveauté 3', image: '/burgerblack.jpg', link: '/Carte/Nouveauté/3' }
    ]

  
  return (
    <div className="flex">
      {/* Sidebar de navigation (si vous avez une barre latérale pour les catégories) */}
      <section className="w-[20vw] h-[100vh]">
        <table className="w-full h-full table-fixed border-collapse">
          <tbody>
            <tr>
              <td className="py-4 px-2 text-center">Nouveauté</td>
            </tr>
            <tr>
              <td className="py-4 px-2 text-center">Bon Plan</td>
            </tr>
            <tr>
              <td className="py-4 px-2 text-center">Menus</td>
            </tr>
            <tr>
              <td className="py-4 px-2 text-center">Burgers</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section des cartes */}
			<section className="justify-center">
        <h1 className="m-2">Menus {decodeCategory}</h1>
        <p className="text-center">
          Découvrez tous les menus de la catégorie {decodeCategory}.
        </p>

        {/* Grille des cartes pour cette catégorie */}
				<ul className="grid grid-cols-3 gap-4">
          {cards.map((card) => (
            <li key={card.id} className="m-4">
              <Link href={card.link}>
                <article>
                  <Card>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={200}
                        height={200}
                      />
                    </CardContent>
                  </Card>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
