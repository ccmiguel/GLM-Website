"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Shield, UserCheck, Star, Heart } from "lucide-react";

export default function EquipoPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const coreTeam = [
    {
      name: "Maria Clavel Condori",
      role: "Directora General",
      description: "Lidera la visión estratégica y el crecimiento del ecosistema global de GLM.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://linkedin.com",
      email: "mailto:red.glmglobal@gmail.com",
    },
    {
      name: "Alejandra Quispe",
      role: "Directora de Comunidad y Programas",
      description: "Coordina la formación, mentorías y el desarrollo de iniciativas de los líderes jóvenes.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://linkedin.com",
      email: "mailto:red.glmglobal@gmail.com",
    },
    {
      name: "Carolina Calamani",
      role: "Directora de Gestión Financiera y Operativa",
      description: "Garantiza la sostenibilidad financiera, convenios y la excelencia operativa de los programas.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://linkedin.com",
      email: "mailto:red.glmglobal@gmail.com",
    },
  ];

  const ecosystemLeaders = [
    {
      name: "Samuel Centellas",
      role: "Líder de Ciencia y Tecnología",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Brisa Ramos",
      role: "Líder de Innovación Social",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Keyla Condori",
      role: "Líder de Liderazgo Consciente",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      linkedin: "https://linkedin.com",
    },
  ];

  const vipAmbassadors = [
    {
      name: "Diego Torrico",
      role: "Embajador VIP - Bolivia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Camila Paredes",
      role: "Embajadora VIP - Perú",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mateo Navarro",
      role: "Embajador VIP - México",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const volunteers = [
    "Andrés Flores",
    "Sofía Rojas",
    "Nicolás Vargas",
    "Luciana Mendoza",
    "Gabriel Castro",
    "Valentina Ortiz",
    "Sebastián Ruiz",
    "Mariana Silva",
    "Joaquín Morales",
    "Elena Gutiérrez",
    "Felipe Méndez",
    "Natalia Herrera",
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Nuestro <span className="text-accent1">Equipo</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Conoce a las personas, líderes, embajadores y voluntarios que impulsan la visión estratégica de Global Leadership Makers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Core Team */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-accent1/10 rounded-2xl text-accent1 mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Core Team
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Dirección estratégica y coordinadores generales de GLM.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {coreTeam.map((member, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 160px"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1 tracking-tight">
                {member.name}
              </h3>
              <p className="text-sm font-bold text-accent1 uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                {member.description}
              </p>
              
              <div className="flex space-x-4 pt-4 border-t border-gray-200/60 w-full justify-center">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-primary hover:bg-accent1/10 transition-colors" title="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href={member.email} className="p-2 bg-white rounded-full shadow-sm text-gray-500 hover:text-primary hover:bg-accent1/10 transition-colors" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. VIP Ambassadors */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-yellow-500/10 rounded-2xl text-yellow-600 mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              VIP Ambassadors
            </h2>
            <p className="text-lg text-gray-500 mt-2">
              Líderes de impacto y speakers internacionales que amplifican la voz de la juventud.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {vipAmbassadors.map((ambassador, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                  <Image
                    src={ambassador.image}
                    alt={ambassador.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 128px"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1 tracking-tight">
                  {ambassador.name}
                </h3>
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest">
                  {ambassador.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Ecosystem Leaders */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-accent2/10 rounded-2xl text-accent2 mb-4">
            <UserCheck className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Ecosystem Leaders
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Líderes estratégicos en las áreas de desarrollo de GLM.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {ecosystemLeaders.map((leader, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-[2rem] border border-gray-100/60 p-8 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-slate-200">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 144px, 144px"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1 tracking-tight">
                {leader.name}
              </h3>
              <p className="text-sm font-semibold text-accent2 uppercase tracking-wider mb-4">
                {leader.role}
              </p>
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full shadow-inner text-gray-400 hover:text-primary hover:bg-accent2/10 transition-colors" title="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Voluntarios GLM */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-2xl text-red-500 mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Voluntarios GLM
            </h2>
            <p className="text-lg text-gray-500 mt-2">
              El motor operativo y logístico que hace posible la ejecución de nuestras experiencias.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {volunteers.map((name, idx) => (
                <div
                  key={idx}
                  className="py-3 px-4 bg-gray-50 rounded-xl font-medium text-gray-700 border border-gray-100 hover:bg-red-500/5 hover:border-red-500/10 hover:text-red-500 transition-all duration-300"
                >
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
