import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="left">
          {/* Ajouter un titre pour l'accessibilité */}
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Accédez aux sections du site</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
       <Link href='/Carte'>Carte</Link>
        <Link href='/Engagements'>Engagements</Link>
        <Link href='/Famille'>Famille</Link>
        <Link href='/Offre'>Offre</Link>
        <Link href='/Propos'>Propos</Link>
          <Link href='/Recrutement'>Recrutement</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
