"use client";

interface Props {
  abierto: boolean;
  imagen: string;
  onDescargar: () => void;
  onWhatsapp: () => void;
  onFinalizar: () => void;
}

export default function TicketPreviewModal({
  abierto,
  imagen,
  onDescargar,
  onWhatsapp,
  onFinalizar,
}: Props) {

  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/70 flex items-center justify-center p-5">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden">

        {/* Encabezado */}

        <div className="bg-green-900 text-white p-6 text-center">

          <h2 className="text-3xl font-bold">
            ✅ Pedido generado
          </h2>

          <p className="text-green-100 mt-2">
            Revisa tu ticket antes de enviarlo.
          </p>

        </div>

        {/* Imagen */}

        <div className="bg-gray-100 p-6 flex-1 overflow-auto">

          <img
            src={imagen}
            alt="Ticket"
            className="mx-auto rounded-2xl shadow-xl"
          />

        </div>

        {/* Botones */}

        <div className="p-6 grid gap-3 sticky bottom-0 bg-white">

          <button
            onClick={onDescargar}
            className="bg-yellow-400 hover:bg-yellow-300 rounded-2xl py-4 font-bold text-lg transition"
          >
            📥 Descargar Ticket
          </button>

          <button
            onClick={onWhatsapp}
            className="bg-green-700 hover:bg-green-600 text-white rounded-2xl py-4 font-bold text-lg transition"
          >
            📲 Enviar por WhatsApp
          </button>

          <button
            onClick={onFinalizar}
            className="bg-gray-200 hover:bg-gray-300 rounded-2xl py-4 font-bold transition"
          >
            ✅ Finalizar Pedido
          </button>

        </div>

      </div>

    </div>
  );
}