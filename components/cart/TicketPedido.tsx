"use client";

import React, { forwardRef } from "react";
import { Producto } from "./CartContext";

interface Props {
  carrito: Producto[];
  total: number;
  paraLlevar: boolean;
}

const TicketPedido = forwardRef<HTMLDivElement, Props>(
  ({ carrito, total, paraLlevar }, ref) => {

    const costoTaper = paraLlevar
      ? carrito.reduce(
          (suma, item) => suma + item.cantidad * 1.5,
          0
        )
      : 0;

    const totalFinal = total + costoTaper;

    const ahora = new Date();

    const fecha = ahora.toLocaleDateString("es-PE");

    const hora = ahora.toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const numeroPedido = Math.floor(
      100000 + Math.random() * 900000
    );

    return (

      <div
        ref={ref}
        className="w-[760px] bg-white text-black rounded-3xl overflow-hidden shadow-2xl border-4 border-green-900"
      >

        {/* ======================== */}
        {/* ENCABEZADO */}
        {/* ======================== */}

        <div className="bg-green-900 text-white p-10 text-center">

          <img
            src="/images/logo.png"
            alt="La Huerta Encantada"
            className="w-36 h-36 object-contain mx-auto"
          />

          <h1 className="text-5xl font-extrabold mt-4 tracking-wide">
            LA HUERTA
          </h1>

          <h2 className="text-4xl text-yellow-400 font-bold">
            ENCANTADA
          </h2>

          <p className="mt-3 text-green-100 text-xl">
            Restaurante Campestre
          </p>

        </div>

        {/* ======================== */}
        {/* INFORMACIÓN */}
        {/* ======================== */}

        <div className="p-8">

          <div className="flex justify-between items-start">

            <div>

              <h2 className="text-3xl font-bold text-green-900">
                🍽 NUEVO PEDIDO
              </h2>

              <p className="mt-3 text-xl">
                Pedido Nº{" "}
                <span className="font-bold text-green-700">
                  {numeroPedido}
                </span>
              </p>

            </div>

            <div className="text-right text-lg">

              <p>📅 {fecha}</p>

              <p className="mt-2">🕒 {hora}</p>

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-green-100 border-2 border-green-700 p-5 text-center">

            <h3 className="text-2xl font-bold text-green-900">

              {paraLlevar
                ? "🛍 PEDIDO PARA LLEVAR"
                : "🍽 PEDIDO PARA MESA"}

            </h3>

          </div>

          <hr className="my-8 border-dashed border-2 border-gray-300" />

          <h3 className="text-3xl font-bold text-green-900 mb-6">
            Detalle del Pedido
          </h3>
          {carrito.map((item) => {

            const subtotal = item.precio * item.cantidad;

            return (

              <div
                key={item.id}
                className="border-2 border-gray-200 rounded-3xl p-5 mb-6 shadow-sm hover:shadow-md transition"
              >

                <div className="flex items-center">

                  {/* FOTO */}

                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-28 h-28 rounded-2xl object-cover border-2 border-gray-200"
                  />

                  {/* INFORMACIÓN */}

                  <div className="flex-1 ml-6">

                    <h4 className="text-2xl font-bold text-green-900">

                      {item.nombre}

                    </h4>

                    <div className="mt-4 space-y-2 text-lg">

                      <p>
                        🍽 Cantidad:
                        <strong> {item.cantidad}</strong>
                      </p>

                      <p>
                        💵 Precio Unitario:
                        <strong> S/. {item.precio.toFixed(2)}</strong>
                      </p>

                      <p>
                        💲 Importe:
                        <strong>
                          {" "}
                          S/. {subtotal.toFixed(2)}
                        </strong>
                      </p>

                    </div>

                  </div>

                  {/* PRECIO */}

                  <div className="text-right">

                    <p className="text-gray-500">
                      Subtotal
                    </p>

                    <p className="text-3xl font-extrabold text-green-700">

                      S/. {subtotal.toFixed(2)}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

          {paraLlevar && (

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-6 mt-8">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-2xl font-bold">
                    🥡 Costo de Tapers
                  </h3>

                  <p className="text-lg mt-2">

                    {carrito.reduce(
                      (suma, item) => suma + item.cantidad,
                      0
                    )} tapers

                  </p>

                </div>

                <div className="text-3xl font-bold text-green-800">

                  S/. {costoTaper.toFixed(2)}

                </div>

              </div>

            </div>

          )}

          <hr className="my-10 border-dashed border-2 border-gray-300" />
           {/* ======================== */}
          {/* RESUMEN */}
          {/* ======================== */}

          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-green-900 mb-8">
              💰 Resumen del Pedido
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between text-2xl">

                <span>Subtotal</span>

                <span className="font-semibold">
                  S/. {total.toFixed(2)}
                </span>

              </div>

              {paraLlevar && (

                <div className="flex justify-between text-2xl">

                  <span>🥡 Tapers</span>

                  <span className="font-semibold">
                    S/. {costoTaper.toFixed(2)}
                  </span>

                </div>

              )}

              <div className="border-t-2 border-green-300 pt-6 mt-6 flex justify-between items-center">

                <span className="text-4xl font-extrabold text-green-900">
                  TOTAL
                </span>

                <span className="text-5xl font-extrabold text-green-700">

                  S/. {totalFinal.toFixed(2)}

                </span>

              </div>

            </div>

          </div>

          {/* ======================== */}
          {/* PIE DEL TICKET */}
          {/* ======================== */}

          <div className="mt-10 bg-green-900 text-white rounded-3xl p-10 text-center">

            <h2 className="text-4xl font-bold">
              🌿 ¡Gracias por preferirnos!
            </h2>

            <p className="mt-5 text-2xl font-semibold">
              La Huerta Encantada
            </p>

            <p className="mt-2 text-green-100 text-lg">
              Restaurante Campestre
            </p>

            <div className="border-t border-green-700 my-8"></div>

            <p className="text-lg">
              📍 Chachapoyas - Amazonas
            </p>

            <p className="mt-2 text-lg">
              📱 WhatsApp: 966 079 958
            </p>

            <p className="mt-6 text-yellow-300 font-bold text-xl">
              ❤️ ¡Será un gusto atenderte nuevamente!
            </p>

          </div>

        </div>
        </div>
          );

});

TicketPedido.displayName = "TicketPedido";

export default TicketPedido;