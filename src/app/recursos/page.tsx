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
                  className="block h-full p-10 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${resource.bgColor} transition-colors group-hover:bg-opacity-80`}>
                      <Icon className={`w-8 h-8 ${resource.color}`} />
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-[#F97316] group-hover:translate-x-1 transition-all" />
                  </div>

                  <span className="inline-block py-1 px-3 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    {resource.category}
                  </span>

                  <h3 className="text-2xl font-bold text-[#0A192F] mb-3 group-hover:text-[#F97316] transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {resource.description}
                  </p>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
