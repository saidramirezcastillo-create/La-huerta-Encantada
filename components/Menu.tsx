const platos = [
  {
    nombre: "Alitas",
    descripcion: "Crujientes y deliciosas",
    imagen: "/images/platos/alitas.jpg",
  },
  {
    nombre: "Chaufa",
    descripcion: "Sabor oriental",
    imagen: "/images/platos/chaufa.jpg",
  },
  {
    nombre: "Arroz con Pato",
    descripcion: "Receta tradicional",
    imagen: "/images/platos/pato.jpg",
  },
  {
    nombre: "Salchipapa",
    descripcion: "El favorito de todos",
    imagen: "/images/platos/salchipapa.jpg",
  },
];

export default function Menu() {
  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{
  backgroundImage: "url('/images/menu-bg.jpg')",
}}
    >
      <div className="bg-black/70 py-20">

        <div className="max-w-7xl mx-auto px-8">

          <p className="text-center uppercase tracking-[5px] text-yellow-500">
            Nuestra Gastronomía
          </p>

          <h2 className="text-center text-5xl text-white font-serif mt-3 mb-16">
            Sabores que enamoran
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {platos.map((plato, index) => (

              <div
                key={index}
                className="bg-[#1d1d1d] rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 duration-300"
              >

                <img
                  src={plato.imagen}
                  className="w-full h-64 object-cover"
                  alt={plato.nombre}
                />

                <div className="p-6">

                  <h3 className="text-white text-2xl font-bold">
                    {plato.nombre}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {plato.descripcion}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="text-center mt-16">

            <button className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded-lg text-white font-bold">
              VER CARTA COMPLETA
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}