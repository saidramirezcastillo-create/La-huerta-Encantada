export default function Reservation() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold">
          Reserva tu Mesa
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Completa el formulario y nos comunicaremos contigo.
        </p>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Nombre"
            className="border rounded-xl p-4"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="border rounded-xl p-4"
          />

          <input
            type="date"
            className="border rounded-xl p-4"
          />

          <input
            type="time"
            className="border rounded-xl p-4"
          />

          <input
            type="number"
            placeholder="Personas"
            className="border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Correo"
            className="border rounded-xl p-4"
          />

          <textarea
            placeholder="Mensaje"
            className="border rounded-xl p-4 md:col-span-2 h-40"
          />

          <button
            className="md:col-span-2 bg-green-700 hover:bg-green-800 text-white py-5 rounded-xl text-xl font-bold"
          >
            Reservar Ahora
          </button>

        </form>

      </div>

    </section>
  );
}