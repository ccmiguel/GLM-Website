"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Users, BookOpen, Globe, Leaf } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function ImpactoPage() {
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

  const areas = [
    {
      title: "Liderazgo y Talento del Futuro",
      icon: Users,
    },
    {
      title: "Emprendimiento e Innovación Social",
      icon: BookOpen,
    },
    {
      title: "Acción Climática y Desarrollo Sostenible",
      icon: Leaf,
    },
    {
      title: "Ciudadanía y Conexión Global",
      icon: Globe,
    },
  ];

  const markers = [
    { name: "Bolivia", coordinates: [-63.5887, -16.2902] as [number, number] },
    { name: "Perú", coordinates: [-75.0152, -9.1900] as [number, number] },
    { name: "México", coordinates: [-102.5528, 23.6345] as [number, number] },
  ];

  return (
    <div className="bg-white">
      {/* 1. Resultados */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 tracking-tight">
            Resultados que reflejan acción
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-[#0A192F]">
            <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 shadow-sm">
              <h3 className="text-5xl font-bold mb-2">+2000</h3>
              <p className="text-lg text-gray-500 font-medium">Talentos formados</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 shadow-sm">
              <h3 className="text-5xl font-bold mb-2">+680</h3>
              <p className="text-lg text-gray-500 font-medium">Embajadores activos</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 shadow-sm">
              <h3 className="text-5xl font-bold mb-2">+13</h3>
              <p className="text-lg text-gray-500 font-medium">Proyectos ejecutados</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Mapa Interactivo */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:w-1/3 z-10 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-[#0A192F] mb-6">
              Impacto Local, Visión Global
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros esfuerzos de desarrollo y formación se concentran estratégicamente en los principales ejes de Bolivia, creando conexiones que trascienden el país.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-2/3 min-h-[700px] w-full flex justify-center"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 400,
                center: [-80, 5],
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup center={[-80, 5]}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="transparent"
                        stroke="#0A192F"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#f3f4f6", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                  <Marker key={name} coordinates={coordinates}>
                    <circle r={14} fill="#10B981" className="animate-pulse opacity-50" />
                    <circle r={8} fill="#10B981" stroke="#fff" strokeWidth={2} className="shadow-lg" />
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{ fontFamily: "inherit", fill: "#0A192F", fontSize: "12px", fontWeight: "bold" }}
                    >
                      {name}
                    </text>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>
          </motion.div>
        </div>
      </section>

      {/* 3. Áreas de Acción */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
            Nuestras Áreas de Acción
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8"
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <div className="h-full p-12 bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6 relative overflow-hidden group rounded-[2rem]">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#0A192F] transition-colors duration-300 group-hover:bg-[#10B981]"></div>
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-[#10B981]/10 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A192F] mb-3">
                      {area.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 4. Galería de Proyectos Destacados */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white border-t border-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Iniciativas clave que demuestran nuestra capacidad de ejecución y alianzas estratégicas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Conexión América Latina 2025",
              aliado: "Fundación Maya",
              image: "/images/CORRIDO/Corrido-5.png",
            },
            {
              title: "Ecoaduana",
              aliado: "Carrera de Comercio Internacional",
              image: "/images/CORRIDO/Corrido-6.png",
            },
            {
              title: "Futuro Verde",
              aliado: "GAMLP",
              image: "/images/CORRIDO/Corrido-7.png",
            },
            {
              title: "Congreso Deep Tech",
              aliado: "Hub de Innovación",
              image: "/images/CORRIDO/Corrido-8.png",
            }
          ].map((proyecto, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-80">
              <div className="absolute inset-0 w-full h-full">
                <img src={proyecto.image} alt={proyecto.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#0A192F]/60 group-hover:bg-[#0A192F]/40 transition-colors duration-500 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block py-1.5 px-4 bg-[#F97316] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider shadow-lg">
                    Aliado: {proyecto.aliado}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {proyecto.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
