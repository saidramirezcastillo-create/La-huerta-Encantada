"use client";

import { useState } from "react";

export default function Reserva() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [personas, setPersonas] = useState("2");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [observacion, setObservacion] = useState("");
  const [mensaje, setMensaje] = useState(false);

  // 👇 Cambia este número por el tuyo
  const numeroWhatsApp = "51999999999";

  const enviarReserva = () => {
    if (!nombre || !telefono || !fecha || !hora) {
      alert("Completa todos los datos.");
      return;
    }

    const texto = `🍽️ *NUEVA RESERVA*

👤 Nombre: ${nombre}

📞 Teléfono: ${telefono}

👥 Personas: ${personas}

📅 Fecha: ${fecha}

🕒 Hora: ${hora}

📝 Observaciones:
${observacion || "Ninguna"}

Muchas gracias por reservar con La Huerta Encantada.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");

    setMensaje(true);

    setTimeout(() => {
      setMensaje(false);
    }, 2500);

    setNombre("");
    setTelefono("");
    setPersonas("2");
    setFecha("");
    setHora("");
    setObservacion("");
  };

  return (
    <>
      <div className="max-w-xl mx-auto">

        <h2 className="text-4xl font-bold text-green-900 text-center">
          Reserva tu Mesa
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Completa tus datos y confirma tu reserva por WhatsApp.
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="👤 Nombre Completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="tel"
            placeholder="📞 Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-700"
          />

          <select
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="1">1 Persona</option>
            <option value="2">2 Personas</option>
            <option value="3">3 Personas</option>
            <option value="4">4 Personas</option>
            <option value="5">5 Personas</option>
            <option value="6">6 Personas</option>
            <option value="7">7 Personas</option>
            <option value="8">8 Personas</option>
            <option value="9">9 Personas</option>
            <option value="10">10 Personas</option>
          </select>

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-700"
          />

          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-700"
          />

          <textarea
            rows={4}
            placeholder="📝 Observaciones (Opcional)"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-700 resize-none"
          />

          <button
            onClick={enviarReserva}
            className="w-full bg-green-900 hover:bg-green-700 text-white font-bold py-4 rounded-2xl text-lg transition duration-300 shadow-xl hover:scale-105"
          >
            🍽️ Reservar por WhatsApp
          </button>

        </div>

      </div>

      {mensaje && (
        <div className="fixed bottom-8 right-8 bg-green-700 text-white px-6 py-4 rounded-2xl shadow-2xl z-[9999] animate-bounce">

          <div className="flex items-center gap-3">

            <div className="text-3xl">
              ✅
            </div>

            <div>

              <h3 className="font-bold text-lg">
                ¡Reserva enviada!
              </h3>

              <p className="text-sm">
                Nos comunicaremos contigo muy pronto.
              </p>

            </div>

          </div>

        </div>
      )}
    </>
  );
}