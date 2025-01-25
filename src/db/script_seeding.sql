-- Supprimer les tables si elles existent déjà (pour éviter les conflits)
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS subcategories;
DROP TABLE IF EXISTS categories;

-- Créer la table des catégories principales
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  image VARCHAR(255) NOT NULL,
  link VARCHAR(100) NOT NULL
);

-- Créer la table des sous-catégories
CREATE TABLE subcategories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  image VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  link VARCHAR(100) NOT NULL
);

-- Créer la table des menus
CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  subcategory_id INTEGER REFERENCES subcategories(id) ON DELETE CASCADE
);

-- Créer la table des ingrédients
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  quantity VARCHAR(50) NOT NULL,
  menu_id INTEGER REFERENCES menu(id) ON DELETE CASCADE
);

-- Insérer les catégories principales
INSERT INTO categories (title, image, link) VALUES
('Nouveauté', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Nouveauté.png', '/Carte/Nouveauté'),
('Bon Plan', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Bon_Plan.png', '/Carte/BonPlan'),
('Menus', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Menus.png', '/Carte/Menus'),
('Burgers', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Burgers.png', '/Carte/Burgers'),
('Snacks', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Snacks.png', '/Carte/Snacks'),
('Desserts', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Desserts.png', '/Carte/Desserts'),
('Boissons', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Boissons.png', '/Carte/Boissons');

-- Insérer les sous-catégories
INSERT INTO subcategories (title, image, category_id, link) VALUES
('Joe Boulet', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Joe_Boulet.png', 1, '/Carte/Nouveauté/JoeBoulet'),
('William Boulet', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/William_Boulet.png', 1, '/Carte/Nouveauté/WilliamBoulet'),
('Jack Boulet', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Jack_Boulet.png', 1, '/Carte/Nouveauté/JackBoulet'),
('Averell Boulet', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Averell_Boulet.png', 1, '/Carte/Nouveauté/AverellBoulet'),
('Menu Dalton', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Menu_Dalton.png', 2, '/Carte/BonPlan/MenuDalton'),
('Menu Gigaboulet', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Menu_Gigaboulet.png', 2, '/Carte/BonPlan/MenuGigaboulet'),
('Menu Rantanplan', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Menu_Rantanplan.png', 2, '/Carte/BonPlan/MenuRantanplan'),
('Classic Burgers', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/classic_burgers.jpg', 4, '/Carte/Burgers/ClassicBurgers'),
('Gourmet Burgers', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/gourmet_burgers.jpg', 4, '/Carte/Burgers/GourmetBurgers'),
('Frites', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/frites.jpg', 5, '/Carte/Snacks/Frites'),
('Donuts', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/donuts.jpg', 6, '/Carte/Desserts/Donuts'),
('Sodas', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/Sodas.png', 7, '/Carte/Boissons/Sodas');

-- Insérer les menus
INSERT INTO menu (title, image, description, subcategory_id) VALUES
('Joe Burger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/joe_burger.jpg', 'Un burger classique et savoureux, parfait pour une petite faim. Découvrez l''authenticité des saveurs chez Gigaboulet Restaurant.', 1),
('William Burger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/william_burger.jpg', 'Un double burger généreux avec des ingrédients frais, idéal pour satisfaire les gros appétits. Une expérience inoubliable chez Gigaboulet Restaurant.', 2),
('Jack Burger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/jack_burger.jpg', 'Un burger intense et généreux, spécialement conçu pour les grandes faims. La combinaison parfaite pour les amateurs de repas copieux.', 3),
('Averell Burger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/averell_burger.jpg', 'Un burger géant et savoureux pour les appétits insatiables. Une explosion de saveurs qui ne vous laissera pas indifférent.', 4),
('Menu Dalton Classic', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/menu_dalton_classic.jpg', 'Un menu économique avec un burger, des frites croustillantes et une boisson rafraîchissante. Idéal pour un repas complet chez Gigaboulet.', 5),
('Gigaboulet Burger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/gigaboulet_burger.jpg', 'Un burger XXL pour combler les plus gros appétits. Une expérience unique pour les amateurs de saveurs généreuses.', 6),
('Cheeseburger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/cheeseburger.jpg', 'Un burger classique avec du fromage fondu savoureux. Une recette intemporelle qui ravira tous les amateurs de burgers.', 8),
('Gourmet Cheeseburger', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/gourmet_burgers.jpg', 'Un burger raffiné pour les amateurs de saveurs exquises.', 9),
('Frites Classiques', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/frites_classiques.jpg', 'Des frites dorées, croustillantes et savoureuses. Un incontournable à partager ou à savourer en solo.', 10),
('Donut Chocolat', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/donut_chocolat.jpg', 'Un donut moelleux recouvert d''un glaçage chocolat gourmand. Parfait pour les petites faims sucrées.', 11),
('Coca-Cola', 'https://yvt0xuhvxht9er2d.public.blob.vercel-storage.com/images/coca_cola.jpg', 'Un soda pétillant et rafraîchissant qui accompagne parfaitement tous vos repas.', 12);

-- Insérer les ingrédients
INSERT INTO ingredients (name, quantity, menu_id) VALUES
-- Ingrédients pour "Joe Burger"
('Pain', '1 pièce', 1),
('Steak haché', '1 pièce', 1),
('Fromage', '1 tranche', 1),
('Salade', '1 feuille', 1),
('Sauce maison', '1 portion', 1),

-- Ingrédients pour "William Burger"
('Pain', '2 pièces', 3),
('Steak haché', '2 pièces', 3),
('Bacon', '2 tranches', 3),
('Cheddar', '2 tranches', 3),
('Sauce barbecue', '1 portion', 3),

-- Ingrédients pour "Jack Burger"
('Pain', '3 pièces', 5),
('Steak haché', '3 pièces', 5),
('Bacon', '3 tranches', 5),
('Oignon', '1 tranche', 5),
('Sauce spéciale', '1 portion', 5),

-- Ingrédients pour "Averell Burger"
('Pain', '4 pièces', 7),
('Steak haché', '4 pièces', 7),
('Bacon', '4 tranches', 7),
('Oignon', '2 tranches', 7),
('Sauce géante', '1 portion', 7),

-- Ingrédients pour "Frites Classiques"
('Pommes de terre', '150g', 9),
('Sel', '1 pincée', 9),

-- Ingrédients pour "Donut Chocolat"
('Pâte à donut', '1 pièce', 11),
('Chocolat', '50g', 11),
('Sucre glace', '1 pincée', 11);