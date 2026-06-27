"use client";

import { useCart } from "./CartContext";

interface Props {
  abrir: () => void;
}

export default function CartButton({ abrir }: Props) {
  const { carrito } = useCart();

  const cantidad = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <button
      onClick={abrir}
      className="fixed bottom-6 right-6 z-50 bg-green-700 hover:bg-green-800 text-white rounded-full w-16 h-16 shadow-2xl text-2xl transition-all duration-300"
    >
      🛒

      {cantidad > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-7 h-7 text-sm flex items-center justify-center font-bold">
          {cantidad}
        </span>
      )}
    </button>
  );
}