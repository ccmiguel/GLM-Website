"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Handshake, HeartHandshake, Zap } from "lucide-react";

export default function AlianzasPage() {
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

  const colaboraciones = [
    {
      title: "Mentores Especializados",
      description: "Aporta tu experiencia y guía a jóvenes líderes en la consolidación de sus proyectos estratégicos.",
      icon: HeartHandshake,
    },
    {
      title: "Patrocinadores Clave",
      description: "Impulsa financieramente nuestras iniciativas y conecta tu marca con el talento que transformará el mañana.",
      icon: Zap,
    },
    {
      title: "Aliados Estratégicos",
      description: "Construyamos proyectos conjuntos para maximizar métricas de impacto y fomentar innovación social cruzada.",
      icon: Handshake,
    },
  ];

  return (
    <div className="bg-white min-h-[60vh] pb-24">
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 tracking-tight">
            Construimos en red
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            El impacto a gran escala no se logra en solitario. Buscamos aliados que compartan nuestra visión de potenciar el talento joven.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {colaboraciones.map((colab, index) => {
            const Icon = colab.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="solid" className="h-full p-8 flex flex-col items-center text-center group border-transparent hover:border-[#10B981]/20 overflow-hidden cursor-pointer">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#10B981] group-hover:scale-110 group-hover:bg-[#10B981]/10 transition-all duration-300">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A192F] transition-transform duration-300 group-hover:-translate-y-2">
                    {colab.title}
                  </h3>
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                    <p className="text-gray-600">
                      {colab.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center bg-[#0A192F]/5 p-12 rounded-[2rem] border border-[#0A192F]/10"
        >
          <h3 className="text-3xl font-bold text-[#0A192F] mb-6">
            ¿Listo para transformar el futuro juntos?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Únete a nuestra red de aliados y formemos parte de una misma agenda de crecimiento e innovación.
          </p>
          <Link href="/contacto">
            <button className="bg-[#0A192F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#10B981] transition-colors duration-300 shadow-md hover:shadow-xl">
              Conversemos
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
