"use client";

interface Props {
  categoria: string;
  cambiarCategoria: (categoria: string) => void;
}

const categorias = [
  {
    id: "menu",
    titulo: "MENÚ",
    descripcion: "Platos del día",
    icono: "🍽️",
    color: "from-green-700 to-green-900",
  },
  {
    id: "carta",
    titulo: "CARTA",
    descripcion: "Especialidades",
    icono: "📖",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "bebidas",
    titulo: "BEBIDAS",
    descripcion: "Frías y calientes",
    icono: "🥤",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function MenuCategorias({
  categoria,
  cambiarCategoria,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

      {categorias.map((cat) => (

        <button
          key={cat.id}
          onClick={() => cambiarCategoria(cat.id)}
          className={`group rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border

          ${
            categoria === cat.id
              ? `bg-gradient-to-r ${cat.color} text-white scale-105`
              : "bg-white hover:bg-gray-50"
          }`}
        >

          <div className="p-8">

            <div className="text-6xl mb-4 transition-transform duration-500 group-hover:scale-125">
              {cat.icono}
            </div>

            <h2 className="text-3xl font-black">
              {cat.titulo}
            </h2>

            <p className="mt-3 opacity-90">
              {cat.descripcion}
            </p>

          </div>

        </button>

      ))}

    </div>
  );
}