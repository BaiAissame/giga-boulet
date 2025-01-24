// src/app/Carte/page.js
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
    <div className="flex">
      {/* Section de la liste des catégories */}
      <section className="w-[20vw] h-[100vh]">
        <table className="w-full h-full table-fixed border-collapse">
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="py-4 px-2 text-center">
                  <Link href={category.link}>{category.title}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section principale */}
      <section className="justify-center">
        <h1 className="m-2">Notre Carte</h1>
        <p className="text-center">
          Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !
        </p>
        <ul className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <li key={category.id} className="m-4">
              <Link href={category.link}>
                <article>
                  <Card>
                    <CardHeader>
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={category.image || '/default-image.jpg'} // Image de secours
                        alt={category.title}
                        width={200}
                        height={200}
                        className="object-cover"
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