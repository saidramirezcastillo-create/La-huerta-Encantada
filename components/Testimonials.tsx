const opiniones = [
  {
    nombre: "María López",
    comentario:
      "La comida fue espectacular y el ambiente es perfecto para disfrutar en familia.",
  },
  {
    nombre: "Carlos Ramírez",
    comentario:
      "Excelente atención y platos deliciosos. Sin duda volveremos.",
  },
  {
    nombre: "Ana Torres",
    comentario:
      "El mejor restaurante campestre que hemos visitado.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0f2d1d] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center uppercase tracking-[6px] text-yellow-400">
          Opiniones
        </p>

        <h2 className="text-center text-white text-5xl font-bold mt-4">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {opiniones.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >

              <div className="text-yellow-500 text-3xl">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-6 leading-8">
                "{item.comentario}"
              </p>

              <h3 className="font-bold text-xl mt-8">
                {item.nombre}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}