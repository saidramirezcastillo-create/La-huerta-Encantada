export default function About() {
  return (
    <section
      id="historia"
      className="bg-[#13351f] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* Texto */}
        <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-yellow-500 text-sm font-semibold">
            Nuestra Historia
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-white font-serif leading-tight">
            Tradición que
            <br />
            nos define
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mt-6 rounded-full"></div>

          <p className="text-gray-300 leading-8 mt-8 text-base sm:text-lg">
            La Huerta Encantada nació del sueño de una familia apasionada por la
            gastronomía peruana y la naturaleza. Nuestro compromiso es brindar
            una experiencia única, con platos preparados con ingredientes
            frescos, un ambiente acogedor y una atención que hará que siempre
            quieras volver.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition duration-300 shadow-lg">
            CONOCER MÁS
          </button>

        </div>

        {/* Imagen */}
        <div className="h-[300px] sm:h-[450px] lg:h-[650px] order-1 lg:order-2">

          <img
            src="/images/about.jpg"
            alt="Nuestra Historia"
            className="w-full h-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}