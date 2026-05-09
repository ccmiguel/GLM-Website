"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { Handshake, HeartHandshake, Zap, Building2, Landmark, GraduationCap, Users, Briefcase, ShieldCheck, Network, Lightbulb, Globe2, BookOpen, Rocket } from "lucide-react";

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
      image: "/images/CORRIDO/Corrido-9.png",
    },
    {
      title: "Patrocinadores Clave",
      description: "Impulsa financieramente nuestras iniciativas y conecta tu marca con el talento que transformará el mañana.",
      icon: Zap,
      image: "/images/CORRIDO/Corrido-10.png",
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
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {colaboraciones.map((colab, index) => {
            const Icon = colab.icon;
            return (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <div className="h-full flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-transparent hover:border-[#F97316]/20 cursor-pointer">
                  {/* Top Image Container 16:9 */}
                  <div className="w-full aspect-video bg-[#1E3A8A] relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-60 mix-blend-overlay">
                      <img src={colab.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={colab.title} />
                    </div>
                    <Icon className="w-16 h-16 text-[#F97316] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow items-center text-center">
                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
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

        {/* Nueva Sección: Nuestra Red de Alianzas Oficiales */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 pt-16 border-t border-gray-100"
        >
          <h2 className="text-4xl font-bold text-[#0A192F] mb-6">
            Nuestra Red de Alianzas
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            11 alianzas estratégicas que potencian nuestro impacto a nivel global.
          </p>
          
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            {[
              { name: "Fundación Maya", icon: Landmark },
              { name: "Hub de Innovación", icon: Lightbulb },
              { name: "Konrad Adenauer Stiftung (KAS)", icon: Globe2 },
              { name: "GAMLP", icon: Building2 },
              { name: "UTEPSA", icon: GraduationCap },
              { name: "Women TechMakers", icon: Network },
              { name: "Academia Medi-Tech", icon: Rocket },
              { name: "JCI Empresarios", icon: Briefcase },
              { name: "Universidad Evangélica Boliviana", icon: BookOpen },
              { name: "Aliado Estratégico 10", icon: Users },
              { name: "Aliado Estratégico 11", icon: ShieldCheck }
            ].map((aliado, idx) => {
              const Icon = aliado.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group flex flex-col items-center justify-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-[#F97316]/30 hover:bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <div className="w-28 h-28 bg-white rounded-full shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1E3A8A] transition-all duration-500">
                    <Icon className="w-14 h-14 text-[#1E3A8A] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-[#0A192F] text-center px-2 group-hover:text-[#F97316] transition-colors duration-300">
                    {aliado.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-2 opacity-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500">
                    Aliado clave para el ecosistema GLM.
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
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
