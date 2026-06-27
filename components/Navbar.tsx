"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const cambiarColor = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", cambiarColor);

    return () => window.removeEventListener("scroll", cambiarColor);
  }, []);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#0d2416]/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}

        <a href="#" className="titulo text-3xl text-yellow-400">
          La Huerta
        </a>

        {/* Menú escritorio */}

        <nav className="hidden lg:flex gap-10 text-white">

          <a href="#inicio" className="hover:text-yellow-400 duration-300">
            Inicio
          </a>

          <a href="#historia" className="hover:text-yellow-400 duration-300">
            Historia
          </a>

          <a href="#carta" className="hover:text-yellow-400 duration-300">
            Carta
          </a>

          <a href="#galeria" className="hover:text-yellow-400 duration-300">
            Galería
          </a>

          <a href="#eventos" className="hover:text-yellow-400 duration-300">
            Eventos
          </a>

          <a href="#contacto" className="hover:text-yellow-400 duration-300">
            Contacto
          </a>

        </nav>

        {/* Botón */}

        <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-full duration-300">
          Reservar
        </button>

        {/* Menú móvil */}

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="lg:hidden text-white text-4xl"
        >
          ☰
        </button>

      </div>

      {/* Menú móvil */}

      {menuAbierto && (

        <div className="lg:hidden bg-[#13351f] text-white">

          <a
            href="#inicio"
            onClick={cerrarMenu}
            className="block px-6 py-4 border-b border-green-800"
          >
            Inicio
          </a>

          <a
            href="#historia"
            onClick={cerrarMenu}
            className="block px-6 py-4 border-b border-green-800"
          >
            Historia
          </a>

          <a
            href="#carta"
            onClick={cerrarMenu}
            className="block px-6 py-4 border-b border-green-800"
          >
            Carta
          </a>

          <a
            href="#galeria"
            onClick={cerrarMenu}
            className="block px-6 py-4 border-b border-green-800"
          >
            Galería
          </a>

          <a
            href="#eventos"
            onClick={cerrarMenu}
            className="block px-6 py-4 border-b border-green-800"
          >
            Eventos
          </a>

          <a
            href="#contacto"
            onClick={cerrarMenu}
            className="block px-6 py-4"
          >
            Contacto
          </a>

        </div>

      )}
    </header>
  );
}