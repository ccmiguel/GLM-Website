"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Handshake, HeartHandshake } from "lucide-react";

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
      image: "/images/CORRIDO/Corrido-13.png",
    },
    {
      title: "Aliados Estratégicos",
      description: "Construyamos proyectos conjuntos para maximizar métricas de impacto y fomentar innovación social cruzada.",
      icon: Handshake,
      image: "/images/CORRIDO/Corrido-11.png",
    },
  ];

  return (
    <div className="bg-white min-h-[60vh] pb-24">
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
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
          className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {colaboraciones.map((colab, index) => {
            const Icon = colab.icon;
            return (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <div className="h-full flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-transparent hover:border-[#10B981]/20 cursor-pointer">
                  {/* Top Image Container 16:9 */}
                  <div className="w-full aspect-video bg-primary relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                      <img src={colab.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={colab.title} />
                    </div>
                    <Icon className="w-16 h-16 text-[#10B981] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-8 flex flex-col flex-grow items-center text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {colab.title}
                    </h3>
                    <p className="text-gray-600">
                      {colab.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Nueva Sección: Alianzas Oficiales */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20 pt-16 border-t border-gray-100"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">
            Alianzas Oficiales
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            Instituciones oficiales con convenios y colaboraciones activas que fortalecen el ecosistema GLM.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center max-w-6xl mx-auto">
            {[
              {
                name: "Hub de Innovación de Ingeniería de la UMSA",
                logo: "/images/logos/logo_hubInnovacion.png"
              },
              {
                name: "Incubadora de Empresas del CIDE",
                logo: "/images/logos/logo_cideUmsa.png"
              },
              {
                name: "Fundación Maya",
                logo: "/images/logos/logo_fundacionMaya.png"
              },
              {
                name: "IE de EMS",
                logo: "/images/logos/logo_IEEE.png"
              },
              {
                name: "Women Techmakers",
                logo: "/images/logos/logo_womenTechmakers.png"
              },
              {
                name: "Ecosistema Emprendedor de La Paz",
                logo: "/images/logos/logo_ecosistemaEmprendedorLaPaz.png"
              }
            ].map((alianza, idx) => (
              <div
                key={idx}
                className="w-36 h-36 flex items-center justify-center p-6 bg-white rounded-full border border-gray-200/60 shadow-sm hover:shadow-md hover:border-[#10B981]/25 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={alianza.logo}
                    alt={alianza.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center bg-primary/5 p-12 rounded-[2rem] border border-primary/10 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-primary mb-6">
            ¿Listo para transformar el futuro juntos?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Únete a nuestra red de aliados y formemos parte de una misma agenda de crecimiento e innovación.
          </p>
          <Link href="/#contacto">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent1 hover:text-primary transition-all duration-300 shadow-md hover:shadow-xl">
              Conversemos
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
