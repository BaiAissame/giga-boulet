import { getSubcategories } from '@/lib/getSubcategories'; // Importez la fonction
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { drizzleDb } from '@/lib/drizzle';
import { categories } from '@/lib/schema';
import Sidebar from '@/components/Sidebar'; // Importer le composant Sidebar

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const decodeCategory = decodeURIComponent(category); // Décoder le paramètre 'category'
  const subcategories = await getSubcategories(decodeCategory); // Récupérer les sous-catégories pour la catégorie

  return (
    <div className="flex">
      {/* Sidebar de navigation */}
      <Sidebar />

      {/* Section des cartes */}
      <section className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Notre Carte</h1>
        <p className="text-center mb-8">
          Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !
        </p>

        {/* Grille des cartes pour cette catégorie */}
        <ul className="grid grid-cols-3 gap-4">
          {subcategories.map((subcategory) => (
            <li key={subcategory.id} className="m-4">
              <Link href={subcategory.link}>
                <article>
                  <Card className="w-full max-w-sm"> {/* Limiter la largeur des cartes */}
                    <CardHeader>
                      <CardTitle className="text-center">{subcategory.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <div className="w-48 h-48 relative"> {/* Conteneur pour l'image */}
                        <Image
                          src={subcategory.image || '/default-image.jpg'} // Image de secours
                          alt={subcategory.title}
                          fill // Remplir le conteneur parent
                          className="object-cover rounded-lg" // Adapter l'image au conteneur
                        />
                      </div>
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