"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  Brain,
  Rocket,
  Lightbulb,
  Globe2,
  Users,
  Briefcase,
  Compass,
  Sparkles,
  GraduationCap
} from "lucide-react";

const heroImages = [
  "/images/hero-1.jpeg",
  "/images/hero-2.jpeg",
  "/images/hero-3.jpeg",
  "/images/hero-4.jpeg",
  "/images/hero-5.jpg",
  "/images/hero-6.jpg"
];

const queEsGLMImage = "/images/que-es-global.jpg";
const sobreGLMImage = "/images/proposito.jpeg";
const ctaImage = "/images/call-to-action.jpg";

// Array de marqueeImages declaradas de forma explícita, omitiendo Corrido-2.png, Corrido-5.png y Corrido-9.png
const marqueeImages = [
  "/images/CORRIDO/Corrido-1.png",
  "/images/CORRIDO/Corrido-3.png",
  "/images/CORRIDO/Corrido-4.png",
  "/images/CORRIDO/Corrido-6.png",
  "/images/CORRIDO/Corrido-7.png",
  "/images/CORRIDO/Corrido-8.png",
  "/images/CORRIDO/Corrido-10.png",
  "/images/CORRIDO/Corrido-11.png",
  "/images/CORRIDO/Corrido-12.png",
  "/images/CORRIDO/Corrido-13.png",
  "/images/CORRIDO/Corrido-14.png",
  "/images/CORRIDO/Corrido-15.png"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mwvywebj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col mb-0">
      {/* 1. Hero Section */}
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
              Conectamos talento con oportunidades que <span className="text-accent1">generan impacto</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 leading-loose font-light">
              Global Leadership Makers conecta talento con formación estratégica, comunidad y ecosistemas de oportunidades que impulsan líderes, potencian proyectos y transformen ideas en iniciativas de impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contacto">
                <Button variant="accent1" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                  Únete a la comunidad
                </Button>
              </a>
              <a href="/programas">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                  Explora programas
                </Button>
              </a>
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

      {/* 2. Sección "¿Qué es GLM?" */}
      <section className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-accent1 uppercase tracking-widest mb-3">
                ¿QUÉ ES GLOBAL LEADERSHIP MAKERS (GLM)?
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Más que una comunidad. Un ecosistema que impulsa talento, liderazgo e impacto.
              </h3>
              <div className="space-y-6 text-lg text-gray-600 mb-8 leading-relaxed">
                <p>
                  Global Leadership Makers es una plataforma que conecta el talento emergente con formación estratégica, una comunidad vibrante y un ecosistema dinámico de oportunidades diseñadas para impulsar líderes, potenciar proyectos y transformar ideas en iniciativas sostenibles. Nuestro enfoque está orientado a acelerar el impacto positivo en América Latina.
                </p>
                <p>
                  A través de programas especializados, mentorías de alto valor y una sólida red de alianzas estratégicas, empoderamos a la próxima generación de innovadores sociales, emprendedores e investigadores aplicados. Facilitamos el acceso a herramientas clave y recursos globales, convirtiendo el potencial individual en un cambio colectivo y duradero.
                </p>
              </div>
              <a href="/nosotros">
                <Button variant="primary" size="lg">Conoce nuestra historia</Button>
              </a>
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
                  src={queEsGLMImage}
                  alt="Global Leadership Makers - Foto Grupal Oficial"
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

      {/* 3. Sección "Sobre GLM" */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src={sobreGLMImage}
                  alt="Sobre GLM - Propósito"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  quality={95}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent1 rounded-full -z-10 blur-2xl opacity-50"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="text-sm font-bold text-accent2 uppercase tracking-widest">
                SOBRE GLM
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Un ecosistema que conecta talento, liderazgo y oportunidades
              </h3>
              <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
                <p>
                  Global Leadership Makers impulsa talento, liderazgo e iniciativas a través de un ecosistema que conecta formación estratégica, comunidad, mentoría y oportunidades de crecimiento.
                </p>
                <p>
                  Desarrollamos experiencias que fortalecen personas, potencian proyectos y aceleran iniciativas mediante liderazgo, innovación, networking y ejecución colaborativa.
                </p>
                <p>
                  GLM integra comunidad, aprendizaje y acción en un entorno donde las conexiones generan oportunidades, las ideas evolucionan y el talento encuentra espacios para crecer, posicionarse y generar impacto.
                </p>
                <p>
                  Más que una comunidad, construimos un ecosistema diseñado para desarrollar líderes, fortalecer emprendimientos y proyectar iniciativas con visión global.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Sección "Nuestra Historia" */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-sm font-bold text-accent1 uppercase tracking-widest">
              NUESTRA HISTORIA
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Cómo empezó todo
            </h3>
            <div className="space-y-6 text-lg md:text-xl font-light text-white/90 leading-loose">
              <p>
                Global Leadership Makers nació a partir de una idea clara: El talento necesita más que inspiración. Necesita ecosistemas que impulsen su crecimiento. No basta con motivar a la juventud; es necesario conectar sus capacidades con las herramientas, mentores y oportunidades reales que les permitan pasar de la idea a la acción.
              </p>
              <p>
                En GLM creemos que las conexiones generan oportunidades, las iniciativas evolucionan a través de la acción y el talento crece más rápido cuando encuentra el entorno correcto para desarrollarse.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="bg-primary pb-32 pt-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="py-4 flex flex-col items-center justify-center w-full">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2"><AnimatedCounter prefix="+" value={2200} /></div>
              <p className="text-accent1 font-semibold tracking-wider uppercase text-sm max-w-xs text-center px-4 mt-2">Talentos movilizados</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="py-4 flex flex-col items-center justify-center w-full">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2"><AnimatedCounter prefix="+" value={700} /></div>
              <p className="text-accent1 font-semibold tracking-wider uppercase text-sm max-w-xs text-center px-4 mt-2">Jóvenes fortaleciendo capacidades</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="py-4 flex flex-col items-center justify-center w-full">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2"><AnimatedCounter prefix="+" value={13} /></div>
              <p className="text-accent1 font-semibold tracking-wider uppercase text-sm max-w-xs text-center px-4 mt-2">Proyectos de impacto</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center max-w-2xl mx-auto px-4"
          >
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              Cada número representa una historia, una iniciativa y un paso hacia un futuro con más oportunidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Sección "Lo que construimos" (Áreas de Acción) */}
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
              Lo que construimos
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estructuramos programas y experiencias de alto impacto para brindar rutas claras de desarrollo y sostenibilidad a las ideas jóvenes.
            </p>
          </motion.div>

          {/* Grid de Áreas de Acción - Diseño limpio y minimalista */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {[
              {
                title: "Formación Estratégica",
                desc: "Desarrollamos habilidades en liderazgo, innovación, comunicación, empleabilidad y pensamiento estratégico.",
                icon: Brain
              },
              {
                title: "Incubación de Proyectos",
                desc: "Impulsamos ideas desde la validación hasta la ejecución mediante mentorías, metodologías ágiles y acompañamiento.",
                icon: Rocket
              },
              {
                title: "Comunidad y Networking",
                desc: "Conectamos jóvenes con líderes, mentores, aliados y ecosistemas de oportunidades.",
                icon: Users
              },
              {
                title: "Experiencias de Alto Impacto",
                desc: "Creamos eventos, laboratorios, retos, summits y espacios donde el aprendizaje se convierte en acción.",
                icon: Lightbulb
              },
              {
                title: "Proyección y Visibilidad",
                desc: "Ayudamos a que jóvenes potencien su posicionamiento profesional y hagan visible su talento.",
                icon: Globe2
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-accent1/10 flex items-center justify-center text-accent1 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Sección "Programas Actualizada" */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold text-accent2 uppercase tracking-widest mb-3">Nuestros Programas</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Programas GLM
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestras iniciativas clave diseñadas para potenciar el talento e impulsar tus proyectos hacia nuevas fronteras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {[
              {
                title: "PURPOSE LAB",
                desc: "Laboratorio de liderazgo, propósito y crecimiento estratégico. Un espacio diseñado para fortalecer personas con potencial de liderazgo mediante herramientas, mentoría y experiencias prácticas que transforman su visión en acción.",
                icon: Compass
              },
              {
                title: "GLM ENTERPRISE LAB",
                desc: "Estrategia, mentoría y visibilidad para emprendimientos con potencial. GLM enterprise Lab, conecta emprendedores con herramientas estratégicas, mentoría especializada y redes para acelerar el crecimiento de sus negocios.",
                icon: Briefcase
              },
              {
                title: "GLM VIP AMBASSADORS",
                desc: "Comunidad internacional de líderes con visión global. Programa de alto nivel que conecta líderes, emprendedores y profesionales con oportunidades de networking, posicionamiento y colaboración internacional.",
                icon: Users
              },
              {
                title: "INCUBADORA DE PROYECTOS",
                desc: "De las ideas a iniciativas con impacto. Acompañamos proyectos desde su validación hasta su desarrollo mediante mentorías, metodologías ágiles y herramientas de sostenibilidad.",
                icon: Rocket
              },
              {
                title: "EXPERIENCIAS GLM",
                desc: "Espacios que conectan talento, innovación y acción. Creamos hackathons, summits, workshops, retos y experiencias de networking donde el aprendizaje se convierte en soluciones reales.",
                icon: Sparkles
              },
              {
                title: "FORMACIÓN Y EMPLEABILIDAD",
                desc: "Potenciamos perfiles con visión de futuro. Fortalecemos habilidades estratégicas, liderazgo y proyección profesional para abrir puertas en el mercado global.",
                icon: GraduationCap
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-full bg-accent2/10 flex items-center justify-center text-accent2">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary tracking-tight uppercase">
                      {item.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-50">
                    <a href="#contacto" className="text-accent2 font-semibold flex items-center space-x-2 hover:underline">
                      <span>Postular ahora</span>
                      <span className="text-lg">→</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Sección Contacto */}
      <section id="contacto" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent2 uppercase tracking-widest mb-3">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-lg text-gray-600">
              Escríbenos y nuestro equipo te responderá a la brevedad.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gray-50 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none"
                  placeholder="¿En qué podemos colaborar?"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium text-center">
                  Hubo un problema, por favor intenta nuevamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                  status === "sent" ? "bg-accent2" : status === "error" ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-accent2"
                }`}
              >
                <span>
                  {status === "idle" || status === "error"
                    ? "Enviar Mensaje"
                    : status === "sending"
                    ? "Enviando..."
                    : "¡Enviado exitosamente!"}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 9. Call to Action Final ("Este es tu momento") */}
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
            <a href="#contacto">
              <Button variant="accent1" size="lg" className="text-lg px-12 py-5 shadow-xl hover:scale-105 transition-transform duration-300">
                Súmate a la comunidad
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}


