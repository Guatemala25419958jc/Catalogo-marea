(function () {
  "use strict";

  var datos = window.CATALOGO;
  if (!datos || !datos.categorias) {
    console.error("Falta datos.js o está mal escrito.");
    return;
  }

  var listaCategorias = document.getElementById("categorias-lista");
  var vistaCategorias = document.getElementById("categorias-vista");
  var vistaProductos = document.getElementById("productos-vista");
  var titulo = document.getElementById("productos-titulo");
  var frase = document.getElementById("productos-frase");
  var listaProductos = document.getElementById("productos-lista");
  var banda = document.getElementById("categorias");

  function formatoPrecio(n) {
    return datos.moneda + Number(n).toLocaleString("en-US");
  }

  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
  }

  function fotoSegura(src, alt, respaldo) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    img.addEventListener("error", function () {
      if (respaldo && img.getAttribute("src") !== respaldo) {
        img.src = respaldo;
      }
    });
    return img;
  }

  // Tarjetas de categoría
  datos.categorias.forEach(function (cat) {
    var btn = crear("button", "cat-card");
    btn.type = "button";
    btn.setAttribute("data-cat", cat.id);
    btn.setAttribute("aria-label", "Ver productos de " + cat.nombre);
    btn.appendChild(fotoSegura(cat.foto, cat.nombre));
    var etiqueta = crear("span", "cat-label");
    etiqueta.appendChild(crear("strong", "", cat.nombre));
    etiqueta.appendChild(crear("span", "", "Ver piezas"));
    btn.appendChild(etiqueta);
    btn.addEventListener("click", function () { abrir(cat.id); });
    listaCategorias.appendChild(btn);
  });

  function tarjetaProducto(p, cat) {
    var art = crear("article", "product");
    art.appendChild(fotoSegura(p.foto, p.nombre, cat.foto));
    var top = crear("div", "product-top");
    top.appendChild(crear("h3", "", p.nombre));
    top.appendChild(crear("span", "price", formatoPrecio(p.precio)));
    art.appendChild(top);
    art.appendChild(crear("p", "", p.desc));
    return art;
  }

  function abrir(id) {
    var cat = datos.categorias.filter(function (c) { return c.id === id; })[0];
    if (!cat) return;
    titulo.textContent = cat.nombre;
    frase.textContent = cat.frase;
    listaProductos.textContent = "";
    cat.productos.forEach(function (p) {
      listaProductos.appendChild(tarjetaProducto(p, cat));
    });
    vistaCategorias.hidden = true;
    vistaProductos.hidden = false;
    banda.scrollIntoView({ behavior: "smooth", block: "start" });
    titulo.focus({ preventScroll: true });
  }

  function volver() {
    vistaProductos.hidden = true;
    vistaCategorias.hidden = false;
    banda.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll("[data-volver]").forEach(function (b) {
    b.addEventListener("click", volver);
  });

  // Si estás viendo productos y pulsas el menú "Categoría", vuelves a las cuatro tarjetas
  document.querySelectorAll('a[href="#categorias"]').forEach(function (a) {
    a.addEventListener("click", function () {
      if (!vistaProductos.hidden) {
        vistaProductos.hidden = true;
        vistaCategorias.hidden = false;
      }
    });
  });

  // Botón de WhatsApp
  var wa = document.getElementById("btn-whatsapp");
  if (wa) {
    var texto = encodeURIComponent("Hola " + datos.marca + ", quiero conocer el catálogo.");
    var numero = (datos.whatsapp || "").replace(/\D/g, "");
    wa.href = "https://wa.me/" + numero + "?text=" + texto;
  }
})();
