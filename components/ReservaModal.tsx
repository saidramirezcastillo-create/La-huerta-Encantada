import { useState } from "react";
import { useCart } from "./cart/CartContext";

interface Props {
  abierto: boolean;
  cerrar: () => void;
}

export default function ReservaModal({
  abierto,
  cerrar,
}: Props) {
  const { carrito, total } = useCart();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [personas, setPersonas] = useState(2);
  const [comentario, setComentario] = useState("");

  if (!abierto) return null;

  const enviarReserva = () => {
    const numero = "51999999999"; // Cambia por tu número

    const pedido = carrito
      .map(
        (item) =>
          `• ${item.cantidad} x ${item.nombre} - S/. ${(
            item.precio * item.cantidad
          ).toFixed(2)}`
      )
      .join("\n");

    const mensaje = `Hola 😊

Quiero realizar una reserva.

👤 Nombre: ${nombre}
📞 Teléfono: ${telefono}

📅 Fecha: ${fecha}
🕒 Hora: ${hora}
👥 Personas: ${personas}

🛒 Pedido:

${pedido}

💰 Total: S/. ${total.toFixed(2)}

📝 Comentario:
${comentario}`;

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );

    alert("✅ Tu reserva fue enviada correctamente.");

    cerrar();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">

        <div className="bg-green-900 text-white p-6 flex justify-between items-center">

          <h2 className="titulo text-3xl">
            Reservar Mesa
          </h2>

          <button
            onClick={cerrar}
            className="text-4xl hover:text-yellow-400"
          >
            ×
          </button>

        </div>

        <div className="p-8 space-y-6">

          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full border rounded-xl p-4"
          />

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="border rounded-xl p-4"
            />

            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="border rounded-xl p-4"
            />

            <input
              type="number"
              min={1}
              value={personas}
              onChange={(e) => setPersonas(Number(e.target.value))}
              className="border rounded-xl p-4"
            />

          </div>

          <textarea
            placeholder="Comentario adicional..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className="w-full border rounded-xl p-4 h-28"
          />

          <div className="border rounded-2xl p-6">

            <h3 className="titulo text-2xl text-green-900 mb-5">
              Tu Pedido
            </h3>

            {carrito.length === 0 ? (
              <p>No has agregado productos.</p>
            ) : (
              carrito.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between mb-3"
                >
                  <span>
                    {item.cantidad} x {item.nombre}
                  </span>

                  <span>
                    S/. {(item.precio * item.cantidad).toFixed(2)}
                  </span>
                </div>
              ))
            )}

            <div className="border-t mt-5 pt-5 flex justify-between font-bold text-xl">

              <span>Total</span>

              <span>S/. {total.toFixed(2)}</span>

            </div>

          </div>

          <button
            onClick={enviarReserva}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-5 rounded-2xl text-lg"
          >
            Confirmar Reserva
          </button>

        </div>

      </div>

    </div>
  );
}