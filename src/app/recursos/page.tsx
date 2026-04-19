"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "El rol del liderazgo juvenil en la Acción Climática",
    category: "Liderazgo y Talento",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
    height: "h-96",
  },
  {
    id: 2,
    title: "Metodologías ágiles para innovadores sociales",
    category: "Emprendimiento",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    height: "h-64",
  },
  {
    id: 3,
    title: "Resiliencia: navegando la incertidumbre",
    category: "Desarrollo Sostenible",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=600",
    height: "h-80",
  },
  {
    id: 4,
    title: "Construyendo comunidades que trascienden",
    category: "Conexión Global",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    height: "h-72",
  },
  {
    id: 5,
    title: "Claves de un pitch para inversores ángeles",
    category: "Emprendimiento",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    height: "h-96",
  },
];

export default function RecursosPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 tracking-tight">
            Recursos y Blog
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Perspectivas, herramientas y lecciones de nuestro ecosistema para catalizar tu formación continua.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
              className="break-inside-avoid relative rounded-[2rem] overflow-hidden group cursor-pointer"
            >
              <div className={`w-full ${article.height} relative`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block py-1 px-3 bg-[#10B981] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-white text-xl font-bold leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
