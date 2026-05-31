"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Rocket, Globe } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Bolivia", coordinates: [-63.5887, -16.2902] as [number, number] },
  { name: "Perú", coordinates: [-75.0152, -9.1900] as [number, number] },
  { name: "México", coordinates: [-102.5528, 23.6345] as [number, number] },
  { name: "Colombia", coordinates: [-74.0721, 4.7110] as [number, number] },
  { name: "Chile", coordinates: [-70.6693, -33.4489] as [number, number] },
  { name: "Estados Unidos", coordinates: [-95.7129, 37.0902] as [number, number] },
];

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

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Sobre Global */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary text-white py-32">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            {/* Contenedor del logotipo de GLM en un tamaño destacado */}
            <div className="max-w-xs md:max-w-sm mb-12 hover:scale-[1.02] transition-transform duration-300 bg-white p-6 rounded-[2rem] shadow-lg">
              <Image
                src="/images/Logo_Color-8.png"
                alt="Global Leadership Makers Logo"
                width={350}
                height={100}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Sobre <span className="text-accent1">Global</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl">
              Somos más que una red. Somos un movimiento internacional y un ecosistema estratégico que desafía el statu quo, impulsando la próxima generación de líderes en América Latina.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Nuestra Historia */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold text-accent1 uppercase tracking-widest mb-3">Nuestra Trayectoria</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                Cómo empezó todo
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                <p>
                  Global Leadership Makers nace a partir de una pregunta simple, pero poderosa: ¿Qué pasaría si el talento joven tuviera acceso real a oportunidades, comunidad y dirección estratégica?
                </p>
                <p>
                  Comenzamos uniendo capacidades locales para descentralizar el acceso a herramientas de liderazgo de alto valor. Hoy, seguimos creciendo con una misma convicción inquebrantable: el talento existe en cada rincón, y cuando se conecta de forma estratégica con propósito y red, puede cambiar realidades enteras.
                </p>
              </div>
            </motion.div>

            {/* Contenedor Visual con Iconos en lugar de fotos duplicadas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { icon: Compass, title: "Dirección", desc: "Guiamos el talento joven hacia su propósito real.", color: "text-[#10B981] bg-[#10B981]/10" },
                { icon: Rocket, title: "Impulso", desc: "Aceleramos proyectos con herramientas de vanguardia.", color: "text-accent1 bg-accent1/10" },
                { icon: Globe, title: "Conexión", desc: "Creamos redes que trascienden fronteras globales.", color: "text-accent2 bg-accent2/10" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-8 bg-white border border-gray-200/60 rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h4 className="font-bold text-primary text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.5 Mapa Interactivo */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto z-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestro impacto en el mundo
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Cada número representa una historia, una iniciativa y un paso hacia un futuro con más oportunidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full min-h-[500px] flex justify-center mt-8 bg-gray-50/50 rounded-[2.5rem] p-4 shadow-inner border border-gray-100"
          >
            <div className="w-full max-w-5xl aspect-[16/10] relative">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 180,
                  center: [-85, 10],
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <ZoomableGroup center={[-85, 10]} maxZoom={3}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#f3f4f6"
                          stroke="#e5e7eb"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: "#e5e7eb", outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                      <circle r={10} fill="#10B981" className="animate-pulse opacity-40" />
                      <circle r={6} fill="#10B981" stroke="#fff" strokeWidth={1.5} className="shadow-md" />
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{
                          fontFamily: "inherit",
                          fill: "#0A192F",
                          fontSize: "10px",
                          fontWeight: "bold",
                          textShadow: "0px 1px 2px rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {name}
                      </text>
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Nuestro Propósito */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-sm font-bold text-accent2 uppercase tracking-widest mb-3">Nuestra Misión</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Nuestro propósito
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left"
          >
            <motion.div variants={fadeInUp} className="bg-gray-50 p-10 shadow-sm rounded-[2rem] border border-gray-100/60 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#10B981]"></div>
              <h3 className="text-2xl font-bold text-primary mb-4">El Propósito</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4 font-light">
                Impulsar el talento de jóvenes líderes, convirtiendo su visión en impacto real y conectándolos con oportunidades justas de formación y crecimiento colaborativo.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-10 shadow-sm rounded-[2rem] border border-gray-100/60 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent1"></div>
              <h3 className="text-2xl font-bold text-primary mb-4">El Ecosistema</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4 font-light">
                Formamos, inspiramos y conectamos a jóvenes líderes, emprendedores e intraemprendedores comprometidos con transformar sus comunidades con una clara visión de alcance global.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
