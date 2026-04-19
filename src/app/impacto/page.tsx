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
    { name: "La Paz", coordinates: [-68.1193, -16.4897] as [number, number] },
    { name: "Santa Cruz", coordinates: [-63.1812, -17.7833] as [number, number] },
    { name: "Cochabamba", coordinates: [-66.1568, -17.3895] as [number, number] },
  ];

  return (
    <div className="bg-white">
      {/* 1. Resultados */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-8 tracking-tight">
            Resultados que reflejan acción
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-[#1E3A8A]">
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
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:w-1/3 z-10 text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
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
            className="md:w-2/3 h-[500px] w-full"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 600,
                center: [-60, -20],
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup center={[-65, -16]}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="transparent"
                        stroke="#1E3A8A"
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
                    <circle r={6} fill="#10B981" stroke="#fff" strokeWidth={2} />
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{ fontFamily: "inherit", fill: "#1E3A8A", fontSize: "12px", fontWeight: "bold" }}
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
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
            Nuestras Áreas de Acción
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="solid" hoverable className="h-full p-10 flex items-start space-x-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#1E3A8A] transition-colors duration-300 group-hover:bg-[#10B981]"></div>
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-[#10B981]/10 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">
                      {area.title}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
