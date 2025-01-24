// src/components/Sidebar.js
import React from 'react';
import Link from 'next/link';
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

export default async function Sidebar() {
  const categories = await getCategories();

  return (
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
  );
}