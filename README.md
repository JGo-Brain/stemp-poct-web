# STEMP Poct · catálogo y pedidos

Catálogo de equipos e insumos POCT para clínicas y laboratorios veterinarios. Los insumos van a un pedido que sale por WhatsApp o por correo; los equipos, a una solicitud de cotización o demostración. Sin precios.

## Configuración
`assets/config.js`: nombre de la línea, respaldo del grupo, canales y ciudades. `assets/productos.js`: líneas y productos (fuente: `ST_LP_25.V01` y `ST_Catalogo.Productos`).

## Pendientes
- SDMA, ANA y EHR están en el catálogo de marzo de 2025 pero no en la lista de 2025: van con «código por asignar».
- En la lista de 2025, la pipeta Pasteur y la punta amarilla comparten el código 15004; en el sitio, la punta va como 15004-A hasta corregirlo.
- Sin pruebas de Biogal hasta tener sus estudios de validación.
- Nombres de fabricantes (Healvet, Human) sin logos ni fotos: falta su autorización escrita (brand kit).
- Verificar el registro sanitario de cada producto antes de publicar el sitio definitivo.

## Fotos
De Pexels (licencia de Pexels: uso comercial gratis, sin atribución obligatoria), optimizadas en `assets/img/`. Número de cada foto en pexels.com: consulta-ecografia (6235649), microscopio (13365432), tubos-fondo-claro (4047146), tubos-fondo-claro-2 (4047150). Sin logos de fabricantes ni datos de pacientes.

## Reglas de escisión
1. Sitio, repositorio y dominio propios; sin código compartido con los otros sitios (si se parecen, es por copia).
2. Canales propios para pedidos y cotizaciones, en la configuración del sitio.
3. Política de tratamiento de datos y casilla de autorización propias (Ley 1581 de 2012). Hoy el responsable es STEMP.
4. Pagos y factura electrónica (fase 2) a nombre de quien vende.
5. Marca propia; «Parte de Team 3» es un respaldo que se quita dejando vacío un dato de la configuración.
6. Plataformas compartidas (Plataforma STEMP, Resultados Lab), enlazadas desde la configuración.

## Cómo se publica
Sitio estático (HTML, CSS y JavaScript, sin compilar ni servidor). GitHub Pages publica la rama `main`. El sitio no guarda datos: cada formulario arma un mensaje que el cliente revisa y envía por WhatsApp o por correo.

Prototipo de la fase 1 (octubre de 2026), proyecto T3. Plan en el vault: «Sitio web STEMP».
