// lib/getSubcategories.js
import { drizzleDb } from '@/lib/drizzle';
import { subcategories, categories } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function getSubcategories(categoryTitle) {
  // Récupérer l'ID de la catégorie à partir de son nom
  const categoryResult = await drizzleDb
    .select({ id: categories.id })
    .from(categories)
    .where(eq(categories.title, categoryTitle))
    .limit(1);

  if (categoryResult.length === 0) {
    throw new Error(`Catégorie "${categoryTitle}" non trouvée`);
  }

  const categoryId = categoryResult[0].id;

  // Récupérer les sous-catégories pour cette catégorie
  const query = drizzleDb
    .select({
      id: subcategories.id,
      title: subcategories.title,
      image: subcategories.image,
      link: subcategories.link,
    })
    .from(subcategories)
    .where(eq(subcategories.category_id, categoryId)) // Filtre par ID de catégorie
    .orderBy(subcategories.id);

  const result = await query;
  return result.map((row) => ({
    id: row.id,
    title: row.title,
    image: row.image,
    link: `/Carte/${categoryTitle}/${encodeURIComponent(row.title)}`,
  }));
}