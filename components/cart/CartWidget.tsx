"use client";

import { useState } from "react";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import Modal from "../Modal";
import Reserva from "../Reserva";

export default function CartWidget() {
  const [abierto, setAbierto] = useState(false);
  const [abrirReserva, setAbrirReserva] = useState(false);

  return (
    <>
      <CartButton abrir={() => setAbierto(true)} />

      <CartDrawer
        abierto={abierto}
        cerrar={() => setAbierto(false)}
        abrirReserva={() => setAbrirReserva(true)}
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