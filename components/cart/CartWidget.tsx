"use client";

import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import Modal from "../Modal";
import Reserva from "../Reserva";

export default function CartWidget() {
  const [abierto, setAbierto] = useState(false);
  const [abrirReserva, setAbrirReserva] = useState(false);

  useEffect(() => {
    const abrirCarrito = () => {
      setAbierto(true);
    };

    window.addEventListener("abrir-carrito", abrirCarrito);

    return () => {
      window.removeEventListener("abrir-carrito", abrirCarrito);
    };
  }, []);

  return (
    <>
      <CartButton abrir={() => setAbierto(true)} />

      <CartDrawer
        abierto={abierto}
        cerrar={() => setAbierto(false)}
      />

      <Modal
        abierto={abrirReserva}
        cerrar={() => setAbrirReserva(false)}
        titulo="Reserva tu Mesa"
      >
        <Reserva />
      </Modal>
    </>
  );
}