"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Lightbulb, Presentation, Network, Calendar } from "lucide-react";
import Image from "next/image";

export default function ProgramasPage() {
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

  const programas = [
    {
      title: "Incubación de proyectos",
      description: "Acompañamiento desde la ideación hasta la ejecución con mentoría estratégica adaptada a las necesidades reales de tu comunidad.",
      icon: Lightbulb,
      image: "/images/talento-1.jpg",
    },
    {
      title: "Formación en liderazgo",
      description: "Desarrollo de habilidades directivas, pensamiento crítico, gestión emocional y resolución de problemas complejos.",
      icon: Presentation,
      image: "/images/talento-2.jpg",
    },
    {
      title: "Comunidad GLM",
      description: "Un ecosistema de networking para potenciar la colaboración, el intercambio de lecciones y el crecimiento conjunto.",
      icon: Network,
      image: "/images/talento-3.jpg",
    },
    {
      title: "Eventos y experiencias",
      description: "Activaciones, bootcamps y encuentros presenciales y virtuales con actores clave para la innovación y la disrupción.",
      icon: Calendar,
      image: "/images/talento-4.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-[70vh]">
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 tracking-tight">
            Nuestros programas
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Diseñamos experiencias que combinan formación, acción y conexión para desencadenar tu potencial.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          {programas.map((programa, index) => {
            const Icon = programa.icon;
            // Alternar imagen a la izquierda o derecha según el índice
            const isEven = index % 2 === 0;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex flex-col md:flex-row bg-white shadow-md border border-slate-100 rounded-[3rem] group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">

                  {/* Image Container */}
                  <div className={`relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto ${!isEven ? "md:order-2" : ""}`}>
                    <Image
                      src={programa.image}
                      alt={programa.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative ${!isEven ? "md:order-1" : ""}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
                    <div className="mb-6 p-4 bg-[#F97316]/10 w-fit rounded-2xl group-hover:bg-[#F97316]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#F97316]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0A192F] mb-6 relative z-10">
                      {programa.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed relative z-10">
                      {programa.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
