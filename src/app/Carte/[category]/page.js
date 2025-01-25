import { getSubcategories } from '@/lib/getSubcategories';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { drizzleDb } from '@/lib/drizzle';
import { categories } from '@/lib/schema';
import Sidebar from '@/components/Sidebar';

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const decodeCategory = decodeURIComponent(category); // Décoder le paramètre 'category'
  const subcategories = await getSubcategories(decodeCategory); // Récupérer les sous-catégories pour la catégorie

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar de navigation (masquée sur mobile, visible à partir de md) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Section principale */}
      <section className="flex-1 p-4 md:p-8">
        {/* Titre et description */}
        <div className="text-center py-8 md:py-12 bg-gradient-to-r from-teal-800 to-teal-600">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Notre Carte
          </h1>
          <p className="text-base md:text-lg text-teal-100 max-w-2xl mx-auto">
            Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !
          </p>
        </div>

        {/* Grille des cartes */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {subcategories.map((subcategory) => (
            <li key={subcategory.id} className="m-2 sm:m-4">
              <Link href={subcategory.link}>
                <article>
                  <Card className="w-full max-w-[280px] sm:max-w-sm mx-auto overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-center text-sm sm:text-base">
                        {subcategory.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <div className="w-32 h-32 sm:w-48 sm:h-48 relative">
                        <Image
                          src={subcategory.image || '/default-image.jpg'} // Image de secours
                          alt={subcategory.title}
                          fill
                          className="object-cover rounded-lg"
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