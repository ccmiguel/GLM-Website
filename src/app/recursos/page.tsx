"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, ArrowRight } from "lucide-react";

const externalResources = [
  {
    id: 1,
    title: "Blog Oficial GLM",
    description: "Explora artículos, perspectivas y lecciones de nuestro ecosistema para catalizar tu formación continua.",
    link: "https://globalleadershipmakers.blogspot.com/",
    category: "Blogger",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    image: "/images/CORRIDO/Corrido-1.png",
  },
  {
    id: 2,
    title: "Publicación Destacada 1",
    description: "Accede a nuestro primer volumen en la Biblioteca Digital con recursos clave para el liderazgo.",
    link: "https://www.calameo.com/books/008095479ed64cfe94070",
    category: "Calameo",
    icon: BookOpen,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    image: "/images/CORRIDO/Corrido-2.png",
  },
  {
    id: 3,
    title: "Publicación Destacada 2",
    description: "Descubre herramientas y metodologías ágiles en nuestra segunda publicación interactiva.",
    link: "https://www.calameo.com/books/00809547905b8c8e3d802",
    category: "Calameo",
    icon: BookOpen,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    image: "/images/CORRIDO/Corrido-3.png",
  },
  {
    id: 4,
    title: "Publicación Destacada 3",
    description: "Aprende sobre resiliencia e innovación social en nuestro tercer documento de la biblioteca.",
    link: "https://www.calameo.com/books/0080954797d129fda8c63",
    category: "Calameo",
    icon: BookOpen,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    image: "/images/CORRIDO/Corrido-4.png",
  },
];

export default function RecursosPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-white min-h-[80vh]">
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6 tracking-tight">
            Hub de Recursos
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Accede a nuestras plataformas externas, blog oficial y biblioteca digital de manera rápida y directa.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {externalResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <motion.div key={resource.id} variants={fadeInUp} className="h-full">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:border-[#F97316]/20"
                >
                  {/* Top Image Container 16:9 */}
                  <div className="w-full aspect-video bg-[#1E3A8A] relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                      <img src={resource.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={resource.title} />
                    </div>
                    <Icon className="w-16 h-16 text-[#F97316] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block py-1 px-3 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                        {resource.category}
                      </span>
                      <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-[#F97316] group-hover:translate-x-1 transition-all" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3 group-hover:text-[#F97316] transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
