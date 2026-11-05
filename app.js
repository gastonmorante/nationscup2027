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
      status_beacon: "Comité de Patrocinios · Acceso Privado 2027",
      nav_vision: "La Visión",
      nav_pitch: "Pitch Deck",
      nav_tour: "Tour 360°",
      nav_gallery: "Galería Editorial",
      nav_tiers: "Inversión & Exclusividad",
      nav_contact: "Contacto Privado",
      btn_whatsapp_vip: "WhatsApp VIP",
      hero_badge: "TORNEO INTERNACIONAL DE POLO & ALTA SOCIEDAD · ENERO 2027",
      hero_title: "NATIONS CUP 2027",
      hero_subtitle: "El Legado del Polo en la Riviera Maya",
      hero_dates_venue: "El Rey Polo Country Club · Puerto Morelos, Cancún, México",
      hero_tagline: "«Las marcas de lujo no compran publicidad; adquieren Exclusividad, Legado y Acceso Inigualable.»",
      hero_btn_play_theater: "Ver Presentación con Audio HD",
      hero_btn_deck: "Pitch Deck Ejecutivo",
      hero_btn_whatsapp: "WhatsApp VIP Concierge",
      btn_open_theater: "Reproducir con Audio",
      btn_theater_modal: "Modo Teatro HD",
      btn_explore_deck: "Explorar Pitch Deck Ejecutivo",
      btn_view_tour: "Ver Recorrido 360°",
      stat_hectares: "6 Hectáreas",
      stat_hectares_sub: "Césped oficial reglamentario (300 x 200m)",
      stat_teams: "6 Selecciones",
      stat_teams_sub: "España, Alemania, México, Canadá, USA y Argentina",
      stat_audience: "Audiencia de Alto Standing",
      stat_audience_sub: "CEOs, inversionistas y propietarios de alto perfil",
      stat_exclusivity: "1 Marca por Sector",
      stat_exclusivity_sub: "Exclusividad inquebrantable de categoría",
      
      // Video Module
      video_title: "SIZZLE REEL CINEMATOGRÁFICO",
      video_subtitle: "La experiencia de ultra-lujo, adrenalina ecuestre y distinción caribeña en alta definición.",
      btn_unmute: "Activar Audio HD",
      btn_mute: "Silenciar Audio",
      btn_fullscreen: "Pantalla Completa",
      btn_gdrive_video: "Descargar Master 4K (Google Drive)",
      video_playing_label: "Video Oficial Naciones Cup 2027",
      
      // Pitch Deck Module
      deck_kicker: "DOSSIER COMERCIAL CONFIDENCIAL",
      deck_title: "Pitch Deck Ejecutivo",
      deck_subtitle: "Presentación de arte interactiva para evaluación de Comités de Patrocinio y Directores Globales.",
      deck_btn_prev: "Anterior",
      deck_btn_next: "Siguiente",
      deck_btn_download: "Descargar Pitch Deck Oficial (PDF Ejecutivo)",
      deck_swipe_hint: "Desliza horizontalmente en pantalla o usa las flechas",
      
      // 360 Tour Module
      tour_kicker: "RECORRIDO INMERSIVO DE ALTA DEFINICIÓN",
      tour_title: "Tour Virtual 360° · El Rey Polo",
      tour_subtitle: "Previsualice la integración espacial y los palcos VIP desde cualquier ángulo con soporte giroscópico.",
      tour_scene_lounge: "VIP Hospitality Lounge",
      tour_scene_field: "Campo Central & Explanada",
      tour_scene_autoshow: "Stands Comerciales & Autoshow",
      tour_scene_grill: "Sunset Grill & Bar",
      tour_scene_stage: "Escenario Fashion Show",
      tour_btn_gyro: "Giroscopio Móvil",
      tour_btn_autorotate: "Auto Rotación",
      tour_btn_gdrive: "Ver Renders 360° en Google Drive",
      tour_hint: "Arrastra con el mouse o inclina tu dispositivo móvil para explorar la atmósfera 360°.",

      // Gallery Module
      gallery_kicker: "ARQUITECTURA & ATMÓSFERA EDITORIAL",
      gallery_title: "Galería Editorial",
      gallery_subtitle: "Curaduría visual estilo Architectural Digest que captura el refinamiento y la grandeza del club.",
      gallery_view_hint: "Pulsa sobre cualquier perspectiva para abrir el visor en alta resolución.",

      // Pricing & Currency Module
      pricing_kicker: "DERECHOS DE PATROCINIO & EXCLUSIVIDAD",
      pricing_title: "Estructura de Inversión Comercial",
      pricing_subtitle: "Conversión de divisas en tiempo real adaptada a comités de Norteamérica, Europa y Latinoamérica.",
      exclusivity_rule_title: "REGLA DE EXCLUSIVIDAD INQUEBRANTABLE",
      exclusivity_rule_desc: "Solo se permite UNA marca por sector de industria (ej. 1 automotriz, 1 alta relojería, 1 champagne, 1 banco privado). El bloqueo es por orden estricto de formalización.",
      currency_label: "Divisa de Cotización:",
      tier1_badge: "MÁXIMA JERARQUÍA",
      tier1_name: "Presenting Partner",
      tier1_sub: "Naming Right Oficial del Torneo",
      tier1_desc: "La máxima asociación de marca con protagonismo absoluto durante todo el ciclo comercial y deportivo.",
      tier1_feat1: "Naming Oficial: 'Nations Cup 2027 presented by [Tu Marca]'",
      tier1_feat2: "Branding preferencial en los jerseis de juego de las 6 selecciones",
      tier1_feat3: "Mesa VIP Privada para 10 personas + Botella de cortesía diaria",
      tier1_feat4: "Stand Comercial exclusivo de 3x3m en zona premium de paso",
      tier1_feat5: "Presencia central en trofeo oficial, premiación y pressboard",
      tier1_feat6: "Inclusión prioritaria en campaña digital (+1M de impresiones)",
      tier1_btn: "Solicitar Naming Right vía WhatsApp",
      
      tier2_badge: "EXCLUSIVIDAD DE SECTOR",
      tier2_name: "Official Partner",
      tier2_sub: "Patrocinador Oficial por Categoría",
      tier2_desc: "Asociación exclusiva para liderar una industria comercial con presencia destacada en cancha y hospitalidad.",
      tier2_feat1: "Exclusividad única en su categoría (blindaje frente a competidores)",
      tier2_feat2: "Branding central exclusivo en el jersey de 1 selección nacional",
      tier2_feat3: "Stand de exhibición de 3x3m en Boulevard comercial",
      tier2_feat4: "Sala Lounge privada para anfitrionía corporativa y networking",
      tier2_feat5: "15 accesos VIP all-access con servicio de catering premium",
      tier2_feat6: "Menciones en ruedas de prensa, suplemento editorial y redes",
      tier2_btn: "Solicitar Categoría vía WhatsApp",

      tier3_badge: "HOSPITALIDAD & EXPERIENCIA",
      tier3_name: "Official Supplier",
      tier3_sub: "Proveedor Oficial / Marca Aliada",
      tier3_desc: "Integración de producto y servicios premium en gastronomía, coctelería, moda o movilidad de ultra-lujo.",
      tier3_feat1: "Presencia directa en barras VIP, gastronomía o transporte",
      tier3_feat2: "Activación de producto y sampling de alta gama a invitados de alto standing",
      tier3_feat3: "Derechos de uso de marca 'Official Supplier Nations Cup 2027'",
      tier3_feat4: "10 accesos VIP generales para directivos y clientes clave",
      tier3_feat5: "Menciones en programa de mano y pantalla digital del evento",
      tier3_btn: "Solicitar Propuesta a Medida",

      vat_notice: "* Más Impuestos aplicables (IVA). Sujeto a disponibilidad por orden de solicitud.",

      // Form Module
      form_kicker: "CONTACTO INSTITUCIONAL RESERVADO",
      form_title: "Solicitud de Dossier & Bloqueo de Exclusividad",
      form_subtitle: "Conexión directa con la Presidencia del Comité Organizador en WhatsApp institucional (+34 722 11 62 48).",
      lbl_name: "Nombre y Apellidos del Ejecutivo *",
      ph_name: "Ej. Guillermo Gómez-Pardo",
      lbl_company: "Empresa / Marca Representada *",
      ph_company: "Ej. Audemars Piguet / Aston Martin / Dom Pérignon",
      lbl_role: "Cargo Ejecutivo / Rol Directivo *",
      opt_select_role: "Seleccione su cargo...",
      opt_ceo: "Chief Executive Officer (CEO / Presidente)",
      opt_cmo: "Chief Marketing Officer (CMO / Dir. Marketing)",
      opt_sponsorship: "Director Global de Patrocinios y Alianzas",
      opt_investor: "Inversionista / Family Office",
      opt_other: "Vicepresidente / Director General",
      lbl_category: "Categoría de Industria *",
      opt_select_cat: "Seleccione la categoría de su marca...",
      opt_cat_auto: "Automotriz de Lujo & Superdeportivos",
      opt_cat_watch: "Alta Relojería & Joyería",
      opt_cat_spirits: "Champagne, Vinos & Destilados Ultra-Premium",
      opt_cat_aviation: "Aviación Privada & Náutica / Yates",
      opt_cat_finance: "Banca Privada, Real Estate & Family Offices",
      opt_cat_fashion: "Alta Costura, Moda & Cuero",
      opt_cat_tech: "Tecnología de Lujo & Servicios Exclusivos",
      opt_cat_hospitality: "Hotelería 5 Diamantes & Lifestyle",
      lbl_tier: "Nivel de Patrocinio de Interés *",
      opt_tier_d: "D. Patrocinador Nombre del Torneo Omnipresente ($80,000 USD / $1,400,000 MXN)",
      opt_tier_c: "C. Sponsoreo de Equipo Exclusivo ($25,000 USD / $437,500 MXN)",
      opt_tier_e: "E. Patrocinador Exclusivo Speaker Torneo ($20,000 USD / $350,000 MXN)",
      opt_tier_b: "B. Patrocinio Vídeos Pantallas Gigantes ($20,000 USD / $350,000 MXN)",
      opt_tier_f: "F. Nombre del Campo de Polo ($15,000 USD / $262,500 MXN)",
      opt_tier_a: "A. Patrocinio Cartelera en Cancha ($5,000 USD / $87,500 MXN)",
      opt_tier_g1: "G1. Premio Mejor Jugador MVP ($5,000 USD / $87,500 MXN)",
      opt_tier_g2: "G2. Premio Mejor Caballo Best Playing Pony ($5,000 USD / $87,500 MXN)",
      opt_tier_platino: "Nivel Platino ($45,000 USD / $787,500 MXN)",
      opt_tier_oro: "Nivel Oro ($28,000 USD / $490,000 MXN)",
      opt_tier_plata: "Nivel Plata ($14,000 USD / $245,000 MXN)",
      opt_tier_bronce: "Nivel Bronce ($9,000 USD / $157,500 MXN)",
      preview_label: "Vista Previa del Mensaje Oficial a WhatsApp:",
      btn_submit_whatsapp: "Solicitar Dossier & Bloqueo de Exclusividad vía WhatsApp",
      form_security_note: "Al hacer clic será redirigido a WhatsApp Oficial con el mensaje estructurado para atención inmediata por el Comité.",

      // Floating Dock
      dock_deck: "Pitch Deck",
      dock_tour: "Tour 360°",
      dock_contact: "WhatsApp VIP",

      // Footer
      footer_rights: "Todos los derechos reservados. Evento oficial avalado por los comités rectores del polo.",
      footer_confidential: "Aviso de Confidencialidad: La información comercial, planos y tarifas contenidas en este portal son de distribución reservada para comités de patrocinio formalmente convocados.",
      footer_address: "El Rey Polo Country Club: Carretera Puerto Morelos - Leona Vicario Km 11 (Ruta de los Cenotes, VX9Q+H2), Puerto Morelos, Q. Roo, México.",
      footer_whatsapp_direct: "Línea Directa Comité: +34 722 11 62 48"
    },

    en: {
      status_beacon: "Sponsorship Committee · Private Access 2027",
      nav_vision: "The Vision",
      nav_pitch: "Pitch Deck",
      nav_tour: "360° Tour",
      nav_gallery: "Editorial Gallery",
      nav_tiers: "Investment & Exclusivity",
      nav_contact: "Private Liaison",
      btn_whatsapp_vip: "WhatsApp VIP",
      hero_badge: "INTERNATIONAL POLO & LIFESTYLE CHAMPIONSHIP · JAN 2027",
      hero_title: "NATIONS CUP 2027",
      hero_subtitle: "The Legacy of Polo in the Riviera Maya",
      hero_dates_venue: "El Rey Polo Country Club · Puerto Morelos, Cancún, Mexico",
      hero_tagline: "«Luxury brands do not buy advertising; they acquire Exclusivity, Legacy, and Access.»",
      hero_btn_play_theater: "Play Full Presentation (HD Audio)",
      hero_btn_deck: "Executive Pitch Deck",
      hero_btn_whatsapp: "WhatsApp VIP Concierge",
      btn_open_theater: "Play with Audio",
      btn_theater_modal: "HD Theater Mode",
      btn_explore_deck: "Explore Executive Pitch Deck",
      btn_view_tour: "Launch 360° Tour",
      stat_hectares: "6 Hectares",
      stat_hectares_sub: "Official regulation turf field (300 x 200m)",
      stat_teams: "6 National Teams",
      stat_teams_sub: "Spain, Germany, Mexico, Canada, USA & Argentina",
      stat_audience: "High-Standing Audience",
      stat_audience_sub: "CEOs, high-net-worth investors and decision makers",
      stat_exclusivity: "1 Brand per Industry",
      stat_exclusivity_sub: "Uncompromising category exclusivity lock",

      // Video Module
      video_title: "CINEMATIC SIZZLE REEL",
      video_subtitle: "Experience the adrenaline, equestrian elegance, and Caribbean grandeur in high definition.",
      btn_unmute: "Enable HD Audio",
      btn_mute: "Mute Audio",
      btn_fullscreen: "Fullscreen Mode",
      btn_gdrive_video: "Download 4K Master (Google Drive)",
      video_playing_label: "Official Nations Cup 2027 Presentation",

      // Pitch Deck Module
      deck_kicker: "CONFIDENTIAL COMMERCIAL DOSSIER",
      deck_title: "Executive Pitch Deck",
      deck_subtitle: "Interactive art presentation designed for Sponsorship Committees and Global CMO review.",
      deck_btn_prev: "Previous",
      deck_btn_next: "Next",
      deck_btn_download: "Download Official Pitch Deck (Executive PDF)",
      deck_swipe_hint: "Swipe horizontally or use arrow buttons to navigate",

      // 360 Tour Module
      tour_kicker: "HIGH-DEFINITION SPATIAL TOUR",
      tour_title: "Virtual 360° Tour · El Rey Polo",
      tour_subtitle: "Pre-visualize brand integration and VIP lounges from any angle with gyroscope support.",
      tour_scene_lounge: "VIP Hospitality Lounge",
      tour_scene_field: "Grand Field & Grounds",
      tour_scene_autoshow: "Brand Pavilions & Autoshow",
      tour_scene_grill: "Sunset Terrace & Grill",
      tour_scene_stage: "Fashion Show Runway",
      tour_btn_gyro: "Mobile Gyroscope",
      tour_btn_autorotate: "Auto Rotation",
      tour_btn_gdrive: "Open 360° Renders on Google Drive",
      tour_hint: "Drag with mouse or tilt mobile device to experience 360° perspective.",

      // Gallery Module
      gallery_kicker: "ARCHITECTURE & EDITORIAL ATMOSPHERE",
      gallery_title: "Editorial Gallery",
      gallery_subtitle: "Architectural Digest aesthetic capturing the authentic prestige and grounds of the club.",
      gallery_view_hint: "Click on any perspective to open the high-resolution lightbox viewer.",

      // Pricing & Currency Module
      pricing_kicker: "SPONSORSHIP RIGHTS & EXCLUSIVITY",
      pricing_title: "Commercial Investment Structure",
      pricing_subtitle: "Real-time multi-currency converter calibrated for North American, European and Global boards.",
      exclusivity_rule_title: "UNBREAKABLE EXCLUSIVITY DIRECTIVE",
      exclusivity_rule_desc: "Strictly ONE brand permitted per industry sector (e.g., 1 automotive, 1 haute horlogerie, 1 champagne, 1 private wealth bank). Category reservation granted strictly in order of formalization.",
      currency_label: "Quotation Currency:",
      tier1_badge: "HIGHEST DISTINCTION",
      tier1_name: "Presenting Partner",
      tier1_sub: "Official Tournament Naming Right",
      tier1_desc: "The pinnacle of corporate alignment with paramount prominence across all tournament marketing and broadcast touchpoints.",
      tier1_feat1: "Official Naming: 'Nations Cup 2027 presented by [Your Brand]'",
      tier1_feat2: "Prime branding on all 6 national team official competition jerseys",
      tier1_feat3: "Private VIP Grandstand Table for 10 guests + Daily luxury bottle service",
      tier1_feat4: "Dedicated 3x3m Commercial Exhibition Pavilion in high-traffic avenue",
      tier1_feat5: "Dominant branding on official trophy, closing ceremony & pressboard",
      tier1_feat6: "Priority inclusion in hyper-targeted digital campaign (+1M views)",
      tier1_btn: "Request Naming Rights via WhatsApp",

      tier2_badge: "CATEGORY EXCLUSIVITY",
      tier2_name: "Official Partner",
      tier2_sub: "Official Industry Category Partner",
      tier2_desc: "Exclusive category leadership shielding your enterprise against rival brand presence throughout the tournament.",
      tier2_feat1: "Complete sector exclusivity (guaranteed competitor ban)",
      tier2_feat2: "Central logo placement on 1 national team official jersey",
      tier2_feat3: "Custom 3x3m Brand Showcase Stand in commercial concourse",
      tier2_feat4: "Private Lounge suite for executive hospitality and client relations",
      tier2_feat5: "15 VIP All-Access passes with full gourmet and open-bar service",
      tier2_feat6: "Press conference mentions, official supplement & editorial PR",
      tier2_btn: "Lock Category via WhatsApp",

      tier3_badge: "HOSPITALITY & ALLIANCE",
      tier3_name: "Official Supplier",
      tier3_sub: "Official Supplier / Partner Brand",
      tier3_desc: "Seamless luxury product integration across gastronomy, premium mixology, aviation, or high-end mobility.",
      tier3_feat1: "Direct presence at VIP bars, gourmet tastings or mobility fleets",
      tier3_feat2: "Curated product activations and bespoke gifting to high-standing guests",
      tier3_feat3: "Rights to the designation 'Official Supplier Nations Cup 2027'",
      tier3_feat4: "10 VIP All-Access credentials for executives and key guests",
      tier3_feat5: "Editorial credit in printed tournament book and digital screens",
      tier3_btn: "Request Bespoke Supplier Proposal",

      vat_notice: "* Plus applicable tax (VAT). Strictly subject to sector availability upon formal reservation.",

      // Form Module
      form_kicker: "RESERVED INSTITUTIONAL PROTOCOL",
      form_title: "Dossier Request & Exclusivity Lock",
      form_subtitle: "Direct communication with the Organizing Committee Presidency on WhatsApp (+34 722 11 62 48).",
      lbl_name: "Executive Full Name *",
      ph_name: "e.g., Lord Alexander Cavendish",
      lbl_company: "Enterprise / Represented Brand *",
      ph_company: "e.g., Audemars Piguet / Aston Martin / Dom Pérignon",
      lbl_role: "Executive Role / Position *",
      opt_select_role: "Select your role...",
      opt_ceo: "Chief Executive Officer (CEO / President)",
      opt_cmo: "Chief Marketing Officer (CMO / Global Head)",
      opt_sponsorship: "Global Sponsorship & Partnerships Director",
      opt_investor: "Investor / Family Office Principal",
      opt_other: "Executive Vice President / Managing Director",
      lbl_category: "Industry Category *",
      opt_select_cat: "Select brand category...",
      opt_cat_auto: "Luxury Automotive & Supercars",
      opt_cat_watch: "Haute Horlogerie & High Jewelry",
      opt_cat_spirits: "Champagne, Fine Wines & Ultra-Premium Spirits",
      opt_cat_aviation: "Private Aviation, Marine & Superyachts",
      opt_cat_finance: "Private Banking, Wealth Management & Real Estate",
      opt_cat_fashion: "Haute Couture, Designer Fashion & Leather Goods",
      opt_cat_tech: "Luxury Tech & Bespoke Concierge Services",
      opt_cat_hospitality: "Five-Diamond Hospitality & Private Islands",
      lbl_tier: "Sponsorship Tier of Interest *",
      opt_tier_d: "D. Tournament Official Naming Partner ($80,000 USD / $1,400,000 MXN)",
      opt_tier_c: "C. Exclusive Team Jersey Sponsor ($25,000 USD / $437,500 MXN)",
      opt_tier_e: "E. Official Tournament Speaker Partner ($20,000 USD / $350,000 MXN)",
      opt_tier_b: "B. Giant LED Video Screen Advertising ($20,000 USD / $350,000 MXN)",
      opt_tier_f: "F. Official Polo Field Naming Right ($15,000 USD / $262,500 MXN)",
      opt_tier_a: "A. Championship Field Boarding Signage ($5,000 USD / $87,500 MXN)",
      opt_tier_g1: "G1. MVP Award Official Partner ($5,000 USD / $87,500 MXN)",
      opt_tier_g2: "G2. Best Playing Pony Award Partner ($5,000 USD / $87,500 MXN)",
      opt_tier_platino: "Platinum Corporate Tier ($45,000 USD / $787,500 MXN)",
      opt_tier_oro: "Gold Corporate Tier ($28,000 USD / $490,000 MXN)",
      opt_tier_plata: "Silver Corporate Tier ($14,000 USD / $245,000 MXN)",
      opt_tier_bronce: "Bronze Corporate Tier ($9,000 USD / $157,500 MXN)",
      preview_label: "Official WhatsApp Message Preview:",
      btn_submit_whatsapp: "Request Dossier & Exclusivity Lock via WhatsApp",
      form_security_note: "Clicking will redirect to official WhatsApp with the formatted request for expedited committee review.",

      // Floating Dock
      dock_deck: "Pitch Deck",
      dock_tour: "360° Tour",
      dock_contact: "WhatsApp VIP",

      // Footer
      footer_rights: "All rights reserved. Sanctioned international polo tournament.",
      footer_confidential: "Confidentiality Notice: The commercial data, site plans and rates herein are reserved strictly for prospective brand partners under formal invitation.",
      footer_address: "El Rey Polo Country Club: Puerto Morelos - Leona Vicario Hwy Km 11 (Cenote Route, VX9Q+H2), Puerto Morelos, Quintana Roo, Mexico.",
      footer_whatsapp_direct: "Direct Committee Desk: +34 722 11 62 48"
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
      subtitleEs: "13 al 16 de Enero de 2027 | El Rey Polo Country Club, Puerto Morelos, Q. Roo",
      subtitleEn: "January 13 to 16, 2027 | El Rey Polo Country Club, Puerto Morelos, Mexico",
      image: "assets/photos/palapa_exterior_rect.jpg",
      pointsEs: [
        "Presentación de patrocinio exclusiva para marcas globales y comités de inversión.",
        "Edición inaugural con 6 selecciones nacionales (España, Alemania, México, Canadá, USA, Argentina) en el corazón de la Riviera Maya.",
        "Integración de deporte de reyes, alta gastronomía, arte y networking de alto standing."
      ],
      pointsEn: [
        "Exclusive sponsorship briefing tailored for global luxury brands and investment boards.",
        "Inaugural edition featuring 6 national teams (Spain, Germany, Mexico, Canada, USA, Argentina) in the Riviera Maya.",
        "Uniting the Sport of Kings, haute gastronomy, contemporary art, and high-standing networking."
      ],
      badge: "COMITÉ COMERCIAL"
    },
    {
      slideNum: "02",
      tag: "LA VISIÓN ESTRATÉGICA",
      tagEn: "STRATEGIC VISION",
      titleEs: "«Las marcas de lujo no compran publicidad; patrocinan el lugar que quieren ocupar en la mente del cliente.»",
      titleEn: "«Luxury brands do not buy advertising; they sponsor the space they aspire to own in the client's mind.»",
      subtitleEs: "El polo es el ecosistema de más alto poder adquisitivo y fidelidad relacional del planeta.",
      subtitleEn: "Polo is the preeminent global sports ecosystem for high-net-worth relational equity.",
      image: "assets/photos/real_field_pitch.jpg",
      pointsEs: [
        "Trascendencia más allá del impacto efímero: vínculos emocionales con tomadores de decisión.",
        "Ambiente curado sin masificación, con protocolos de hospitalidad de nivel Grand Slam.",
        "Alineación con valores de nobleza, precisión, elegancia y tradición ecuestre centenaria."
      ],
      pointsEn: [
        "Transcending transient ads: generating deep emotional bonds with elite decision makers.",
        "Curated non-massified setting with Grand Slam-calibre hospitality and privacy protocols.",
        "Alignment with values of timeless nobility, precision horsemanship, and legacy."
      ],
      badge: "FILOSOFÍA DE MARCA"
    },
    {
      slideNum: "03",
      tag: "EL ANFITRIÓN & SEDE",
      tagEn: "THE HOST & VENUE",
      titleEs: "El Rey Polo Country Club: La Joya Ecuestre del Caribe Mexicano",
      titleEn: "El Rey Polo Country Club: The Equestrian Jewel of the Mexican Caribbean",
      subtitleEs: "Ruta de los Cenotes Km 11, Puerto Morelos (VX9Q+H2) · A 15 min del Aeropuerto de Cancún (CUN)",
      subtitleEn: "Cenote Route Km 11, Puerto Morelos · 15 minutes from Cancun International Airport (CUN)",
      image: "assets/photos/palapa_interior_rect.jpg",
      pointsEs: [
        "Única cancha oficial reglamentaria de 300 x 200 m (6 hectáreas de césped oficial) en el Sureste de México.",
        "Instalaciones de clase mundial: Casa Club, restaurante gourmet, alberca, caballerizas para 80+ ejemplares.",
        "Paddock de 1 hectárea, tee de golf de práctica y club de playa privado en el Mar Caribe."
      ],
      pointsEn: [
        "Sole regulation 300 x 200 m (6-hectare official turf) championship field in Southeast Mexico.",
        "World-class country club amenities: Clubhouse, gourmet dining, swimming pool, stables for 80+ polo ponies.",
        "1-hectare paddock, golf driving range, and private Caribbean beach club integration."
      ],
      badge: "INFRAESTRUCTURA"
    },
    {
      slideNum: "04",
      tag: "EL TORNEO INTERNACIONAL",
      tagEn: "THE CHAMPIONSHIP",
      titleEs: "6 Selecciones Nacionales de Élite en Competencia",
      titleEn: "6 Elite National Teams in High-Goal Competition",
      subtitleEs: "España, Alemania, México, Canadá, Estados Unidos y Argentina",
      subtitleEn: "Spain, Germany, Mexico, Canada, United States and Argentina",
      image: "assets/stills/campo_accion.jpg",
      pointsEs: [
        "Torneo de 4 días de competencia avalado por los comités rectores del polo internacional.",
        "Polistas profesionales de alto hándicap y patronos de renombre internacional.",
        "Trofeo oficial artesanalmente forjado para inmortalizar al combinado campeón."
      ],
      pointsEn: [
        "4-day international polo championship sanctioned under official polo federation standards.",
        "High-goal professional players and renowned international team patrons.",
        "Handcrafted luxury silver & obsidian trophy commemorating the tournament champions."
      ],
      badge: "COMPETENCIA"
    },
    {
      slideNum: "05",
      tag: "AUDIENCIA DE ALTO STANDING",
      tagEn: "HIGH-STANDING AUDIENCE",
      titleEs: "Demografía C-Level y Patrimonios Ultra Altos (NSE A, B y ABC+)",
      titleEn: "C-Level Demographics and Ultra-High-Net-Worth Profile (NSE A, B & ABC+)",
      subtitleEs: "Hombres y mujeres de 25 a 55 años con capacidad de compra e inversión ilimitada.",
      subtitleEn: "Affluent executives aged 25 to 55 with supreme purchasing and investment capability.",
      image: "assets/photos/real_lounge_right.jpg",
      pointsEs: [
        "Perfiles: CEOs, Directores Globales, Inversionistas, Presidentes de Grupo y Socios de Family Offices.",
        "Afinidades: Alta relojería, superdeportivos, champagne, aviación ejecutiva, arte y real estate de lujo.",
        "Audiencia cautiva durante 4 jornadas consecutivas en atmósfera relajada de alto networking."
      ],
      pointsEn: [
        "Profiles: CEOs, Global Chairs, Family Office Principals, Real Estate Developers, Tech Founders.",
        "Passions: Haute horlogerie, supercars, vintage champagne, private aviation, fine art and luxury estates.",
        "Captive audience over 4 consecutive days in a relaxed yet high-stakes networking environment."
      ],
      badge: "DEMOGRAFÍA"
    },
    {
      slideNum: "06",
      tag: "LA EXPERIENCIA & LIFESTYLE",
      tagEn: "THE LIFESTYLE EXPERIENCE",
      titleEs: "4 Jornadas de Emoción Deportiva, Fashion Show & Mixología de Autor",
      titleEn: "4 Days of Championship Polo, Fashion Shows & Bespoke Mixology",
      subtitleEs: "Un festival de estilo de vida que combina chukkers electrizantes con alta costura caribeña.",
      subtitleEn: "A lifestyle festival pairing electrifying chukkers with Caribbean haute couture.",
      image: "assets/photos/stage_runway_rect.jpg",
      pointsEs: [
        "Pasarela de diseñadores internacionales y desfiles de alta costura resortwear.",
        "Barras de mixología botánica con destilados ultra-premium y casas de champagne.",
        "After-Polo Golden Hour sessions con reconocidos DJs internacionales junto a la alberca."
      ],
      pointsEn: [
        "International designer fashion runway showcasing luxury resortwear and equestrian couture.",
        "Botanical mixology bars featuring ultra-premium spirits and grand marque champagnes.",
        "After-Polo Golden Hour sessions featuring international DJs poolside amidst lush jungle."
      ],
      badge: "HOSPITALIDAD"
    },
    {
      slideNum: "07",
      tag: "VISIBILIDAD 360°",
      tagEn: "360° BRAND VISIBILITY",
      titleEs: "Presencia Omnipresente y de Máxima Categoría para su Marca",
      titleEn: "Ubiquitous High-Prestige Presence Across All Touchpoints",
      subtitleEs: "Branding en faldones de cancha, pressboard oficial, jerséis de juego y stand comercial.",
      subtitleEn: "Field perimeter boarding, official pressboard, team jerseys, and dedicated pavilions.",
      image: "assets/photos/vip_lounge_suite_rect.jpg",
      pointsEs: [
        "Faldones perimetrales de 300 metros con visibilidad garantizada en video y transmisiones.",
        "Branding central en los uniformes oficiales de las selecciones nacionales.",
        "Stand comercial 3x3m en el Boulevard Comercial para activación y atención VIP directa."
      ],
      pointsEn: [
        "300-meter field boundary boards with prime exposure in official broadcasts and high-res photography.",
        "Dominant chest branding on national polo team jerseys worn in every match.",
        "3x3m exhibition pavilion on the Commercial Boulevard for direct client engagements."
      ],
      badge: "IMPACTO VISUAL"
    },
    {
      slideNum: "08",
      tag: "ESTRUCTURA DE PATROCINIO",
      tagEn: "SPONSORSHIP TIERS",
      titleEs: "Estructura Comercial 2027: 4 Tiers Corporativos & Sponsors por Ítem",
      titleEn: "Commercial Structure 2027: 4 Corporate Tiers & Exclusive Item Sponsors",
      subtitleEs: "Platino ($45k USD), Oro ($28k USD), Plata ($14k USD) y Bronce ($9k USD)",
      subtitleEn: "Platinum ($45k USD), Gold ($28k USD), Silver ($14k USD) & Bronze ($9k USD)",
      image: "assets/photos/palco_networking_rect.jpg",
      pointsEs: [
        "Tiers Corporativos con exclusividad de sector: Platino ($45k USD), Oro ($28k USD), Plata ($14k USD) y Bronce ($9k USD).",
        "Sponsors Exclusivos por Ítem: Naming del Torneo ($80k USD), Sponsoreo de Equipo ($25k USD) y Speaker del Torneo ($20k USD).",
        "Activos de Alta Visibilidad: Pantallas Gigantes ($20k USD), Nombre del Campo ($15k USD) y Premios de Honor ($5k USD)."
      ],
      pointsEn: [
        "Corporate Tiers with sector exclusivity: Platinum ($45k USD), Gold ($28k USD), Silver ($14k USD) & Bronze ($9k USD).",
        "Exclusive Item Sponsorships: Tournament Naming Right ($80k USD), Team Jersey ($25k USD) & Official Speaker ($20k USD).",
        "High-Visibility Assets: Giant LED Screens ($20k USD), Field Naming ($15k USD) & MVP/Horse Awards ($5k USD)."
      ],
      badge: "ESTRUCTURA"
    },
    {
      slideNum: "09",
      tag: "MATRIZ DE SPONSORS EXCLUSIVOS",
      tagEn: "EXCLUSIVE SPONSORS MATRIX",
      titleEs: "Inversión por Activo Específico: Del Naming Right a Premios de Honor",
      titleEn: "Investment by Specific Asset: From Tournament Naming to Trophy Awards",
      subtitleEs: "D. Torneo ($80k USD) · C. Equipo ($25k USD) · E. Speaker ($20k USD) · B. Pantallas ($20k USD)",
      subtitleEn: "D. Tournament ($80k USD) · C. Team ($25k USD) · E. Speaker ($20k USD) · B. Screens ($20k USD)",
      image: "assets/photos/terrace_pergolado_rect.jpg",
      pointsEs: [
        "D. Patrocinador Nombre del Torneo: $80,000 USD ($1,400,000 MXN) — Omnipresencia en todos los puntos del club y fixture.",
        "C. Sponsoreo de Equipo: $25,000 USD ($437,500 MXN) por selección exclusiva (España, Alemania, México, Canadá, USA o Argentina).",
        "E, B, F, A y G: Speaker ($20k USD), Pantallas ($20k USD), Campo ($15k USD), Cartelera ($5k USD) y Premios MVP/Caballo ($5k USD c/u)."
      ],
      pointsEn: [
        "D. Tournament Naming Partner: $80,000 USD ($1,400,000 MXN) — Ubiquitous presence across all venue touchpoints and broadcasts.",
        "C. Exclusive Team Jersey Sponsor: $25,000 USD ($437,500 MXN) per nation (Spain, Germany, Mexico, Canada, USA or Argentina).",
        "E, B, F, A & G: Speaker ($20k USD), LED Screens ($20k USD), Field ($15k USD), Boarding ($5k USD) & MVP/Pony Awards ($5k USD each)."
      ],
      badge: "MATRIZ COMERCIAL"
    },
    {
      slideNum: "10",
      tag: "ACTIVACIONES A MEDIDA",
      tagEn: "BESPOKE ACTIVATIONS",
      titleEs: "Oportunidades Personalizadas para Sectores de Alto Perfil",
      titleEn: "Customized Brand Activations for Luxury Verticals",
      subtitleEs: "Alta Relojería, Automotriz, Champagne, Aviación Privada y Banca de Inversión",
      subtitleEn: "Haute Horlogerie, Supercars, Champagne, Private Aviation & Wealth Management",
      image: "assets/photos/pool_autoshow_rect.jpg",
      pointsEs: [
        "Alta Relojería: Cronometrador oficial de los chukkers y entrega del reloj conmemorativo al MVP.",
        "Automotriz: Exhibición estática de superdeportivos en el césped y servicio de shuttle VIP.",
        "Champagne & Spirits: Celebración del brindis oficial de campeones y barra exclusiva en el Paddock."
      ],
      pointsEn: [
        "Haute Horlogerie: Official Tournament Timekeeper with commemorative MVP watch presentation.",
        "Luxury Automotive: Static supercar showcase along pristine greens and executive VIP transfers.",
        "Champagne & Spirits: Official victory chukker toast and dedicated champagne pavilion."
      ],
      badge: "ACTIVACIONES"
    },
    {
      slideNum: "11",
      tag: "PLAN DE DIFUSIÓN & PR",
      tagEn: "MEDIA & PR CAMPAIGN",
      titleEs: "+2.5 Millones de Impactos Calificados en Medios y Plataformas Digitales",
      titleEn: "+2.5 Million Qualified Impressions Across Luxury Media & Digital PR",
      subtitleEs: "Campaña hipersegmentada a perfiles C-Level en México, Estados Unidos, Canadá y Europa.",
      subtitleEn: "Hyper-targeted campaign aimed at C-Suite audiences in Mexico, the US, Canada and Europe.",
      image: "assets/photos/commercial_stands_rect.jpg",
      pointsEs: [
        "+1,000,000 de impresiones pagadas en Meta & Google Ads segmentadas a directores y CEOs.",
        "+1,500,000 de alcance orgánico estimado mediante cobertura de influencers y prensa de estilo de vida.",
        "Cobertura editorial confirmada en LM Magazine y suplemento especial MEXICO POLO LIFE."
      ],
      pointsEn: [
        "+1,000,000 paid impressions on Meta & Google Ads targeted strictly at high-income leaders.",
        "+1,500,000 estimated organic reach through lifestyle opinion leaders, patrons, and society press.",
        "Dedicated editorial coverage in LM Magazine, Robb Report style press and Mexico Polo Life."
      ],
      badge: "ALCANCE"
    },
    {
      slideNum: "12",
      tag: "RETORNO Y MÉTRICAS (ROI)",
      tagEn: "METRICS & ROI AUDIT",
      titleEs: "Auditoría Post-Evento, Clipping de Medios y Base de Datos PR",
      titleEn: "Post-Event Media Audit, PR Clippings & Executive Networking Data",
      subtitleEs: "Garantizamos métricas cuantitativas y cualitativas de valor publicitario equivalente (AVE).",
      subtitleEn: "Delivering verifiable qualitative and quantitative metrics with Advertising Value Equivalency.",
      image: "assets/photos/sunset_grill_rect.jpg",
      pointsEs: [
        "Reporte analítico integral post-evento con métricas de menciones, alcance y visualizaciones.",
        "Dossier fotográfico y mini-clip cinematográfico de 15 segundos personalizado para la marca.",
        "Acceso directo y validado a la red de contactos y patrocinadores participantes."
      ],
      pointsEn: [
        "Comprehensive post-event analytics dossier documenting impressions, engagement, and reach.",
        "Curated high-resolution photo library and bespoke 15-second cinematic highlight reel for your brand.",
        "Direct access to tournament attendee database for relationship-building and VIP hospitality follow-up."
      ],
      badge: "ANALÍTICA"
    },
    {
      slideNum: "13",
      tag: "DISPONIBILIDAD POR SECTOR",
      tagEn: "INDUSTRY EXCLUSIVITY",
      titleEs: "Regla Inquebrantable: Estricto Límite de 1 Sola Marca por Sector",
      titleEn: "Unbreakable Standard: Strict Limit of 1 Single Brand per Industry Sector",
      subtitleEs: "La reserva de exclusividad se otorga por estricto orden cronológico de formalización.",
      subtitleEn: "Category reservation lock is granted strictly in chronological order of formalization.",
      image: "assets/stills/champagne_toast.jpg",
      pointsEs: [
        "Blindaje garantizado: Si su marca confirma en 'Automotriz', ninguna otra marca de autos tendrá presencia.",
        "Categorías en proceso de confirmación: Alta Relojería, Champagne, Banca Privada y Aviación.",
        "Recomendamos contactar de inmediato para verificar la disponibilidad de su industria."
      ],
      pointsEn: [
        "Guaranteed competitor shield: When your brand locks 'Automotive', all rivals are barred.",
        "Categories currently under active negotiation: Horlogerie, Champagne, Private Banking and Aviation.",
        "Immediate inquiry is strongly recommended to secure your category before industry closure."
      ],
      badge: "EXCLUSIVIDAD"
    },
    {
      slideNum: "14",
      tag: "SIGUIENTE PASO & PROTOCOLO",
      tagEn: "CLOSING PROTOCOL",
      titleEs: "Reunión de Alineación Privada con el Comité Organizador",
      titleEn: "Private Executive Alignment Meeting with the Committee",
      subtitleEs: "Sesión ejecutiva de 30 minutos presencial o por videoconferencia para afinar activaciones.",
      subtitleEn: "30-minute executive briefing in-person or via secure videoconference to tailor activations.",
      image: "assets/stills/trofeo_championship.jpg",
      pointsEs: [
        "1. Confirmación de disponibilidad de su categoría de industria.",
        "2. Sesión estratégica para diseñar activaciones y presencia en el club.",
        "3. Emisión de contrato de patrocinio formal con bloqueo de exclusividad.",
        "Canal directo: Presidencia de Patrocinios vía WhatsApp al +34 722 11 62 48."
      ],
      pointsEn: [
        "1. Real-time availability check for your specific commercial sector.",
        "2. Strategic session to customize brand activations, lounges, and hospitality.",
        "3. Formal agreement issuance with legal category exclusivity guarantee.",
        "Direct liaison: Sponsorship Presidency on WhatsApp at +34 722 11 62 48."
      ],
      badge: "FORMALIZACIÓN"
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
      titleEs: "VIP Hospitality Lounge con Mixología de Autor",
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
      titleEs: "Golden Hour Cocktail & After-Polo Sessions",
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

  // --- 5. RENDER TRANSLATIONS (DOM UPDATE) ---
  function updateLanguageDOM(lang, autoCurrency = true) {
    state.lang = lang;
    localStorage.setItem('nationscup_lang', lang);

    // By default, prices are ALWAYS in USD; currency ONLY changes to MXN if user explicitly chooses MXN.
    // (Preserve user selected currency or default USD regardless of language)

    // Update active pill styling
    const pillEs = document.getElementById('lang-toggle-es');
    const pillEn = document.getElementById('lang-toggle-en');
    if (pillEs && pillEn) {
      if (lang === 'es') {
        pillEs.className = "px-3 py-1 text-xs font-semibold rounded-full bg-[#d4af37] text-[#07140e] transition-all";
        pillEn.className = "px-3 py-1 text-xs font-medium rounded-full text-[#f3e5ab]/70 hover:text-white transition-all";
      } else {
        pillEn.className = "px-3 py-1 text-xs font-semibold rounded-full bg-[#d4af37] text-[#07140e] transition-all";
        pillEs.className = "px-3 py-1 text-xs font-medium rounded-full text-[#f3e5ab]/70 hover:text-white transition-all";
      }
    }

    // Translate all [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    const dict = i18n[lang];
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

    // Synchronize video file with current language
    syncVideoWithLanguage(lang);

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
    if (badgeEl) badgeEl.textContent = slide.badge;

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
      title: "VIP Hospitality Lounge",
      image: "assets/renders/Palapa interior.jpg",
      yaw: 15,
      pitch: -2,
      hfov: 100
    },
    field: {
      title: "Campo Central & Explanada",
      image: "assets/renders/Palapa Exterior.jpg",
      yaw: -30,
      pitch: 0,
      hfov: 105
    },
    autoshow: {
      title: "Stands Comerciales & Autoshow",
      image: "assets/renders/pool autoshow.jpg",
      yaw: 50,
      pitch: -5,
      hfov: 95
    },
    grill: {
      title: "Sunset Grill & Bar",
      image: "assets/renders/grill.jpg",
      yaw: 0,
      pitch: -4,
      hfov: 100
    },
    stage: {
      title: "Escenario Fashion Show",
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
      suffix: "MXN + IVA",
      platino: "787,500",
      platinoEquiv: "Equivalente oficial a $45,000 USD",
      oro: "490,000",
      oroEquiv: "Equivalente oficial a $28,000 USD",
      plata: "245,000",
      plataEquiv: "Equivalente oficial a $14,000 USD",
      bronce: "157,500",
      bronceEquiv: "Equivalente oficial a $9,000 USD"
    },
    USD: {
      symbol: "$",
      code: "USD",
      suffix: "USD + IVA",
      platino: "45,000",
      platinoEquiv: "Aprox. $787,500 MXN",
      oro: "28,000",
      oroEquiv: "Aprox. $490,000 MXN",
      plata: "14,000",
      plataEquiv: "Aprox. $245,000 MXN",
      bronce: "9,000",
      bronceEquiv: "Aprox. $157,500 MXN"
    },
    EUR: {
      symbol: "€",
      code: "EUR",
      suffix: "EUR + IVA",
      platino: "41,400",
      platinoEquiv: "Aprox. $45,000 USD",
      oro: "25,750",
      oroEquiv: "Aprox. $28,000 USD",
      plata: "12,880",
      plataEquiv: "Aprox. $14,000 USD",
      bronce: "8,280",
      bronceEquiv: "Aprox. $9,000 USD"
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

    // Update Tier Platino
    const tPPrice = document.getElementById('tier-platino-price');
    const tPCurr = document.getElementById('tier-platino-currency');
    const tPEquiv = document.getElementById('tier-platino-equiv');
    if (tPPrice) tPPrice.textContent = `${curr.symbol}${curr.platino}`;
    if (tPCurr) tPCurr.textContent = `${curr.code} + IVA`;
    if (tPEquiv) tPEquiv.textContent = curr.platinoEquiv;

    // Update Tier Oro
    const tOPrice = document.getElementById('tier-oro-price');
    const tOCurr = document.getElementById('tier-oro-currency');
    const tOEquiv = document.getElementById('tier-oro-equiv');
    if (tOPrice) tOPrice.textContent = `${curr.symbol}${curr.oro}`;
    if (tOCurr) tOCurr.textContent = `${curr.code} + IVA`;
    if (tOEquiv) tOEquiv.textContent = curr.oroEquiv;

    // Update Tier Plata
    const tSPrice = document.getElementById('tier-plata-price');
    const tSCurr = document.getElementById('tier-plata-currency');
    const tSEquiv = document.getElementById('tier-plata-equiv');
    if (tSPrice) tSPrice.textContent = `${curr.symbol}${curr.plata}`;
    if (tSCurr) tSCurr.textContent = `${curr.code} + IVA`;
    if (tSEquiv) tSEquiv.textContent = curr.plataEquiv;

    // Update Tier Bronce
    const tBPrice = document.getElementById('tier-bronce-price');
    const tBCurr = document.getElementById('tier-bronce-currency');
    const tBEquiv = document.getElementById('tier-bronce-equiv');
    if (tBPrice) tBPrice.textContent = `${curr.symbol}${curr.bronce}`;
    if (tBCurr) tBCurr.textContent = `${curr.code} + IVA`;
    if (tBEquiv) tBEquiv.textContent = curr.bronceEquiv;

    // Update Special Assets Table prices & currency labels (Default USD)
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

    const currLabels = document.querySelectorAll('.price-curr-label');
    currLabels.forEach(lbl => {
      lbl.textContent = `${curr.code} + IVA`;
    });

    const headerCurrEl = document.getElementById('header-curr-selected');
    if (headerCurrEl) {
      headerCurrEl.textContent = curr.code;
    }

    const tableNoteEl = document.getElementById('table-currency-note');
    if (tableNoteEl) {
      tableNoteEl.textContent = state.currency === 'MXN'
        ? 'Tarifas en Moneda Nacional (MXN + IVA)'
        : (state.currency === 'EUR' ? 'Tarifas en Euros (EUR + IVA)' : 'Tarifas oficiales en Dólares (USD + IVA)');
    }
  }

  // Auto pre-select tier and scroll to WhatsApp form
  window.selectTierForContact = function (tierKey) {
    const formSection = document.getElementById('formulario-whatsapp');
    const tierSelect = document.getElementById('form-tier');

    if (tierSelect) {
      tierSelect.value = tierKey;
      updateFormWhatsAppPreview();
    }

    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- 11. DIRECT WHATSAPP URL GENERATOR (+34 722 11 62 48) ---
  const WHATSAPP_PHONE = "34722116248"; // +34 722 11 62 48

  function generateWhatsAppMessage() {
    const isEs = state.lang === 'es';
    const name = (document.getElementById('form-name')?.value || '').trim() || (isEs ? "[Nombre del Ejecutivo]" : "[Executive Name]");
    const company = (document.getElementById('form-company')?.value || '').trim() || (isEs ? "[Empresa / Marca]" : "[Company / Brand]");
    
    const roleSelect = document.getElementById('form-role');
    const roleText = (roleSelect && roleSelect.selectedIndex > 0) 
      ? roleSelect.options[roleSelect.selectedIndex].text 
      : (isEs ? "[Cargo Directivo]" : "[Executive Role]");

    const catSelect = document.getElementById('form-category');
    const catText = (catSelect && catSelect.selectedIndex > 0) 
      ? catSelect.options[catSelect.selectedIndex].text 
      : (isEs ? "[Categoría de Industria]" : "[Industry Category]");

    const tierSelect = document.getElementById('form-tier');
    const tierText = (tierSelect && tierSelect.selectedIndex > 0) 
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
        btn.textContent = "¡Copiado! ✓";
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
