"use client";

import React from 'react';
import { motion } from 'framer-motion';

const content = [
  {
    id: "reading",
    title: "The World Within Pages",
    description: "Reading is my escape. Whether it’s a mystery or a biography, I love getting lost in another world.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000" 
  },
  {
    id: "football",
    title: "The Heart of the Pitch",
    description: "Nothing beats the adrenaline of football. It’s about teamwork, strategy, and the perfect goal.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000"
  },
  {
    id: "singing",
    title: "Finding My Voice",
    description: "Singing is how I express myself. From pop hits to soul, music is the universal language.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000"
  }
];

export default function ScrollytellingPage() {
  return (
    <main className="bg-black text-white">
      {content.map((item) => (
        <section key={item.id} className="h-screen flex items-center justify-center sticky top-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center p-10 bg-black/60 backdrop-blur-md rounded-xl max-w-2xl"
          >
            <h2 className="text-5xl font-bold mb-4">{item.title}</h2>
            <p className="text-xl text-gray-200">{item.description}</p>
          </motion.div>
        </section>
      ))}
    </main>
  );
}
