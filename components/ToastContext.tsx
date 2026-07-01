"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ToastData {
  visible: boolean;
  titulo: string;
  mensaje: string;
  accion?: () => void;
}

interface ToastContextType {
  mostrarToast: (
    titulo: string,
    mensaje: string,
    accion?: () => void
  ) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [toast, setToast] = useState<ToastData>({
    visible: false,
    titulo: "",
    mensaje: "",
  });

  function mostrarToast(
    titulo: string,
    mensaje: string,
    accion?: () => void
  ) {

    setToast({
      visible: true,
      titulo,
      mensaje,
      accion,
    });

    setTimeout(() => {

      setToast((t) => ({
        ...t,
        visible: false,
      }));

    }, 3000);

  }

  return (
    <ToastContext.Provider value={{ mostrarToast }}>

      {children}

      <div
        className={`fixed bottom-8 right-8 z-[99999] transition-all duration-500 ${
          toast.visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >

        <div className="bg-white rounded-2xl shadow-2xl border border-green-200 p-5 w-80">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              ✅
            </div>

            <div className="flex-1">

              <h3 className="font-bold text-green-800">
                {toast.titulo}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {toast.mensaje}
              </p>

              {toast.accion && (

                <button
                  onClick={() => {

                    // Oculta el toast
                    setToast((t) => ({
                      ...t,
                      visible: false,
                    }));

                    // Cierra la carta
                    window.dispatchEvent(
                      new Event("cerrar-carta")
                    );

                    // Abre el carrito
                    toast.accion?.();

                  }}
                  className="mt-4 w-full bg-green-700 hover:bg-green-600 text-white rounded-xl py-2 font-bold transition"
                >
                  🛒 Ir al carrito
                </button>

              )}

            </div>

          </div>

        </div>

      </div>

    </ToastContext.Provider>
  );
}

export function useToast() {

  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast debe usarse dentro de ToastProvider");
  }

  return context;

}