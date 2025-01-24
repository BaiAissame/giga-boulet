import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { drizzleDb } from '@/lib/drizzle';
import { menu, subcategories, categories, ingredients } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

// Fonction pour récupérer un menu spécifique avec ses ingrédients
async function getMenuDetails(categoryTitle, subcategoryTitle) {
  const result = await drizzleDb
    .select({
      id: menu.id,
      title: menu.title,
      image: menu.image,
      description: menu.description,
      ingredients: {
        name: ingredients.name,
        quantity: ingredients.quantity,
      },
    })
    .from(menu)
    .innerJoin(subcategories, eq(menu.subcategory_id, subcategories.id))
    .innerJoin(categories, eq(subcategories.category_id, categories.id))
    .leftJoin(ingredients, eq(menu.id, ingredients.menu_id)) // Joindre la table des ingrédients
    .where(
      and(
        eq(categories.title, categoryTitle),
        eq(subcategories.title, subcategoryTitle) // Filtrer par titre de la sous-catégorie
      )
    );

  console.log('Résultat de la requête :', result);
  return result;
}

// Fonction pour regrouper les ingrédients pour le menu
function groupMenuWithIngredients(menuDetails) {
  if (menuDetails.length === 0) return null;

  const groupedMenu = {
    ...menuDetails[0],
    ingredients: menuDetails
      .filter((row) => row.ingredients && row.ingredients.name) // Vérifier si row.ingredients existe
      .map((row) => ({
        name: row.ingredients.name,
        quantity: row.ingredients.quantity,
      })),
  };

  return groupedMenu;
}

// Page de détail d'un menu spécifique
export default async function MenuDetailPage({ params }) {
  const { category, menu: subcategory } = await params;

  // Décoder les paramètres d'URL
  const decodeCategory = decodeURIComponent(category); // Décoder le paramètre 'category'
  const decodeSubcategory = decodeURIComponent(subcategory); // Décoder le paramètre 'subcategory'

  // Récupérer les détails du menu
  const menuDetails = await getMenuDetails(decodeCategory, decodeSubcategory);

  // Grouper les ingrédients pour le menu
  const menuDetail = groupMenuWithIngredients(menuDetails);
  console.log('Détails du menu :', menuDetail);

  if (!menuDetail) {
    return <p className="text-center">Aucun menu trouvé pour cette sous-catégorie.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">{menuDetail.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image du menu */}
        <div className="w-full md:w-1/2">
          <Image
            src={menuDetail.image}
            alt={menuDetail.title}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Détails du menu */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600 mb-6">{menuDetail.description}</p>

          <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
          <ul className="list-disc list-inside">
            {menuDetail.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient.name} - {ingredient.quantity}
              </li>
            ))}
          </ul>

          {/* Lien pour retourner à la liste des menus */}
          <div className="mt-8">
            <Link
              href={`/Carte/${encodeURIComponent(decodeCategory)}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Retour à la liste des menus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}