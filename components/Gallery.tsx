const imagenes = [
  "/images/galeria/foto1.jpg",
  "/images/galeria/foto2.jpg",
  "/images/galeria/foto3.jpg",
  "/images/galeria/foto4.jpg",
  "/images/galeria/foto5.jpg",
  "/images/galeria/foto6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center uppercase tracking-[5px] text-green-700">
          Galería
        </p>

        <h2 className="text-center text-5xl font-bold text-gray-800 mt-3">
          Vive La Experiencia
        </h2>

        <p className="text-center text-gray-500 mt-5 mb-16">
          Conoce nuestros espacios y disfruta de un ambiente rodeado de naturaleza.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {imagenes.map((imagen, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={imagen}
                alt={`Galería ${index + 1}`}
                className="w-full h-72 object-cover hover:scale-110 duration-500"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}