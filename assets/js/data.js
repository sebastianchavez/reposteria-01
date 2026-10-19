/* =========================================================
   data.js - Datos mockeados centralizados
   Acceso global vía window.DATA
   ========================================================= */

window.DATA = {
  servicios: [
    {
      id: "bodas",
      titulo: "Tortas de Boda",
      descripcion: "Diseños exclusivos para el día más especial. Trabajamos contigo para crear la torta de tus sueños con acabados de alta costura.",
      icono: "cake",
      imagen: "https://picsum.photos/seed/boda01/600/400"
    },
    {
      id: "cumpleanos",
      titulo: "Cumpleaños",
      descripcion: "Tortas temáticas personalizadas según los gustos del agasajado. Desde superhéroes hasta princesas, lo hacemos realidad.",
      icono: "birthday",
      imagen: "https://picsum.photos/seed/cumple01/600/400"
    },
    {
      id: "corporativos",
      titulo: "Eventos Corporativos",
      descripcion: "Soluciones dulces para empresas. Coffee breaks, regalos corporativos y tortas con branding personalizado.",
      icono: "briefcase",
      imagen: "https://picsum.photos/seed/corp01/600/400"
    },
    {
      id: "personalizadas",
      titulo: "Tortas Personalizadas",
      descripcion: "Cualquier diseño que imagines, lo creamos. Fondant, buttercream, modelados en chocolate y mucho más.",
      icono: "palette",
      imagen: "https://picsum.photos/seed/pers01/600/400"
    },
    {
      id: "cupcakes",
      titulo: "Cupcakes",
      descripcion: "Pequeñas obras de arte comestibles. Pedidos mínimos de 12 unidades. Variedad de sabores y decoraciones.",
      icono: "cupcake",
      imagen: "https://picsum.photos/seed/cupc01/600/400"
    },
    {
      id: "postres",
      titulo: "Postres Individuales",
      descripcion: "Tartas, mousses, cheesecakes, profiteroles. El broche de oro perfecto para cualquier ocasión.",
      icono: "dessert",
      imagen: "https://picsum.photos/seed/postr01/600/400"
    },
    {
      id: "mesa-dulce",
      titulo: "Mesas Dulces",
      descripcion: "Estaciones completas con tortas, cupcakes, macarons, cake pops, dulces y más. Decoración temática incluida.",
      icono: "table",
      imagen: "https://picsum.photos/seed/mesa01/600/400"
    },
    {
      id: "catering",
      titulo: "Catering Dulce",
      descripcion: "Servicio completo de repostería para eventos grandes. Desde 50 hasta 500 personas con logística profesional.",
      icono: "truck",
      imagen: "https://picsum.photos/seed/cat01/600/400"
    }
  ],

  galeria: [
    { id: 1, src: "https://picsum.photos/seed/g01/800/600", categoria: "Tortas", titulo: "Torta floral primaveral" },
    { id: 2, src: "https://picsum.photos/seed/g02/800/600", categoria: "Cupcakes", titulo: "Cupcakes de boda" },
    { id: 3, src: "https://picsum.photos/seed/g03/800/600", categoria: "Tortas", titulo: "Torta de chocolate" },
    { id: 4, src: "https://picsum.photos/seed/g04/800/600", categoria: "Postres", titulo: "Cheesecake de frutos rojos" },
    { id: 5, src: "https://picsum.photos/seed/g05/800/600", categoria: "Mesa Dulce", titulo: "Mesa dulce infantil" },
    { id: 6, src: "https://picsum.photos/seed/g06/800/600", categoria: "Cupcakes", titulo: "Cupcakes decorados" },
    { id: 7, src: "https://picsum.photos/seed/g07/800/600", categoria: "Tortas", titulo: "Torta de tres pisos" },
    { id: 8, src: "https://picsum.photos/seed/g08/800/600", categoria: "Postres", titulo: "Macarons franceses" },
    { id: 9, src: "https://picsum.photos/seed/g09/800/600", categoria: "Tortas", titulo: "Torta corporativa" },
    { id: 10, src: "https://picsum.photos/seed/g10/800/600", categoria: "Mesa Dulce", titulo: "Mesa dulce de boda" },
    { id: 11, src: "https://picsum.photos/seed/g11/800/600", categoria: "Postres", titulo: "Profiteroles bañados" },
    { id: 12, src: "https://picsum.photos/seed/g12/800/600", categoria: "Cupcakes", titulo: "Cupcakes temáticos" },
    { id: 13, src: "https://picsum.photos/seed/g13/800/600", categoria: "Tortas", titulo: "Torta de fondant" },
    { id: 14, src: "https://picsum.photos/seed/g14/800/600", categoria: "Postres", titulo: "Tarta de frutas" },
    { id: 15, src: "https://picsum.photos/seed/g15/800/600", categoria: "Mesa Dulce", titulo: "Candy bar infantil" },
    { id: 16, src: "https://picsum.photos/seed/g16/800/600", categoria: "Tortas", titulo: "Torta de cumpleaños" }
  ],

  precios: [
    {
      id: "basico",
      nombre: "Básico",
      precio: 89000,
      descripcion: "Ideal para reuniones pequeñas y eventos íntimos.",
      features: [
        "Torta para 15-20 personas",
        "1 sabor de bizcocho",
        "Decoración sencilla",
        "Entrega local incluida",
        "1 cambio de diseño"
      ],
      destacado: false
    },
    {
      id: "estandar",
      nombre: "Estándar",
      precio: 189000,
      descripcion: "El equilibrio perfecto entre calidad y precio.",
      features: [
        "Torta para 30-40 personas",
        "2 sabores de bizcocho",
        "Decoración personalizada",
        "Entrega local incluida",
        "2 cambios de diseño",
        "Mesa de dulces básica (20 personas)"
      ],
      destacado: true
    },
    {
      id: "premium",
      nombre: "Premium",
      precio: 349000,
      descripcion: "Para esos momentos que merecen lo mejor.",
      features: [
        "Torta para 50-80 personas",
        "3 sabores de bizcocho",
        "Decoración premium en fondant",
        "Entrega + montaje incluido",
        "Cambios ilimitados de diseño",
        "Mesa dulce completa (50 personas)",
        "Coordinación con evento"
      ],
      destacado: false
    },
    {
      id: "custom",
      nombre: "Personalizado",
      precio: "A medida",
      descripcion: "Diseñado desde cero según tu visión.",
      features: [
        "Cualquier cantidad de personas",
        "Sabores y rellenos a elección",
        "Diseño 100% personalizado",
        "Decoración de alta costura",
        "Asesoría dedicada",
        "Pruebas de sabor",
        "Logística completa"
      ],
      destacado: false
    }
  ],

  clases: [
    {
      id: 1,
      dia: "Lunes",
      hora: "10:00 - 13:00",
      nombre: "Introducción a la Repostería",
      nivel: "Principiante",
      cupos: 8,
      precio: 45000,
      instructor: "Chef María Rodríguez"
    },
    {
      id: 2,
      dia: "Lunes",
      hora: "16:00 - 19:00",
      nombre: "Decoración con Buttercream",
      nivel: "Intermedio",
      cupos: 6,
      precio: 60000,
      instructor: "Chef Laura Pérez"
    },
    {
      id: 3,
      dia: "Martes",
      hora: "10:00 - 13:00",
      nombre: "Tortas de Fondant",
      nivel: "Avanzado",
      cupos: 6,
      precio: 75000,
      instructor: "Chef Carlos Méndez"
    },
    {
      id: 4,
      dia: "Miércoles",
      hora: "16:00 - 19:00",
      nombre: "Cupcakes Creativos",
      nivel: "Principiante",
      cupos: 10,
      precio: 50000,
      instructor: "Chef María Rodríguez"
    },
    {
      id: 5,
      dia: "Jueves",
      hora: "10:00 - 13:00",
      nombre: "Macarons Franceses",
      nivel: "Intermedio",
      cupos: 8,
      precio: 65000,
      instructor: "Chef Laura Pérez"
    },
    {
      id: 6,
      dia: "Jueves",
      hora: "17:00 - 20:00",
      nombre: "Chocolate y Modelado",
      nivel: "Avanzado",
      cupos: 6,
      precio: 80000,
      instructor: "Chef Carlos Méndez"
    },
    {
      id: 7,
      dia: "Viernes",
      hora: "10:00 - 13:00",
      nombre: "Panadería Artesanal",
      nivel: "Principiante",
      cupos: 10,
      precio: 45000,
      instructor: "Chef Ana Gómez"
    },
    {
      id: 8,
      dia: "Sábado",
      hora: "09:00 - 12:00",
      nombre: "Tortas Temáticas Infantiles",
      nivel: "Intermedio",
      cupos: 8,
      precio: 70000,
      instructor: "Chef María Rodríguez"
    },
    {
      id: 9,
      dia: "Sábado",
      hora: "14:00 - 17:00",
      nombre: "Postres Individuales",
      nivel: "Intermedio",
      cupos: 8,
      precio: 65000,
      instructor: "Chef Ana Gómez"
    },
    {
      id: 10,
      dia: "Sábado",
      hora: "18:00 - 21:00",
      nombre: "Pastelería Profesional",
      nivel: "Avanzado",
      cupos: 6,
      precio: 90000,
      instructor: "Chef Carlos Méndez"
    }
  ],

  testimonios: [
    {
      id: 1,
      nombre: "Carolina Méndez",
      rol: "Boda en marzo 2025",
      foto: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      comentario: "¡Increíble! La torta de mi boda fue absolutamente perfecta. Cada detalle fue cuidado al milímetro y el sabor superó todas mis expectativas. Todas mis invitadas me preguntaron dónde la encargué."
    },
    {
      id: 2,
      nombre: "Andrés Torres",
      rol: "Cumpleaños corporativo",
      foto: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      comentario: "Contratamos a Repostería Delicias para un evento de 100 personas y el resultado fue espectacular. Profesionalismo, puntualidad y sabores exquisitos. Totalmente recomendados."
    },
    {
      id: 3,
      nombre: "Sofía Ramírez",
      rol: "Mamá primeriza",
      foto: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      comentario: "La torta del primer cumpleaños de mi bebé fue una obra de arte. Trabajaron conmigo en cada detalle y el resultado fue mágico. Mi hijo quedó encantado con su temática de animales."
    },
    {
      id: 4,
      nombre: "Lucía Vargas",
      rol: "Alumna de clases",
      foto: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      comentario: "Tomé el curso de decoración con buttercream y aprendí muchísimo. Las chefs son súper pacientes y el ambiente es muy cálido. Ya me anoté para el siguiente nivel."
    },
    {
      id: 5,
      nombre: "Roberto Jiménez",
      rol: "Aniversario",
      foto: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      comentario: "Sorprendí a mi esposa con una torta personalizada para nuestro aniversario. El diseño era exactamente lo que imaginaba y el sabor fue espectacular. Volveré a contratarlos sin dudarlo."
    }
  ],

  equipo: [
    {
      id: 1,
      nombre: "María Rodríguez",
      rol: "Chef Pastelera Principal",
      foto: "https://i.pravatar.cc/300?img=47",
      bio: "Con más de 15 años de experiencia, María es la fundadora y alma creativa del estudio. Formada en Le Cordon Bleu de París."
    },
    {
      id: 2,
      nombre: "Carlos Méndez",
      rol: "Chef de Decoración",
      foto: "https://i.pravatar.cc/300?img=33",
      bio: "Especialista en decoración con fondant y modelado en chocolate. Ganador del premio Mejor Decorador Nacional 2022."
    },
    {
      id: 3,
      nombre: "Laura Pérez",
      rol: "Coordinadora de Eventos",
      foto: "https://i.pravatar.cc/300?img=44",
      bio: "Encargada de hacer realidad cada visión. Su empatía y atención al detalle garantizan una experiencia inolvidable."
    }
  ],

  faqs: [
    {
      pregunta: "¿Con cuánta anticipación debo hacer mi pedido?",
      respuesta: "Recomendamos hacer tu pedido con al menos 2 semanas de anticipación para tortas personalizadas y 1 mes para bodas o eventos grandes. Para pedidos urgentes, contáctanos directamente y haremos lo posible por ayudarte."
    },
    {
      pregunta: "¿Realizan entregas a domicilio?",
      respuesta: "Sí, ofrecemos servicio de entrega local gratuito para pedidos dentro del área metropolitana. Para zonas más alejadas, el costo de envío varía según la distancia y se cotiza por separado."
    },
    {
      pregunta: "¿Puedo personalizar el diseño de mi torta?",
      respuesta: "¡Por supuesto! De hecho, esa es nuestra especialidad. Trabajamos contigo en cada detalle: colores, temática, sabores, rellenos, decoración. Solo cuéntanos tu visión."
    },
    {
      pregunta: "¿Trabajan con personas con alergias alimentarias?",
      respuesta: "Sí, ofrecemos opciones sin gluten, sin lactosa y veganas. Es importante que nos informes sobre cualquier alergia al momento de hacer el pedido para tomar las precauciones necesarias."
    },
    {
      pregunta: "¿Cuáles son los métodos de pago?",
      respuesta: "Aceptamos efectivo, transferencia bancaria, tarjetas de crédito/débito y pagos móviles. Para pedidos personalizados se requiere un anticipo del 50%."
    },
    {
      pregunta: "¿Puedo degustar antes de ordenar?",
      respuesta: "Sí, agendamos citas de degustación para tortas de boda y eventos premium (más de 50 personas). Las degustaciones tienen un costo que se descuenta del pedido final."
    }
  ],

  horarios: {
    dias: "Lunes a Viernes",
    horario: "9:00 - 19:00",
    fines: "Sábado: 9:00 - 14:00"
  }
};
