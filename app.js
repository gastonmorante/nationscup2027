/**
 * ============================================================================
 * NATIONS CUP 2027 — EL REY POLO COUNTRY CLUB
 * Core Application Engine: Ultra-Luxury B2B Architecture
 * Multilingual i18n, IP Geolocation, 360° Panorama, Currency Engine & WhatsApp API
 * ============================================================================
 */

(function () {
  'use strict';

  // --- 1. GLOBAL STATE & DICTIONARY ---
  const state = {
    lang: 'es', // 'es' or 'en'
    currency: 'USD', // 'MXN', 'USD', 'EUR'
    currentSlide: 1,
    totalSlides: 14,
    current360Scene: 'lounge',
    is360Rotating: false,
    isGyroActive: false,
    viewer360: null,
    lightboxIndex: 0
  };

  // Centralized Bilingual Dictionary (i18n)
  const i18n = {
    es: {
    "status_beacon": "Comité de Patrocinios · Acceso Privado 2027",
    "nav_vision": "La Visión",
    "nav_pitch": "Pitch Deck",
    "nav_tour": "Tour 360°",
    "nav_ecosystem": "Ecosistema",
    "nav_gallery": "Galería Editorial",
    "nav_tiers": "Inversión & Exclusividad",
    "nav_contact": "Contacto Privado",
    "btn_whatsapp_vip": "WhatsApp VIP",
    "hero_badge": "TORNEO INTERNACIONAL DE POLO & ALTA SOCIEDAD · ENERO 2027",
    "hero_title": "NATIONS CUP 2027",
    "hero_subtitle": "El Legado del Polo en la Riviera Maya",
    "hero_dates": "13 al 16 de Enero de 2027",
    "hero_venue": "El Rey Polo Country Club · Puerto Morelos, Cancún, México",
    "hero_dates_venue": "13 al 16 de Enero de 2027 | El Rey Polo Country Club, Puerto Morelos, Cancún, México",
    "hero_tagline": "«Las marcas de lujo no compran publicidad; adquieren Exclusividad, Legado y Acceso Inigualable.»",
    "hero_btn_play_theater": "Ver Presentación con Audio HD",
    "hero_btn_deck": "Pitch Deck Ejecutivo",
    "hero_btn_whatsapp": "WhatsApp VIP Concierge",
    "stat_hectares": "6 Hectáreas",
    "stat_hectares_sub": "Césped oficial reglamentario (300 x 200m)",
    "stat_teams": "6 Selecciones",
    "stat_teams_sub": "España, Alemania, México, Canadá, USA y Argentina",
    "stat_audience": "Audiencia de Alto Standing",
      "stat_standing": "Alto Standing",
    "stat_audience_sub": "CEOs, inversionistas y propietarios de alto perfil",
    "stat_exclusivity": "1 Marca por Sector",
    "stat_exclusivity_sub": "Exclusividad inquebrantable de categoría",
    "video_kicker": "EXPERIENCIA AUDIOVISUAL",
    "video_title": "SIZZLE REEL CINEMATOGRÁFICO",
    "video_subtitle": "La experiencia de ultra-lujo, adrenalina ecuestre y distinción caribeña en alta definición.",
    "btn_unmute": "Activar Audio HD",
    "btn_mute": "Silenciar Audio",
    "btn_fullscreen": "Pantalla Completa",
    "btn_gdrive_video": "Descargar Máster 4K (Google Drive)",
    "btn_open_theater": "Reproducir con Audio",
    "btn_theater_modal": "Modo Teatro HD",
    "video_playing_label": "Presentación Oficial Nations Cup 2027",
    "theater_title": "Nations Cup 2027 — Sizzle Reel Oficial",
    "theater_subtitle": "4 Días de Competencia Internacional, Polo de Alto Hándicap & Lifestyle de Ultra-Lujo",
    "theater_close": "Cerrar Modo Teatro (Esc)",
    "theater_overlay_hint": "Haz clic para cerrar y volver a la página",
    "deck_kicker": "DOSSIER COMERCIAL CONFIDENCIAL",
    "deck_title": "Pitch Deck Ejecutivo",
    "deck_subtitle": "Presentación interactiva diseñada para Comités de Patrocinio y Directores Globales de Marca.",
    "deck_btn_prev": "Anterior",
    "deck_btn_next": "Siguiente",
    "deck_btn_download": "Descargar Pitch Deck Oficial (PDF Ejecutivo)",
    "deck_swipe_hint": "Desliza horizontalmente en pantalla o usa las flechas",
    "deck_btn_prev_title": "Lámina anterior",
    "deck_btn_next_title": "Lámina siguiente",
    "tour_kicker": "RECORRIDO ESPACIAL EN ALTA DEFINICIÓN",
    "tour_title": "Tour Virtual 360° · El Rey Polo",
    "tour_subtitle": "Previsualice la integración de marca y áreas VIP desde cualquier perspectiva con soporte giroscópico.",
    "tour_scene_lounge": "Salón VIP de Hospitalidad",
    "tour_scene_field": "Campo Central & Explanada",
    "tour_scene_autoshow": "Stands Comerciales & Exhibición de Autos",
    "tour_scene_grill": "Terraza Sunset & Asador Gourmet",
    "tour_scene_stage": "Escenario del Desfile de Moda",
    "tour_badge_active": "Perspectiva Interactiva 360° Activa",
    "tour_btn_gyro": "Giroscopio Móvil",
    "tour_btn_autorotate": "Rotación Automática",
    "tour_btn_gdrive": "Ver Renders 360° en Google Drive",
    "tour_hint": "Arrastra con el mouse o inclina tu dispositivo móvil para explorar la perspectiva 360°.",
    "eco_kicker": "ARQUITECTURA & HOSPITALIDAD EXPERIENCIAL",
    "eco_title": "Ecosistema del Evento",
    "eco_subtitle": "Ocho polos curados de hospitalidad y convivencia de alto nivel diseñados para la interacción fluida entre marcas globales, comitivas internacionales y la comunidad ecuestre de alto standing.",
    "eco_card1_title": "Club de Polo VIP",
    "eco_card1_desc": "Hospitalidad premium de máxima categoría con servicio dedicado, terrazas de teca y vista preferencial a cada chukker.",
    "eco_card2_title": "Jardín del Champagne",
    "eco_card2_desc": "Centro social al aire libre para recepciones de gala, coctelería de autor, la tradición del pisado del césped y cócteles al atardecer.",
    "eco_card3_title": "Villa Gourmet",
    "eco_card3_desc": "Gastronomía de autor, maridajes selectos y experiencias culinarias regionales curadas exclusivamente para restaurantes aliados.",
    "eco_card4_title": "Paseo de Lujo",
    "eco_card4_desc": "Paseo comercial para exhibición estática de superdeportivos, alta relojería, moda resortwear, náutica y bienes raíces de lujo.",
    "eco_card5_title": "Pabellón de Arte Maya",
    "eco_card5_desc": "Espacio cultural curado dedicado a la artesanía de alta maestría, arte contemporáneo y la identidad de la Riviera Maya.",
    "eco_card6_title": "Club Infantil de Polo",
    "eco_card6_desc": "Área familiar de alta seguridad con talleres lúdicos, iniciación ecuestre y la experiencia Mini Polo para nuevas generaciones.",
    "eco_card7_title": "Suites para Patrocinadores",
    "eco_card7_desc": "Hospitalidad privada y exclusiva para marcas patrocinadoras, atención a clientes clave y encuentros confidenciales.",
    "eco_card8_title": "Centro de Prensa & Contenido",
    "eco_card8_desc": "Centro de producción audiovisual in-situ, sala de prensa internacional, transmisiones digitales y entrevistas editoriales.",
    "gallery_kicker": "ARQUITECTURA & ATMÓSFERA EDITORIAL",
    "gallery_title": "Galería Editorial",
    "gallery_subtitle": "Estética Architectural Digest que captura el auténtico prestigio y las instalaciones del club.",
    "gallery_view_hint": "Haga clic en cualquier perspectiva para abrir el visor de alta resolución.",
    "lightbox_close": "Cerrar (Esc)",
    "lightbox_counter_prefix": "Perspectiva",
    "gal_shot0_cat": "PERSPECTIVA AÉREA",
    "gal_shot0_title": "Cancha Oficial de Polo (300 x 200m) · 6 Hectáreas",
    "gal_shot1_cat": "ARQUITECTURA",
    "gal_shot1_title": "Arribo Soberano & Fachada de El Rey Polo",
    "gal_shot2_cat": "CLUBHOUSE & ESCENARIO",
    "gal_shot2_title": "Complejo Central, Escenario Nations Cup & Alberca",
    "gal_shot3_cat": "AUTOMOTRIZ",
    "gal_shot3_title": "Exhibición de Superdeportivos & Activación Poolside",
    "gal_shot4_cat": "CAMPO CENTRAL",
    "gal_shot4_title": "Campo de Juego a Nivel de Césped",
    "gal_shot5_cat": "HOSPITALIDAD",
    "gal_shot5_title": "Salón VIP de Hospitalidad & Coctelería de Autor",
    "gal_shot6_cat": "EXPERIENCIA VIP",
    "gal_shot6_title": "Palcos Privados y Mesas con Vista a Cancha",
    "gal_shot7_cat": "CHAMPAGNE VIP",
    "gal_shot7_title": "Celebración con Casas de Champagne Grand Marque",
    "gal_shot8_cat": "ALTA COSTURA",
    "gal_shot8_title": "Pasarela del Desfile de Moda & Pabellón de Arte",
    "gal_shot9_cat": "NETWORKING",
    "gal_shot9_title": "Paseo de Networking Empresarial de Alto Standing",
    "gal_shot10_cat": "ATARDECER",
    "gal_shot10_title": "Cóctel al Atardecer & Asador Gourmet",
    "gal_shot11_cat": "CLUB & ALBERCA",
    "gal_shot11_title": "Terraza & Alberca Central de El Rey Polo",
    "pricing_kicker": "DERECHOS DE PATROCINIO & EXCLUSIVIDAD",
    "pricing_title": "Estructura de Inversión Comercial",
    "pricing_subtitle": "Tres modalidades de vinculación: Niveles Corporativos, Activos Especiales y Alianza Gastronómica.",
    "exclusivity_rule_badge": "ESTRICTA RESERVA POR SECTOR",
    "exclusivity_rule_title": "REGLA DE EXCLUSIVIDAD INQUEBRANTABLE",
    "exclusivity_rule_desc": "Estrictamente 1 sola marca permitida por sector de la industria (ej. 1 automotriz, 1 alta relojería, 1 champagne, 1 banca privada). La reserva de categoría se otorga por estricto orden de formalización.",
    "currency_label": "Divisa:",
    "currency_desc": "Tarifas mostradas en USD por defecto; seleccione MXN o EUR para convertir en tiempo real.",
    "vat_notice": "* Más IVA correspondiente. Sujeto a disponibilidad de categoría al momento de formalizar la reserva.",
    "tier_platino_badge": "MÁXIMA DISTINCIÓN",
    "tier_platino_name": "Patrocinador Platino",
      "tier_platino_title": "Platino",
      "tier_oro_title": "Oro",
      "tier_plata_title": "Plata",
      "tier_bronce_title": "Bronce",
    "tier_platino_sub": "Derecho de Nombre y Presencia Omnipresente",
    "tier_platino_desc": "La cumbre de la vinculación corporativa con máxima visibilidad en cada punto del club y transmisiones.",
    "tier_platino_f1": "Exclusividad absoluta en su categoría de industria",
    "tier_platino_f2": "Branding central en jerseys de juego de las 6 selecciones",
    "tier_platino_f3": "Palco VIP privado para 10 invitados + servicio de champagne",
    "tier_platino_f4": "Pabellón comercial de 3x3m en el Paseo de Lujo",
    "tier_platino_f5": "Presencia estelar en trofeo, premiación y conferencia de prensa",
    "tier_platino_f6": "Campaña digital hipersegmentada (+1M de impresiones C-Level)",
    "tier_platino_btn": "Solicitar Platino",
    "tier_oro_badge": "LIDERAZGO DE CATEGORÍA",
    "tier_oro_name": "Patrocinador Oro",
    "tier_oro_sub": "Socio Oficial de Categoría",
    "tier_oro_desc": "Liderazgo exclusivo en su sector blindando la presencia frente a cualquier competidor durante el torneo.",
    "tier_oro_f1": "Exclusividad total en su sector comercial",
    "tier_oro_f2": "Logotipo en el jersey de 1 selección nacional oficial",
    "tier_oro_f3": "Stand de exhibición de marca 3x3m en zona comercial",
    "tier_oro_f4": "Palco privado para atención de clientes y relaciones VIP",
    "tier_oro_f5": "15 credenciales VIP All-Access con servicio gourmet y barra",
    "tier_oro_f6": "Menciones en conferencias de prensa y suplemento editorial",
    "tier_oro_btn": "Solicitar Oro",
    "tier_plata_badge": "ANFITRIONÍA & VISIBILIDAD",
    "tier_plata_name": "Patrocinador Plata",
    "tier_plata_sub": "Proveedor Oficial / Marca Aliada",
    "tier_plata_desc": "Integración de producto de lujo en gastronomía, coctelería, movilidad o amenidades exclusivas.",
    "tier_plata_f1": "Presencia directa en barras VIP, catas o flota de transporte",
    "tier_plata_f2": "Activaciones con producto y obsequios a invitados de alto standing",
    "tier_plata_f3": "Derecho al título 'Proveedor Oficial Nations Cup 2027'",
    "tier_plata_f4": "10 accesos VIP All-Access para ejecutivos e invitados clave",
    "tier_plata_f5": "Crédito editorial en libro oficial del torneo y pantallas",
    "tier_plata_btn": "Solicitar Plata",
    "tier_bronce_badge": "ALIANZA INSTITUCIONAL",
    "tier_bronce_name": "Patrocinador Bronce",
    "tier_bronce_sub": "Aliado Comercial & Networking",
    "tier_bronce_desc": "Participación estratégica con acceso a relaciones B2B de alto nivel y presencia de marca institucional.",
    "tier_bronce_f1": "Presencia de marca en materiales institucionales y directorio",
    "tier_bronce_f2": "Espacio para activación o muestreo comercial especializado",
    "tier_bronce_f3": "6 pases VIP All-Access con acceso a áreas de hospitalidad",
    "tier_bronce_f4": "Mención en el reporte oficial y auditoría de medios",
    "tier_bronce_btn": "Solicitar Bronce",
    "table_kicker": "MATRIZ DE SPONSORS EXCLUSIVOS POR ÍTEM",
    "table_title": "Activos Específicos de Alta Visibilidad",
    "table_subtitle": "Activos individuales de alto impacto con exclusividad absoluta garantizada por contrato.",
    "th_asset": "Activo / Ítem",
    "th_scope": "Alcance & Beneficios Clave",
    "th_price": "Inversión Oficial",
    "th_status": "Disponibilidad",
    "th_action": "Acción",
    "status_available": "Disponible",
    "btn_reserve_item": "Reservar",
    "item_d_name": "D. Patrocinador Nombre del Torneo",
    "item_d_scope": "Presencia omnipresente en todos los puntos del club, materiales impresos, trofeo, indumentaria, transmisiones y publicidad oficial ('Nations Cup 2027 presentado por [Su Marca]').",
    "item_c_name": "C. Sponsoreo de Equipo Exclusivo",
    "item_c_scope": "Branding central exclusivo en el jersey oficial de una de las 6 selecciones participantes (España, Alemania, México, Canadá, USA o Argentina) durante todos los encuentros.",
    "item_e_name": "E. Patrocinador Exclusivo del Narrador Oficial",
    "item_e_scope": "Menciones y agradecimientos de honor por el locutor y narrador oficial en vivo durante cada chukker, apertura de partidos, premiaciones y ceremonias de gala.",
    "item_b_name": "B. Patrocinio de Video en Pantallas Gigantes LED",
    "item_b_scope": "Emisión continua y rotativa de spots audiovisuales en alta definición en las pantallas LED monumentales ubicadas en el campo principal y zona clubhouse.",
    "item_f_name": "F. Nombre Oficial del Campo de Polo",
    "item_f_scope": "Denominación oficial del campo central reglamentario de 300 x 200m en toda la cartelería, planos, programa de mano y menciones en transmisiones.",
    "item_a_name": "A. Patrocinio de Cartelera en Cancha",
    "item_a_scope": "Presencia estática de cartelera en las tablas perimetrales del campo con alta exposición en fotos de acción ecuestre, transmisiones y cobertura de medios.",
    "item_g1_name": "G1. Premio al Mejor Jugador (MVP)",
    "item_g1_scope": "Presentación oficial del trofeo y obsequio conmemorativo al mejor jugador del torneo durante la ceremonia de premiación con mención de honor y cobertura de prensa.",
    "item_g2_name": "G2. Patrocinio al Mejor Caballo del Torneo",
    "item_g2_scope": "Presentación de la manta conmemorativa y reconocimiento al mejor ejemplar equino de la final, destacando la excelencia, crianza y nobleza del caballo de polo.",
    "gastro_title": "Sponsor de Gastronomía",
    "gastro_sub": "Pabellón Gourmet & Experiencias de Maridaje",
    "gastro_desc": "Oportunidad exclusiva para restaurantes de alta cocina y grupos restauranteros de posicionarse ante una audiencia de alto standing.",
    "gastro_f1": "Espacio exclusivo para pop-up gastronómico o cata guiada",
    "gastro_f2": "Presencia de marca en menús oficiales y señalización del evento",
    "gastro_f3": "8 pases VIP All-Access para directivos y chefs del restaurante",
    "gastro_btn": "Postular Restaurante vía WhatsApp",
    "mobility_title": "Movilidad & Concierge VIP",
    "mobility_sub": "Vehículos Oficiales, Helicópteros & Yates",
    "mobility_desc": "Traslados ejecutivos desde el Aeropuerto de Cancún, helipuerto in-situ y experiencias náuticas privadas en el Caribe Mexicano.",
    "mobility_f1": "Designación como Transportista / Flota Oficial del Torneo",
    "mobility_f2": "Exhibición de unidades en la entrada principal y helipuerto",
    "mobility_f3": "Traslado exclusivo de jugadores, patronos e invitados de honor",
    "mobility_btn": "Coordinar Alianza vía WhatsApp",
    "form_kicker": "PROTOCOLO INSTITUCIONAL RESERVADO",
    "form_title": "Solicitud de Dossier & Bloqueo de Exclusividad",
    "form_subtitle": "Contacto directo con la Presidencia del Comité de Patrocinios vía WhatsApp (+34 722 11 62 48).",
    "lbl_name": "Nombre Completo del Directivo *",
    "ph_name": "Ej. Lic. Fernando de la Mora",
    "lbl_company": "Empresa / Marca Representada *",
    "ph_company": "Ej. Audemars Piguet / Aston Martin / Dom Pérignon",
    "lbl_role": "Cargo / Posición Ejecutiva *",
    "opt_select_role": "Seleccione su cargo...",
    "opt_ceo": "Director Ejecutivo (CEO / Presidente)",
    "opt_cmo": "Director de Marketing (CMO / Dir. Marketing)",
    "opt_sponsorship": "Director Global de Patrocinios y Alianzas",
    "opt_investor": "Inversionista / Family Office Principal",
    "opt_other": "Vicepresidente / Director General",
    "lbl_category": "Categoría de Industria *",
    "opt_select_cat": "Seleccione la categoría de su marca...",
    "opt_cat_auto": "Automotriz de Lujo & Superdeportivos",
    "opt_cat_watch": "Alta Relojería & Joyería",
    "opt_cat_spirits": "Champagne, Vinos & Destilados Ultra-Premium",
    "opt_cat_aviation": "Aviación Privada & Náutica / Yates",
    "opt_cat_finance": "Banca Privada, Real Estate & Family Offices",
    "opt_cat_fashion": "Alta Costura, Moda & Cuero",
    "opt_cat_tech": "Tecnología de Lujo & Servicios Exclusivos",
    "opt_cat_hospitality": "Hotelería 5 Diamantes & Lifestyle",
    "lbl_tier": "Nivel de Patrocinio de Interés *",
    "opt_select_tier": "Seleccione el activo de su interés...",
    "opt_tier_d": "D. Patrocinador Nombre del Torneo Omnipresente ($80,000 USD / $1,400,000 MXN)",
    "opt_tier_c": "C. Sponsoreo de Equipo Exclusivo ($25,000 USD / $437,500 MXN)",
    "opt_tier_e": "E. Patrocinador Exclusivo Speaker Torneo ($20,000 USD / $350,000 MXN)",
    "opt_tier_b": "B. Patrocinio Vídeos Pantallas Gigantes ($20,000 USD / $350,000 MXN)",
    "opt_tier_f": "F. Nombre del Campo de Polo ($15,000 USD / $262,500 MXN)",
    "opt_tier_a": "A. Patrocinio Cartelera en Cancha ($5,000 USD / $87,500 MXN)",
    "opt_tier_g1": "G1. Premio Mejor Jugador MVP ($5,000 USD / $87,500 MXN)",
    "opt_tier_g2": "G2. Patrocinio Mejor Caballo ($5,000 USD / $87,500 MXN)",
    "opt_tier_platino": "Nivel Platino ($45,000 USD / $787,500 MXN)",
    "opt_tier_oro": "Nivel Oro ($28,000 USD / $490,000 MXN)",
    "opt_tier_plata": "Nivel Plata ($14,000 USD / $245,000 MXN)",
    "opt_tier_bronce": "Nivel Bronce ($9,000 USD / $157,500 MXN)",
    "preview_label": "Vista Previa del Mensaje Oficial a WhatsApp:",
    "btn_submit_whatsapp": "Solicitar Dossier y Bloqueo de Exclusividad por WhatsApp",
    "form_security_note": "Al hacer clic será redirigido a WhatsApp Oficial con el mensaje estructurado para atención inmediata por el Comité.",
    "dock_deck": "Pitch Deck",
    "dock_tour": "Tour 360°",
    "dock_contact": "WhatsApp VIP",
    "bank_modal_title": "Cuentas Oficiales de Liquidación y Pago",
    "bank_modal_sub": "Comité de Patrocinios · Nations Cup 2027",
    "bank_tab_usd": "Dólares USD (Chase Bank)",
    "bank_tab_mxn": "Pesos MXN (BBVA México)",
    "legal_modal_title": "Marco Jurídico & Normativo Oficial",
    "legal_modal_sub": "Nations Cup 2027 · El Rey Polo Country Club",
    "legal_tab_privacy": "Aviso de Privacidad",
    "legal_tab_terms": "Términos y Condiciones",
    "btn_close": "Cerrar",
    "footer_col1_title": "Entidad Organizadora",
    "footer_col1_desc": "Torneo Internacional de Polo de Alto Hándicap avalado por comités internacionales de polo y la federación deportiva correspondiente.",
    "footer_legal_name": "Razón Social:",
    "footer_legal_name_val": "Nations Cup Polo Organization S.A.P.I. de C.V. en alianza con Operadora El Rey Polo Country Club S.A. de C.V.",
    "footer_tax_address": "Domicilio Fiscal:",
    "footer_tax_address_val": "Km 11.5 Carretera Puerto Morelos - Leona Vicario, Ruta de los Cenotes, C.P. 77580, Puerto Morelos, Quintana Roo, México.",
    "footer_col2_title": "Sede Oficial & Helipuerto",
    "footer_venue_name": "Sede Oficial:",
    "footer_venue_val": "El Rey Polo Country Club",
    "footer_geo": "Geolocalización:",
    "footer_geo_val": "Ruta de los Cenotes Km 11 (Plus Code: VX9Q+H2)",
    "footer_dist": "Distancias Estratégicas:",
    "footer_dist_val": "A 15 min del Aeropuerto Internacional de Cancún (CUN) y a 25 min de Playa del Carmen.",
    "footer_col3_title": "Marco Legal & Cumplimiento",
    "footer_desk": "Mesa Directiva:",
    "footer_desk_val": "Presidencia de Patrocinios & Relaciones Gubernamentales",
    "footer_wa_label": "Línea Directa Oficial:",
    "footer_email_label": "Correo Institucional:",
    "footer_col4_title": "Atención Institucional",
    "footer_btn_privacy": "Aviso de Privacidad Integral",
    "footer_btn_terms": "Términos Comerciales & Exclusividad",
    "footer_btn_tax": "Régimen Fiscal",
    "footer_btn_ip": "Propiedad Intelectual",
    "footer_btn_confidential": "Declaración de Confidencialidad",
    "footer_rights": "Todos los derechos reservados. Evento oficial de polo de alto hándicap.",
    "footer_confidential": "Aviso de Confidencialidad: La información comercial, planos y tarifas contenidas en este portal son de distribución reservada para comités de patrocinio formalmente convocados.",
    "footer_address": "El Rey Polo Country Club: Carretera Puerto Morelos - Leona Vicario Km 11 (Ruta de los Cenotes, VX9Q+H2), Puerto Morelos, Q. Roo, México.",
    "footer_whatsapp_direct": "Línea Directa Comité: +34 722 11 62 48",
    "tier_grid_title": "1. SPONSORS CORPORATIVOS POR NIVEL",
    "tier_grid_sub": "Exclusividad & Presencia en Cancha",
    "item_d_sub": "Patrocinador Titular (Nombre del Torneo) · Presencia en Todos los Puntos",
    "item_c_sub": "España, Alemania, México, Canadá, USA o Argentina",
    "item_e_sub": "Menciones en Cada Narración en Vivo",
    "item_b_sub": "Emisión Continua de Spots en Pantallas Monumentales",
    "item_f_sub": "Denominación Oficial de Cancha Reglamentaria",
    "item_a_sub": "Presencia en Tablas Perimetrales de la Cancha",
    "item_g1_sub": "Entrega Oficial de Galardón MVP en Ceremonia",
    "item_g2_sub": "Reconocimiento al Mejor Ejemplar Equino",
    "slide_fallback_note": "6 Selecciones nacionales de polo (España, Alemania, México, Canadá, USA y Argentina)",
    "footer_venue_desc": "El Rey Polo Country Club · 6 hectáreas de infraestructura deportiva y helipuerto privado certificado.",
    "footer_airspace": "Espacio Aéreo Registrado & Seguridad Privada",
    "footer_btn_pdf": "Descargar Dossier Oficial (PDF)",
    "footer_desk_title": "Mesa Directiva:",
    "footer_desk_desc": "Presidencia de Patrocinios & Relaciones Gubernamentales",
    "footer_phone_label": "Línea Directa Oficial:",
    "footer_maps_btn": "Ver Ubicación Satelital en Google Maps",
    "footer_route_hub": "Ruta de los Cenotes · Cancún - Tulum Hub",
    "footer_security_badge": "Privacidad & Seguridad Blindada",
    "footer_ip_title": "Reserva de Derechos & Propiedad Intelectual",
    "footer_ip_desc": "Nations Cup 2027 es una marca registrada. Todos los derechos reservados. Las marcas comerciales, logotipos de patrocinadores y menciones de terceros son propiedad de sus respectivos titulares.",
    "footer_compliance_badge": "Certificación Oficial de Polo & Cumplimiento Normativo",
    "disc_fiscal_title": "Aviso Fiscal & Tarifario:",
    "disc_fiscal_text": "Los importes de inversión y patrocinio presentados en este portal están calculados en Moneda Nacional Mexicana (MXN), más el Impuesto al Valor Agregado (IVA) correspondiente del 16% conforme a las disposiciones fiscales vigentes del SAT. Las conversiones a Dólares Americanos (USD) y Euros (EUR) son estimaciones informativas.",
    "disc_confidential_title": "Confidencialidad Comercial:",
    "disc_confidential_text": "Las propuestas y beneficios de patrocinio son de carácter confidencial y están dirigidas exclusivamente a los representantes legales autorizados de las empresas solicitantes. La asignación de exclusividad de categoría se rige por el orden riguroso de confirmación mediante contrato mercantil y anticipo correspondiente.",
    "footer_copy_bottom": "© 2026-2027 Nations Cup Polo Organization. Todos los derechos reservados. Puerto Morelos, Quintana Roo, México.",
    "footer_contact_official": "Contacto Oficial",
    "footer_transfer_data": "Datos de Transferencia",
    "footer_terms_btn": "Términos & Condiciones",
    "bank_modal_understood": "Entendido",
    "bank_modal_compliance_note": "Comprobantes válidos para emisión de factura fiscal (CFDI) conforme a la legislación vigente.",
    "deck_slide_tag_title": "Estructura Comercial & Retorno de Inversión",
    "preview_default_text": "Hola, represento a [Empresa]. Mi nombre es [Nombre del Ejecutivo] (Director Global de Patrocinios y Alianzas). Estamos interesados en evaluar el patrocinio para NATIONS CUP 2027 en la categoría de Alta Relojería & Joyería bajo el nivel D. Patrocinador Nombre del Torneo Omnipresente. Solicitamos confirmación de disponibilidad y reunión de alineación comercial.",
      "page_meta_title": "Nations Cup 2027 | El Rey Polo Country Club · Dossier Privado de Patrocinio",
      "page_meta_desc": "Portal Comercial B2B y Dossier Ejecutivo de Patrocinio para el Torneo Internacional de Polo Nations Cup 2027 en El Rey Polo Country Club, Puerto Morelos, Riviera Maya, México.",
      "video_fallback": "Tu navegador no soporta reproducción de video HTML5.",
      "video_badge_audio": "Click para Audio HD",
      "hero_pill_audience": "Alto Standing",
      "hero_pill_committee": "Comité Comercial",
      "deck_badge_fallback": "COMITÉ COMERCIAL",
      "deck_title_fallback": "Nations Cup 2027: El Legado del Polo en la Riviera Maya",
      "deck_subtitle_fallback": "13 al 16 de Enero de 2027 | El Rey Polo Country Club, Puerto Morelos, Q. Roo",
      "deck_point1_fallback": "Presentación reservada para comités de marca e inversionistas internacionales.",
      "deck_point2_fallback": "Conexión y anfitrionía directa con el segmento de mayor patrimonio de la región.",
      "deck_nav_hint": "Flechas o Touch",
      "deck_tag_fallback": "NATIONS CUP 2027 · DOSSIER OFICIAL",
      "price_suffix": "USD + IVA",
      "price_suffix_mxn": "MXN + IVA",
      "table_currency_note": "Tarifas oficiales en Dólares (USD + IVA)",
      "badge_gastronomy": "ALIANZA GASTRONÓMICA",
      "badge_mobility": "LOGÍSTICA & FLOTA OFICIAL",
      "venue_badge": "Sede Oficial 2027",
      "venue_title": "El Rey Polo Country Club",
      "venue_desc": "Ubicado en el epicentro natural de la Ruta de los Cenotes, a solo 25 minutos del Aeropuerto Internacional de Cancún y del nuevo Aeropuerto de Tulum. Cancha oficial reglamentaria internacional con drenaje láser y palapa club house de primer nivel mundial.",
      "venue_coord_title": "Coordenadas de Acceso & Helipuerto",
      "venue_address": "Carretera Puerto Morelos - Leona Vicario Km 11 (VX9Q+H2 Puerto Morelos, Quintana Roo, México).",
      "venue_helipad": "Coordenadas Helipuerto: 20.8569, -86.9507",
      "footer_helipad": "Coordenadas Helipad: 20.8569, -86.9507",
      "footer_deck_pdf": "Dossier Comercial Ejecutivo (PDF)",
      "footer_legal_framework": "Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y Código de Comercio de los Estados Unidos Mexicanos.",
      "footer_vip_title": "Atención VIP & Compliance",
      "footer_vip_desc": "Atención a comités de marca, firmas auditoras, secretarías de turismo y comitivas internacionales.",
      "footer_channel_btn": "Canal Privado de Acreditación",
      "footer_hours": "Horario de atención comités: Lunes a Viernes de 09:00 a 19:00 hrs (GMT-5).",
      "footer_compliance_title": "Marco Legal & Compliance",
      "footer_tab_fiscal": "Aviso Fiscal & Tarifario",
      "footer_tab_ip": "Propiedad Intelectual",
      "footer_tab_conf": "Confidencialidad",
      "footer_ip_heading": "Reserva de Derechos & Propiedad Intelectual:",
      "footer_ip_body": "«Nations Cup 2027» y «El Rey Polo Country Club» son denominaciones, logotipos e identidades gráficas protegidas por las leyes de propiedad industrial e intelectual aplicables (IMPI). Queda estrictamente prohibida la reproducción, copia, distribución, uso comercial no autorizado o alteración de cualquier contenido, fotografía o render presente en este sitio sin la autorización expresa y por escrito del Comité Organizador.",
      "theater_heading": "Nations Cup 2027 · Film Oficial",
      "theater_subheading": "El Rey Polo Country Club · Audio Cinematográfico HD",
      "theater_play_label": "Pausar",
      "theater_play_label_play": "Reproducir",
      "theater_close_btn": "Cerrar Teatro",
      "lightbox_default_title": "Recepción VIP & Alta Atmósfera",
      "lightbox_default_desc": "Perspectiva fotográfica de alta resolución del entorno ecuestre y arquitectónico.",
      "toast_default": "Notificación del sistema...",
      "toast_copied_es": "¡Dato copiado al portapapeles con éxito!",
      "bank_title": "Datos para Transferencia Bancaria Oficial",
      "bank_subtitle": "Nations Cup 2027 · El Rey Polo Country Club",
      "bank_tab_label_mxn": "Cuenta México (BBVA · MXN)",
      "bank_tab_label_usd": "Cuenta EE.UU. (Lead Bank · USD Wire)",
      "bank_mxn_intro": "Transferencias electrónicas nacionales (SPEI) e internacionales en Moneda Nacional hacia El Rey Polo Country Club.",
      "bank_label_bank": "Institución Bancaria",
      "bank_label_branch": "Sucursal",
      "bank_label_beneficiary": "Nombre / Beneficiario",
      "bank_btn_copy": "Copiar",
      "bank_label_clabe": "CLABE Interbancaria (SPEI)",
      "bank_btn_copy_clabe": "Copiar CLABE",
      "bank_label_acc_num": "Número de Cuenta",
      "bank_btn_copy_acc": "Copiar Cuenta",
      "bank_label_swift": "Código SWIFT / BIC",
      "bank_label_tax_address": "Domicilio Fiscal Registrado",
      "bank_label_receipt_email": "Envío de Comprobantes de Pago",
      "bank_btn_copy_email": "Copiar Email",
      "bank_usd_intro": "Transferencias electrónicas internacionales en Dólares Americanos (USD Wire / ACH) gestionadas a través del Comité Organizador.",
      "bank_label_usd_beneficiary": "Nombre del Destinatario (Beneficiary)",
      "bank_label_usd_bank": "Nombre del Banco",
      "bank_label_account_type": "Tipo de Cuenta",
      "bank_val_account_type": "Corriente (Checking Account)",
      "bank_label_routing": "ABA / Número de Ruta (Routing)",
      "bank_btn_copy_aba": "Copiar ABA",
      "bank_label_bank_address": "Dirección del Banco en EE.UU.",
      "bank_label_intl_receipt": "Envío de Comprobantes de Transferencia Internacional",
      "bank_notice_cfdi": "Comprobantes válidos para emisión de factura fiscal (CFDI) conforme a la legislación vigente.",
      "bank_btn_understood": "Entendido",
      "btn_close_modal": "Cerrar",
    },
    en: {
    "status_beacon": "Sponsorship Committee · Private Access 2027",
    "nav_vision": "The Vision",
    "nav_pitch": "Pitch Deck",
    "nav_tour": "360° Tour",
    "nav_ecosystem": "Ecosystem",
    "nav_gallery": "Editorial Gallery",
    "nav_tiers": "Investment & Exclusivity",
    "nav_contact": "Private Liaison",
    "btn_whatsapp_vip": "VIP WhatsApp",
    "hero_badge": "INTERNATIONAL POLO & HIGH SOCIETY CHAMPIONSHIP · JANUARY 2027",
    "hero_title": "NATIONS CUP 2027",
    "hero_subtitle": "The Legacy of Polo in the Riviera Maya",
    "hero_dates": "January 13 to 16, 2027",
    "hero_venue": "El Rey Polo Country Club · Puerto Morelos, Cancun, Mexico",
    "hero_dates_venue": "January 13 to 16, 2027 | El Rey Polo Country Club, Puerto Morelos, Cancun, Mexico",
    "hero_tagline": "«Luxury brands do not buy advertising; they acquire Exclusivity, Legacy, and Incomparable Access.»",
    "hero_btn_play_theater": "Watch Presentation with HD Audio",
    "hero_btn_deck": "Executive Pitch Deck",
    "hero_btn_whatsapp": "VIP Concierge WhatsApp",
    "stat_hectares": "6 Hectares",
    "stat_hectares_sub": "Official regulation turf field (300 x 200m)",
    "stat_teams": "6 National Teams",
    "stat_teams_sub": "Spain, Germany, Mexico, Canada, USA & Argentina",
    "stat_audience": "High-Standing Audience",
      "stat_standing": "High Standing",
    "stat_audience_sub": "CEOs, high-net-worth investors and decision makers",
    "stat_exclusivity": "1 Brand per Industry",
    "stat_exclusivity_sub": "Uncompromising category exclusivity lock",
    "video_kicker": "AUDIOVISUAL EXPERIENCE",
    "video_title": "CINEMATIC SIZZLE REEL",
    "video_subtitle": "Experience the adrenaline, equestrian elegance, and Caribbean grandeur in high definition.",
    "btn_unmute": "Enable HD Audio",
    "btn_mute": "Mute Audio",
    "btn_fullscreen": "Fullscreen Mode",
    "btn_gdrive_video": "Download 4K Master (Google Drive)",
    "btn_open_theater": "Play with Audio",
    "btn_theater_modal": "HD Theater Mode",
    "video_playing_label": "Official Nations Cup 2027 Presentation",
    "theater_title": "Nations Cup 2027 — Official Sizzle Reel",
    "theater_subtitle": "4 Days of International Championship, High-Goal Polo & Ultra-Luxury Lifestyle",
    "theater_close": "Close Theater Mode (Esc)",
    "theater_overlay_hint": "Click anywhere to close and return to the page",
    "deck_kicker": "CONFIDENTIAL EXECUTIVE SPONSORSHIP DOSSIER",
    "deck_title": "Executive Pitch Deck",
    "deck_subtitle": "Interactive art presentation designed for Sponsorship Committees and Global CMO review.",
    "deck_btn_prev": "Previous",
    "deck_btn_next": "Next",
    "deck_btn_download": "Download Official Pitch Deck (Executive PDF)",
    "deck_swipe_hint": "Swipe horizontally or use arrow buttons to navigate",
    "deck_btn_prev_title": "Previous slide",
    "deck_btn_next_title": "Next slide",
    "tour_kicker": "HIGH-DEFINITION SPATIAL TOUR",
    "tour_title": "Virtual 360° Tour · El Rey Polo",
    "tour_subtitle": "Pre-visualize brand integration and VIP areas from any perspective with gyroscope support.",
    "tour_scene_lounge": "VIP Hospitality Lounge",
    "tour_scene_field": "Grand Championship Field & Grounds",
    "tour_scene_autoshow": "Brand Pavilions & Autoshow Showcase",
    "tour_scene_grill": "Sunset Terrace & Gourmet Grill",
    "tour_scene_stage": "Haute Couture Fashion Runway",
    "tour_badge_active": "Interactive 360° Perspective Active",
    "tour_btn_gyro": "Mobile Gyroscope",
    "tour_btn_autorotate": "Auto Rotation",
    "tour_btn_gdrive": "Open 360° Renders on Google Drive",
    "tour_hint": "Drag with mouse or tilt mobile device to experience 360° perspective.",
    "eco_kicker": "EXPERIENTIAL ARCHITECTURE & HOSPITALITY",
    "eco_title": "Event Ecosystem",
    "eco_subtitle": "Eight curated hospitality and high-level social hubs designed for fluid interaction between global brands, international delegations, and the high-standing equestrian community.",
    "eco_card1_title": "VIP Polo Club",
    "eco_card1_desc": "Top-tier premium hospitality with dedicated concierge, teakwood viewing decks, and frontline sights of every chukker.",
    "eco_card2_title": "Champagne Garden",
    "eco_card2_desc": "Open-air social epicenter for gala receptions, bespoke mixology, the divot stomping tradition, and Golden Hour celebrations.",
    "eco_card3_title": "Gourmet Village",
    "eco_card3_desc": "Signature gastronomy, curated culinary pairings, and regional fine dining curated exclusively for restaurant partners.",
    "eco_card4_title": "Luxury Boulevard",
    "eco_card4_desc": "High-end commercial concourse for static exhibitions of supercars, haute horlogerie, resortwear, yachting, and prime real estate.",
    "eco_card5_title": "Mayan Artisan Pavilion",
    "eco_card5_desc": "Curated cultural pavilion dedicated to master craftsmanship, contemporary Mexican fine art, and Caribbean heritage.",
    "eco_card6_title": "Polo Kids Club",
    "eco_card6_desc": "High-security family lounge featuring educational workshops, equestrian introduction, and Mini Polo for young guests.",
    "eco_card7_title": "Sponsor Hospitality Suites",
    "eco_card7_desc": "Private hospitality suites dedicated to corporate brand partners, key client hosting, and confidential executive meetings.",
    "eco_card8_title": "Media & Content Center",
    "eco_card8_desc": "On-site media production center, international press lounge, live digital broadcasts, and executive interviews.",
    "gallery_kicker": "ARCHITECTURE & EDITORIAL ATMOSPHERE",
    "gallery_title": "Editorial Gallery",
    "gallery_subtitle": "Architectural Digest aesthetic capturing the authentic prestige and grounds of the club.",
    "gallery_view_hint": "Click on any perspective to open the high-resolution lightbox viewer.",
    "lightbox_close": "Close (Esc)",
    "lightbox_counter_prefix": "Perspective",
    "gal_shot0_cat": "AERIAL VIEW",
    "gal_shot0_title": "Regulation Polo Pitch (300 x 200m) · 6 Hectares",
    "gal_shot1_cat": "ARCHITECTURE",
    "gal_shot1_title": "VIP Arrival & Facade of El Rey Polo Country Club",
    "gal_shot2_cat": "CLUBHOUSE & STAGE",
    "gal_shot2_title": "Central Hub, Nations Cup Main Stage & Poolside",
    "gal_shot3_cat": "SUPERCARS",
    "gal_shot3_title": "Supercar Showcase & Poolside Activation",
    "gal_shot4_cat": "GRAND PITCH",
    "gal_shot4_title": "Championship Polo Ground at Turf Level",
    "gal_shot5_cat": "HOSPITALITY",
    "gal_shot5_title": "VIP Hospitality Lounge & Bespoke Mixology",
    "gal_shot6_cat": "VIP ACCESS",
    "gal_shot6_title": "Private VIP Grandstand Tables Overlooking the Pitch",
    "gal_shot7_cat": "CHAMPAGNE",
    "gal_shot7_title": "Grand Marque Champagne Celebration Toast",
    "gal_shot8_cat": "FASHION & ART",
    "gal_shot8_title": "Fashion Show Runway & Contemporary Art Pavilion",
    "gal_shot9_cat": "NETWORKING",
    "gal_shot9_title": "B2B High-Net-Worth Networking Concourse",
    "gal_shot10_cat": "AFTER-POLO",
    "gal_shot10_title": "Golden Hour Cocktail & After-Polo Sessions",
    "gal_shot11_cat": "POOL & CLUB",
    "gal_shot11_title": "Central Pool Terrace & VIP Social Deck",
    "pricing_kicker": "SPONSORSHIP RIGHTS & EXCLUSIVITY",
    "pricing_title": "Commercial Investment Structure",
    "pricing_subtitle": "Three partnership frameworks: Corporate Tiers, Exclusive Special Assets, and Gastronomy Alliances.",
    "exclusivity_rule_badge": "STRICT CATEGORY SHIELD",
    "exclusivity_rule_title": "UNBREAKABLE EXCLUSIVITY DIRECTIVE",
    "exclusivity_rule_desc": "Strictly ONE brand permitted per industry sector (e.g., 1 automotive, 1 haute horlogerie, 1 champagne, 1 private wealth bank). Category reservation granted strictly in order of formalization.",
    "currency_label": "Currency:",
    "currency_desc": "Rates displayed in USD by default; select MXN or EUR for real-time conversion.",
    "vat_notice": "* Plus applicable tax (VAT). Strictly subject to sector availability upon formal reservation.",
    "tier_platino_badge": "HIGHEST DISTINCTION",
    "tier_platino_name": "Platinum Partner",
      "tier_platino_title": "Platinum",
      "tier_oro_title": "Gold",
      "tier_plata_title": "Silver",
      "tier_bronce_title": "Bronze",
    "tier_platino_sub": "Tournament Naming Right & Ubiquitous Presence",
    "tier_platino_desc": "The pinnacle of corporate alignment with paramount prominence across all tournament touchpoints and broadcasts.",
    "tier_platino_f1": "Absolute sector exclusivity guaranteed by contract",
    "tier_platino_f2": "Dominant chest branding on all 6 national team competition jerseys",
    "tier_platino_f3": "Private VIP Grandstand Table for 10 guests + Daily luxury bottle service",
    "tier_platino_f4": "Dedicated 3x3m Commercial Exhibition Pavilion on Luxury Boulevard",
    "tier_platino_f5": "Dominant branding on official trophy, closing ceremony & pressboard",
    "tier_platino_f6": "Priority inclusion in hyper-targeted digital campaign (+1M C-Level views)",
    "tier_platino_btn": "Request Platinum Tier",
    "tier_oro_badge": "CATEGORY LEADERSHIP",
    "tier_oro_name": "Gold Partner",
    "tier_oro_sub": "Official Category Partner",
    "tier_oro_desc": "Exclusive category leadership shielding your enterprise against rival brand presence throughout the tournament.",
    "tier_oro_f1": "Total commercial sector exclusivity (competitor ban)",
    "tier_oro_f2": "Central logo placement on 1 national team official jersey",
    "tier_oro_f3": "Custom 3x3m Brand Showcase Stand in commercial concourse",
    "tier_oro_f4": "Private Lounge suite for executive hospitality and client relations",
    "tier_oro_f5": "15 VIP All-Access passes with full gourmet and open-bar service",
    "tier_oro_f6": "Press conference mentions and editorial PR coverage",
    "tier_oro_btn": "Request Gold Tier",
    "tier_plata_badge": "HOSPITALITY & ALLIANCE",
    "tier_plata_name": "Silver Partner",
    "tier_plata_sub": "Official Supplier / Partner Brand",
    "tier_plata_desc": "Seamless luxury product integration across gastronomy, premium mixology, aviation, or high-end mobility.",
    "tier_plata_f1": "Direct presence at VIP bars, gourmet tastings or mobility fleets",
    "tier_plata_f2": "Curated product activations and bespoke gifting to high-standing guests",
    "tier_plata_f3": "Rights to the designation 'Official Supplier Nations Cup 2027'",
    "tier_plata_f4": "10 VIP All-Access credentials for executives and key guests",
    "tier_plata_f5": "Editorial credit in printed tournament book and digital screens",
    "tier_plata_btn": "Request Silver Tier",
    "tier_bronce_badge": "INSTITUTIONAL ALLIANCE",
    "tier_bronce_name": "Bronze Partner",
    "tier_bronce_sub": "Commercial Partner & Networking",
    "tier_bronce_desc": "Strategic participation with access to premier B2B networking and institutional brand exposure.",
    "tier_bronce_f1": "Brand presence across institutional materials and VIP directory",
    "tier_bronce_f2": "Dedicated space for commercial activation or curated sampling",
    "tier_bronce_f3": "6 VIP All-Access credentials with access to hospitality suites",
    "tier_bronce_f4": "Inclusion in the official post-event report and media audit",
    "tier_bronce_btn": "Request Bronze Tier",
    "table_kicker": "EXCLUSIVE ITEM SPONSORSHIP MATRIX",
    "table_title": "High-Visibility Individual Assets",
    "table_subtitle": "Bespoke opportunities for brands seeking prime prominence across specific tournament assets.",
    "th_asset": "Asset / Item",
    "th_scope": "Scope & Key Deliverables",
    "th_price": "Official Investment",
    "th_status": "Availability",
    "th_action": "Action",
    "status_available": "Available",
    "btn_reserve_item": "Reserve",
    "item_d_name": "D. Official Tournament Naming Partner",
    "item_d_scope": "Ubiquitous presence across all venue touchpoints, print collateral, trophy, team apparel, broadcasts, and marketing ('Nations Cup 2027 presented by [Your Brand]').",
    "item_c_name": "C. Exclusive National Team Sponsorship",
    "item_c_scope": "Exclusive chest branding on the official competition jersey of 1 of the 6 participating nations (Spain, Germany, Mexico, Canada, USA, or Argentina) throughout all matches.",
    "item_e_name": "E. Official Tournament Speaker Partner",
    "item_e_scope": "Live honorable mentions and verbal brand integration by the official tournament speaker during every chukker, match openings, award presentations, and gala dinners.",
    "item_b_name": "B. Giant LED Video Screen Advertising",
    "item_b_scope": "Continuous, high-rotation broadcasting of HD audiovisual spots across monumental LED screens situated on the championship pitch and clubhouse pavilion.",
    "item_f_name": "F. Official Polo Field Naming Right",
    "item_f_scope": "Official naming rights for the 300 x 200m regulation championship pitch across all signage, venue maps, event programs, and broadcast mentions.",
    "item_a_name": "A. Championship Pitch Perimeter Boarding",
    "item_a_scope": "Static boarding signage along the field boundary boards with high-impact visibility in sports action photography, video streams, and editorial media.",
    "item_g1_name": "G1. Best Player of the Tournament Trophy Sponsorship",
    "item_g1_scope": "Official trophy presentation and commemorative luxury gift to the tournament MVP at the grand awards ceremony with honorary press coverage.",
    "item_g2_name": "G2. Best Playing Pony Championship Trophy Sponsorship",
    "item_g2_scope": "Presentation of the embroidered ceremonial blanket and honor to the championship's top equine athlete, celebrating horsemanship and breeding excellence.",
    "gastro_title": "Gastronomy Partner",
    "gastro_sub": "Gourmet Village & Fine Dining Pairings",
    "gastro_desc": "Exclusive opportunity for fine-dining restaurants and culinary groups to showcase before a high-standing audience.",
    "gastro_f1": "Exclusive space for culinary pop-up or guided tasting sessions",
    "gastro_f2": "Brand presence on official menus and event signage",
    "gastro_f3": "8 VIP All-Access passes for restaurant directors and head chefs",
    "gastro_btn": "Apply as Dining Partner via WhatsApp",
    "mobility_title": "VIP Mobility & Concierge",
    "mobility_sub": "Official Fleets, Helipads & Superyachts",
    "mobility_desc": "Executive airport transfers from Cancun (CUN), on-site helipad operations, and private yacht charters in the Mexican Caribbean.",
    "mobility_f1": "Designation as Official Tournament Carrier / Vehicle Fleet",
    "mobility_f2": "Static vehicle showcase at main club entrance and helipad",
    "mobility_f3": "Private executive transfers for players, team patrons and VIP guests",
    "mobility_btn": "Coordinate Mobility via WhatsApp",
    "form_kicker": "RESERVED INSTITUTIONAL PROTOCOL",
    "form_title": "Executive Dossier Request & Exclusivity Lock",
    "form_subtitle": "Direct communication with the Organizing Committee Presidency on WhatsApp (+34 722 11 62 48).",
    "lbl_name": "Executive Full Name *",
    "ph_name": "e.g., Lord Alexander Cavendish",
    "lbl_company": "Enterprise / Represented Brand *",
    "ph_company": "e.g., Audemars Piguet / Aston Martin / Dom Pérignon",
    "lbl_role": "Executive Role / Position *",
    "opt_select_role": "Select your role...",
    "opt_ceo": "Chief Executive Officer (CEO / President)",
    "opt_cmo": "Chief Marketing Officer (CMO / Global Head)",
    "opt_sponsorship": "Global Sponsorship & Partnerships Director",
    "opt_investor": "Investor / Family Office Principal",
    "opt_other": "Executive Vice President / Managing Director",
    "lbl_category": "Industry Category *",
    "opt_select_cat": "Select brand category...",
    "opt_cat_auto": "Luxury Automotive & Supercars",
    "opt_cat_watch": "Haute Horlogerie & High Jewelry",
    "opt_cat_spirits": "Champagne, Fine Wines & Ultra-Premium Spirits",
    "opt_cat_aviation": "Private Aviation, Marine & Superyachts",
    "opt_cat_finance": "Private Banking, Wealth Management & Real Estate",
    "opt_cat_fashion": "Haute Couture, Designer Fashion & Leather Goods",
    "opt_cat_tech": "Luxury Tech & Bespoke Concierge Services",
    "opt_cat_hospitality": "Five-Diamond Hospitality & Private Islands",
    "lbl_tier": "Sponsorship Tier of Interest *",
    "opt_select_tier": "Select sponsorship asset...",
    "opt_tier_d": "D. Tournament Official Naming Partner ($80,000 USD / $1,400,000 MXN)",
    "opt_tier_c": "C. Exclusive Team Jersey Sponsor ($25,000 USD / $437,500 MXN)",
    "opt_tier_e": "E. Official Tournament Speaker Partner ($20,000 USD / $350,000 MXN)",
    "opt_tier_b": "B. Giant LED Video Screen Advertising ($20,000 USD / $350,000 MXN)",
    "opt_tier_f": "F. Official Polo Field Naming Right ($15,000 USD / $262,500 MXN)",
    "opt_tier_a": "A. Championship Field Boarding Signage ($5,000 USD / $87,500 MXN)",
    "opt_tier_g1": "G1. MVP Award Official Partner ($5,000 USD / $87,500 MXN)",
    "opt_tier_g2": "G2. Best Playing Pony Trophy ($5,000 USD / $87,500 MXN)",
    "opt_tier_platino": "Platinum Corporate Tier ($45,000 USD / $787,500 MXN)",
    "opt_tier_oro": "Gold Corporate Tier ($28,000 USD / $490,000 MXN)",
    "opt_tier_plata": "Silver Corporate Tier ($14,000 USD / $245,000 MXN)",
    "opt_tier_bronce": "Bronze Corporate Tier ($9,000 USD / $157,500 MXN)",
    "preview_label": "Official WhatsApp Message Preview:",
    "btn_submit_whatsapp": "Request Executive Dossier & Exclusivity Lock via WhatsApp",
    "form_security_note": "Clicking will redirect to official WhatsApp with the formatted request for expedited committee review.",
    "dock_deck": "Pitch Deck",
    "dock_tour": "360° Tour",
    "dock_contact": "VIP WhatsApp",
    "bank_modal_title": "Official Banking & Settlement Accounts",
    "bank_modal_sub": "Sponsorship Committee · Nations Cup 2027",
    "bank_tab_usd": "US Dollars (Chase Bank)",
    "bank_tab_mxn": "Mexican Pesos (BBVA Mexico)",
    "legal_modal_title": "Official Legal & Regulatory Framework",
    "legal_modal_sub": "Nations Cup 2027 · El Rey Polo Country Club",
    "legal_tab_privacy": "Privacy Policy",
    "legal_tab_terms": "Terms & Conditions",
    "btn_close": "Close",
    "footer_col1_title": "Organizing Body",
    "footer_col1_desc": "High-Goal International Polo Tournament sanctioned under official international polo standards and federations.",
    "footer_legal_name": "Corporate Entity:",
    "footer_legal_name_val": "Nations Cup Polo Organization S.A.P.I. de C.V. in joint venture with Operadora El Rey Polo Country Club S.A. de C.V.",
    "footer_tax_address": "Registered Address:",
    "footer_tax_address_val": "Km 11.5 Puerto Morelos - Leona Vicario Hwy, Cenote Route, Z.C. 77580, Puerto Morelos, Quintana Roo, Mexico.",
    "footer_col2_title": "Official Venue & Helipad",
    "footer_venue_name": "Official Venue:",
    "footer_venue_val": "El Rey Polo Country Club",
    "footer_geo": "Geolocation:",
    "footer_geo_val": "Cenote Route Km 11 (Plus Code: VX9Q+H2)",
    "footer_dist": "Strategic Transit:",
    "footer_dist_val": "15 min from Cancun International Airport (CUN) and 25 min from Playa del Carmen.",
    "footer_col3_title": "Legal Framework & Compliance",
    "footer_desk": "Executive Board:",
    "footer_desk_val": "Presidency of Sponsorships & Government Relations",
    "footer_wa_label": "Official Direct Line:",
    "footer_email_label": "Institutional Email:",
    "footer_col4_title": "Institutional Liaison",
    "footer_btn_privacy": "Comprehensive Privacy Policy",
    "footer_btn_terms": "Commercial Terms & Category Exclusivity",
    "footer_btn_tax": "Tax Regime",
    "footer_btn_ip": "Intellectual Property",
    "footer_btn_confidential": "Confidentiality Statement",
    "footer_rights": "All rights reserved. Official high-goal polo championship.",
    "footer_confidential": "Confidentiality Notice: The commercial data, site plans and rates herein are reserved strictly for prospective brand partners under formal invitation.",
    "footer_address": "El Rey Polo Country Club: Puerto Morelos - Leona Vicario Hwy Km 11 (Cenote Route, VX9Q+H2), Puerto Morelos, Quintana Roo, Mexico.",
    "footer_whatsapp_direct": "Direct Committee Desk: +34 722 11 62 48",
    "tier_grid_title": "1. CORPORATE SPONSORSHIP TIERS",
    "tier_grid_sub": "Exclusivity & Pitch Presence",
    "item_d_sub": "Title Tournament Naming Rights · Ubiquitous Presence at All Touchpoints",
    "item_c_sub": "Spain, Germany, Mexico, Canada, USA or Argentina",
    "item_e_sub": "Verbal Brand Integration in Live Commentary",
    "item_b_sub": "Continuous Spot Rotation on Monumental Screens",
    "item_f_sub": "Official Regulation Pitch Naming Rights",
    "item_a_sub": "Perimeter Field Boarding Signage",
    "item_g1_sub": "Official MVP Trophy Presentation Ceremony",
    "item_g2_sub": "Recognition to Champion Equine Athlete",
    "slide_fallback_note": "6 National polo teams (Spain, Germany, Mexico, Canada, USA & Argentina)",
    "footer_venue_desc": "El Rey Polo Country Club · 6 hectares of official championship equestrian turf and certified private helipad.",
    "footer_airspace": "Registered Airspace & Private Security",
    "footer_btn_pdf": "Download Official Pitch Deck (PDF)",
    "footer_desk_title": "Executive Board:",
    "footer_desk_desc": "Presidency of Sponsorships & Government Relations",
    "footer_phone_label": "Official Direct Line:",
    "footer_maps_btn": "Open Satellite Location in Google Maps",
    "footer_route_hub": "Cenote Route · Cancun - Tulum Hub",
    "footer_security_badge": "High-Security & Privacy Enclave",
    "footer_ip_title": "Intellectual Property & Reservation of Rights",
    "footer_ip_desc": "Nations Cup 2027 is a registered trademark. All rights reserved. Sponsor trademarks, national heraldry, and third-party logos belong to their respective proprietary owners.",
    "footer_compliance_badge": "Sanctioned Polo Championship & Regulatory Compliance",
    "disc_fiscal_title": "Tax & Tariff Notice:",
    "disc_fiscal_text": "All investment amounts presented on this platform are quoted in US Dollars (USD) as standard reference, plus applicable Value Added Tax (VAT) pursuant to statutory fiscal regulations. Conversions to Mexican Pesos (MXN) or Euros (EUR) are calibrated against official interbank exchange rates.",
    "disc_confidential_title": "Commercial Confidentiality:",
    "disc_confidential_text": "All sponsorship rights and deliverables herein constitute proprietary, confidential data reserved exclusively for accredited brand committees under formal invitation. Category exclusivity is formalized on a strict first-come, first-served basis upon contract execution.",
    "footer_copy_bottom": "© 2026-2027 Nations Cup Polo Organization. All rights reserved. Puerto Morelos, Quintana Roo, Mexico.",
    "footer_contact_official": "Official Liaison",
    "footer_transfer_data": "Settlement Bank Data",
    "footer_terms_btn": "Terms & Conditions",
    "bank_modal_understood": "Understood",
    "bank_modal_compliance_note": "Valid wire settlement receipts for tax-compliant commercial invoicing (CFDI/VAT).",
    "deck_slide_tag_title": "Commercial Structure & Investment ROI",
    "preview_default_text": "Hello, I represent [Company]. My name is [Executive Name] (Global Sponsorship & Partnerships Director). We are interested in evaluating sponsorship for NATIONS CUP 2027 in the Haute Horlogerie & High Jewelry category under the D. Tournament Official Naming Partner tier. We request availability confirmation and a commercial alignment meeting.",
      "page_meta_title": "Nations Cup 2027 | El Rey Polo Country Club · Private Sponsorship Dossier",
      "page_meta_desc": "Official B2B Commercial Portal & Executive Sponsorship Dossier for the Nations Cup 2027 International Polo Tournament at El Rey Polo Country Club, Puerto Morelos, Riviera Maya, Mexico.",
      "video_fallback": "Your browser does not support HTML5 video playback.",
      "video_badge_audio": "Click for HD Audio",
      "hero_pill_audience": "High Standing",
      "hero_pill_committee": "Commercial Committee",
      "deck_badge_fallback": "COMMERCIAL COMMITTEE",
      "deck_title_fallback": "Nations Cup 2027: The Legacy of Polo in the Riviera Maya",
      "deck_subtitle_fallback": "January 13 to 16, 2027 | El Rey Polo Country Club, Puerto Morelos, Q. Roo",
      "deck_point1_fallback": "Confidential presentation reserved for brand executive boards and global investors.",
      "deck_point2_fallback": "Direct alignment and private hospitality with the highest-net-worth segment.",
      "deck_nav_hint": "Arrows or Touch",
      "deck_tag_fallback": "NATIONS CUP 2027 · OFFICIAL DOSSIER",
      "price_suffix": "USD + VAT",
      "price_suffix_mxn": "MXN + VAT",
      "table_currency_note": "Official rates in US Dollars (USD + VAT)",
      "badge_gastronomy": "GASTRONOMIC PARTNERSHIP",
      "badge_mobility": "OFFICIAL LOGISTICS & FLEET",
      "venue_badge": "Official 2027 Venue",
      "venue_title": "El Rey Polo Country Club",
      "venue_desc": "Nestled in the prime natural setting of the Cenote Route, just 25 minutes from Cancun International Airport and Tulum Airport. World-class regulation championship polo ground with laser drainage and premier luxury clubhouse palapa.",
      "venue_coord_title": "Access Coordinates & Helipad",
      "venue_address": "Puerto Morelos - Leona Vicario Road Km 11 (VX9Q+H2 Puerto Morelos, Quintana Roo, Mexico).",
      "venue_helipad": "Helipad Coordinates: 20.8569, -86.9507",
      "footer_helipad": "Helipad Coordinates: 20.8569, -86.9507",
      "footer_deck_pdf": "Executive Sponsorship Dossier (PDF)",
      "footer_legal_framework": "In compliance with the Mexican Federal Law on Protection of Personal Data (LFPDPPP) and Commercial Code.",
      "footer_vip_title": "VIP Liaison & Corporate Compliance",
      "footer_vip_desc": "Dedicated advisory for brand committees, audit firms, tourism boards, and global delegations.",
      "footer_channel_btn": "Private Accreditation Channel",
      "footer_hours": "Executive hours: Monday through Friday from 09:00 to 19:00 hrs (GMT-5).",
      "footer_compliance_title": "Legal Framework & Compliance",
      "footer_tab_fiscal": "Fiscal & Tax Notice",
      "footer_tab_ip": "Intellectual Property",
      "footer_tab_conf": "Confidentiality",
      "footer_ip_heading": "Reservation of Rights & Intellectual Property:",
      "footer_ip_body": "“Nations Cup 2027” and “El Rey Polo Country Club” are trademarks, logos, and graphic identities protected under applicable intellectual property laws (IMPI/WIPO). Reproduction, commercial distribution, unauthorized usage, or modification of any material, render, or content on this site is strictly prohibited without prior written authorization from the Organizing Committee.",
      "theater_heading": "Nations Cup 2027 · Official Film",
      "theater_subheading": "El Rey Polo Country Club · High-Definition Cinema Audio",
      "theater_play_label": "Pause",
      "theater_play_label_play": "Play",
      "theater_close_btn": "Close Cinema",
      "lightbox_default_title": "VIP Arrival & Haute Hospitality",
      "lightbox_default_desc": "High-resolution editorial photography of the equestrian venue and prime architecture.",
      "toast_default": "System notification...",
      "toast_copied_es": "Information successfully copied to clipboard!",
      "bank_title": "Official Bank Settlement & Wire Instructions",
      "bank_subtitle": "Nations Cup 2027 · El Rey Polo Country Club",
      "bank_tab_label_mxn": "Mexico Account (BBVA · MXN)",
      "bank_tab_label_usd": "U.S. Account (Lead Bank · USD Wire)",
      "bank_mxn_intro": "Domestic wire transfers (SPEI) and international settlements in Mexican Pesos for El Rey Polo Country Club.",
      "bank_label_bank": "Banking Institution",
      "bank_label_branch": "Branch Code",
      "bank_label_beneficiary": "Account Beneficiary",
      "bank_btn_copy": "Copy",
      "bank_label_clabe": "Interbank CLABE (SPEI)",
      "bank_btn_copy_clabe": "Copy CLABE",
      "bank_label_acc_num": "Account Number",
      "bank_btn_copy_acc": "Copy Account",
      "bank_label_swift": "SWIFT / BIC Code",
      "bank_label_tax_address": "Registered Tax Address",
      "bank_label_receipt_email": "Payment Confirmation & Invoicing",
      "bank_btn_copy_email": "Copy Email",
      "bank_usd_intro": "International wire transfers in US Dollars (USD Wire / ACH) administered through the Organizing Committee.",
      "bank_label_usd_beneficiary": "Beneficiary Account Name",
      "bank_label_usd_bank": "Bank Name",
      "bank_label_account_type": "Account Type",
      "bank_val_account_type": "Commercial Checking Account",
      "bank_label_routing": "ABA / Routing Transit Number",
      "bank_btn_copy_aba": "Copy ABA",
      "bank_label_bank_address": "Bank Address (USA)",
      "bank_label_intl_receipt": "International Wire Proof Submission",
      "bank_notice_cfdi": "Official receipts eligible for compliant commercial invoice issuance (CFDI / VAT receipt).",
      "bank_btn_understood": "Understood",
      "btn_close_modal": "Close",
    }
  };

  // --- 2. 14-SLIDE PITCH DECK DATA ---
  const pitchDeckData = [
    {
      slideNum: "01",
      tag: "PORTADA PRIVADA",
      tagEn: "CONFIDENTIAL COVER",
      titleEs: "Nations Cup 2027: El Legado del Polo en la Riviera Maya",
      titleEn: "Nations Cup 2027: The Legacy of Polo in the Riviera Maya",
      subtitleEs: "13 al 16 de Enero de 2027 | El Rey Polo Country Club, Puerto Morelos, Cancún, México",
      subtitleEn: "January 13 to 16, 2027 | El Rey Polo Country Club, Puerto Morelos, Cancun, Mexico",
      image: "assets/photos/real_palapa_exterior.jpg",
      pointsEs: [
        "Dossier ejecutivo de patrocinio internacional reservado para marcas de alto standing e inversionistas globales.",
        "El encuentro cumbre del deporte de reyes en el Caribe Mexicano: 4 jornadas de polo internacional, lifestyle y networking C-Level.",
        "6 selecciones nacionales en competencia reglamentaria de alto hándicap."
      ],
      pointsEn: [
        "Executive international sponsorship dossier reserved for high-standing luxury brands and global investors.",
        "The premier championship of the sport of kings in the Mexican Caribbean: 4 days of high-goal polo, luxury lifestyle, and C-Suite networking.",
        "6 national teams in official international championship competition."
      ],
      badgeEs: "PORTADA OFICIAL",
      badgeEn: "OFFICIAL COVER",
      badge: "PORTADA OFICIAL"
    },
    {
      slideNum: "02",
      tag: "LA VISIÓN ESTRATÉGICA",
      tagEn: "STRATEGIC VISION",
      titleEs: "«Las marcas de lujo no compran publicidad; patrocinan el lugar que quieren ocupar en la mente del cliente.»",
      titleEn: "“Luxury brands do not buy advertising; they sponsor the space they aspire to own in the client's mind.”",
      subtitleEs: "El polo es el ecosistema de más alto poder adquisitivo del deporte global",
      subtitleEn: "Polo is the preeminent global sports ecosystem for high net worth audiences",
      image: "assets/photos/real_action_play.jpg",
      pointsEs: [
        "Audiencia con un valor neto patrimonial extraordinario: empresarios, diplomáticos, coleccionistas y líderes C-Level.",
        "Ambiente orgánico sin saturación comercial: máximo de 1 sola marca por categoría de industria.",
        "Asociación directa con los valores de nobleza, tradición ecuestre, potencia y sofisticación intemporal."
      ],
      pointsEn: [
        "Ultra-high-net-worth audience: business founders, diplomats, art collectors, and C-Suite executives.",
        "Organic environment free of visual clutter: strictly 1 brand per industry sector.",
        "Direct brand alignment with timeless equestrian heritage, nobility, power, and high prestige."
      ],
      badgeEs: "VISIÓN",
      badgeEn: "VISION",
      badge: "VISIÓN"
    },
    {
      slideNum: "03",
      tag: "EL ANFITRIÓN & SEDE",
      tagEn: "THE HOST & VENUE",
      titleEs: "El Rey Polo Country Club: La Joya Ecuestre del Caribe Mexicano",
      titleEn: "El Rey Polo Country Club: The Equestrian Jewel of the Mexican Caribbean",
      subtitleEs: "Ruta de los Cenotes Km 11, Puerto Morelos · A 25 min de Cancún y Playa del Carmen",
      subtitleEn: "Cenote Route Km 11, Puerto Morelos · 25 minutes from Cancun and Playa del Carmen",
      image: "assets/photos/real_palapa_interior.jpg",
      pointsEs: [
        "Cancha oficial reglamentaria internacional (300 x 200m) con césped Bermuda y drenaje láser de última generación.",
        "Club House de palapa maya monumental con salones VIP, terrazas elevadas, alberca panorámica y helipuerto oficial.",
        "Reconocido como el centro ecuestre y de polo más exclusivo de todo el sureste mexicano."
      ],
      pointsEn: [
        "World-class regulation polo ground (300 x 200m) with laser drainage and championship Bermuda turf.",
        "Monumental Mayan palapa clubhouse with VIP hospitality lounges, elevated viewing terraces, panoramic pool, and helipad.",
        "Recognized as the premier equestrian and polo destination across the Mexican Caribbean."
      ],
      badgeEs: "SEDE OFICIAL",
      badgeEn: "OFFICIAL VENUE",
      badge: "SEDE OFICIAL"
    },
    {
      slideNum: "04",
      tag: "EL TORNEO INTERNACIONAL",
      tagEn: "THE CHAMPIONSHIP",
      titleEs: "6 Selecciones Nacionales de Élite en Competencia",
      titleEn: "6 Elite National Teams in High-Goal Competition",
      subtitleEs: "España, Alemania, México, Canadá, Estados Unidos y Argentina",
      subtitleEn: "Spain, Germany, Mexico, Canada, United States and Argentina",
      image: "assets/photos/real_teams_lineup.jpg",
      pointsEs: [
        "6 países con vasta tradición de polo disputando la copa oficial Nations Cup 2027.",
        "Jornadas clasificatorias, semifinales y la gran final de campeonato con premiación de gala.",
        "Participación de polistas de alto hándicap, criadores de renombre y comitivas internacionales."
      ],
      pointsEn: [
        "6 nations with distinguished polo heritage competing for the official Nations Cup 2027 trophy.",
        "Qualifying chukkers, semifinals, and the grand championship final with an evening awards gala.",
        "High-goal international players, renowned equine breeders, and distinguished global delegations."
      ],
      badgeEs: "TORNEO",
      badgeEn: "CHAMPIONSHIP",
      badge: "TORNEO"
    },
    {
      slideNum: "05",
      tag: "AUDIENCIA DE ALTO STANDING",
      tagEn: "HIGH-STANDING AUDIENCE",
      titleEs: "Demografía C-Level y Patrimonios de Alto Standing (NSE A, B y ABC+)",
      titleEn: "C-Level Demographics and High-Standing Audience (NSE A, B & ABC+)",
      subtitleEs: "Hombres y mujeres de 25 a 55 años con suprema capacidad de consumo e inversión",
      subtitleEn: "Affluent executives aged 25 to 55 with supreme purchasing power and capital allocation authority",
      image: "assets/photos/real_crowd_cheering.jpg",
      pointsEs: [
        "60% Directores Generales (CEOs), Presidentes de Consejo, Socios Directores e Inversionistas de Family Offices.",
        "40% Coleccionistas de arte, propietarios de yates, diplomáticos y personalidades de la alta sociedad.",
        "Tiempo de permanencia promedio superior a 6 horas por jornada en un entorno distendido y receptivo."
      ],
      pointsEn: [
        "60% Chief Executive Officers (CEOs), Board Chairs, Managing Partners, and Family Office Principals.",
        "40% Art collectors, yacht owners, international diplomats, and distinguished high-society figures.",
        "Average dwell time exceeding 6 hours per day in a relaxed, highly receptive hospitality atmosphere."
      ],
      badgeEs: "AUDIENCIA",
      badgeEn: "DEMOGRAPHICS",
      badge: "AUDIENCIA"
    },
    {
      slideNum: "06",
      tag: "LA EXPERIENCIA & LIFESTYLE",
      tagEn: "THE LIFESTYLE EXPERIENCE",
      titleEs: "4 Jornadas de Emoción Deportiva, Fashion Show & Mixología de Autor",
      titleEn: "4 Days of Championship Polo, Fashion Shows & Bespoke Mixology",
      subtitleEs: "Un festival de estilo de vida que combina chukkers electrizantes, alta cocina y coctelería",
      subtitleEn: "A lifestyle festival pairing electrifying chukkers, haute cuisine, and fine champagne",
      image: "assets/photos/real_social_sunset.jpg",
      pointsEs: [
        "Tradición del «Divot Stomping» (pisado de pasto) al medio tiempo con copas de champagne de cortesía.",
        "Desfile de modas internacional sobre la pasarela de la palapa club con diseñadores de alta costura.",
        "Sunset after-polo: mixología de autor, selectores de vinilo internacionales y cena maridaje al atardecer."
      ],
      pointsEn: [
        "Traditional half-time Divot Stomping paired with signature complimentary champagne flutes.",
        "International runway fashion show on the clubhouse palapa featuring haute couture designers.",
        "Sunset after-polo: bespoke mixology, international vinyl selectors, and fine dining under the Caribbean sky."
      ],
      badgeEs: "EXPERIENCIA",
      badgeEn: "LIFESTYLE",
      badge: "EXPERIENCIA"
    },
    {
      slideNum: "07",
      tag: "VISIBILIDAD 360°",
      tagEn: "360° BRAND VISIBILITY",
      titleEs: "Presencia Omnipresente y de Máxima Categoría para su Marca",
      titleEn: "Ubiquitous High-Prestige Presence Across All Touchpoints",
      subtitleEs: "Branding en faldones de cancha, pressboard oficial, jerseys de equipos y material digital",
      subtitleEn: "Field perimeter boarding, official pressboard, team jerseys, and bespoke digital campaigns",
      image: "assets/photos/aerial_field_drone_rect.jpg",
      pointsEs: [
        "Exposición estelar en faldones perimetrales de 300 metros frente a palcos VIP y transmisiones.",
        "Presencia en photocall oficial de prensa por el que desfilan todos los invitados, jugadores y celebridades.",
        "Integración en el video reel cinematográfico del torneo con distribución en plataformas premium."
      ],
      pointsEn: [
        "Prime perimeter field boarding along the 300-meter sidelines facing VIP pavilions and camera angles.",
        "Prominent logo placement on the official press photocall welcoming all VIP guests and team players.",
        "Native brand integration in the tournament's official cinematic highlight reel distributed across luxury channels."
      ],
      badgeEs: "VISIBILIDAD",
      badgeEn: "VISIBILITY",
      badge: "VISIBILIDAD"
    },
    {
      slideNum: "08",
      tag: "ESTRUCTURA DE PATROCINIO",
      tagEn: "SPONSORSHIP STRUCTURE",
      titleEs: "Estructura Comercial 2027: 4 Niveles Corporativos & Patrocinios por Activo",
      titleEn: "Commercial Structure 2027: 4 Corporate Tiers & Exclusive Asset Sponsorships",
      subtitleEs: "Platino ($45,000 USD), Oro ($28,000 USD), Plata ($14,000 USD) y Bronce ($9,000 USD)",
      subtitleEn: "Platinum ($45,000 USD), Gold ($28,000 USD), Silver ($14,000 USD) & Bronze ($9,000 USD)",
      image: "assets/photos/palco_networking_rect.jpg",
      pointsEs: [
        "Niveles Corporativos con exclusividad de sector: Platino ($45k USD), Oro ($28k USD), Plata ($14k USD) y Bronce ($9k USD).",
        "Patrocinios Exclusivos por activo: Nombre del Torneo ($80k USD), Patrocinio de Equipo ($25k USD) y Locutor Oficial ($20k USD).",
        "Activos de Alta Visibilidad: Pantallas Gigantes ($20k USD), Nombre del Campo ($15k USD), Cartelera ($5k USD) y Premios de Honor ($5k USD c/u)."
      ],
      pointsEn: [
        "Corporate Tiers with sector exclusivity: Platinum ($45k USD), Gold ($28k USD), Silver ($14k USD) & Bronze ($9k USD).",
        "Exclusive Asset Sponsorships: Tournament Title Naming ($80k USD), Team Jersey ($25k USD) & Official Announcer ($20k USD).",
        "High-Visibility Assets: Giant LED Screens ($20k USD), Field Naming ($15k USD), Boarding ($5k USD) & Honor Trophies ($5k USD each)."
      ],
      badgeEs: "ESTRUCTURA",
      badgeEn: "TIER STRUCTURE",
      badge: "ESTRUCTURA"
    },
    {
      slideNum: "09",
      tag: "MATRIZ DE PATROCINIOS EXCLUSIVOS",
      tagEn: "EXCLUSIVE SPONSORSHIPS MATRIX",
      titleEs: "Inversión por Activo Específico: Del Patrocinador Titular a Premios de Honor",
      titleEn: "Investment by Specific Asset: From Tournament Naming to Trophy Awards",
      subtitleEs: "D. Torneo ($80k USD) · C. Equipo ($25k USD) · E. Locutor Oficial ($20k USD) · B. Pantallas ($20k USD)",
      subtitleEn: "D. Tournament ($80k USD) · C. Team ($25k USD) · E. Announcer ($20k USD) · B. Screens ($20k USD)",
      image: "assets/photos/terrace_pergolado_rect.jpg",
      pointsEs: [
        "D. Patrocinador Nombre del Torneo: $80,000 USD ($1,400,000 MXN) — Presencia en todos los puntos del club y fixture oficial.",
        "C. Patrocinio de Equipo Exclusivo: $25,000 USD ($437,500 MXN) por selección (España, Alemania, México, Canadá, Estados Unidos o Argentina).",
        "E, B, F, A y G: Locutor Oficial ($20k USD), Pantallas ($20k USD), Nombre del Campo ($15k USD), Cartelera ($5k USD) y Premios Mejor Jugador/Caballo ($5k USD c/u)."
      ],
      pointsEn: [
        "D. Tournament Title Naming Partner: $80,000 USD ($1,400,000 MXN) — Ubiquitous presence across all venue touchpoints and broadcasts.",
        "C. Exclusive Team Jersey Sponsor: $25,000 USD ($437,500 MXN) per nation (Spain, Germany, Mexico, Canada, USA or Argentina).",
        "E, B, F, A & G: Official Announcer ($20k USD), Giant LED Screens ($20k USD), Field ($15k USD), Boarding ($5k USD) & MVP/Horse Awards ($5k USD each)."
      ],
      badgeEs: "MATRIZ COMERCIAL",
      badgeEn: "COMMERCIAL MATRIX",
      badge: "MATRIZ COMERCIAL"
    },
    {
      slideNum: "10",
      tag: "ACTIVACIONES A MEDIDA",
      tagEn: "BESPOKE ACTIVATIONS",
      titleEs: "Oportunidades Personalizadas para Sectores de Alto Standing",
      titleEn: "Customized Brand Activations for High-Standing Verticals",
      subtitleEs: "Alta Relojería, Automotriz, Champagne, Aviación Privada, Bienes Raíces y Banca Privada",
      subtitleEn: "Haute Horlogerie, Supercars, Fine Champagne, Private Aviation, Real Estate & Wealth Management",
      image: "assets/photos/pool_autoshow_rect.jpg",
      pointsEs: [
        "Exhibición de automóviles de lujo y supercars junto a la alberca central con prueba de manejo para invitados VIP.",
        "Cavas y salones privados de degustación para firmas de champagne, vinos de culto y alta gastronomía.",
        "Espacio de hospitalidad exclusivo para reuniones confidenciales con clientes de alto patrimonio."
      ],
      pointsEn: [
        "Bespoke supercar display alongside the central pool deck with private test-drive appointments for VIPs.",
        "Private tasting lounges for prestige champagne houses, rare spirits, and culinary caviar pairings.",
        "Dedicated hospitality pavilions designed for confidential advisory sessions with high-net-worth clients."
      ],
      badgeEs: "ACTIVACIONES",
      badgeEn: "ACTIVATIONS",
      badge: "ACTIVACIONES"
    },
    {
      slideNum: "11",
      tag: "PLAN DE DIFUSIÓN & PR",
      tagEn: "MEDIA & PR CAMPAIGN",
      titleEs: "+2.5 Millones de Impactos Calificados en Medios y Plataformas Digitales",
      titleEn: "+2.5 Million Qualified Impressions Across Luxury Media & Digital PR",
      subtitleEs: "Campaña hipersegmentada a perfiles C-Level en México, Estados Unidos, Canadá y Europa",
      subtitleEn: "Hyper-targeted campaign aimed at C-Suite audiences across Mexico, the United States, Canada, and Europe",
      image: "assets/photos/drone_field_match_rect.jpg",
      pointsEs: [
        "Cobertura editorial en las principales revistas de estilo de vida, negocios, aviación y turismo de lujo.",
        "Estrategia de relaciones públicas con líderes de opinión, celebridades ecuestres y embajadores de marca.",
        "Generación de contenido audiovisual 4K y banco de imágenes profesionales para uso corporativo de los patrocinadores."
      ],
      pointsEn: [
        "Comprehensive editorial coverage across leading luxury lifestyle, private wealth, business, and equestrian publications.",
        "Strategic PR outreach engaging high-profile tastemakers, equestrian patrons, and luxury ambassadors.",
        "Delivery of 4K cinematic highlight footage and high-resolution photo archives for sponsor marketing usage."
      ],
      badgeEs: "DIFUSIÓN & PR",
      badgeEn: "MEDIA & PR",
      badge: "DIFUSIÓN & PR"
    },
    {
      slideNum: "12",
      tag: "RETORNO Y MÉTRICAS (ROI)",
      tagEn: "METRICS & ROI AUDIT",
      titleEs: "Auditoría Post-Evento, Clipping de Medios y Base de Datos PR",
      titleEn: "Post-Event Media Audit, PR Clippings & Executive Networking Data",
      subtitleEs: "Garantizamos métricas cuantitativas y cualitativas que respaldan su inversión",
      subtitleEn: "Delivering verifiable qualitative and quantitative metrics to validate your investment",
      image: "assets/photos/polo_match_gallop_rect.jpg",
      pointsEs: [
        "Reporte integral de valor publicitario equivalente (VPE) y alcance total alcanzado en medios de comunicación.",
        "Auditoría fotográfica y videográfica detallada de todas las presencias de marca en cancha y zonas de hospitalidad VIP.",
        "Oportunidades de seguimiento comercial directo con los tomadores de decisiones acreditados durante el evento."
      ],
      pointsEn: [
        "Comprehensive post-event report calculating Equivalent Advertising Value (EAV) and verified audience reach.",
        "Detailed photographic and video audit cataloging every brand placement across grounds and hospitality pavilions.",
        "Targeted business development follow-up pathways with accredited C-Level executives attending the tournament."
      ],
      badgeEs: "RETORNO ROI",
      badgeEn: "METRICS & ROI",
      badge: "RETORNO ROI"
    },
    {
      slideNum: "13",
      tag: "DISPONIBILIDAD POR SECTOR",
      tagEn: "INDUSTRY EXCLUSIVITY",
      titleEs: "Regla Inquebrantable: Estricto Límite de 1 Sola Marca por Sector Industrial",
      titleEn: "Unbreakable Standard: Strict Limit of 1 Single Brand per Industry Sector",
      subtitleEs: "La reserva de exclusividad se otorga por estricto orden de formalización comercial",
      subtitleEn: "Category reservation lock is granted strictly in order of commercial confirmation",
      image: "assets/photos/stewards_prep_rect.jpg",
      pointsEs: [
        "Blindaje absoluto: su competencia directa queda terminantemente excluida del evento una vez formalizada la firma.",
        "Sectores prioritarios: Alta Relojería, Automotriz, Banca Privada, Champagne, Aviación, Bienes Raíces y Moda.",
        "Garantía de entorno limpio, exclusivo y de máxima relevancia para los asistentes de alto standing."
      ],
      pointsEn: [
        "Total commercial exclusivity: direct competitors are strictly barred once category lock is formalized.",
        "Priority sectors: Haute Horlogerie, Luxury Automotive, Private Wealth, Champagne, Aviation, Prime Real Estate, and Fashion.",
        "Uncluttered, prestigious environment ensuring maximum visibility and brand salience for affluent patrons."
      ],
      badgeEs: "EXCLUSIVIDAD",
      badgeEn: "EXCLUSIVITY",
      badge: "EXCLUSIVIDAD"
    },
    {
      slideNum: "14",
      tag: "SIGUIENTE PASO & PROTOCOLO",
      tagEn: "CLOSING PROTOCOL",
      titleEs: "Reunión de Alineación Privada con el Comité Organizador",
      titleEn: "Private Executive Alignment Meeting with the Committee",
      subtitleEs: "Sesión ejecutiva de 30 minutos presencial o por videoconferencia segura",
      subtitleEn: "30-minute executive briefing in-person or via secure videoconference",
      image: "assets/photos/sunset_grill_rect.jpg",
      pointsEs: [
        "Paso 1: Solicitud formal de disponibilidad de categoría y emisión del acuerdo de confidencialidad (NDA).",
        "Paso 2: Presentación de la propuesta comercial personalizada con plano de activación en El Rey Polo Club.",
        "Paso 3: Reserva y bloqueo de categoría mediante carta de intención (LOI) y formalización de patrocinio."
      ],
      pointsEn: [
        "Step 1: Formal inquiry on industry sector availability and execution of bilateral Non-Disclosure Agreement (NDA).",
        "Step 2: Presentation of tailored sponsorship proposal with venue spatial activation mapping.",
        "Step 3: Category lock formalized via Letter of Intent (LOI) and final sponsorship partnership agreement."
      ],
      badgeEs: "PROTOCOLO",
      badgeEn: "NEXT STEPS",
      badge: "PROTOCOLO"
    }
  ];

  // --- 3. EDITORIAL GALLERY DATA (12 MASTER SHOTS) ---
  const galleryData = [
    {
      index: "01",
      titleEs: "Perspectiva Aérea · Cancha Oficial de Polo (300 x 200m)",
      titleEn: "Aerial Perspective · Regulation Polo Ground (300 x 200m)",
      descEs: "Vista aérea de las 6 hectáreas de césped reglamentario con la firma de Nations Cup 2027, enmarcada en el corazón de la selva maya.",
      descEn: "Top-down aerial perspective of the 6-hectare championship Bermuda grass pitch with Nations Cup 2027 branding, framed by the Mayan jungle.",
      image: "assets/photos/campo_aereo_nationscup.jpg",
      categoryEs: "PERSPECTIVA AÉREA",
      categoryEn: "AERIAL VIEW"
    },
    {
      index: "02",
      titleEs: "Arribo VIP y Fachada de El Rey Polo Country Club",
      titleEn: "VIP Arrival & Facade of El Rey Polo Country Club",
      descEs: "Arquitectura tropical contemporánea enmarcada por la exuberante selva maya de la Ruta de los Cenotes.",
      descEn: "Contemporary tropical architecture framed by the lush Mayan jungle on the Cenote Route.",
      image: "assets/stills/entrada_club.jpg",
      categoryEs: "ARQUITECTURA",
      categoryEn: "ARCHITECTURE"
    },
    {
      index: "03",
      titleEs: "Clubhouse, Escenario Principal & Alberca Panorámica",
      titleEn: "Clubhouse, Main Stage & Panoramic Poolside Deck",
      descEs: "Vista aérea del complejo central: arquitectura de palapa, escenario con pantalla gigante Nations Cup 2027, área lounge y alberca para eventos.",
      descEn: "Aerial view of the central hospitality hub: thatched palapa architecture, main Nations Cup 2027 LED stage, poolside lounge, and shaded pergolas.",
      image: "assets/photos/clubhouse_aereo_escenario.jpg",
      categoryEs: "CLUBHOUSE & ESCENARIO",
      categoryEn: "CLUBHOUSE & STAGE"
    },
    {
      index: "04",
      titleEs: "Exhibición de Superdeportivos & Activaciones Poolside",
      titleEn: "Supercar Showcase & Poolside Activations",
      descEs: "Espacios panorámicos junto a la alberca para exhibición estática de superdeportivos, yates y alta relojería.",
      descEn: "Scenic poolside platforms for static exhibitions of supercars, private marine models, and luxury showcases.",
      image: "assets/photos/pool_autoshow_rect.jpg",
      categoryEs: "AUTOMOTRIZ",
      categoryEn: "SUPERCARS"
    },
    {
      index: "05",
      titleEs: "Campo Oficial a Nivel de Césped",
      titleEn: "Championship Polo Ground at Turf Level",
      descEs: "Campo de césped bermuda reglamentario de 300 x 200 m, único en el Sureste mexicano para torneos internacionales de alto hándicap.",
      descEn: "Regulation 300 x 200 m Bermuda grass pitch, unparalleled in the Mexican Caribbean for international polo.",
      image: "assets/photos/real_field_pitch.jpg",
      categoryEs: "CAMPO CENTRAL",
      categoryEn: "GRAND PITCH"
    },
    {
      index: "06",
      titleEs: "Salón VIP de Hospitalidad con Mixología de Autor",
      titleEn: "VIP Hospitality Lounge with Bespoke Mixology",
      descEs: "Espacio central de palapa de lujo con techos de doble altura, barras de mármol y coctelería internacional.",
      descEn: "Grand thatched luxury palapa pavilion with soaring ceilings, marble bars, and premium international mixology.",
      image: "assets/stills/mixologia_cocktail.jpg",
      categoryEs: "HOSPITALIDAD",
      categoryEn: "HOSPITALITY"
    },
    {
      index: "07",
      titleEs: "Mesas VIP Privadas y Palcos Frente a la Cancha",
      titleEn: "Private VIP Grandstand Tables Overlooking the Pitch",
      descEs: "Vistas privilegiadas al juego con servicio personalizado de meseros y champagne en cada chukker.",
      descEn: "Prime viewing of high-octane chukkers with dedicated bottle service and tailored culinary courses.",
      image: "assets/photos/palco_networking_rect.jpg",
      categoryEs: "EXPERIENCIA VIP",
      categoryEn: "VIP ACCESS"
    },
    {
      index: "08",
      titleEs: "Brindis de Celebración & Casas de Champagne",
      titleEn: "Celebration Toasts & Grand Marque Champagne",
      descEs: "Servicio exclusivo de grand marques de champagne servidas en copas de cristal durante cada jornada de juego.",
      descEn: "Exclusive grand marque champagne service poured in crystal flutes during every chukker of championship play.",
      image: "assets/stills/champagne_toast.jpg",
      categoryEs: "CHAMPAGNE VIP",
      categoryEn: "CHAMPAGNE"
    },
    {
      index: "09",
      titleEs: "Pasarela del Fashion Show Runway & Pabellón de Arte",
      titleEn: "Fashion Show Runway & Contemporary Art Pavilion",
      descEs: "Desfiles de moda resortwear de diseñadores internacionales y subastas privadas de arte contemporáneo.",
      descEn: "International designer resortwear runway shows and private contemporary art showcases under the stars.",
      image: "assets/photos/stage_runway_rect.jpg",
      categoryEs: "ALTA COSTURA",
      categoryEn: "FASHION & ART"
    },
    {
      index: "10",
      titleEs: "Stand de Marca & Concourse de Networking",
      titleEn: "Brand Showcase Stand & Networking Concourse",
      descEs: "Pabellones comerciales de alta gama para interacción directa con directivos, presidentes y líderes empresariales.",
      descEn: "High-spec exhibition pavilions for direct interaction with chairs, C-level executives, and affluent guests.",
      image: "assets/photos/commercial_stands_rect.jpg",
      categoryEs: "NETWORKING",
      categoryEn: "NETWORKING"
    },
    {
      index: "11",
      titleEs: "Cóctel al Atardecer & Sesiones de After-Polo",
      titleEn: "Golden Hour Cocktail & After-Polo Sessions",
      descEs: "El atardecer en la selva caribeña acompañado de selectores de música internacionales y gastronomía al grill.",
      descEn: "Riviera Maya sunset accompanied by international vinyl selectors and bespoke woodfire barbecue.",
      image: "assets/photos/sunset_grill_rect.jpg",
      categoryEs: "ATARDECER",
      categoryEn: "AFTER-POLO"
    },
    {
      index: "12",
      titleEs: "Terraza & Alberca Central de El Rey Polo Country Club",
      titleEn: "Central Pool Terrace & VIP Social Deck",
      descEs: "Área de alberca panorámica, pérgolas de teca y camastros VIP para el cóctel posterior a los partidos.",
      descEn: "Panoramic pool deck with teak pergolas and VIP loungers for sunset after-polo gatherings.",
      image: "assets/photos/real_pool_terrace.jpg",
      categoryEs: "CLUB & ALBERCA",
      categoryEn: "POOL & CLUB"
    }
  ];

  // --- 4. GEOLOCATION & LANGUAGE DETECTION ---
  async function detectLanguage() {
    const saved = localStorage.getItem('nationscup_lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      return saved;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      // Lightweight geolocation check
      const response = await fetch('https://api.country.is/', { signal: controller.signal });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const country = (data.country || '').toUpperCase();
        const hispanicCountries = ['MX', 'ES', 'AR', 'CO', 'CL', 'PE', 'UY', 'PY', 'BO', 'EC', 'CR', 'PA', 'GT', 'HN', 'SV', 'NI', 'DO', 'PR'];
        if (hispanicCountries.includes(country)) {
          return 'es';
        } else {
          return 'en';
        }
      }
    } catch (e) {
      // Fallback silently to navigator.language
    }

    // Native browser language fallback
    const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }
    return 'en';
  }

  window.setWebsiteLanguage = function (lang) {
    updateLanguageDOM(lang, false);
    const msg = lang === 'es' 
      ? 'Idioma cambiado a Español 🇪🇸' 
      : 'Language switched to English 🇺🇸';
    if (typeof showToast === 'function') {
      showToast(msg);
    }
  };

  // --- 5. RENDER TRANSLATIONS (DOM UPDATE) ---
  function updateLanguageDOM(lang, autoCurrency = true) {
    state.lang = lang;
    localStorage.setItem('nationscup_lang', lang);

    // By default, prices are ALWAYS in USD; currency ONLY changes to MXN if user explicitly chooses MXN.
    // (Preserve user selected currency or default USD regardless of language)

    // Update luxury active pill styling for language toggle
    const pillEs = document.getElementById('lang-toggle-es');
    const pillEn = document.getElementById('lang-toggle-en');
    if (pillEs && pillEn) {
      const activeClass = "lang-pill px-2.5 py-1 text-[11px] font-bold uppercase rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer bg-gradient-to-r from-[#A88344] via-[#D4AF37] to-[#A88344] text-[#07140E] shadow-[0_0_12px_rgba(212,175,55,0.45)] scale-[1.03]";
      const inactiveClass = "lang-pill px-2.5 py-1 text-[11px] font-medium uppercase rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer text-[#F3E5AB]/75 hover:text-white hover:bg-white/10";
      
      if (lang === 'es') {
        pillEs.className = activeClass;
        pillEn.className = inactiveClass;
      } else {
        pillEn.className = activeClass;
        pillEs.className = inactiveClass;
      }
    }

    // Translate all [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    const dict = i18n[lang];
    document.documentElement.setAttribute('lang', lang);
    if (dict['page_meta_title']) {
      document.title = dict['page_meta_title'];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['page_meta_desc']) {
      metaDesc.setAttribute('content', dict['page_meta_desc']);
    }
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate all [data-i18n-ph] (placeholders)
    const phElements = document.querySelectorAll('[data-i18n-ph]');
    phElements.forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Translate all [data-i18n-title] (tooltips and titles)
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Translate all [data-i18n-aria] (accessibility labels)
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Synchronize video file with current language
    syncVideoWithLanguage(lang);

    // Synchronize bilingual legal modal contents
    const isEs = lang === 'es';
    const privEs = document.getElementById('legal-privacy-es');
    const privEn = document.getElementById('legal-privacy-en');
    const termsEs = document.getElementById('legal-terms-es');
    const termsEn = document.getElementById('legal-terms-en');
    if (privEs) privEs.classList.toggle('hidden', !isEs);
    if (privEn) privEn.classList.toggle('hidden', isEs);
    if (termsEs) termsEs.classList.toggle('hidden', !isEs);
    if (termsEn) termsEn.classList.toggle('hidden', isEs);

    // Refresh dynamic components
    renderPitchDeckSlide();
    updateCurrencyDisplay();
    updateFormWhatsAppPreview();
  }

  // --- 6. VIDEO CONTROLLER (STREAMLINED) ---
  function initVideoPlayer() {
    // Sizzle reel autoplay loop handling
    const video = document.getElementById('sizzle-video');
    if (video) {
      video.play().catch(() => {});
    }
  }

  function syncVideoWithLanguage(lang) {
    const video = document.getElementById('sizzle-video');
    if (!video) return;

    const currentTime = video.currentTime;
    const isPaused = video.paused;
    const isMuted = video.muted;

    const newSrc = lang === 'en' ? 'assets/video/sizzle_ing.mp4' : 'assets/video/sizzle_esp.mp4';
    if (!video.src.endsWith(newSrc)) {
      video.src = newSrc;
      video.currentTime = currentTime;
      video.muted = isMuted;
      if (!isPaused) {
        video.play().catch(() => {});
      }
    }
  }

  // --- 6B. ULTRA-LUXURY REACT-LIKE VIDEO THEATER MODAL ENGINE ---
  function formatVideoTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function initTheaterModal() {
    const theaterVideo = document.getElementById('theater-video-element');
    const progressBar = document.getElementById('theater-progress-bar');
    const progressHandle = document.getElementById('theater-progress-handle');
    const currTimeEl = document.getElementById('theater-curr-time');
    const durationEl = document.getElementById('theater-duration');
    const playBtnLabel = document.getElementById('theater-play-btn-label');
    const playBtnIcon = document.getElementById('theater-play-btn-icon');
    const centerPlayIcon = document.getElementById('theater-center-play-icon');

    if (!theaterVideo) return;

    theaterVideo.addEventListener('timeupdate', () => {
      if (theaterVideo.duration) {
        const pct = (theaterVideo.currentTime / theaterVideo.duration) * 100;
        if (progressBar) progressBar.style.width = `${pct}%`;
        if (progressHandle) progressHandle.style.left = `${pct}%`;
        if (currTimeEl) currTimeEl.textContent = formatVideoTime(theaterVideo.currentTime);
      }
    });

    theaterVideo.addEventListener('loadedmetadata', () => {
      if (durationEl) durationEl.textContent = formatVideoTime(theaterVideo.duration);
    });

    theaterVideo.addEventListener('play', () => {
      if (playBtnLabel) playBtnLabel.textContent = state.lang === 'es' ? "Pausar" : "Pause";
      if (playBtnIcon) {
        playBtnIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
      }
      if (centerPlayIcon) {
        centerPlayIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
      }
    });

    theaterVideo.addEventListener('pause', () => {
      if (playBtnLabel) playBtnLabel.textContent = state.lang === 'es' ? "Reproducir" : "Play";
      if (playBtnIcon) {
        playBtnIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
      }
      if (centerPlayIcon) {
        centerPlayIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
      }
    });

    theaterVideo.addEventListener('ended', () => {
      theaterVideo.currentTime = 0;
      if (progressBar) progressBar.style.width = '0%';
      if (progressHandle) progressHandle.style.left = '0%';
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      const modal = document.getElementById('video-theater-modal');
      if (!modal || modal.classList.contains('hidden')) return;

      if (e.key === 'Escape') {
        window.closeVideoTheater();
      } else if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        window.toggleTheaterPlay();
      } else if (e.key === 'm' || e.key === 'M') {
        window.toggleTheaterMute();
      } else if (e.key === 'f' || e.key === 'F') {
        window.toggleTheaterFullscreen();
      }
    });
  }

  window.openVideoTheater = function (optLang) {
    const modal = document.getElementById('video-theater-modal');
    const theaterVideo = document.getElementById('theater-video-element');
    const heroVideo = document.getElementById('sizzle-video');
    if (!modal || !theaterVideo) return;

    // Pause hero background video
    if (heroVideo && !heroVideo.paused) {
      heroVideo.pause();
    }

    const selectedLang = optLang || state.lang || 'es';
    const videoSrc = selectedLang === 'en' ? 'assets/video/sizzle_ing.mp4' : 'assets/video/sizzle_esp.mp4';

    if (!theaterVideo.src.endsWith(videoSrc)) {
      theaterVideo.src = videoSrc;
    }

    // Set unmuted with full volume
    theaterVideo.muted = false;
    theaterVideo.volume = 1.0;

    const volSlider = document.getElementById('theater-vol-slider');
    if (volSlider) volSlider.value = 1.0;

    // Update in-theater language toggle buttons
    updateTheaterLangButtons(selectedLang);

    // Show modal & disable background body scroll
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Play unmuted immediately
    const playPromise = theaterVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.warn("Audio autoplay policy notice:", err);
      });
    }
  };

  window.closeVideoTheater = function () {
    const modal = document.getElementById('video-theater-modal');
    const theaterVideo = document.getElementById('theater-video-element');
    const heroVideo = document.getElementById('sizzle-video');
    if (!modal || !theaterVideo) return;

    theaterVideo.pause();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';

    // Resume ambient hero video
    if (heroVideo) {
      heroVideo.play().catch(() => {});
    }
  };

  window.toggleTheaterPlay = function () {
    const theaterVideo = document.getElementById('theater-video-element');
    if (!theaterVideo) return;

    if (theaterVideo.paused) {
      theaterVideo.play();
    } else {
      theaterVideo.pause();
    }
  };

  window.toggleTheaterMute = function () {
    const theaterVideo = document.getElementById('theater-video-element');
    const volIcon = document.getElementById('theater-vol-icon');
    const volSlider = document.getElementById('theater-vol-slider');
    if (!theaterVideo) return;

    theaterVideo.muted = !theaterVideo.muted;
    if (theaterVideo.muted) {
      if (volSlider) volSlider.value = 0;
      if (volIcon) {
        volIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>`;
      }
    } else {
      theaterVideo.volume = theaterVideo.volume || 1.0;
      if (volSlider) volSlider.value = theaterVideo.volume;
      if (volIcon) {
        volIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>`;
      }
    }
  };

  window.setTheaterVolume = function (val) {
    const theaterVideo = document.getElementById('theater-video-element');
    const volIcon = document.getElementById('theater-vol-icon');
    if (!theaterVideo) return;

    const volume = parseFloat(val);
    theaterVideo.volume = volume;
    theaterVideo.muted = volume === 0;

    if (volIcon) {
      if (volume === 0) {
        volIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>`;
      } else {
        volIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>`;
      }
    }
  };

  window.seekTheaterVideo = function (e) {
    const theaterVideo = document.getElementById('theater-video-element');
    const progressContainer = document.getElementById('theater-progress-container');
    if (!theaterVideo || !progressContainer || !theaterVideo.duration) return;

    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    theaterVideo.currentTime = ratio * theaterVideo.duration;
  };

  function updateTheaterLangButtons(lang) {
    const btnEs = document.getElementById('theater-lang-es');
    const btnEn = document.getElementById('theater-lang-en');
    if (btnEs && btnEn) {
      if (lang === 'es') {
        btnEs.className = "px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37] text-[#07140E] transition-all";
        btnEn.className = "px-3 py-1 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-all";
      } else {
        btnEn.className = "px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37] text-[#07140E] transition-all";
        btnEs.className = "px-3 py-1 rounded-full text-xs font-medium text-gray-300 hover:text-white transition-all";
      }
    }
  }

  window.setTheaterLanguage = function (lang) {
    const theaterVideo = document.getElementById('theater-video-element');
    if (!theaterVideo) return;

    const currTime = theaterVideo.currentTime;
    const isPaused = theaterVideo.paused;
    const newSrc = lang === 'en' ? 'assets/video/sizzle_ing.mp4' : 'assets/video/sizzle_esp.mp4';

    if (!theaterVideo.src.endsWith(newSrc)) {
      theaterVideo.src = newSrc;
      theaterVideo.currentTime = currTime;
      theaterVideo.muted = false;
      if (!isPaused) {
        theaterVideo.play().catch(() => {});
      }
    }
    updateTheaterLangButtons(lang);
    if (typeof setLanguage === 'function' && state.lang !== lang) {
      setLanguage(lang);
    }
  };

  window.toggleTheaterFullscreen = function () {
    const theaterVideo = document.getElementById('theater-video-element');
    if (!theaterVideo) return;

    if (!document.fullscreenElement) {
      if (theaterVideo.requestFullscreen) {
        theaterVideo.requestFullscreen();
      } else if (theaterVideo.webkitRequestFullscreen) {
        theaterVideo.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // --- 7. PITCH DECK SLIDER ENGINE ---
  function renderPitchDeckSlide() {
    const slide = pitchDeckData[state.currentSlide - 1];
    if (!slide) return;

    const isEs = state.lang === 'es';
    const numEl = document.getElementById('deck-counter-num');
    const totalEl = document.getElementById('deck-counter-total');
    const tagEl = document.getElementById('deck-slide-tag');
    const tagTitleEl = document.getElementById('deck-slide-tag-title');
    const titleEl = document.getElementById('deck-slide-title');
    const subtitleEl = document.getElementById('deck-slide-subtitle');
    const pointsEl = document.getElementById('deck-slide-points');
    const imageEl = document.getElementById('deck-slide-image');
    const badgeEl = document.getElementById('deck-slide-badge');
    const progressEl = document.getElementById('deck-progress-bar');

    if (numEl) numEl.textContent = slide.slideNum;
    if (totalEl) totalEl.textContent = state.totalSlides.toString().padStart(2, '0');
    if (tagEl) tagEl.textContent = isEs ? slide.tag : slide.tagEn;
    if (tagTitleEl) tagTitleEl.textContent = isEs ? slide.titleEs : slide.titleEn;
    if (titleEl) titleEl.textContent = isEs ? slide.titleEs : slide.titleEn;
    if (subtitleEl) subtitleEl.textContent = isEs ? slide.subtitleEs : slide.subtitleEn;
    if (badgeEl) badgeEl.textContent = isEs ? (slide.badgeEs || slide.badge) : (slide.badgeEn || slide.badge);

    if (pointsEl) {
      const points = isEs ? slide.pointsEs : slide.pointsEn;
      pointsEl.innerHTML = points.map(pt => `
        <li class="flex items-start gap-2.5">
          <span class="material-symbols-outlined text-warm-bronze text-[18px] shrink-0 mt-0.5">verified</span>
          <span class="text-sm md:text-[14px] text-racing-green-dark leading-relaxed font-medium">${pt}</span>
        </li>
      `).join('');
    }

    if (imageEl) {
      imageEl.style.opacity = '0.4';
      imageEl.src = slide.image;
      if (imageEl.complete) {
        imageEl.style.opacity = '1';
      } else {
        imageEl.onload = () => {
          imageEl.style.opacity = '1';
        };
      }
    }

    if (progressEl) {
      const pct = (state.currentSlide / state.totalSlides) * 100;
      progressEl.style.width = `${pct}%`;
    }

    // Update thumbnail indicator strip
    renderDeckThumbnails();
  }

  function renderDeckThumbnails() {
    const strip = document.getElementById('deck-thumbnails-strip');
    if (!strip) return;

    strip.innerHTML = pitchDeckData.map((s, idx) => {
      const active = (idx + 1) === state.currentSlide;
      return `
        <button 
          type="button" 
          onclick="window.goToDeckSlide(${idx + 1})" 
          class="h-2 transition-all duration-300 rounded-full cursor-pointer ${
            active 
              ? 'w-7 bg-gradient-to-r from-[#A88344] via-[#D4AF37] to-[#A88344] shadow-[0_0_8px_rgba(212,175,55,0.45)]' 
              : 'w-2 bg-[#727974]/40 hover:bg-[#A88344]/80 hover:scale-125'
          }"
          aria-label="Lámina ${idx + 1}"
          title="Lámina ${idx + 1}: ${s.titleEs}"
        ></button>
      `;
    }).join('');

    const subNum = document.getElementById('deck-counter-num-sub');
    if (subNum) {
      subNum.textContent = state.currentSlide.toString().padStart(2, '0');
    }
  }

  window.nextDeckSlide = function () {
    if (state.currentSlide < state.totalSlides) {
      state.currentSlide++;
    } else {
      state.currentSlide = 1;
    }
    renderPitchDeckSlide();
  };

  window.prevDeckSlide = function () {
    if (state.currentSlide > 1) {
      state.currentSlide--;
    } else {
      state.currentSlide = state.totalSlides;
    }
    renderPitchDeckSlide();
  };

  window.goToDeckSlide = function (num) {
    if (num >= 1 && num <= state.totalSlides) {
      state.currentSlide = num;
      renderPitchDeckSlide();
    }
  };

  // Touch Swipe & Keyboard Navigation on Pitch Deck
  function initDeckSwipe() {
    const container = document.getElementById('pitch-deck-container');
    if (!container) return;

    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 50;
      if (touchEndX < touchStartX - threshold) {
        window.nextDeckSlide();
      }
      if (touchEndX > touchStartX + threshold) {
        window.prevDeckSlide();
      }
    }

    // Keyboard support (safeguarded against typing in form inputs)
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        const deckSec = document.getElementById('pitch-deck');
        if (deckSec && isElementInViewport(deckSec)) {
          window.nextDeckSlide();
        }
      } else if (e.key === 'ArrowLeft') {
        const deckSec = document.getElementById('pitch-deck');
        if (deckSec && isElementInViewport(deckSec)) {
          window.prevDeckSlide();
        }
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // --- 8. 360° SPHERICAL TOUR (PANNELLUM) ---
  const scenes360 = {
    lounge: {
      titleEs: "Salón VIP de Hospitalidad",
      titleEn: "VIP Hospitality Lounge",
      title: "Salón VIP de Hospitalidad",
      image: "assets/renders/Palapa interior.jpg",
      yaw: 15,
      pitch: -2,
      hfov: 100
    },
    field: {
      titleEs: "Campo Central & Explanada",
      titleEn: "Main Ground & Concours",
      title: "Campo Central & Explanada",
      image: "assets/renders/Palapa Exterior.jpg",
      yaw: -30,
      pitch: 0,
      hfov: 105
    },
    autoshow: {
      titleEs: "Stands Comerciales & Exhibición de Autos",
      titleEn: "Commercial Pavilions & Concours",
      title: "Stands Comerciales & Exhibición de Autos",
      image: "assets/renders/pool autoshow.jpg",
      yaw: 50,
      pitch: -5,
      hfov: 95
    },
    grill: {
      titleEs: "Terraza Sunset & Asador Gourmet",
      titleEn: "Sunset Terrace & Gourmet Grill",
      title: "Terraza Sunset & Asador Gourmet",
      image: "assets/renders/grill.jpg",
      yaw: 0,
      pitch: -4,
      hfov: 100
    },
    stage: {
      titleEs: "Escenario Fashion Show & Premiación",
      titleEn: "Fashion Show & Awards Stage",
      title: "Escenario Fashion Show & Premiación",
      image: "assets/renders/stage.jpg",
      yaw: -15,
      pitch: 0,
      hfov: 100
    }
  };

  function init360Viewer() {
    if (!window.pannellum) return;

    try {
      state.viewer360 = pannellum.viewer('panorama-container', {
        type: 'equirectangular',
        panorama: scenes360.lounge.image,
        autoLoad: true,
        autoRotate: -1.2,
        compass: false,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        mouseZoom: true,
        hfov: 100,
        minHfov: 60,
        maxHfov: 120,
        pitch: -2,
        yaw: 15
      });
      state.is360Rotating = true;
    } catch (e) {
      console.warn("Pannellum viewer initialization notice:", e);
    }
  }

  window.switch360Scene = function (sceneKey) {
    if (!scenes360[sceneKey] || !state.viewer360) return;

    state.current360Scene = sceneKey;
    const scene = scenes360[sceneKey];

    // Load panorama
    state.viewer360.destroy();
    state.viewer360 = pannellum.viewer('panorama-container', {
      type: 'equirectangular',
      panorama: scene.image,
      autoLoad: true,
      autoRotate: state.is360Rotating ? -1.2 : 0,
      compass: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      mouseZoom: true,
      hfov: scene.hfov,
      minHfov: 60,
      maxHfov: 120,
      pitch: scene.pitch,
      yaw: scene.yaw
    });

    // Update active tab buttons
    const buttons = document.querySelectorAll('[data-360-btn]');
    buttons.forEach(btn => {
      const key = btn.getAttribute('data-360-btn');
      if (key === sceneKey) {
        btn.className = "px-4 py-2 text-xs md:text-sm font-semibold rounded-lg bg-[#d4af37] text-[#07140e] transition-all shadow-md";
      } else {
        btn.className = "px-4 py-2 text-xs md:text-sm font-medium rounded-lg text-gray-300 bg-black/40 border border-white/10 hover:border-[#d4af37]/40 hover:text-white transition-all";
      }
    });
  };

  window.toggle360AutoRotate = function () {
    if (!state.viewer360) return;
    const btn = document.getElementById('tour-btn-autorotate');
    if (state.is360Rotating) {
      state.viewer360.stopAutoRotate();
      state.is360Rotating = false;
      if (btn) btn.classList.remove('bg-[#d4af37]', 'text-[#07140e]');
    } else {
      state.viewer360.startAutoRotate(-1.5);
      state.is360Rotating = true;
      if (btn) btn.classList.add('bg-[#d4af37]', 'text-[#07140e]');
    }
  };

  window.toggle360Gyro = function () {
    if (!state.viewer360) return;
    const btn = document.getElementById('tour-btn-gyro');

    // Check device orientation permissions (e.g. iOS 13+)
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            toggleOrientationControl(btn);
          } else {
            showToast(state.lang === 'es' ? "Permiso de giroscopio denegado en su dispositivo." : "Gyroscope permission denied on device.");
          }
        })
        .catch(err => {
          console.error(err);
          toggleOrientationControl(btn);
        });
    } else {
      toggleOrientationControl(btn);
    }
  };

  function toggleOrientationControl(btn) {
    if (state.isGyroActive) {
      state.viewer360.stopOrientation();
      state.isGyroActive = false;
      if (btn) btn.classList.remove('bg-[#d4af37]', 'text-[#07140e]');
      showToast(state.lang === 'es' ? "Giroscopio desactivado" : "Gyroscope disabled");
    } else {
      try {
        state.viewer360.startOrientation();
        state.isGyroActive = true;
        if (btn) btn.classList.add('bg-[#d4af37]', 'text-[#07140e]');
        showToast(state.lang === 'es' ? "Giroscopio activado · Mueva su teléfono" : "Gyroscope active · Tilt your phone");
      } catch (e) {
        showToast(state.lang === 'es' ? "Giroscopio no soportado en este navegador" : "Gyroscope not supported on this browser");
      }
    }
  }

  window.zoom360In = function () {
    if (!state.viewer360) return;
    const cur = state.viewer360.getHfov();
    state.viewer360.setHfov(Math.max(cur - 12, 50));
  };

  window.zoom360Out = function () {
    if (!state.viewer360) return;
    const cur = state.viewer360.getHfov();
    state.viewer360.setHfov(Math.min(cur + 12, 120));
  };

  window.toggle360Fullscreen = function () {
    if (!state.viewer360) return;
    state.viewer360.toggleFullscreen();
  };

  // --- 9. EDITORIAL GALLERY & LIGHTBOX ---
  window.openLightbox = function (index) {
    state.lightboxIndex = index;
    const modal = document.getElementById('gallery-lightbox-modal');
    const img = document.getElementById('lightbox-image');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');
    const counter = document.getElementById('lightbox-counter');

    if (!modal) return;

    const item = galleryData[index];
    const isEs = state.lang === 'es';

    if (img) img.src = item.image;
    if (title) title.textContent = isEs ? item.titleEs : item.titleEn;
    if (desc) desc.textContent = isEs ? item.descEs : item.descEn;
    if (counter) counter.textContent = `${index + 1} / ${galleryData.length}`;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function () {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  window.lightboxNext = function () {
    const nextIdx = (state.lightboxIndex + 1) % galleryData.length;
    window.openLightbox(nextIdx);
  };

  window.lightboxPrev = function () {
    const prevIdx = (state.lightboxIndex - 1 + galleryData.length) % galleryData.length;
    window.openLightbox(prevIdx);
  };

  // Keyboard escape for lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeLightbox();
    }
  });

  // --- 10. CURRENCY CONVERTER ENGINE ---
      const currencyRates = {
    MXN: {
      symbol: "$",
      code: "MXN",
      platino: "787,500",
      platinoEquivEs: "Equivalente oficial a $45,000 USD",
      platinoEquivEn: "Official equivalent: $45,000 USD",
      oro: "490,000",
      oroEquivEs: "Equivalente oficial a $28,000 USD",
      oroEquivEn: "Official equivalent: $28,000 USD",
      plata: "245,000",
      plataEquivEs: "Equivalente oficial a $14,000 USD",
      plataEquivEn: "Official equivalent: $14,000 USD",
      bronce: "157,500",
      bronceEquivEs: "Equivalente oficial a $9,000 USD",
      bronceEquivEn: "Official equivalent: $9,000 USD"
    },
    USD: {
      symbol: "$",
      code: "USD",
      platino: "45,000",
      platinoEquivEs: "Aprox. $787,500 MXN",
      platinoEquivEn: "Approx. $787,500 MXN",
      oro: "28,000",
      oroEquivEs: "Aprox. $490,000 MXN",
      oroEquivEn: "Approx. $490,000 MXN",
      plata: "14,000",
      plataEquivEs: "Aprox. $245,000 MXN",
      plataEquivEn: "Approx. $245,000 MXN",
      bronce: "9,000",
      bronceEquivEs: "Aprox. $157,500 MXN",
      bronceEquivEn: "Approx. $157,500 MXN"
    },
    EUR: {
      symbol: "€",
      code: "EUR",
      platino: "41,400",
      platinoEquivEs: "Aprox. $45,000 USD",
      platinoEquivEn: "Approx. $45,000 USD",
      oro: "25,750",
      oroEquivEs: "Aprox. $28,000 USD",
      oroEquivEn: "Approx. $28,000 USD",
      plata: "12,880",
      plataEquivEs: "Aprox. $14,000 USD",
      plataEquivEn: "Approx. $14,000 USD",
      bronce: "8,280",
      bronceEquivEs: "Aprox. $9,000 USD",
      bronceEquivEn: "Approx. $9,000 USD"
    }
  };

  window.setCurrency = function (curr) {
    if (currencyRates[curr]) {
      state.currency = curr;
      try {
        localStorage.setItem('nationscup_currency', curr);
      } catch (e) {}
      updateCurrencyDisplay();
    }
  };

  function updateCurrencyDisplay() {
    const curr = currencyRates[state.currency] || currencyRates['USD'];
    const isEs = state.lang === 'es';

    // Update active currency button state in Header & Patrocinios
    ['USD', 'MXN', 'EUR'].forEach(c => {
      const btn = document.getElementById(`curr${c}`);
      if (btn) {
        if (c === state.currency) {
          btn.className = "currency-btn px-3 py-1 rounded-DEFAULT bg-surface-container-lowest font-label-md text-label-md text-racing-green-dark shadow-sm font-semibold";
        } else {
          btn.className = "currency-btn px-3 py-1 rounded-DEFAULT font-label-md text-label-md text-on-surface-variant hover:text-on-surface font-medium";
        }
      }
    });

    const vatSuffix = isEs ? `${curr.code} + IVA` : `${curr.code} + VAT`;

    // Update Tier Platino
    const tPPrice = document.getElementById('tier-platino-price');
    const tPCurr = document.getElementById('tier-platino-currency');
    const tPEquiv = document.getElementById('tier-platino-equiv');
    if (tPPrice) tPPrice.textContent = `${curr.symbol}${curr.platino}`;
    if (tPCurr) tPCurr.textContent = vatSuffix;
    if (tPEquiv) tPEquiv.textContent = isEs ? curr.platinoEquivEs : curr.platinoEquivEn;

    // Update Tier Oro
    const tOPrice = document.getElementById('tier-oro-price');
    const tOCurr = document.getElementById('tier-oro-currency');
    const tOEquiv = document.getElementById('tier-oro-equiv');
    if (tOPrice) tOPrice.textContent = `${curr.symbol}${curr.oro}`;
    if (tOCurr) tOCurr.textContent = vatSuffix;
    if (tOEquiv) tOEquiv.textContent = isEs ? curr.oroEquivEs : curr.oroEquivEn;

    // Update Tier Plata
    const tSPrice = document.getElementById('tier-plata-price');
    const tSCurr = document.getElementById('tier-plata-currency');
    const tSEquiv = document.getElementById('tier-plata-equiv');
    if (tSPrice) tSPrice.textContent = `${curr.symbol}${curr.plata}`;
    if (tSCurr) tSCurr.textContent = vatSuffix;
    if (tSEquiv) tSEquiv.textContent = isEs ? curr.plataEquivEs : curr.plataEquivEn;

    // Update Tier Bronce
    const tBPrice = document.getElementById('tier-bronce-price');
    const tBCurr = document.getElementById('tier-bronce-currency');
    const tBEquiv = document.getElementById('tier-bronce-equiv');
    if (tBPrice) tBPrice.textContent = `${curr.symbol}${curr.bronce}`;
    if (tBCurr) tBCurr.textContent = vatSuffix;
    if (tBEquiv) tBEquiv.textContent = isEs ? curr.bronceEquivEs : curr.bronceEquivEn;

    // Update Special Assets Table note
    const tableCurrNote = document.getElementById('table-currency-note');
    if (tableCurrNote) {
      if (state.currency === 'USD') {
        tableCurrNote.textContent = isEs ? "Tarifas oficiales en Dólares (USD + IVA)" : "Official rates in US Dollars (USD + VAT)";
      } else if (state.currency === 'MXN') {
        tableCurrNote.textContent = isEs ? "Tarifas convertidas a Pesos Mexicanos (MXN + IVA)" : "Rates converted to Mexican Pesos (MXN + VAT)";
      } else {
        tableCurrNote.textContent = isEs ? "Tarifas convertidas a Euros (EUR + IVA)" : "Rates converted to Euros (EUR + VAT)";
      }
    }

    // Update all suffixes in the special assets table
    const tableSuffixes = document.querySelectorAll('.table-vat-suffix');
    tableSuffixes.forEach(s => {
      s.textContent = vatSuffix;
    });

    // Update Special Assets Table prices (Default USD)
    const specialElements = document.querySelectorAll('.price-val');
    specialElements.forEach(el => {
      let val = el.getAttribute('data-usd'); // DEFAULT USD
      if (state.currency === 'MXN') val = el.getAttribute('data-mxn');
      if (state.currency === 'EUR') val = el.getAttribute('data-eur');
      if (val) {
        const num = parseInt(val, 10).toLocaleString('en-US');
        el.textContent = `${curr.symbol}${num}`;
      }
    });
  }


  // --- 11. DIRECT WHATSAPP URL GENERATOR (+34 722 11 62 48) ---
  const WHATSAPP_PHONE = "34722116248"; // +34 722 11 62 48

  function generateWhatsAppMessage() {
    const isEs = state.lang === 'es';
    const name = (document.getElementById('form-name')?.value || '').trim() || (isEs ? "[Nombre del Ejecutivo]" : "[Executive Name]");
    const company = (document.getElementById('form-company')?.value || '').trim() || (isEs ? "[Empresa / Marca]" : "[Company / Brand]");
    
    const roleSelect = document.getElementById('form-role');
    const roleText = (roleSelect && roleSelect.selectedIndex >= 0) 
      ? roleSelect.options[roleSelect.selectedIndex].text 
      : (isEs ? "[Cargo Directivo]" : "[Executive Role]");

    const catSelect = document.getElementById('form-category');
    const catText = (catSelect && catSelect.selectedIndex >= 0) 
      ? catSelect.options[catSelect.selectedIndex].text 
      : (isEs ? "[Categoría de Industria]" : "[Industry Category]");

    const tierSelect = document.getElementById('form-tier');
    const tierText = (tierSelect && tierSelect.selectedIndex >= 0) 
      ? tierSelect.options[tierSelect.selectedIndex].text 
      : (isEs ? "[Nivel de Patrocinio]" : "[Sponsorship Level]");

    if (isEs) {
      return `Hola, represento a ${company}. Mi nombre es ${name} (${roleText}). Estamos interesados en evaluar el patrocinio para NATIONS CUP 2027 en la categoría de ${catText} bajo el nivel ${tierText}. Solicitamos confirmación de disponibilidad y reunión de alineación comercial.`;
    } else {
      return `Hello, I represent ${company}. My name is ${name} (${roleText}). We are interested in evaluating sponsorship for NATIONS CUP 2027 in the ${catText} category under the ${tierText} tier. We request availability confirmation and a commercial alignment meeting.`;
    }
  }

  function updateFormWhatsAppPreview() {
    const previewEl = document.getElementById('whatsapp-message-preview');
    if (previewEl) {
      previewEl.textContent = generateWhatsAppMessage();
    }
  }

  function initFormHandlers() {
    const form = document.getElementById('contact-vip-form');
    const inputs = ['form-name', 'form-company', 'form-role', 'form-category', 'form-tier'];

    inputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', updateFormWhatsAppPreview);
        el.addEventListener('change', updateFormWhatsAppPreview);
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (document.getElementById('form-name')?.value || '').trim();
        const company = (document.getElementById('form-company')?.value || '').trim();
        const role = document.getElementById('form-role')?.value;
        const category = document.getElementById('form-category')?.value;

        const isEs = state.lang === 'es';

        if (!name || !company || !role || !category) {
          showToast(isEs 
            ? "Por favor complete todos los campos obligatorios para formalizar el contacto." 
            : "Please fill in all required fields to formalize committee liaison."
          );
          return;
        }

        const msg = generateWhatsAppMessage();
        const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

        showToast(isEs 
          ? "Redirigiendo a WhatsApp Oficial del Comité..." 
          : "Redirecting to Committee Official WhatsApp..."
        );

        setTimeout(() => {
          window.open(url, '_blank');
        }, 350);
      });
    }
  }

  // --- 12. TOAST NOTIFICATIONS ---
  function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('hide');
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
    }, 4000);
  }


  // --- 14. CLIENT-SIDE WEB ROUTING & URL SYNCHRONIZATION ---
  function initWebRouting() {
    const sectionMap = {
      'index.html': '#hero-section',
      'pitch-deck.html': '#pitch-deck',
      'tour-360.html': '#tour-360',
      'galeria.html': '#galeria',
      'patrocinios.html': '#patrocinios',
      'contacto.html': '#formulario-whatsapp'
    };

    const path = window.location.pathname;
    const isIndex = path.endsWith('index.html') || path.endsWith('/') || !path.includes('.html');
    
    if (isIndex) {
      // Intercept navigation links on index.html to smooth scroll and update URL bar
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (sectionMap[href]) {
          a.addEventListener('click', function (e) {
            const target = document.querySelector(sectionMap[href]);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
              try {
                window.history.pushState(null, '', href);
              } catch (err) {}
            }
          });
        }
      });

      // Update browser address bar dynamically as user scrolls through sections
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              for (const [url, selector] of Object.entries(sectionMap)) {
                if (selector === `#${id}`) {
                  try {
                    window.history.replaceState(null, '', url);
                  } catch (err) {}
                  break;
                }
              }
            }
          });
        }, { root: null, rootMargin: '-25% 0px -55% 0px', threshold: 0 });

        Object.values(sectionMap).forEach(sel => {
          const el = document.querySelector(sel);
          if (el) observer.observe(el);
        });
      }
    }
  }

  // --- 13. INITIALIZATION ORCHESTRATOR ---
  document.addEventListener('DOMContentLoaded', async () => {
    // 1. Language determination & rendering
    const initialLang = await detectLanguage();

    // Default currency is ALWAYS USD; only load MXN if user previously explicitly selected it
    try {
      const savedCurr = localStorage.getItem('nationscup_currency');
      if (savedCurr && currencyRates[savedCurr]) {
        state.currency = savedCurr;
      } else {
        state.currency = 'USD'; // DEFAULT USD
      }
    } catch (e) {
      state.currency = 'USD';
    }

    updateLanguageDOM(initialLang, false);

    // 2. Set up language switcher buttons
    const pillEs = document.getElementById('lang-toggle-es');
    const pillEn = document.getElementById('lang-toggle-en');
    if (pillEs) pillEs.addEventListener('click', () => updateLanguageDOM('es'));
    if (pillEn) pillEn.addEventListener('click', () => updateLanguageDOM('en'));

    // 3. Components & Web Routing
    initVideoPlayer();
    initTheaterModal();
    initDeckSwipe();
    initFormHandlers();
    init360Viewer();
    initWebRouting();

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });

})();

  // --- CURRENCY DROPDOWN HELPERS ---
  window.toggleCurrencyMenu = function () {
    const menu = document.getElementById('currency-dropdown-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  window.selectHeaderCurrency = function (curr) {
    if (typeof window.setCurrency === 'function') {
      window.setCurrency(curr);
    }
    const sel = document.getElementById('header-curr-selected');
    if (sel) sel.textContent = curr;
    const menu = document.getElementById('currency-dropdown-menu');
    if (menu) menu.classList.add('hidden');
  };

  document.addEventListener('click', function (e) {
    const btn = document.getElementById('currency-menu-btn');
    const menu = document.getElementById('currency-dropdown-menu');
    if (menu && btn && !btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });

  // --- LEGAL COMPLIANCE MODAL HELPERS ---
  window.openLegalModal = function (tab) {
    const modal = document.getElementById('legal-compliance-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (tab && typeof window.switchLegalTab === 'function') {
      window.switchLegalTab(tab);
    }
  };

  window.closeLegalModal = function () {
    const modal = document.getElementById('legal-compliance-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  window.switchLegalTab = function (tab) {
    const privacyContent = document.getElementById('legal-privacy-content');
    const termsContent = document.getElementById('legal-terms-content');
    const tabPrivacyBtn = document.getElementById('tab-privacy-btn');
    const tabTermsBtn = document.getElementById('tab-terms-btn');

    if (tab === 'privacy') {
      if (privacyContent) privacyContent.classList.remove('hidden');
      if (termsContent) termsContent.classList.add('hidden');
      if (tabPrivacyBtn) tabPrivacyBtn.className = "px-4 py-2 border-b-2 border-warm-bronze text-racing-green-dark font-label-md uppercase font-semibold text-xs tracking-wider";
      if (tabTermsBtn) tabTermsBtn.className = "px-4 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-racing-green-dark font-label-md uppercase text-xs tracking-wider";
    } else {
      if (privacyContent) privacyContent.classList.add('hidden');
      if (termsContent) termsContent.classList.remove('hidden');
      if (tabPrivacyBtn) tabPrivacyBtn.className = "px-4 py-2 border-b-2 border-transparent text-on-surface-variant hover:text-racing-green-dark font-label-md uppercase text-xs tracking-wider";
      if (tabTermsBtn) tabTermsBtn.className = "px-4 py-2 border-b-2 border-warm-bronze text-racing-green-dark font-label-md uppercase font-semibold text-xs tracking-wider";
    }
  };


  // --- FOOTER LEGAL ACCORDION (REACT-LIKE EXPANDABLE DRAWER) ---
  let activeLegalDisclaimer = null;

  window.toggleLegalDisclaimer = function (key) {
    const drawer = document.getElementById('legal-disc-drawer');
    const items = ['fiscal', 'ip', 'confidential'];

    if (!drawer) return;

    // Toggle close if clicking active key again or null passed
    if (!key || activeLegalDisclaimer === key) {
      activeLegalDisclaimer = null;
      drawer.classList.add('hidden');
      items.forEach(function (k) {
        const btn = document.getElementById('btn-disc-' + k);
        const icon = document.getElementById('icon-disc-' + k);
        const text = document.getElementById('disc-text-' + k);
        if (btn) {
          btn.className = 'legal-disc-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/40 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-[11px] tracking-wider transition-all duration-200 cursor-pointer';
        }
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
        if (text) {
          text.classList.add('hidden');
        }
      });
      return;
    }

    activeLegalDisclaimer = key;
    drawer.classList.remove('hidden');

    items.forEach(function (k) {
      const btn = document.getElementById('btn-disc-' + k);
      const icon = document.getElementById('icon-disc-' + k);
      const text = document.getElementById('disc-text-' + k);

      if (k === key) {
        if (btn) {
          btn.className = 'legal-disc-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm-bronze bg-racing-green-dark text-champagne-light font-label-sm text-[11px] tracking-wider transition-all duration-200 shadow-sm cursor-pointer';
        }
        if (icon) {
          icon.style.transform = 'rotate(180deg)';
        }
        if (text) {
          text.classList.remove('hidden');
        }
      } else {
        if (btn) {
          btn.className = 'legal-disc-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant/40 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-[11px] tracking-wider transition-all duration-200 cursor-pointer';
        }
        if (icon) {
          icon.style.transform = 'rotate(0deg)';
        }
        if (text) {
          text.classList.add('hidden');
        }
      }
    });
  };


  // --- BANK SETTLEMENT MODAL HELPERS ---
  window.openBankModal = function (tab) {
    const modal = document.getElementById('bank-settlement-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (tab) {
      window.switchBankTab(tab);
    }
  };

  window.closeBankModal = function () {
    const modal = document.getElementById('bank-settlement-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  window.switchBankTab = function (tab) {
    const panelMxn = document.getElementById('bank-panel-mxn');
    const panelUsd = document.getElementById('bank-panel-usd');
    const tabMxn = document.getElementById('bank-tab-mxn');
    const tabUsd = document.getElementById('bank-tab-usd');

    if (tab === 'mxn') {
      if (panelMxn) panelMxn.classList.remove('hidden');
      if (panelUsd) panelUsd.classList.add('hidden');
      if (tabMxn) {
        tabMxn.className = "flex-1 py-3 px-4 text-center font-label-md text-[12px] uppercase tracking-wider font-bold border-b-2 border-warm-bronze text-racing-green-dark bg-canvas-alabaster transition-all cursor-pointer flex items-center justify-center gap-2";
      }
      if (tabUsd) {
        tabUsd.className = "flex-1 py-3 px-4 text-center font-label-md text-[12px] uppercase tracking-wider font-semibold border-b-2 border-transparent text-on-surface-variant hover:text-racing-green-dark transition-all cursor-pointer flex items-center justify-center gap-2";
      }
    } else {
      if (panelMxn) panelMxn.classList.add('hidden');
      if (panelUsd) panelUsd.classList.remove('hidden');
      if (tabMxn) {
        tabMxn.className = "flex-1 py-3 px-4 text-center font-label-md text-[12px] uppercase tracking-wider font-semibold border-b-2 border-transparent text-on-surface-variant hover:text-racing-green-dark transition-all cursor-pointer flex items-center justify-center gap-2";
      }
      if (tabUsd) {
        tabUsd.className = "flex-1 py-3 px-4 text-center font-label-md text-[12px] uppercase tracking-wider font-bold border-b-2 border-warm-bronze text-racing-green-dark bg-canvas-alabaster transition-all cursor-pointer flex items-center justify-center gap-2";
      }
    }
  };

  window.copyBankValue = function (text, btn) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      if (btn) {
        const originalText = btn.textContent;
        const isEs = (state.lang || 'es') === 'es';
        btn.textContent = isEs ? "¡Copiado! ✓" : "Copied! ✓";
        btn.classList.add('bg-warm-bronze', 'text-white');
        setTimeout(function () {
          btn.textContent = originalText;
          btn.classList.remove('bg-warm-bronze', 'text-white');
        }, 1800);
      }
    }).catch(function (err) {
      console.error('Error al copiar:', err);
    });
  };

  // Close bank modal on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('bank-settlement-modal');
      if (modal && !modal.classList.contains('hidden')) {
        window.closeBankModal();
      }
    }
  });
