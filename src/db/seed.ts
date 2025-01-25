import { db } from './db'
import { categories } from './schema/categories'

const categoriesData = [
    { id: 1, title: 'Nouveauté', image: '/burgerblack.jpg', link: '/Carte/Nouveauté' },
    { id: 2, title: 'Bon Plan', image: '/burgerblack.jpg', link: '/Carte/BonPlan' },
    { id: 3, title: 'Menus', image: '/burgerblack.jpg', link: '/Carte/Menus' },
    { id: 4, title: 'Burgers', image: '/burgerblack.jpg', link: '/Carte/Burgers' },
    { id: 5, title: 'Menus enfants', image: '/burgerblack.jpg', link: '/Carte/MenusEnfants' },
    { id: 6, title: 'Wraps', image: '/burgerblack.jpg', link: '/Carte/Wraps' },
    { id: 7, title: 'Salades', image: '/burgerblack.jpg', link: '/Carte/Salades' },
    { id: 8, title: 'Snackes', image: '/burgerblack.jpg', link: '/Carte/Snackes' },
    { id: 9, title: 'Desserts', image: '/burgerblack.jpg', link: '/Carte/Desserts' },
    { id: 10, title: 'Boissons', image: '/burgerblack.jpg', link: '/Carte/Boissons' }
  ]

async function seedCategories() {
  await db.insert(categories).values(categoriesData)
}

async function main() {
  await seedCategories()
}

main().catch(console.error)