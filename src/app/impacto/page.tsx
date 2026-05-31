"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function ImpactoPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const markers = [
    { name: "Bolivia", coordinates: [-63.5887, -16.2902] as [number, number] },
    { name: "Perú", coordinates: [-75.0152, -9.1900] as [number, number] },
    { name: "México", coordinates: [-102.5528, 23.6345] as [number, number] },
    { name: "Colombia", coordinates: [-74.0721, 4.7110] as [number, number] },
    { name: "Chile", coordinates: [-70.6693, -33.4489] as [number, number] },
    { name: "Estados Unidos", coordinates: [-95.7129, 37.0902] as [number, number] },
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
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto z-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Nuestro impacto en el mundo
            </h2>
            <p className="text-lg text-gray-600">
              Cada número representa una historia, una iniciativa y un paso hacia un futuro con más oportunidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full min-h-[500px] flex justify-center mt-8 bg-white/20 rounded-[2.5rem] p-4 shadow-inner"
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
    </div>
  );
}
