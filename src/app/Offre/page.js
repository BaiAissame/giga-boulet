"use client";

import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-01-30T23:59:59').getTime();

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
    <div className="font-sans p-5 bg-gradient-to-b from-white to-gray-50 min-h-screen">

      {/* Titre */}
      <h1 className="text-teal-600 text-center text-4xl font-extrabold mb-8">
        🌟 Nos Offres du Moment 🌟
      </h1>

      <div className="flex flex-col items-center">

        {/* Description de l'offre */}
        <p className="text-lg text-center mt-5 leading-relaxed mb-10 max-w-2xl text-gray-700 shadow-md p-4 rounded-md">
          Découvrez notre menu spécial à un prix incroyable ! <span className="font-bold text-teal-600">Smart Boulet</span> vous propose un menu complet avec <strong>5 produits savoureux</strong> pour seulement <strong>5 euros</strong>. Ne manquez pas cette offre exclusive !
          <Countdown />
        </p>

        {/* Conteneur en row */}
        <div className="flex flex-col sm:flex-row items-start w-full justify-center space-y-6 sm:space-y-0 sm:space-x-10 max-w-5xl">

          {/* Image principale */}
          <div className="flex justify-center w-full sm:w-2/5 shadow-md p-2 rounded-lg">
            <img
              src="./offres.webp"
              alt="Offre Smart Boulet - 5 produits = 5 euros"
              className="w-full max-w-lg sm:max-w-sm rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          {/* Contenu à droite */}
          <div className="flex flex-col justify-start items-start w-full sm:w-3/5 space-y-6">

            {/* Liste des produits inclus */}
            <div className="text-left shadow-md p-4 rounded-md">
              <h2 className="text-2xl font-semibold mb-3 text-teal-500">Ce menu inclut :</h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Un délicieux burger</li>
                <li>Une portion de frites croustillantes</li>
                <li>Une boisson rafraîchissante</li>
                <li>Une petite glace onctueuse</li>
                <li>Des onion rings dorés</li>
              </ul>
            </div>

            {/* Témoignages clients */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-md">
              <h2 className="text-teal-500 text-2xl font-semibold mb-3">Ce que disent nos clients :</h2>
              <ul className="list-none space-y-3 text-gray-600">
                <li>
                  <p className="italic">"Un menu parfait pour les petits budgets !"</p>
                  <strong>– Alexandre</strong>
                </li>
                <li>
                  <p className="italic">"J'ai adoré les onion rings, délicieux et croustillants."</p>
                  <strong>– Marie</strong>
                </li>
                <li>
                  <p className="italic">"Le meilleur fast-food en ville, à ce prix c'est imbattable !"</p>
                  <strong>– Lucas</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
