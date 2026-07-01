"use client";

interface Props {
  abierto: boolean;
  cerrar: () => void;
  titulo?: string;
  children: React.ReactNode;
}

export default function Modal({
  abierto,
  cerrar,
  titulo,
  children,
}: Props) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">

        <button
          onClick={cerrar}
          className="absolute top-5 right-5 text-3xl font-bold"
        >
          ✕
        </button>

        {titulo && (
          <h2 className="text-3xl font-bold text-center mt-8">
            {titulo}
          </h2>
        )}

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}