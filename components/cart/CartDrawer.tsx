"use client";

import { useState, useRef } from "react";
import { toPng } from "html-to-image";

import { useCart } from "./CartContext";
import PedidoModal from "./PedidoModal";
import TicketPedido from "./TicketPedido";
import TicketPreviewModal from "./TicketPreviewModal";

interface Props {
  abierto: boolean;
  cerrar: () => void;
}

export default function CartDrawer({
  abierto,
  cerrar,
}: Props) {
  const {
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
  vaciarCarrito,
  total,
} = useCart();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [paraLlevar, setParaLlevar] = useState(false);
  const [generando, setGenerando] = useState(false);
  const [ticketImage, setTicketImage] = useState("");

const [mostrarTicket, setMostrarTicket] = useState(false);
const [urlWhatsapp, setUrlWhatsapp] = useState("");

  const ticketRef = useRef<HTMLDivElement>(null);

  const numeroWhatsApp = "51966079958";

  const generarPedido = async (llevar: boolean) => {

  setParaLlevar(llevar);
  setGenerando(true);

  try {

    // Espera a que React renderice el Ticket
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!ticketRef.current) {
      return;
    }

    const dataUrl = await toPng(ticketRef.current, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#ffffff",
    });
    setTicketImage(dataUrl);

setMostrarTicket(true);

    let costoTaper = 0;

    if (llevar) {
      carrito.forEach((item) => {
        costoTaper += item.cantidad * 1.5;
      });
    }

    const totalFinal = total + costoTaper;

    const detalle = carrito
      .map((item) => {
        let texto = `🍽️ ${item.nombre}

Cantidad: ${item.cantidad}

Subtotal: S/. ${(item.precio * item.cantidad).toFixed(2)}`;

        if (llevar) {
          texto += `

🥡 Taper: S/. ${(item.cantidad * 1.5).toFixed(2)}`;
        }

        return texto;
      })
      .join("\n━━━━━━━━━━━━━━━━━━\n");

    const mensaje = `🌿 *LA HUERTA ENCANTADA*

🍽️ *NUEVO PEDIDO*

${llevar ? "🛍️ PARA LLEVAR" : "🍽️ PARA MESA"}

━━━━━━━━━━━━━━━━━━

${detalle}

━━━━━━━━━━━━━━━━━━

${
      llevar
        ? `🥡 Total Tapers: S/. ${costoTaper.toFixed(2)}`
        : ""
    }

💰 TOTAL: S/. ${totalFinal.toFixed(2)}

📷 Se generó automáticamente el ticket del pedido.

Muchas gracias por preferir *La Huerta Encantada* ❤️`;

   const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

setUrlWhatsapp(url);

setMostrarModal(false);
cerrar();

} catch (error) {

  console.error("Error generando ticket:", error);

} finally {

  setGenerando(false);

}

};

const descargarTicket = () => {

  const enlace = document.createElement("a");

  enlace.href = ticketImage;

  enlace.download = `Pedido-${Date.now()}.png`;

  enlace.click();

};

const enviarWhatsapp = () => {

  if (!urlWhatsapp) return;

  window.open(urlWhatsapp, "_blank");

};
const finalizarPedido = () => {

  setMostrarTicket(false);

  setMostrarModal(false);

  vaciarCarrito();

  cerrar();

};

return (
    <>
     {/* Fondo oscuro */}
      <div
        onClick={cerrar}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          abierto ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel lateral */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[430px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          abierto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Encabezado */}
        <div className="bg-green-900 text-white p-6 flex justify-between items-center">

          <h2 className="titulo text-3xl">
            🛒 Mi Pedido
          </h2>

          <button
            onClick={cerrar}
            className="text-4xl hover:text-yellow-400 duration-300"
          >
            ×
          </button>

        </div>

        {/* Productos */}
        <div className="p-6 space-y-5 overflow-y-auto h-[65vh]">

          {carrito.length === 0 ? (

            <div className="text-center mt-20">

              <div className="text-6xl">🛒</div>

              <h3 className="text-xl font-bold mt-4">
                Tu carrito está vacío
              </h3>

              <p className="text-gray-500 mt-2">
                Agrega algunos platos para comenzar tu pedido.
              </p>

            </div>

          ) : (

            carrito.map((item) => (

              <div
                key={item.id}
                className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
              >

                <div className="flex gap-4">

                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-lg">
                      {item.nombre}
                    </h3>

                    <p className="text-yellow-600 font-bold mt-1">
                      S/. {item.precio.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 mt-4">

                      <button
                        onClick={() => disminuirCantidad(item.id)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        −
                      </button>

                      <span className="font-bold">
                        {item.cantidad}
                      </span>

                      <button
                        onClick={() => aumentarCantidad(item.id)}
                        className="w-8 h-8 rounded-full bg-green-700 text-white hover:bg-green-600"
                      >
                        +
                      </button>

                      <button
                        onClick={() => eliminarProducto(item.id)}
                        className="ml-auto text-red-500 hover:scale-110 transition"
                      >
                        🗑️
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>
        {/* Total */}
        <div className="border-t bg-white p-6">

          <div className="flex justify-between items-center mb-6">

            <span className="text-2xl font-bold">
              Total
            </span>

            <span className="text-3xl font-bold text-green-700">
              S/. {total.toFixed(2)}
            </span>

          </div>

          <button
            onClick={() => {
              if (carrito.length === 0) {
                alert("Tu carrito está vacío.");
                return;
              }

              setMostrarModal(true);
            }}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition duration-300"
          >
            🍽️ Reservar Pedido
          </button>

        </div>

      </aside>

      {/* Modal Mesa / Llevar */}
      <PedidoModal
  abierto={mostrarModal}
  cerrar={() => setMostrarModal(false)}
  paraMesa={() => generarPedido(false)}
  paraLlevar={() => generarPedido(true)}
/>
{/* Ticket oculto */}

<div
  style={{
    position: "fixed",
    top: "0",
    left: "0",
    transform: "translateX(-10000px)",
    zIndex: -1,
    background: "#fff",
  }}
>

  <div ref={ticketRef}>

    <TicketPedido
      carrito={carrito}
      total={total}
      paraLlevar={paraLlevar}
    />

  </div>

</div>
{generando && (

<div className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center">

  <div className="bg-white rounded-3xl shadow-2xl p-10 text-center w-[350px]">

    <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-700 border-t-transparent mx-auto"></div>

    <h2 className="text-2xl font-bold text-green-900 mt-6">

      Preparando tu pedido...

    </h2>

    <p className="text-gray-500 mt-3">

      Generando ticket y abriendo WhatsApp

    </p>

  </div>

</div>

)}
<TicketPreviewModal
  abierto={mostrarTicket}
  imagen={ticketImage}
  onDescargar={descargarTicket}
  onWhatsapp={enviarWhatsapp}
  onFinalizar={finalizarPedido}
/>
      </>
  );
}