export interface Plato {
  id: number;

  categoria: "menu" | "carta" | "bebidas";

  nombre: string;

  descripcion: string;

  precio: number;

  imagen: string;

  destacado?: boolean;

  tipo: "pollo" | "carne" | "bebida" | "vegetariano";

  chef: boolean;

  rating: number;

  ventas: number;

  tiempo: number;
}

export const menu: Plato[] = [

  // ============================
  // MENÚ
  // ============================

  {
  id: 1,

  categoria: "menu",

  nombre: "Alitas BBQ",

  descripcion: "Crujientes alitas bañadas en salsa BBQ.",

  precio: 18,

  imagen: "/images/platos/alitasbbq.jpg",

  destacado: true,

  tipo: "pollo",

  chef: true,

  rating: 4.9,

  ventas: 820,

  tiempo: 18,
},

  {
  id: 2,
  categoria: "menu",
  nombre: "Alitas Acevichadas",
  descripcion: "Alitas con nuestra salsa acevichada.",
  precio: 18,
  imagen: "/images/platos/alitas.jpg",
  tipo: "pollo",
  chef: true,
  rating: 4.8,
  ventas: 640,
  tiempo: 18,
},

{
  id: 3,
  categoria: "menu",
  nombre: "Sopa Seca",
  descripcion: "Tradicional sopa seca peruana.",
  precio: 17,
  imagen: "/images/platos/sopaseca.jpg",
  tipo: "carne",
  chef: false,
  rating: 4.7,
  ventas: 430,
  tiempo: 20,
},

{
  id: 4,
  categoria: "menu",
  nombre: "Suprema",
  descripcion: "Pechuga empanizada acompañada de papas.",
  precio: 17,
  imagen: "/images/platos/suprema.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.6,
  ventas: 380,
  tiempo: 18,
},

{
  id: 5,
  categoria: "menu",
  nombre: "Salchipollo Especial",
  descripcion: "Pollo broaster con papas y ensalada.",
  precio: 18,
  imagen: "/images/platos/salchipollo.jpg",
  tipo: "pollo",
  chef: true,
  rating: 4.9,
  ventas: 850,
  tiempo: 16,
},

{
  id: 6,
  categoria: "menu",
  nombre: "Pollo Broaster",
  descripcion: "Nuestro famoso pollo broaster.",
  precio: 18,
  imagen: "/images/platos/pollobroaster.jpg",
  tipo: "pollo",
  chef: true,
  rating: 5,
  ventas: 1200,
  tiempo: 15,
},

{
  id: 7,
  categoria: "menu",
  nombre: "Pollo Saltado",
  descripcion: "Pollo salteado al wok.",
  precio: 17,
  imagen: "/images/platos/pollosaltado.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.8,
  ventas: 560,
  tiempo: 18,
},

{
  id: 8,
  categoria: "menu",
  nombre: "Pato en Ají",
  descripcion: "Pato preparado con ají especial.",
  precio: 30,
  imagen: "/images/platos/pato.jpg",
  tipo: "carne",
  chef: true,
  rating: 5,
  ventas: 910,
  tiempo: 30,
},

{
  id: 9,
  categoria: "menu",
  nombre: "Ají de Gallina",
  descripcion: "Clásico plato peruano.",
  precio: 17,
  imagen: "/images/platos/aji-de-gallina.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.8,
  ventas: 690,
  tiempo: 20,
},

{
  id: 10,
  categoria: "menu",
  nombre: "Adobo de Lechón",
  descripcion: "Lechón marinado al estilo de la casa.",
  precio: 17,
  imagen: "/images/platos/adobo-de-lechon.jpg",
  tipo: "carne",
  chef: true,
  rating: 4.9,
  ventas: 720,
  tiempo: 25,
},

{
  id: 11,
  categoria: "menu",
  nombre: "Arroz con Pollo",
  descripcion: "Arroz verde acompañado de pollo.",
  precio: 17,
  imagen: "/images/platos/arroz-con-pollo.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.7,
  ventas: 620,
  tiempo: 18,
},

{
  id: 12,
  categoria: "menu",
  nombre: "Pollo al Vino",
  descripcion: "Pollo preparado en salsa de vino.",
  precio: 17,
  imagen: "/images/platos/pollo-al-vino.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.6,
  ventas: 410,
  tiempo: 22,
},

{
  id: 13,
  categoria: "menu",
  nombre: "Escabeche de Pollo",
  descripcion: "Escabeche tradicional.",
  precio: 17,
  imagen: "/images/platos/escabeche-de-pollo.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.7,
  ventas: 450,
  tiempo: 20,
},

{
  id: 14,
  categoria: "menu",
  nombre: "Arroz a la Cubana",
  descripcion: "Con huevo, plátano y arroz.",
  precio: 17,
  imagen: "/images/platos/arroz-ala-cubana.jpg",
  tipo: "vegetariano",
  chef: false,
  rating: 4.5,
  ventas: 360,
  tiempo: 12,
},

{
  id: 15,
  categoria: "menu",
  nombre: "Chuleta Dorada",
  descripcion: "Chuleta frita con papas.",
  precio: 18,
  imagen: "/images/platos/chuleta-dorada.jpg",
  tipo: "carne",
  chef: true,
  rating: 4.8,
  ventas: 530,
  tiempo: 18,
},

{
  id: 16,
  categoria: "menu",
  nombre: "Churrasco",
  descripcion: "Carne a la plancha.",
  precio: 18,
  imagen: "/images/platos/churrasco.jpg",
  tipo: "carne",
  chef: true,
  rating: 4.9,
  ventas: 610,
  tiempo: 18,
},

{
  id: 17,
  categoria: "menu",
  nombre: "Seco a la Norteña",
  descripcion: "Seco preparado con culantro.",
  precio: 18,
  imagen: "/images/platos/seco-ala-norteña.jpg",
  tipo: "carne",
  chef: true,
  rating: 5,
  ventas: 980,
  tiempo: 28,
},

{
  id: 101,
  categoria: "carta",
  nombre: "Lomo Saltado",
  descripcion: "Nuestro plato estrella.",
  precio: 30,
  imagen: "/images/platos/lomo.jpg",
  destacado: true,
  tipo: "carne",
  chef: true,
  rating: 5,
  ventas: 1450,
  tiempo: 20,
},

{
  id: 102,
  categoria: "carta",
  nombre: "Pollo Broaster a la Carta",
  descripcion: "Pollo broaster Grande.",
  precio: 29,
  imagen: "/images/platos/pollo.jpg",
  tipo: "pollo",
  chef: true,
  rating: 5,
  ventas: 1330,
  tiempo: 18,
},

{
  id: 103,
  categoria: "carta",
  nombre: "Tallarín Saltado de Pollo",
  descripcion: "Fideos salteados al wok.",
  precio: 27,
  imagen: "/images/platos/menu.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.8,
  ventas: 640,
  tiempo: 18,
},

{
  id: 104,
  categoria: "carta",
  nombre: "Tallarín Saltado de Carne",
  descripcion: "Tallarines con carne salteada.",
  precio: 28,
  imagen: "/images/platos/menu.jpg",
  tipo: "carne",
  chef: true,
  rating: 4.9,
  ventas: 710,
  tiempo: 20,
},

{
  id: 105,
  categoria: "carta",
  nombre: "Bisteck a lo Pobre",
  descripcion: "Con huevo, plátano y papas.",
  precio: 32,
  imagen: "/images/platos/menu.jpg",
  tipo: "carne",
  chef: true,
  rating: 5,
  ventas: 850,
  tiempo: 22,
},

{
  id: 106,
  categoria: "carta",
  nombre: "Chicharrón de Pollo",
  descripcion: "Pollo crocante.",
  precio: 29,
  imagen: "/images/platos/pollo.jpg",
  tipo: "pollo",
  chef: true,
  rating: 4.9,
  ventas: 920,
  tiempo: 18,
},

{
  id: 107,
  categoria: "carta",
  nombre: "Pollo a la Plancha",
  descripcion: "Acompañado de ensalada.",
  precio: 25,
  imagen: "/images/platos/pollo.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.7,
  ventas: 500,
  tiempo: 16,
},

{
  id: 108,
  categoria: "carta",
  nombre: "Lomo a lo Pobre",
  descripcion: "Lomo con huevo y papas.",
  precio: 35,
  imagen: "/images/platos/lomo.jpg",
  tipo: "carne",
  chef: true,
  rating: 5,
  ventas: 970,
  tiempo: 22,
},

{
  id: 109,
  categoria: "carta",
  nombre: "Pollo Saltado",
  descripcion: "Salteado al wok.",
  precio: 28,
  imagen: "/images/platos/pollo.jpg",
  tipo: "pollo",
  chef: false,
  rating: 4.8,
  ventas: 680,
  tiempo: 18,
},

{
  id: 110,
  categoria: "carta",
  nombre: "Arroz Chaufa",
  descripcion: "Chaufa especial.",
  precio: 24,
  imagen: "/images/platos/chaufa.jpg",
  tipo: "carne",
  chef: true,
  rating: 4.9,
  ventas: 1240,
  tiempo: 15,
},

{
  id: 201,
  categoria: "bebidas",
  nombre: "Jarra de Hierba Luisa",
  descripcion: "Bebida natural.",
  precio: 3,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.7,
  ventas: 260,
  tiempo: 2,
},

{
  id: 202,
  categoria: "bebidas",
  nombre: "Inca Cola 1L",
  descripcion: "Gaseosa.",
  precio: 7.5,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.8,
  ventas: 380,
  tiempo: 1,
},

{
  id: 203,
  categoria: "bebidas",
  nombre: "Inca Cola 1½L",
  descripcion: "Gaseosa.",
  precio: 10.5,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.9,
  ventas: 520,
  tiempo: 1,
},

{
  id: 204,
  categoria: "bebidas",
  nombre: "Inca Cola Personal",
  descripcion: "Gaseosa.",
  precio: 2,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.8,
  ventas: 620,
  tiempo: 1,
},

{
  id: 205,
  categoria: "bebidas",
  nombre: "Agua Mineral",
  descripcion: "Agua embotellada.",
  precio: 3,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.6,
  ventas: 410,
  tiempo: 1,
},

{
  id: 206,
  categoria: "bebidas",
  nombre: "Café",
  descripcion: "Café caliente.",
  precio: 3,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.8,
  ventas: 290,
  tiempo: 3,
},

{
  id: 207,
  categoria: "bebidas",
  nombre: "Café con Leche",
  descripcion: "Café con leche.",
  precio: 4,
  imagen: "/images/platos/bebida.jpg",
  tipo: "bebida",
  chef: false,
  rating: 4.9,
  ventas: 340,
  tiempo: 3,
}
];