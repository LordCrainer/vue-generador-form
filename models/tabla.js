var Tablas = [
  {
    Nombre_Tabla: "CURSOS",
    Titulo: "LISTA DE CURSOS",
    Ruta_Nombre: "CURSOS",
    Cabecera: [
      {
        text: "NOMBRES",
        align: "left",
        value: "Nombre",
        tipo: "texto"
      },
      {
        text: "PRECIO",
        align: "center",
        value: "Precio",
        tipo: "texto"
      },
      {
        text: "CATEGORIA",
        align: "center",
        value: "Categoria",
        tipo: "lista"
      },
      {
        text: "FECHAS",
        align: "center",
        value: "Fecha_init",
        tipo: "boton"
      },
      {
        text: "Actions",
        align: "center",
        value: "acciones",
        sortable: false,
        tipo: "acciones"
      }
    ]
  },
  {
    Nombre_Tabla: "FECHAS",
    Titulo: "Fecha del Curso",
    Ruta_Nombre: "FECHAS",
    Cabecera: [
      {
        text: "FECHAS",
        align: "left",
        sortable: false,
        value: "Nombre",
        tipo: "texto"
      },
      {
        text: "PRECIO",
        align: "center",
        value: "Precio",
        tipo: "texto"
      },
      {
        text: "FECHAS",
        align: "center",
        value: "Fecha_init",
        tipo: "boton"
      },
      {
        text: "CATEGORIA",
        align: "center",
        value: "Categoria",
        tipo: "chips"
      },
      {
        text: "Protein (g)",
        align: "center",
        value: "protein",
        tipo: "texto"
      },
      {
        text: "Actions",
        align: "center",
        value: "",
        sortable: false,
        tipo: "texto"
      }
    ]
  }
];

module.exports = Tablas;
