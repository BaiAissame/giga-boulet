"use client";

import Head from 'next/head';
import React, { useState, useEffect } from "react";
import {
  Container,
} from '@mui/material';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-01-30T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}j ${hours}h ${minutes}m ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Offre expirée");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-red-600 text-lg mt-5 font-bold">
      Temps restant pour profiter de l'offre : <strong>{timeLeft}</strong>
    </div>

  );
}

export default function Page() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Offre spéciale de fast food : Profitez du menu SmartBoulet 
          avec 5 produits savoureux pour seulement 5€, offre valable jusqu'au 30 janvier 2025. Ne la manquez pas !"
        />
        <title>Offre Menu SmartBoulet - 5 produits pour 5€</title>
      </Head>

      <Container maxWidth='lg'>
        <div className="font-sans p-5 bg-gradient-to-b from-white to-gray-50 min-h-screen">

          {/* Titre */}
          <h1 className="text-teal-600 mt-14 text-center text-2xl font-extrabold mb-6">
            🌟 Offre Spéciale : Menu SmartBoulet à 5€ avec 5 Produits Savoureux - À Ne Pas Manquer ! 
          </h1>

          <div className="flex flex-col items-center shadow-2xl p-1">

            {/* Description de l'offre */}
            <div className="text-lg text-center mt-5 leading-relaxed mb-10 max-w-3xl text-gray-700 shadow-lg p-5 rounded-md">
              <p>
                Profitez de notre menu complet <strong>SmartBoulet avec 5 produits</strong> pour seulement <strong>5€</strong> ! Cette offre exclusive de fast food à prix réduit est disponible jusqu'au <strong>30 janvier 2025</strong>. Ne laissez pas passer cette occasion de savourer un repas délicieux à un prix imbattable !
              </p>
              <Countdown />
            </div>

            {/* Conteneur en row */}
            <div className="flex flex-col sm:flex-row items-start w-full justify-center space-y-6 sm:space-y-0 sm:space-x-10 max-w-5xl">

              {/* Image principale */}
              <div className="flex justify-center w-full sm:w-2/5 shadow-lg p-2 rounded-lg">
                <img
                  src="./offre_smartboulet.webp"
                  alt="Menu SmartBoulet à 5€ - 5 produits savoureux pour un prix imbattable"
                  className="w-full max-w-2xl sm:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
                />
              </div>

              {/* Contenu à droite */}
              <div className="flex flex-col justify-start items-start w-full sm:w-1/2 space-y-4">

                {/* Liste des produits inclus */}
                <section className="bg-gray-50 text-left shadow-lg p-4 rounded-md w-[85%]">
                  <h2 className="text-2xl font-semibold mb-3 text-teal-500">Ce menu inclut :</h2>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Le Boulet Suprême - Un délicieux burger</li>
                    <li>Frites Maison - Une portion de frites croustillantes</li>
                    <li>Une boisson rafraîchissante</li>
                    <li>La Boule Givrée - Une petite glace onctueuse</li>
                    <li>Des onion rings dorés</li>
                  </ul>
                </section>

                {/* Témoignages clients */}
                <section className="bg-gray-50 p-4 rounded-xl shadow-lg w-[85%]">
                  <h2 className="text-teal-500 text-2xl font-semibold mb-3">Ce que disent nos clients :</h2>
                  <ul className="list-none space-y-3 text-gray-600">
                    <li>
                      <p className="italic">"Ce menu SmartBoulet à 5€ est un vrai bon plan ! Il est complet, délicieux, et à un prix imbattable. Je recommande vivement !"</p>
                      <strong>– Alexandre</strong>
                    </li>
                    <li>
                      <p className="italic">"Les onion rings sont délicieux, et tout le menu est super généreux pour le prix. Un repas rapide mais savoureux, parfait pour les petites faims !"</p>
                      <strong>– Marie</strong>
                    </li>
                    <li>
                      <p className="italic">"Le meilleur menu fast food que j'ai trouvé à ce prix ! Un excellent rapport qualité/prix pour un repas complet."</p>
                      <strong>– Lucas</strong>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
