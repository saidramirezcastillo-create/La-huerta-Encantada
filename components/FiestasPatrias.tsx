"use client";

import { useEffect, useState } from "react";

export default function FiestasPatrias() {
  const [particulas, setParticulas] = useState<
    {
      id: number;
      left: number;
      delay: number;
      duration: number;
      tipo: "🇵🇪" | "❤️" | "✨" | "🎉";
      size: number;
    }[]
  >([]);

  useEffect(() => {
    const items = [];

    const simbolos = ["🇵🇪", "❤️", "✨", "🎉"] as const;

    for (let i = 0; i < 35; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        tipo: simbolos[Math.floor(Math.random() * simbolos.length)],
        size: 18 + Math.random() * 18,
      });
    }

    setParticulas(items);
  }, []);

  return (
    <>
      {/* Partículas flotando */}

      <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">

        {particulas.map((p) => (
          <span
            key={p.id}
            className="fiesta-float absolute"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              fontSize: `${p.size}px`,
            }}
          >
            {p.tipo}
          </span>
        ))}

      </div>

      {/* Escarapela izquierda */}

      <div className="fixed left-6 top-28 z-30 animate-pulse">

        <div className="w-16 h-16 rounded-full bg-white border-[8px] border-red-600 shadow-2xl flex items-center justify-center text-2xl">
          🇵🇪
        </div>

      </div>

      {/* Escarapela derecha */}

      <div className="fixed right-6 top-28 z-30 animate-pulse">

        <div className="w-16 h-16 rounded-full bg-white border-[8px] border-red-600 shadow-2xl flex items-center justify-center text-2xl">
          🇵🇪
        </div>

      </div>

      {/* Cintas superiores */}

      <div className="pointer-events-none fixed top-0 left-0 w-full h-4 bg-gradient-to-r from-red-700 via-white to-red-700 z-40 opacity-90"></div>

      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-4 bg-gradient-to-r from-red-700 via-white to-red-700 z-40 opacity-90"></div>
    {/* ==========================================
          Banner Fiestas Patrias
      ========================================== */}

      <div className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 z-40">

        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-full shadow-2xl px-10 py-4 border-4 border-white">

          <div className="flex items-center gap-4">

            <span className="text-4xl bandera-wave">
              🇵🇪
            </span>

            <div className="text-center">

              <h2 className="text-white font-black tracking-widest text-xl">

                ¡FELICES FIESTAS PATRIAS!

              </h2>

              <p className="text-yellow-300 text-sm font-semibold">

                Orgullosos de ser peruanos ❤️

              </p>

            </div>

            <span className="text-4xl bandera-wave">
              🇵🇪
            </span>

          </div>

        </div>

      </div>

      {/* Destellos */}

      <div className="pointer-events-none absolute inset-0 z-20">

        <div className="absolute left-[20%] top-[30%] fiesta-brillo text-yellow-300 text-5xl">
          ✨
        </div>

        <div className="absolute left-[70%] top-[20%] fiesta-brillo text-red-500 text-4xl">
          ❤️
        </div>

        <div
          className="absolute left-[55%] top-[60%] fiesta-brillo text-yellow-200 text-6xl"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>

        <div
          className="absolute left-[80%] top-[40%] fiesta-brillo text-white text-5xl"
          style={{ animationDelay: "2s" }}
        >
          ✨
        </div>

      </div>
       {/* ==========================================
            FUEGOS ARTIFICIALES
      ========================================== */}

      <div className="pointer-events-none fixed inset-0 z-[4] overflow-hidden">

        {/* Izquierda */}

        <div
          className="firework"
          style={{
            left: "12%",
            top: "20%",
            animationDelay: "0s",
          }}
        />

        {/* Centro */}

        <div
          className="firework"
          style={{
            left: "48%",
            top: "12%",
            animationDelay: "1.5s",
          }}
        />

        {/* Derecha */}

        <div
          className="firework"
          style={{
            left: "82%",
            top: "22%",
            animationDelay: "3s",
          }}
        />

        {/* Extra */}

        <div
          className="firework"
          style={{
            left: "30%",
            top: "10%",
            animationDelay: "5s",
          }}
        />

      </div>
       {/* ==========================================
            CAPAS DE FONDO PREMIUM
      ========================================== */}

      {/* Nube 1 */}

      <div
        className="cloud"
        style={{
          top: "14%",
          animationDelay: "0s",
        }}
      >
        ☁️
      </div>

      {/* Nube 2 */}

      <div
        className="cloud"
        style={{
          top: "26%",
          animationDelay: "6s",
        }}
      >
        ☁️
      </div>

      {/* Nube 3 */}

      <div
        className="cloud"
        style={{
          top: "8%",
          animationDelay: "12s",
        }}
      >
        ☁️
      </div>

      {/* Cóndor */}

      <div
        className="condor"
        style={{
          top: "18%",
          animationDelay: "0s",
        }}
      >
        🦅
      </div>

      <div
        className="condor"
        style={{
          top: "28%",
          animationDelay: "10s",
        }}
      >
        🦅
      </div>

      {/* Sol dorado */}

      <div className="sun-glow"></div>
    </>
  );
}