"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Brain, Rocket, Lightbulb, Globe2, Users, Briefcase } from "lucide-react";

const heroImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpeg",
  "/images/hero-3.jpeg",
  "/images/hero-4.jpeg",
  "/images/hero-5.jpg",
  "/images/hero-6.jpg"
];

const galleryImages = [
  "/images/talento-1.jpg",
  "/images/talento-2.jpg",
  "/images/talento-3.jpg",
  "/images/talento-4.jpg",
  "/images/talento-5.jpg",
  "/images/talento-6.jpg"
];

const queEsGLMImage = "/images/que-es-global.jpg";
const impactImage = "/images/proposito.jpeg";
const ctaImage = "/images/call-to-action.jpg";

const marqueeImages = Array.from({ length: 15 }, (_, i) => `/images/CORRIDO/Corrido-${i + 1}.png`);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col mb-0">
      {/* 1. Hero Section (Carrusel/Corrido) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentSlide]}
              alt="GLM Hero"
              fill
              className="object-cover"
              sizes="100vw"
              quality={95}
              priority
            />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Activamos líderes que transforman ideas en <span className="text-accent1">impacto real</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 leading-loose font-light">
              En Global Leadership Makers conectamos talento, comunidad y propósito para impulsar a una nueva generación de líderes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="accent1" size="lg" className="text-lg px-8 py-4">Únete a la comunidad</Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white/10 hover:text-white">Explora programas</Button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-accent1 w-10' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Marquesina Slider (Corrido de Imágenes) */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden flex relative z-10">
        <motion.div
          className="flex gap-6 px-4 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45,
          }}
        >
          {[...marqueeImages, ...marqueeImages].map((src, idx) => (
            <div key={idx} className="relative w-72 h-48 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <Image src={src} alt={`GLM Corrido ${idx}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" quality={95} />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 2. Sección "Qué es GLM" */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-accent1 uppercase tracking-widest mb-3">Qué es GLM</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Una comunidad que convierte el talento en acción
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nos dedicamos a potenciar las capacidades de la juventud en América Latina. Brindamos herramientas, redes y oportunidades para que los líderes emergentes puedan llevar sus iniciativas al siguiente nivel, creando un desarrollo sostenible y un cambio sistémico en sus entornos.
              </p>
              <Button variant="primary" size="lg">Conoce nuestra historia</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/CORRIDO/Corrido-1.png"
                  alt="Qué es GLM - Comunidad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  quality={100}
                  priority
                  unoptimized={true}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent1 rounded-full -z-10 blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent2 rounded-full -z-10 blur-2xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="py-4 flex flex-col items-center justify-center w-full">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2"><AnimatedCounter prefix="+" value={2200} /></div>
              <p className="text-accent1 font-bold tracking-widest uppercase text-sm max-w-[200px] text-center whitespace-nowrap">Talentos movilizados</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="py-4 flex flex-col items-center justify-center w-full">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2"><AnimatedCounter prefix="+" value={700} /></div>
              <p className="text-accent1 font-bold tracking-widest uppercase text-sm max-w-[200px] text-center whitespace-nowrap">Jóvenes fortaleciendo capacidades</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="py-4 flex flex-col items-center justify-center w-full">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2"><AnimatedCounter prefix="+" value={13} /></div>
              <p className="text-accent1 font-bold tracking-widest uppercase text-sm max-w-[200px] text-center whitespace-nowrap">Proyectos de impacto</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Sección de Impacto: "Impacto que trasciende" */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src={impactImage}
                  alt="Impacto que trasciende"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  quality={95}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-sm font-bold text-accent2 uppercase tracking-widest mb-3">Nuestro Impacto</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Impacto que trasciende fronteras
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada uno de nuestros programas está diseñado con un propósito claro: generar un efecto multiplicador. Los jóvenes líderes acceden a financiamiento, mentoría y visibilidad para ejecutar proyectos que resuelven los retos más urgentes de sus comunidades.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Sección "Qué hacemos" (Impulsamos Liderazgo) */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold text-accent1 uppercase tracking-widest mb-3">Qué hacemos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Impulsamos Liderazgo
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estructuramos programas y experiencias de alto impacto para brindar rutas claras de desarrollo y sostenibilidad a las ideas jóvenes.
            </p>
          </motion.div>

          {/* Grid/Galería para Áreas de Acción */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
            {[
              { title: "Liderazgo Consciente", desc: "Formación de líderes con mentalidad ética y disruptiva.", icon: Brain, image: "/images/talento-1.jpg" },
              { title: "Ciencia y Tecnología", desc: "Promoción de investigación aplicada e innovación científica.", icon: Rocket, image: "/images/talento-2.jpg" },
              { title: "Innovación Social", desc: "Soluciones creativas para retos comunitarios y emprendimiento.", icon: Lightbulb, image: "/images/talento-3.jpg" },
              { title: "Agenda 2030 y Sostenibilidad", desc: "Acción climática y conciencia ambiental global.", icon: Globe2, image: "/images/talento-4.jpg" },
              { title: "Ciudadanía y Participación", desc: "Fortalecimiento de la voz joven en la sociedad civil.", icon: Users, image: "/images/talento-5.jpg" },
              { title: "Habilidades del Futuro", desc: "Preparación para el mercado laboral y empleabilidad global.", icon: Briefcase, image: "/images/talento-6.jpg" }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative w-72 md:w-80 flex-shrink-0 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white snap-center cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent1 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 tracking-tight leading-tight">{item.title}</h4>
                    <p className="text-sm text-white/80 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-12">
            <Button variant="primary" size="lg">Explorar todos los programas</Button>
          </div>
        </div>
      </section>

      {/* 5. Call to Action Final ("Este es tu momento") */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={ctaImage}
            alt="Este es tu momento"
            fill
            className="object-cover filter brightness-50 saturate-0"
            sizes="100vw"
            quality={95}
          />
        </div>
        <div className="absolute inset-0 bg-primary/90 z-0 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Este es tu momento
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
              Únete a la red de líderes que están definiendo el futuro de nuestra región. No importa cuán grande sea el desafío, juntos tenemos el talento para resolverlo.
            </p>
            <Button variant="accent1" size="lg" className="text-lg px-12 py-5 shadow-xl hover:scale-105 transition-transform duration-300">
              Súmate a la comunidad
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
