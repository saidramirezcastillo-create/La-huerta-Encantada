export default function Events() {
  const eventos = [
    {
      fecha: "06 JUL",
      titulo: "Domingo Familiar",
      descripcion:
        "Disfruta de música en vivo, juegos para niños y promociones especiales.",
    },
    {
      fecha: "28 JUL",
      titulo: "Fiestas Patrias",
      descripcion:
        "Celebra con nuestra gastronomía peruana y espectáculos criollos.",
    },
    {
      fecha: "15 AGO",
      titulo: "Noche Criolla",
      descripcion:
        "Cena especial con música en vivo y ambiente campestre.",
    },
  ];

  return (
    <section
      id="eventos"
      className="py-24 bg-[#13351f]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[6px] text-center">
          Calendario
        </p>

        <h2 className="titulo text-5xl text-white text-center mt-4">
          Próximos Eventos
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {eventos.map((evento, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
            >

              <div className="bg-yellow-500 text-center py-6">

                <h3 className="text-3xl font-bold">
                  {evento.fecha}
                </h3>

              </div>

              <div className="p-8">

                <h4 className="titulo text-2xl text-green-900">
                  {evento.titulo}
                </h4>

                <p className="text-gray-600 mt-4 leading-7">
                  {evento.descripcion}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}