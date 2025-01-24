import React from 'react'

export default async function MenuDetailPage({ params }) {
  const { category, menu } = await params
  const decodeCategory = decodeURIComponent(category);
  const decodeMenu = decodeURIComponent(menu); 

  // Exemple de données pour le menu spécifique
  const menuData = [
      { id: 1, title: 'Burger Nouveauté 1', image: '/burgerblack.jpg', description: 'Délicieux burger avec des ingrédients frais.' },
      { id: 2, title: 'Burger Nouveauté 2', image: '/burgerblack.jpg', description: 'Un burger épicé avec des sauces maison.' },
      { id: 3, title: 'Burger Nouveauté 3', image: '/burgerblack.jpg', description: 'Burger avec une touche asiatique.' }
    ]

  const menuDetail = menuData?.find(item => item.id === parseInt(decodeMenu))

  if (!decodeMenu) {
    return <p>Menu non trouvé</p>
  }

  return (
    <div className="menu-detail">
      {decodeMenu}
      <h1>{menuDetail.title}</h1>
      {/* <Image src={menuDetail.image} alt={menuDetail.title} width={500} height={500} /> */}
      <p>{menuDetail.description}</p>
    </div>
  )
}
