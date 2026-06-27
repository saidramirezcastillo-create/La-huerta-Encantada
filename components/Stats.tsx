export default function Stats() {
  const datos = [
    {
      numero: "15+",
      titulo: "Años de Experiencia",
    },
    {
      numero: "20K+",
      titulo: "Clientes Felices",
    },
    {
      numero: "50+",
      titulo: "Platos",
    },
    {
      numero: "100%",
      titulo: "Calidad",
    },
  ];

  return (
    <section className="bg-[#F8F5F0] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {datos.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-2 duration-300"
            >

              <h2 className="titulo text-5xl text-green-900">
                {item.numero}
              </h2>

              <p className="mt-4 text-gray-600">
                {item.titulo}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}