export default function VideoSection() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/about.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">

        <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-white text-5xl cursor-pointer hover:scale-110 duration-300">
          ▶
        </div>

        <h2 className="text-white text-4xl mt-8 font-serif">
          Ver Nuestro Lugar
        </h2>

        <p className="text-gray-300 mt-4">
          Descubre la magia de La Huerta Encantada
        </p>

      </div>
    </section>
  );
}