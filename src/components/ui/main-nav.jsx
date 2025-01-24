import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function MainNav() {
  // Tableau pour les items de navigation
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Carte", href: "/Carte" },
    { label: "Engagements", href: "/Engagements" },
    { label: "Famille", href: "/Famille" },
    { label: "Offre", href: "/Offre" },
    { label: "Propos", href: "/Propos" },
    { label: "Recrutement", href: "/Recrutement" },
  ];

  return (
    <nav className="bg-teal-800 text-white shadow-lg hidden md:block sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center py-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* Génération des liens directement */}
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="text-lg font-semibold px-4 py-2 rounded-md hover:bg-teal-700 transition-all"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}