"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export default function NosotrosPage() {
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

  const team = [
    {
      name: "Maria Clavel Condori",
      role: "Directora General",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Alejandra Quispe",
      role: "Directora de Comunidad y Programas",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Carolina Calamani",
      role: "Directora de Gestión Financiera y Operativa",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const structure = [
    {
      title: "Equipo CORE",
      description: "Lidera la dirección estratégica de GLM, define la visión y garantiza la ejecución.",
    },
    {
      title: "Embajadores VIP",
      description: "Líderes que ya lideran proyectos con impacto demostrado; participan como speakers e inspiran a la comunidad.",
    },
    {
      title: "Embajadores",
      description: "Jóvenes en etapa de crecimiento que participan en formaciones y se preparan para asumir roles de liderazgo.",
    },
    {
      title: "Voluntarios",
      description: "Motor estratégico que aporta talento en organización, comunicación y apoyo logístico.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: Liderazgo con propósito */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/sobre-nosotros.jpeg"
            alt="Liderazgo con propósito"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Liderazgo con <span className="text-accent1">propósito</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light">
              Somos más que una red. Somos un movimiento que desafía el statu quo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Historia */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-8 tracking-tight">
                Nuestra historia:<br />Cómo empezó todo
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                <p>
                  Global Leadership Makers nace a partir de una pregunta simple, pero poderosa: ¿Qué pasaría si el talento joven tuviera acceso real a oportunidades, comunidad y dirección?
                </p>
                <p>
                  Hoy, seguimos creciendo con una misma convicción: el talento existe, y cuando se conecta con propósito, puede cambiar realidades.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/nuestra-historia.jpeg"
                alt="Nuestra historia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Propósito y Misión */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-xl"
            >
              <Image
                src="/images/proposito.jpeg"
                alt="Propósito y Misión"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-10"
            >
              <motion.div variants={fadeInUp} className="bg-white p-10 shadow-sm rounded-[2rem] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1E3A8A]"></div>
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Nuestro Propósito</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Impulsar el talento de jóvenes líderes, convirtiendo su visión en impacto real y conectándolos con oportunidades justas.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-10 shadow-sm rounded-[2rem] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#10B981]"></div>
                <h3 className="text-2xl font-bold text-[#10B981] mb-4">Nuestra Misión</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Formamos, inspiramos y conectamos a jóvenes líderes, emprendedores e intraemprendedores comprometidos con transformar sus comunidades con impacto global.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Estructura Organizacional */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            Estructura Organizacional
          </h2>
          <p className="text-xl text-gray-500">
            El Ecosistema GLM
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6"
        >
          {structure.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card variant="glass" hoverable className="h-full p-8 flex flex-col bg-[#1E3A8A]/[0.02] border-[#1E3A8A]/10 text-center">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Equipo Especializado */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6 tracking-tight">
              Equipo Especializado
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Conoce a las mujeres líderes que hacen posible nuestra misión.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center text-center group">
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-8 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl border-4 border-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 224px, 224px"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1E3A8A] font-sans mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-500 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
