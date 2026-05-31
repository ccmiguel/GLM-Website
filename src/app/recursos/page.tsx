"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";

export default function RecursosPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Hub de Recursos
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Accede a nuestra plataforma de conocimiento, blog oficial y recursos de formación estratégica de manera directa.
          </p>
        </motion.div>

        {/* Tarjeta Destacada del Blog Oficial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <a
            href="https://globalleadershipmakers.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden hover:border-[#10B981]/20 cursor-pointer"
          >
            {/* Top Image Container 16:9 */}
            <div className="w-full aspect-video bg-primary relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                <img
                  src="/images/CORRIDO/Corrido-1.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Blog Oficial GLM"
                />
              </div>
              <Globe className="w-20 h-20 text-[#10B981] relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="p-8 md:p-12 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block py-1.5 px-4 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  Blogger
                </span>
                <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-[#10B981] group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-[#10B981] transition-colors leading-tight">
                Blog Oficial GLM
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                Explora artículos, perspectivas, lecciones y metodologías desarrolladas por nuestro ecosistema para catalizar tu formación continua en liderazgo, innovación social y emprendimiento.
              </p>

              <div className="mt-4 pt-6 border-t border-gray-100 flex items-center space-x-2 text-[#10B981] font-semibold text-lg hover:underline">
                <span>Visitar Blog Oficial</span>
                <span>→</span>
              </div>
            </div>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
