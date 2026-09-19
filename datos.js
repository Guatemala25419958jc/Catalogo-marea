/*
  DATOS DEL CATÁLOGO
  Para un cliente nuevo solo se edita este archivo y se reemplazan las fotos de la carpeta images.
  - Cada categoría necesita: id, nombre, frase, foto (tarjeta) y exactamente 6 productos.
  - Las fotos de productos se llaman sala-1.jpg ... sala-6.jpg (igual para las demás categorías).
*/
window.CATALOGO = {
  marca: "MAREA",
  moneda: "$",
  whatsapp: "", // Número con código de país y sin signos, por ejemplo 50212345678. Vacío = abre WhatsApp sin número.
  categorias: [
    {
      id: "sala",
      nombre: "Sala",
      frase: "Asientos profundos, maderas oscuras y luz cálida para compartir.",
      foto: "images/sala.jpg",
      productos: [
        { nombre: "Mesa de centro Ébano", desc: "Dos tapas negras sobre estructura de madera. Presencia escultórica.", precio: 420, foto: "images/sala-1.jpg" },
        { nombre: "Lámpara de techo Constelación", desc: "Seis globos de luz cálida sobre brazos de metal negro.", precio: 260, foto: "images/sala-2.jpg" },
        { nombre: "Butaca Nube", desc: "Giratoria, tapizada en tela crema con respaldo en tono cuero.", precio: 690, foto: "images/sala-3.jpg" },
        { nombre: "Sofá Curva", desc: "Línea orgánica en tela texturizada, cómodo y de asiento amplio.", precio: 1450, foto: "images/sala-4.jpg" },
        { nombre: "Lámpara de piso Latón", desc: "Arco dorado con mesa auxiliar integrada y pantalla de tela.", precio: 310, foto: "images/sala-5.jpg" },
        { nombre: "Mesa de centro Cuadra", desc: "Tapa de nogal con espacio de guardado bajo cristal.", precio: 540, foto: "images/sala-6.jpg" }
      ]
    },
    {
      id: "comedor",
      nombre: "Comedor",
      frase: "Mesas y sillas de líneas limpias para comidas largas.",
      foto: "images/comedor.jpg",
      productos: [
        { nombre: "Taburete Pluma", desc: "Asiento envolvente en tela crema con patas de metal negro.", precio: 175, foto: "images/comedor-1.jpg" },
        { nombre: "Silla Nogal", desc: "Estructura de madera con brazos y cojín tapizado.", precio: 230, foto: "images/comedor-2.jpg" },
        { nombre: "Mesa Taller", desc: "Tablero de madera oscura sobre base de metal.", precio: 980, foto: "images/comedor-3.jpg" },
        { nombre: "Silla Onda", desc: "Respaldo curvo y patas en ángulo, en acabado negro mate.", precio: 195, foto: "images/comedor-4.jpg" },
        { nombre: "Mesa Arco", desc: "Tablero de nogal con patas curvas que enmarcan el espacio.", precio: 1120, foto: "images/comedor-5.jpg" },
        { nombre: "Taburetes de barra (set de 3)", desc: "Asientos tapizados con patas de madera y apoyapiés.", precio: 540, foto: "images/comedor-6.jpg" }
      ]
    },
    {
      id: "dormitorio",
      nombre: "Dormitorio",
      frase: "Descanso en tonos quietos, con texturas que invitan a quedarse.",
      foto: "images/dormitorio.jpg",
      productos: [
        { nombre: "Mesa de noche Brasa", desc: "Madera oscura con luz LED integrada en la base.", precio: 340, foto: "images/dormitorio-1.jpg" },
        { nombre: "Armario Cedro", desc: "Tres puertas de madera con tiradores verticales.", precio: 1290, foto: "images/dormitorio-2.jpg" },
        { nombre: "Cama Luna", desc: "Cabecera redondeada tapizada en tela beige.", precio: 1180, foto: "images/dormitorio-3.jpg" },
        { nombre: "Armario Espejo", desc: "Puertas de cristal y madera, con iluminación interior.", precio: 1650, foto: "images/dormitorio-4.jpg" },
        { nombre: "Mesa de noche Bruma", desc: "Dos cajones de líneas suaves y acabado en madera cálida.", precio: 290, foto: "images/dormitorio-5.jpg" },
        { nombre: "Vitrina Calzado", desc: "Estantes abiertos con marco de madera y puertas oscuras.", precio: 480, foto: "images/dormitorio-6.jpg" }
      ]
    },
    {
      id: "exterior",
      nombre: "Exterior",
      frase: "Piezas de ratán y aluminio para terrazas y jardines.",
      foto: "images/exterior.jpg",
      productos: [
        { nombre: "Set Terraza con sombrilla", desc: "Dos sillones, mesa y sombrilla con luces integradas.", precio: 890, foto: "images/exterior-1.jpg" },
        { nombre: "Sillón Nido", desc: "Sillón envolvente de ratán con cojín acolchado.", precio: 460, foto: "images/exterior-2.jpg" },
        { nombre: "Sofá Nido redondo", desc: "Diván circular tejido, ideal para descansar al aire libre.", precio: 980, foto: "images/exterior-3.jpg" },
        { nombre: "Salón Costa (set)", desc: "Dos sillones tejidos y mesa auxiliar para terraza.", precio: 1490, foto: "images/exterior-4.jpg" },
        { nombre: "Silla colgante Huevo", desc: "Estructura de ratán con cojines y cadena para colgar.", precio: 520, foto: "images/exterior-5.jpg" },
        { nombre: "Mecedora Vaivén", desc: "Base curva de metal y cojín grueso, muy cómoda.", precio: 430, foto: "images/exterior-6.jpg" }
      ]
    }
  ]
};
