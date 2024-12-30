"use client";

import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-01-15T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}j ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft('Offre expirée');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-red-600 text-lg mt-5">
      Temps restant pour profiter de l'offre : <strong>{timeLeft}</strong>
    </p>
  );
}

export default function Page() {
  return (
    <div className="font-sans p-5">

      {/* Titre */}
      <h1 className="text-red-600 text-center text-3xl font-bold">
        Nos Offres du Moment
      </h1>

      <div className="flex flex-col items-center">

        {/* Description de l'offre */}
        <p className="text-lg text-center mt-5 leading-relaxed mb-5">
          Découvrez notre menu spécial à un prix incroyable ! Gigaboulet vous propose un menu complet avec <strong>5 produits savoureux</strong> pour seulement <strong>5 euros</strong>. Ne manquez pas cette offre exclusive !
        </p>

        {/* Image principale */}
        <div className="flex justify-center w-3/5 mb-5">
          <img
            src="./offres.webp"
            alt="Offre Gigaboulet - 5 produits = 5 euros"
            className="w-full rounded-xl max-w-5xl"
          />
        </div>

        {/* Liste des produits inclus */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-semibold mb-3">Ce menu inclut :</h2>
          <ul className="list-disc text-left mx-auto space-y-2 w-fit">
            <li>Un délicieux burger</li>
            <li>Une portion de frites croustillantes</li>
            <li>Une boisson rafraîchissante</li>
            <li>Une petite glace onctueuse</li>
            <li>Des onion rings dorés</li>
          </ul>
        </div>

        {/* Compte à rebours */}
        <Countdown />

        {/* Témoignages clients */}
        <div className="mt-5 bg-gray-100 p-5 rounded-xl w-4/5 text-center">
          <h2 className="text-red-600 text-2xl font-semibold mb-3">Ce que disent nos clients :</h2>
          <ul className="list-none space-y-2 p-0">
            <li>"Un menu parfait pour les petits budgets !" – <strong>Alexandre</strong></li>
            <li>"J'ai adoré les onion rings, délicieux et croustillants." – <strong>Marie</strong></li>
            <li>"Le meilleur fast-food en ville, à ce prix c'est imbattable !" – <strong>Lucas</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
