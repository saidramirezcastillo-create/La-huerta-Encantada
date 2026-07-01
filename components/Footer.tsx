export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-black text-white py-14"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-3xl font-bold text-yellow-500">
            La Huerta Encantada
          </h2>

          <p className="mt-5 text-gray-400">
            Restaurante campestre donde la naturaleza y el sabor se unen.
          </p>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Horarios
          </h3>

          <p>Lunes a Domingo</p>

          <p>9:00 AM - 10:00 PM</p>

        </div>

        <div>

          <h3 className="font-bold text-xl mb-5">
            Contacto
          </h3>

          <p>📍 Calle Lopez de Zuñiga - Chancay</p>

          <p>📞 +51 977 774 478</p>

          <p>✉ edsonortizvalencia@gmail.com</p>

        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
        © 2026 La Huerta Encantada - Todos los derechos reservados.
      </div>

    </footer>
  );
}