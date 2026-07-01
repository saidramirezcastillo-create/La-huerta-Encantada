"use client";

interface Props {
  buscar: string;
  setBuscar: (valor: string) => void;
}

export default function BuscadorCarta({
  buscar,
  setBuscar,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto mt-12 mb-10">

      <div className="relative">

        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl">
          🔍
        </span>

        <input
          type="text"
          placeholder="Buscar un plato..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          className="w-full bg-white rounded-full border-2 border-green-200 focus:border-green-700 outline-none py-5 pl-16 pr-6 text-lg shadow-lg transition-all duration-300"
        />

      </div>

    </div>
  );
}