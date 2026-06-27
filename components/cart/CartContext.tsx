"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

interface CartContextType {
  carrito: Producto[];
  agregarProducto: (producto: Producto) => void;
  eliminarProducto: (id: number) => void;
  aumentarCantidad: (id: number) => void;
  disminuirCantidad: (id: number) => void;
  vaciarCarrito: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  function agregarProducto(producto: Producto) {
    setCarrito((actual) => {
      const existe = actual.find((p) => p.id === producto.id);

      if (existe) {
        return actual.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }

      return [...actual, { ...producto, cantidad: 1 }];
    });
  }

  function eliminarProducto(id: number) {
    setCarrito((actual) => actual.filter((p) => p.id !== id));
  }

  function aumentarCantidad(id: number) {
    setCarrito((actual) =>
      actual.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  }

  function disminuirCantidad(id: number) {
    setCarrito((actual) =>
      actual
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  }
  function vaciarCarrito() {
  setCarrito([]);
}

  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
  carrito,
  agregarProducto,
  eliminarProducto,
  aumentarCantidad,
  disminuirCantidad,
  vaciarCarrito,
  total,
}}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  return context;
}