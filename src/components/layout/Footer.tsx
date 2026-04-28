import React from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-white py-16 px-6 md:px-12 lg:px-24 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Description */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">Global Leadership Makers</h2>
          <p className="text-[#0A192F]/20 text-indigo-200/80 max-w-sm leading-relaxed">
            Impulsando el talento de jóvenes líderes y convirtiendo su visión en impacto real.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Navegación</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-indigo-200 hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/nosotros" className="text-indigo-200 hover:text-white transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/programas" className="text-indigo-200 hover:text-white transition-colors">Programas</Link></li>
            <li><Link href="/impacto" className="text-indigo-200 hover:text-white transition-colors">Impacto</Link></li>
            <li><Link href="/alianzas" className="text-indigo-200 hover:text-white transition-colors">Alianzas</Link></li>
          </ul>
        </div>

        {/* Contact info and Social */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Contacto</h3>
          <a href="mailto:leadershipmakers.info@gmail.com" className="flex items-center space-x-3 text-indigo-200 hover:text-white transition-colors group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>leadershipmakers.info@gmail.com</span>
          </a>

          <div className="flex space-x-4 pt-4">
            <a href="https://acortar.link/Lo2Ltp" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#10B981] transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://www.instagram.com/glm_globalleadershipmakers/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#10B981] transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069v-2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577209041697" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#10B981] transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="https://chat.whatsapp.com/GqAY1v5OocF7pfpHNyVcCz?mode=ac_t" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#10B981] transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-indigo-400/20 flex flex-col items-center space-y-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-indigo-200/60">
          <p>© {new Date().getFullYear()} Global Leadership Makers. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Desarrollado con impacto global.</p>
        </div>
        <p className="text-xs text-slate-400 text-center w-full mt-4">
          Desarrollado por Miguel Calderon
        </p>
      </div>
    </footer>
  );
}

export default Footer;
