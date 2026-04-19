"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Lightbulb, Presentation, Network, Calendar } from "lucide-react";

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
    },
    {
      title: "Formación en liderazgo",
      description: "Desarrollo de habilidades directivas, pensamiento crítico, gestión emocional y resolución de problemas complejos.",
      icon: Presentation,
    },
    {
      title: "Comunidad GLM",
      description: "Un ecosistema de networking para potenciar la colaboración, el intercambio de lecciones y el crecimiento conjunto.",
      icon: Network,
    },
    {
      title: "Eventos y experiencias",
      description: "Activaciones, bootcamps y encuentros presenciales y virtuales con actores clave para la innovación y la disrupción.",
      icon: Calendar,
    },
  ];

  return (
    <div className="bg-white min-h-[70vh]">
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-8 tracking-tight">
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
          className="grid md:grid-cols-2 gap-10"
        >
          {programas.map((programa, index) => {
            const Icon = programa.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="solid" hoverable className="h-full p-10 flex flex-col group border-transparent hover:border-[#1E3A8A]/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
                  <div className="mb-8 p-4 bg-[#1E3A8A]/5 w-fit rounded-2xl group-hover:bg-[#1E3A8A]/10 transition-colors">
                    <Icon className="w-8 h-8 text-[#1E3A8A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4 relative z-10">
                    {programa.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed relative z-10">
                    {programa.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
