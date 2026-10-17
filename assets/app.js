// STEMP Poct · catálogo, pedido y cotización. Sin servidor: todo termina en WhatsApp o en correo.
(function () {
  const S = window.SITIO, LINEAS = window.LINEAS, PRODUCTOS = window.PRODUCTOS;
  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const $$ = (sel, raiz = document) => Array.from(raiz.querySelectorAll(sel));
  const lineaDe = id => LINEAS.find(l => l.id === id) || {};
  const CLAVE = "stemp-poct-pedido";

  // Datos de configuración en la página
  $$("[data-sitio]").forEach(el => {
    const k = el.dataset.sitio; if (!(k in S)) return;
    if (S[k]) el.textContent = S[k]; else (el.closest("li") || el).remove();   // respaldo vacío: se quita
  });
  const waBase = "https://wa.me/" + S.whatsapp;
  $("#pie-whatsapp").href = waBase;
  $("#pie-whatsapp").textContent = S.whatsappVisible;
  $("#pie-correo").href = "mailto:" + S.correo;
  $("#pie-correo").textContent = S.correo;
  $("#pie-grupo").href = S.sitioGrupo;
  $("#whatsapp-asesoria").href = waBase + "?text=" + encodeURIComponent("Hola, " + S.nombre + ". Quisiera asesoría para elegir equipos o pruebas para mi clínica.");

  const escapar = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const aviso = texto => { const a = $("#aviso"); a.textContent = texto; a.classList.add("visible"); clearTimeout(aviso.t); aviso.t = setTimeout(() => a.classList.remove("visible"), 1800); };

  // ---------- Equipos ----------
  const iconoEquipo = '<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="5" width="18" height="12" rx="2"/><rect x="6" y="8" width="8" height="6" rx="1"/><path d="M17 9h1M17 12h1M8 21h8M12 17v4"/></svg>';
  const iconoMicro = '<svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M9 3h4v4H9zM11 7v4M7 21h12M10 17a5 5 0 0 1 8-6M8 13h6v4H8z"/></svg>';
  const equipos = PRODUCTOS.filter(p => p.tipo === "equipo");
  $("#lista-equipos").innerHTML = equipos.map(p => {
    const l = lineaDe(p.linea);
    return `<article class="tarjeta">
      <div class="ilustracion">${p.linea === "mic" ? iconoMicro : iconoEquipo}</div>
      <div class="linea">${escapar(l.nombre)}</div>
      <h3>${escapar(p.nombre)}</h3>
      <p>${escapar(l.detalle)}</p>
      <div class="acciones"><button class="boton boton-primario boton-pequeno" type="button" data-cotizacion="${p.codigo}">Cotización o demostración</button></div>
    </article>`;
  }).join("");
  $("#c-equipo").innerHTML = equipos.map(p => `<option value="${p.codigo}">${escapar(p.nombre)}</option>`).join("");

  // ---------- Catálogo de insumos ----------
  const insumos = PRODUCTOS.filter(p => p.tipo === "insumo");
  let filtro = "todos", busqueda = "";
  const lineasConInsumos = LINEAS.filter(l => insumos.some(p => p.linea === l.id));
  $("#filtros").innerHTML = [`<button class="filtro" type="button" data-filtro="todos" aria-pressed="true">Todos (${insumos.length})</button>`]
    .concat(lineasConInsumos.map(l => `<button class="filtro" type="button" data-filtro="${l.id}" aria-pressed="false">${escapar(l.nombre)}</button>`)).join("");

  const normal = t => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  function pintarInsumos() {
    const q = normal(busqueda.trim());
    const visibles = insumos.filter(p => (filtro === "todos" || p.linea === filtro) &&
      (!q || normal(p.nombre + " " + p.codigo + " " + lineaDe(p.linea).nombre).includes(q)));
    const det = $("#detalle-linea");
    if (filtro !== "todos") { const l = lineaDe(filtro); det.hidden = false; det.textContent = (l.equipo && l.equipo !== "Sin equipo" ? l.equipo + ". " : "") + l.detalle; }
    else det.hidden = true;
    $("#lista-insumos").innerHTML = visibles.length ? visibles.map(p => {
      const l = lineaDe(p.linea);
      return `<article class="producto">
        <div class="codigo">${p.sinCodigo ? "Código por asignar" : "Código " + escapar(p.codigo)}</div>
        <h3>${escapar(p.nombre)}</h3>
        <div class="meta">${escapar(l.nombre)}${l.equipo && l.equipo !== "Sin equipo" ? " · " + escapar(l.equipo) : ""} · ${escapar(p.empaque)}</div>
        <div class="fila">
          <span class="cantidad"><button type="button" data-menos aria-label="Menos">−</button><input type="number" min="1" value="1" aria-label="Cantidad"><button type="button" data-mas aria-label="Más">+</button></span>
          <button class="boton boton-primario boton-pequeno" type="button" data-agregar="${p.codigo}">Agregar</button>
        </div>
      </article>`;
    }).join("") : '<p class="vacio">No encontramos productos con ese nombre o código. Escríbanos y le ayudamos.</p>';
  }
  pintarInsumos();

  $("#filtros").addEventListener("click", e => {
    const b = e.target.closest("[data-filtro]"); if (!b) return;
    filtro = b.dataset.filtro;
    $$("[data-filtro]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    pintarInsumos();
  });
  $("#buscador").addEventListener("input", e => { busqueda = e.target.value; pintarInsumos(); });

  // ---------- Pedido ----------
  let pedido = {};
  try { pedido = JSON.parse(localStorage.getItem(CLAVE)) || {}; } catch (e) { pedido = {}; }
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(pedido)); } catch (e) {} };
  const porCodigo = c => PRODUCTOS.find(p => p.codigo === c);

  function pintarPedido() {
    const codigos = Object.keys(pedido).filter(porCodigo);
    const total = codigos.reduce((s, c) => s + pedido[c], 0);
    $("#contador").textContent = total;
    $("#lineas-pedido").innerHTML = codigos.length ? codigos.map(c => {
      const p = porCodigo(c);
      return `<div class="linea-pedido">
        <div>${escapar(p.nombre)}<small>${p.sinCodigo ? "código por asignar" : escapar(p.codigo)} · ${escapar(p.empaque)}</small></div>
        <span class="cantidad"><button type="button" data-restar="${c}" aria-label="Menos">−</button><input type="number" min="1" value="${pedido[c]}" data-cantidad="${c}" aria-label="Cantidad"><button type="button" data-sumar="${c}" aria-label="Más">+</button></span>
        <button class="quitar" type="button" data-quitar="${c}">Quitar</button>
      </div>`;
    }).join("") : '<p class="vacio">Su pedido está vacío. Agregue productos desde el catálogo.</p>';
    guardar();
  }
  pintarPedido();

  $("#lista-insumos").addEventListener("click", e => {
    const caja = e.target.closest(".producto"); if (!caja) return;
    const input = $("input", caja);
    if (e.target.closest("[data-menos]")) input.value = Math.max(1, (+input.value || 1) - 1);
    if (e.target.closest("[data-mas]")) input.value = (+input.value || 0) + 1;
    const agregar = e.target.closest("[data-agregar]");
    if (agregar) {
      const c = agregar.dataset.agregar, n = Math.max(1, parseInt(input.value, 10) || 1);
      pedido[c] = (pedido[c] || 0) + n; input.value = 1; pintarPedido();
      aviso("Agregado al pedido: " + n + " × " + porCodigo(c).empaque);
    }
  });

  $("#lineas-pedido").addEventListener("click", e => {
    const t = e.target.closest("button"); if (!t) return;
    const c = t.dataset.restar || t.dataset.sumar || t.dataset.quitar; if (!c) return;
    if (t.dataset.quitar) delete pedido[c];
    else if (t.dataset.sumar) pedido[c]++;
    else pedido[c] = Math.max(1, pedido[c] - 1);
    pintarPedido();
  });
  $("#lineas-pedido").addEventListener("change", e => {
    const c = e.target.dataset.cantidad; if (!c) return;
    pedido[c] = Math.max(1, parseInt(e.target.value, 10) || 1); pintarPedido();
  });

  const velo = $("#velo"), panel = $("#panel-pedido"), ventana = $("#ventana-cotizacion");
  const abrirPedido = () => { panel.classList.add("abierto"); velo.classList.add("abierto"); panel.setAttribute("aria-hidden", "false"); };
  const cerrarTodo = () => { [panel, velo].forEach(x => x.classList.remove("abierto")); ventana.classList.remove("abierta"); panel.setAttribute("aria-hidden", "true"); ventana.setAttribute("aria-hidden", "true"); };
  $$("[data-abrir-pedido]").forEach(b => b.addEventListener("click", abrirPedido));
  $$("[data-cerrar]").forEach(b => b.addEventListener("click", cerrarTodo));
  velo.addEventListener("click", cerrarTodo);
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarTodo(); });

  // Validación común
  function revisar(form, errorEl) {
    const faltan = $$("[required]", form).filter(x => x.type === "checkbox" ? !x.checked : !x.value.trim());
    if (!faltan.length) { errorEl.textContent = ""; return true; }
    errorEl.textContent = faltan.some(x => x.type === "checkbox") && faltan.length === 1
      ? "Para enviar, autorice el tratamiento de sus datos."
      : "Complete los campos marcados con *" + (faltan.some(x => x.type === "checkbox") ? " y autorice el tratamiento de sus datos." : ".");
    faltan[0].focus();
    return false;
  }
  const valor = (form, nombre) => (form.elements[nombre].value || "").trim();
  function enviar(canal, asunto, texto) {
    if (canal === "whatsapp") window.open(waBase + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    else window.location.href = "mailto:" + S.correo + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(texto);
  }
  const datosCliente = f => [
    "Clínica o laboratorio: " + valor(f, "clinica"),
    valor(f, "nit") ? "NIT: " + valor(f, "nit") : "",
    "Contacto: " + valor(f, "contacto"),
    "Ciudad: " + valor(f, "ciudad"),
    "Teléfono: " + valor(f, "telefono"),
    valor(f, "correo") ? "Correo: " + valor(f, "correo") : ""
  ].filter(Boolean);

  $$("[data-enviar]").forEach(b => b.addEventListener("click", () => {
    const f = $("#form-pedido"), err = $("#error-pedido");
    const codigos = Object.keys(pedido).filter(porCodigo);
    if (!codigos.length) { err.textContent = "Agregue al menos un producto al pedido."; return; }
    if (!revisar(f, err)) return;
    const lineas = codigos.map(c => { const p = porCodigo(c); return "• " + pedido[c] + " × " + p.empaque + " · " + p.nombre + (p.sinCodigo ? "" : " [" + p.codigo + "]"); });
    const texto = ["Hola, " + S.nombre + ". Quiero hacer este pedido:", ""].concat(lineas, [""], datosCliente(f),
      valor(f, "notas") ? ["Notas: " + valor(f, "notas")] : [], ["", "Autorizo el tratamiento de mis datos según la política de tratamiento de datos de " + S.nombre + "."]).join("\n");
    enviar(b.dataset.enviar, "Pedido de insumos · " + valor(f, "clinica"), texto);
  }));

  // ---------- Cotización o demostración ----------
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-cotizacion]"); if (!b) return;
    $("#c-equipo").value = b.dataset.cotizacion;
    ventana.classList.add("abierta"); ventana.setAttribute("aria-hidden", "false"); velo.classList.add("abierto");
    $("#c-interes").focus();
  });
  $$("[data-cotizar]").forEach(b => b.addEventListener("click", () => {
    const f = $("#form-cotizacion"), err = $("#error-cotizacion");
    if (!revisar(f, err)) return;
    const eq = porCodigo(valor(f, "equipo"));
    const texto = ["Hola, " + S.nombre + ". Me interesa " + valor(f, "interes").toLowerCase() + " del equipo:", "• " + eq.nombre + " [" + eq.codigo + "]", ""]
      .concat(datosCliente(f), valor(f, "mensaje") ? ["Sobre mi clínica: " + valor(f, "mensaje")] : [],
        ["", "Autorizo el tratamiento de mis datos según la política de tratamiento de datos de " + S.nombre + "."]).join("\n");
    enviar(b.dataset.cotizar, valor(f, "interes") + " · " + eq.nombre, texto);
  }));
})();
