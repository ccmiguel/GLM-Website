"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Send, MapPin, Mail } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", country: "", state: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country || !formData.state || !formData.message) return;

    // Simulate sending
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", country: "", state: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-white min-h-[80vh]">
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left Column: Form Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
            Ponte en contacto
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Ya sea que busques transformar tu proyecto, convertirte en aliado estratégico o aportar tu tiempo como voluntario, queremos escucharte.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#10B981]/10 rounded-full text-[#10B981]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-[#0A192F]">Correo Electrónico</p>
                <a href="mailto:leadershipmakers.info@gmail.com" className="text-gray-600 hover:text-[#10B981] transition-colors">
                  leadershipmakers.info@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#10B981]/10 rounded-full text-[#10B981]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-[#0A192F]">Nuestra Base</p>
                <p className="text-gray-600">La Paz, SCZ y CBBA (Bolivia)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Card variant="solid" className="p-8 border-[#0A192F]/10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A192F]/20 focus:border-[#0A192F] transition-all bg-gray-50/50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A192F]/20 focus:border-[#0A192F] transition-all bg-gray-50/50"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">País</label>
                  <input
                    type="text"
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A192F]/20 focus:border-[#0A192F] transition-all bg-gray-50/50"
                    placeholder="Ej. Bolivia"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">Departamento / Estado</label>
                  <input
                    type="text"
                    id="state"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A192F]/20 focus:border-[#0A192F] transition-all bg-gray-50/50"
                    placeholder="Ej. La Paz"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A192F]/20 focus:border-[#0A192F] transition-all bg-gray-50/50 resize-none"
                  placeholder="¿En qué podemos colaborar?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${status === "sent" ? "bg-[#10B981]" : "bg-[#0A192F] hover:bg-[#10B981]"}`}
              >
                <span>{status === "idle" ? "Enviar Mensaje" : status === "sending" ? "Enviando..." : "¡Enviado exitosamente!"}</span>
                {status === "idle" && <Send className="w-5 h-5 ml-2" />}
              </button>
            </form>
          </Card>
        </motion.div>
      </section>

      {/* Encuentra tu lugar - Roles */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Encuentra tu lugar
            </h2>
            <p className="text-xl text-gray-500">
              Aplica a nuestros diferentes roles y sé parte del Ecosistema GLM.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {["Postula al equipo CORE", "Sé Embajador VIP", "Conviértete en Embajador", "Únete como Voluntario"].map((role, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card variant="glass" hoverable className="h-full p-8 text-center flex flex-col justify-center items-center cursor-pointer border-[#0A192F]/10 group">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-4 group-hover:text-[#10B981] transition-colors">{role}</h3>
                  <button className="text-[#10B981] font-semibold flex items-center group-hover:underline">Aplicar ahora →</button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
