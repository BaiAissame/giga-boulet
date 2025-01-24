import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { drizzleDb } from '@/lib/drizzle';
import { categories } from '@/lib/schema';

async function getCategories() {
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

export default async function CategoryPage() {
  // Récupérer les catégories côté serveur
  const categories = await getCategories();

  return (
    <div className="flex min-h-screen">
      {/* Section de la liste des catégories (Sidebar) */}
      <section className="w-[20vw] h-[100vh] bg-gray-100">
        <table className="w-full h-full table-fixed border-collapse">
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="py-4 px-2 text-center hover:bg-gray-200 transition-colors duration-200">
                  <Link href={category.link}>{category.title}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section principale */}
      <section className="flex-1 p-8">
        {/* Titre et description */}
        <div className="text-center py-12 bg-gray-50">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">
            Notre Carte
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !
          </p>
        </div>

        {/* Grille des cartes */}
        <ul className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <li key={category.id} className="m-4">
              <Link href={category.link}>
                <article>
                  <Card className="w-full max-w-sm mx-auto">
                    <CardHeader>
                      <CardTitle className="text-center">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Image
                        src={category.image || '/default-image.jpg'} // Image de secours
                        alt={category.title}
                        width={200}
                        height={200}
                        className="object-cover rounded-lg"
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
  );
}