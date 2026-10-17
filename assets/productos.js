// Catálogo de STEMP Poct. Fuente: ST_LP_25.V01 (lista de 2025) y ST_Catalogo.Productos (marzo de 2025), sin precios.
// tipo "equipo" -> cotización o demostración; tipo "insumo" -> carrito de pedido.
// Sin pruebas de Biogal hasta tener sus estudios de validación.

window.LINEAS = [
  { id: "ifa", nombre: "Inmunofluorescencia", equipo: "Healvet IA3000",
    detalle: "Analizador cuantitativo con tecnología inmune seca, libre de mantenimiento. Según la ficha del fabricante: prueba en 3 a 15 minutos, pantalla táctil de 7 pulgadas, impresora incorporada y reactivos con vigencia de hasta 24 meses." },
  { id: "coa", nombre: "Coagulación", equipo: "Healvet COA7000",
    detalle: "Coagulación óptica, libre de mantenimiento. Según la ficha del fabricante: pantalla táctil de 7 pulgadas, impresora incorporada y reactivos con vigencia de 18 meses." },
  { id: "pr", nombre: "Pruebas rápidas", equipo: "Sin equipo",
    detalle: "Inmunocromatografía cualitativa. Según el fabricante: resultado en 2 a 10 minutos, sin equipo adicional y con vigencia de hasta 24 meses." },
  { id: "mic", nombre: "Microscopía", equipo: "Human HumaScope",
    detalle: "Sistema óptico acromático con revestimiento antifúngico y antirrayaduras: binocular con giro de 360°, ocular 10x/18 mm, aumentos de 4x a 100x e iluminación LED ajustable." },
  { id: "flu", nombre: "Manejo de fluidos", equipo: "Human Humapette",
    detalle: "Pipetas de volumen ajustable, ergonómicas y esterilizables en autoclave, con sus puntas." },
  { id: "par", nombre: "Coproanálisis", equipo: "Sin equipo",
    detalle: "Copa de sedimentación natural para detectar parásitos intestinales: concentra los huevos presentes en la muestra de heces." },
  { id: "ins", nombre: "Insumos de laboratorio", equipo: "",
    detalle: "Guantes, frascos recolectores, crioviales, aplicadores y recolectores de cortopunzantes." }
];

window.PRODUCTOS = [
  // Equipos
  { codigo: "11001", linea: "ifa", tipo: "equipo", nombre: "Analizador cuantitativo de inmunofluorescencia Healvet IA3000" },
  { codigo: "11003", linea: "coa", tipo: "equipo", nombre: "Analizador de coagulación Healvet COA7000" },
  { codigo: "11011", linea: "mic", tipo: "equipo", nombre: "Microscopio Human HumaScope Advanced LED" },
  { codigo: "11024", linea: "mic", tipo: "equipo", nombre: "Microscopio Human HumaScope Light LED" },

  // Inmunofluorescencia: pruebas cuantitativas para Healvet IA3000
  { codigo: "14001", linea: "ifa", tipo: "insumo", nombre: "cProg · Progesterona (canino)", empaque: "Caja x10" },
  { codigo: "14002", linea: "ifa", tipo: "insumo", nombre: "C-RLN · Relaxina (canino)", empaque: "Caja x10" },
  { codigo: "14003", linea: "ifa", tipo: "insumo", nombre: "T4 · Tiroxina (canino y felino)", empaque: "Caja x10" },
  { codigo: "14004", linea: "ifa", tipo: "insumo", nombre: "fTT4 · Tiroxina total (felino)", empaque: "Caja x10" },
  { codigo: "14005", linea: "ifa", tipo: "insumo", nombre: "TSH (canino y felino)", empaque: "Caja x10" },
  { codigo: "14006", linea: "ifa", tipo: "insumo", nombre: "Cortisol (canino y felino)", empaque: "Caja x10" },
  { codigo: "14007", linea: "ifa", tipo: "insumo", nombre: "CPSE · Antígeno prostático (canino)", empaque: "Caja x10" },
  { codigo: "14008", linea: "ifa", tipo: "insumo", nombre: "cCRP · Proteína C reactiva (canino)", empaque: "Caja x10" },
  { codigo: "14009", linea: "ifa", tipo: "insumo", nombre: "SAA · Amiloide sérico A (felino)", empaque: "Caja x10" },
  { codigo: "14010", linea: "ifa", tipo: "insumo", nombre: "Dímero D (canino y felino)", empaque: "Caja x10" },
  { codigo: "14011", linea: "ifa", tipo: "insumo", nombre: "cHbA1c · Hemoglobina glicosilada (canino)", empaque: "Caja x10" },
  { codigo: "14012", linea: "ifa", tipo: "insumo", nombre: "fHbA1c · Hemoglobina glicosilada (felino)", empaque: "Caja x10" },
  { codigo: "14013", linea: "ifa", tipo: "insumo", nombre: "cPL · Lipasa pancreática (canino)", empaque: "Caja x10" },
  { codigo: "14014", linea: "ifa", tipo: "insumo", nombre: "fPL · Lipasa pancreática (felino)", empaque: "Caja x10" },
  { codigo: "14015", linea: "ifa", tipo: "insumo", nombre: "cNT-proBNP (canino)", empaque: "Caja x10" },
  { codigo: "14016", linea: "ifa", tipo: "insumo", nombre: "fNT-proBNP (felino)", empaque: "Caja x10" },
  { codigo: "14017", linea: "ifa", tipo: "insumo", nombre: "ccTnI · Troponina I (canino)", empaque: "Caja x10" },
  { codigo: "14018", linea: "ifa", tipo: "insumo", nombre: "fcTnI · Troponina I (felino)", empaque: "Caja x10" },
  { codigo: "14019", linea: "ifa", tipo: "insumo", nombre: "cNT-proBNP + cTnI, tarjeta combinada (canino)", empaque: "Caja x10" },
  { codigo: "14020", linea: "ifa", tipo: "insumo", nombre: "fNT-proBNP + fcTnI, tarjeta combinada (felino)", empaque: "Caja x10" },
  { codigo: "14021", linea: "ifa", tipo: "insumo", nombre: "cAFP · Alfafetoproteína (canino)", empaque: "Caja x10" },
  { codigo: "14022", linea: "ifa", tipo: "insumo", nombre: "CPV · Parvovirus, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14023", linea: "ifa", tipo: "insumo", nombre: "CDV · Distemper, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14024", linea: "ifa", tipo: "insumo", nombre: "CCV · Coronavirus, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14025", linea: "ifa", tipo: "insumo", nombre: "CPV + CCV · Parvovirus y coronavirus, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14026", linea: "ifa", tipo: "insumo", nombre: "FPV · Panleucopenia, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14027", linea: "ifa", tipo: "insumo", nombre: "FHV · Herpesvirus, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14028", linea: "ifa", tipo: "insumo", nombre: "FCoV · Coronavirus, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14029", linea: "ifa", tipo: "insumo", nombre: "FCAV · Calicivirus, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14030", linea: "ifa", tipo: "insumo", nombre: "cCys · Cistatina C (canino)", empaque: "Caja x10" },
  { codigo: "14031", linea: "ifa", tipo: "insumo", nombre: "fCys · Cistatina C (felino)", empaque: "Caja x10" },
  { codigo: "14032", linea: "ifa", tipo: "insumo", nombre: "CDV + CPV + ICH · Distemper, parvovirus y hepatitis, anticuerpos (canino)", empaque: "Caja x10" },
  { codigo: "14033", linea: "ifa", tipo: "insumo", nombre: "FHV + FPV + FCAV · Herpes, panleucopenia y calicivirus, anticuerpos (felino)", empaque: "Caja x10" },
  { codigo: "14034", linea: "ifa", tipo: "insumo", nombre: "Toxoplasma gondii, anticuerpos (canino y felino)", empaque: "Caja x10" },
  { codigo: "14035", linea: "ifa", tipo: "insumo", nombre: "RV · Rabia, anticuerpos (canino y felino)", empaque: "Caja x10" },
  { codigo: "14036", linea: "ifa", tipo: "insumo", nombre: "HP · Helicobacter pylori, antígeno (canino y felino)", empaque: "Caja x10" },
  { codigo: "14037", linea: "ifa", tipo: "insumo", nombre: "Foal IgG · Inmunoglobulina G (equino)", empaque: "Caja x10" },
  { codigo: "14038", linea: "ifa", tipo: "insumo", nombre: "eSAA · Amiloide sérico A (equino)", empaque: "Caja x10" },
  // En el catálogo de marzo de 2025, sin código en la lista de 2025
  { codigo: "SDMA", sinCodigo: true, linea: "ifa", tipo: "insumo", nombre: "SDMA · Dimetilarginina simétrica (canino y felino)", empaque: "Caja x10" },
  { codigo: "ANA", sinCodigo: true, linea: "ifa", tipo: "insumo", nombre: "ANA · Anaplasma (canino y felino)", empaque: "Caja x10" },
  { codigo: "EHR", sinCodigo: true, linea: "ifa", tipo: "insumo", nombre: "EHR · Ehrlichia (canino y felino)", empaque: "Caja x10" },
  { codigo: "15024", linea: "ifa", tipo: "insumo", nombre: "Control de calidad para el analizador IA3000", empaque: "Caja x9" },

  // Coagulación: reactivos para Healvet COA7000
  { codigo: "14039", linea: "coa", tipo: "insumo", nombre: "APTT · Tiempo de tromboplastina parcial activado", empaque: "Caja x10" },
  { codigo: "14040", linea: "coa", tipo: "insumo", nombre: "PT · Tiempo de protrombina", empaque: "Caja x10" },
  { codigo: "14041", linea: "coa", tipo: "insumo", nombre: "ACT · Tiempo de coagulación activado", empaque: "Caja x10" },
  { codigo: "14042", linea: "coa", tipo: "insumo", nombre: "TT · Tiempo de trombina", empaque: "Caja x10" },
  { codigo: "14043", linea: "coa", tipo: "insumo", nombre: "FIB · Fibrinógeno", empaque: "Caja x10" },

  // Pruebas rápidas cualitativas (Healvet)
  { codigo: "14044", linea: "pr", tipo: "insumo", nombre: "CPV · Parvovirus, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14045", linea: "pr", tipo: "insumo", nombre: "CDV · Distemper, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14046", linea: "pr", tipo: "insumo", nombre: "CCV · Coronavirus, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14047", linea: "pr", tipo: "insumo", nombre: "CHW · Dirofilaria, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14048", linea: "pr", tipo: "insumo", nombre: "CPV + CCV · Parvovirus y coronavirus, antígeno (canino)", empaque: "Caja x10" },
  { codigo: "14049", linea: "pr", tipo: "insumo", nombre: "Toxoplasma, anticuerpos (canino)", empaque: "Caja x10" },
  { codigo: "14050", linea: "pr", tipo: "insumo", nombre: "FPV · Panleucopenia, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14051", linea: "pr", tipo: "insumo", nombre: "FHV · Herpesvirus, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14052", linea: "pr", tipo: "insumo", nombre: "FCoV · Coronavirus, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14053", linea: "pr", tipo: "insumo", nombre: "FCAV · Calicivirus, antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14054", linea: "pr", tipo: "insumo", nombre: "FIV anticuerpos + FeLV antígeno (felino)", empaque: "Caja x10" },
  { codigo: "14055", linea: "pr", tipo: "insumo", nombre: "Toxoplasma, anticuerpos (felino)", empaque: "Caja x10" },
  { codigo: "14056", linea: "pr", tipo: "insumo", nombre: "Giardia, antígeno (canino y felino)", empaque: "Caja x10" },

  // Microscopía
  { codigo: "15070", linea: "mic", tipo: "insumo", nombre: "Laminilla cubreobjetos Goldencare 22 x 22 mm", empaque: "Caja x50" },
  { codigo: "15071", linea: "mic", tipo: "insumo", nombre: "Lámina portaobjetos esmerilada Goldencare 76,2 x 25,4 mm", empaque: "Caja x100" },

  // Manejo de fluidos
  { codigo: "11014", linea: "flu", tipo: "insumo", nombre: "Pipeta autoclavable Human Humapette 2-20 µL", empaque: "Unidad" },
  { codigo: "11015", linea: "flu", tipo: "insumo", nombre: "Pipeta autoclavable Human Humapette 10-100 µL", empaque: "Unidad" },
  { codigo: "11016", linea: "flu", tipo: "insumo", nombre: "Pipeta autoclavable Human Humapette 100-1000 µL", empaque: "Unidad" },
  { codigo: "15004", linea: "flu", tipo: "insumo", nombre: "Pipeta Pasteur 3 mL", empaque: "Bolsa x1000" },
  { codigo: "15004-A", linea: "flu", tipo: "insumo", nombre: "Punta amarilla 0-200 µL", empaque: "Bolsa x1000" },
  { codigo: "15005", linea: "flu", tipo: "insumo", nombre: "Punta azul 50-1000 µL", empaque: "Bolsa x500" },

  // Coproanálisis
  { codigo: "14057", linea: "par", tipo: "insumo", nombre: "Paracup, copa de sedimentación (Healvet)", empaque: "Caja x10" },

  // Insumos de laboratorio
  { codigo: "09001", linea: "ins", tipo: "insumo", nombre: "Guante de nitrilo azul 4,5 mil, talla S", empaque: "Caja x50 pares" },
  { codigo: "25045", linea: "ins", tipo: "insumo", nombre: "Aplicador de madera con algodón", empaque: "Bolsa x1000" },
  { codigo: "25046", linea: "ins", tipo: "insumo", nombre: "Aplicador de madera sin algodón", empaque: "Bolsa x1000" },
  { codigo: "25037", linea: "ins", tipo: "insumo", nombre: "Asa desechable estéril de 1 µL", empaque: "Bolsa x20" },
  { codigo: "15067", linea: "ins", tipo: "insumo", nombre: "Tubo criovial tipo Eppendorf de 1,5 mL", empaque: "Bolsa x500" },
  { codigo: "15072", linea: "ins", tipo: "insumo", nombre: "Frasco recolector de heces", empaque: "Bolsa x100" },
  { codigo: "15073", linea: "ins", tipo: "insumo", nombre: "Frasco recolector de orina de 35 cc", empaque: "Bolsa x50" },
  { codigo: "15074", linea: "ins", tipo: "insumo", nombre: "Frasco recolector de orina de 35 cc, empaque individual", empaque: "Bolsa x50" },
  { codigo: "15075", linea: "ins", tipo: "insumo", nombre: "Frasco para baciloscopia de 120 cc", empaque: "Bolsa x50" },
  { codigo: "25022", linea: "ins", tipo: "insumo", nombre: "Recolector de cortopunzantes de 1,5 L", empaque: "Unidad" },
  { codigo: "25023", linea: "ins", tipo: "insumo", nombre: "Recolector de cortopunzantes de 2,9 L", empaque: "Unidad" },
  { codigo: "25044", linea: "ins", tipo: "insumo", nombre: "Recolector de cortopunzantes de 8 L", empaque: "Unidad" },
  { codigo: "25042", linea: "ins", tipo: "insumo", nombre: "Soporte para recolector de cortopunzantes de 1,5 L", empaque: "Unidad" },
  { codigo: "25043", linea: "ins", tipo: "insumo", nombre: "Soporte para recolector de cortopunzantes de 2,9 L", empaque: "Unidad" }
];
