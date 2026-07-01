"use client";

interface Props {
  filtro: string;
  cambiarFiltro: (valor: string) => void;
}

const filtros = [
  {
    id: "todos",
    nombre: "Todos",
    icono: "🍽️",
  },
  {
    id: "vendidos",
    nombre: "Más vendidos",
    icono: "🔥",
  },
  {
    id: "chef",
    nombre: "Chef recomienda",
    icono: "👨‍🍳",
  },
  {
    id: "premium",
    nombre: "Premium",
    icono: "⭐",
  },
];

export default function FiltrosCarta({
  filtro,
  cambiarFiltro,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">

      {filtros.map((item) => (

        <button
          key={item.id}
          onClick={() => cambiarFiltro(item.id)}
          className={`px-5 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:-translate-y-1

          ${
            filtro === item.id
              ? "bg-yellow-500 text-black scale-105"
              : "bg-white hover:bg-yellow-100"
          }`}
        >

          {item.icono} {item.nombre}

        </button>

      ))}

    </div>
  );
}