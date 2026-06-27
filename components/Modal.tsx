interface ModalProps {
  abierto: boolean;
  cerrar: () => void;
  titulo: string;
  children: React.ReactNode;
}

export default function Modal({
  abierto,
  cerrar,
  titulo,
  children,
}: ModalProps) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden animate-[fadeIn_.3s_ease]">

        {/* Encabezado */}
        <div className="bg-[#13351f] text-white px-8 py-6 flex justify-between items-center">

          <h2 className="titulo text-3xl">
            {titulo}
          </h2>

          <button
            onClick={cerrar}
            className="text-4xl hover:text-yellow-400 duration-300"
          >
            ×
          </button>

        </div>

        {/* Contenido */}
        <div className="p-8 overflow-y-auto max-h-[70vh]">

          {children}

        </div>

      </div>

    </div>
  );
}