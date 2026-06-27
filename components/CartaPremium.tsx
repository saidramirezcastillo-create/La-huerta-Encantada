"use client";

import { useState } from "react";
import { useCart } from "./cart/CartContext";

const categorias = ["Platos", "Piqueos", "Bebidas"];

const productos = [
  {
    id: 1,
    categoria: "Platos",
    nombre: "Pato Asado",
    descripcion: "Nuestro plato estrella preparado con receta tradicional.",
    precio: 48,
    imagen: "/images/platos/pato.jpg",
  },
  {
    id: 2,
    categoria: "Platos",
    nombre: "Chaufa Especial",
    descripcion: "Arroz chaufa preparado al wok con pollo y verduras.",
    precio: 32,
    imagen: "/images/platos/chaufa.jpg",
  },
  {
    id: 3,
    categoria: "Piqueos",
    nombre: "Alitas Broaster",
    descripcion: "Crujientes alitas con papas fritas.",
    precio: 28,
    imagen: "/images/platos/alitas.jpg",
  },
  {
    id: 4,
    categoria: "Piqueos",
    nombre: "Salchipapa",
    descripcion: "Papas crocantes con salchichas.",
    precio: 20,
    imagen: "/images/platos/salchipapa.jpg",
  },
  {
    id: 5,
    categoria: "Bebidas",
    nombre: "Limonada Frozen",
    descripcion: "Preparada al instante.",
    precio: 10,
    imagen: "/images/bebida.jpg",
  },
];

export default function CartaPremium() {

  const [categoria, setCategoria] = useState("Platos");

  const {
    carrito,
    agregarProducto,
    eliminarProducto,
    total,
  } = useCart();

  const filtrados =
    productos.filter((p) => p.categoria === categoria);

  return (

    <div>

      {/* Categorías */}

      <div className="flex justify-center gap-4 mb-10 flex-wrap">

        {categorias.map((cat) => (

          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`px-6 py-3 rounded-full font-bold duration-300 ${
              categoria === cat
                ? "bg-yellow-500 text-black"
                : "bg-gray-200 hover:bg-yellow-300"
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* Productos + Carrito */}

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Productos */}

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

          {filtrados.map((plato) => (

            <div
              key={plato.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-300"
            >

              <img
                src={plato.imagen}
                alt={plato.nombre}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h2 className="titulo text-3xl text-green-900">
                  {plato.nombre}
                </h2>

                <p className="mt-3 text-gray-600">
                  {plato.descripcion}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-2xl font-bold text-yellow-600">
                    S/. {plato.precio.toFixed(2)}
                  </span>

                  <button
                    onClick={() =>
                      agregarProducto({
                        id: plato.id,
                        nombre: plato.nombre,
                        precio: plato.precio,
                        imagen: plato.imagen,
                        cantidad: 1,
                      })
                    }
                    className="bg-green-900 hover:bg-green-700 text-white px-5 py-3 rounded-full duration-300"
                  >
                    🛒 Agregar
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Carrito */}

        <div className="bg-white rounded-3xl shadow-xl p-6 h-fit sticky top-5">

          <h2 className="titulo text-3xl text-green-900 mb-6">
            🛒 Mi Pedido
          </h2>

          {carrito.length === 0 ? (

            <div className="text-center py-10">

              <p className="text-gray-500">
                No has agregado productos.
              </p>

            </div>

          ) : (

            <>

              <div className="space-y-4">

                {carrito.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-3"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {item.nombre}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Cantidad: {item.cantidad}
                      </p>

                    </div>

                    <button
                      onClick={() => eliminarProducto(item.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                    >
                      ✕
                    </button>

                  </div>

                ))}

              </div>

              <div className="border-t mt-8 pt-6">

                <div className="flex justify-between text-xl font-bold">

                  <span>Total</span>

                  <span>
                    S/. {total.toFixed(2)}
                  </span>

                </div>

                <button
                  className="mt-6 w-full bg-green-900 hover:bg-green-700 text-white py-4 rounded-full font-bold duration-300"
                >
                  Continuar Reserva →
                </button>

              </div>

            </>

          )}

        </div>

      </div>

    </div>

  );

}