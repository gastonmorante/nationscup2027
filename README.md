# NATIONS CUP 2027 · El Rey Polo Country Club
### Ultra-Luxury B2B Commercial Landing Page & Digital Sponsorship Hub

Official commercial B2B web application for **NATIONS CUP 2027**, hosted at **El Rey Polo Country Club** (Puerto Morelos, Riviera Maya, Mexico) from **January 13 to 16, 2027**.

Designed for Brand Presidents, Global CMOs, CEOs, C-Levels, and Ultra-High-Net-Worth Individuals (UHNWI).

---

## 🌟 Key Features

1. **Luxury Equestrian Design System:**
   - Dominant Palette: British Racing Green (`#07140E` / `#0A1E16`), Metallic Champagne Gold (`#D4AF37`, `#C5A059`), and Silk Cream (`#FBF9F5`).
   - Haute couture typography: *Cormorant Garamond*, *Playfair Display*, and *Montserrat*.
   - GPU-accelerated 60 FPS transitions and refined glassmorphism.

2. **Smart Multilingual (ES / EN):**
   - Automatic IP / Geolocation detection with fallback to `navigator.language`.
   - Manual *Pill Toggle* in header for instant client-side switching via centralized JSON dictionary (`i18n`).
   - Dynamic video source switching between Spanish and English reels.

3. **Cinematic Sizzle Reel Player:**
   - Frameless panoramic HUD with HD audio toggle, fullscreen, and direct 4K master download link.

4. **14-Slide Interactive Pitch Deck:**
   - Art exhibition slide viewer with touch swipe on mobile, arrow keys, counter (`01 / 14`), and direct executive PDF download.

5. **360° Virtual Tour (Pannellum WebGL):**
   - 5 interactive scenes: *VIP Hospitality Lounge*, *Campo Central*, *Stands Comerciales & Autoshow*, *Sunset Grill*, and *Fashion Show Stage*.
   - Native mobile gyroscope support (`DeviceOrientation` API).

6. **Architectural Digest Editorial Gallery (10 Perspectives):**
   - Curated master shots grid with full-screen interactive lightbox.

7. **Dynamic Multi-Currency Converter:**
   - Real-time price switching between **MXN**, **USD**, and **EUR** for all sponsorship tiers.

8. **Direct WhatsApp Protocol (+34 722 11 62 48):**
   - Validated C-Level form with live message preview and automated redirect via WhatsApp API.

9. **Mobile-Native Floating Action Dock:**
   - Quick shortcuts to Pitch Deck, 360° Tour, and pulsating VIP WhatsApp button.

---

## 🚀 Despliegue en Render.com (Instrucciones Paso a Paso)

Este proyecto está construido con **HTML5, Tailwind CSS y JavaScript Vanilla**, lo que permite desplegarlo en **Render.com** como un **Static Site (Sitio Estático)** completamente gratis, con SSL automático (HTTPS), CDN global y velocidad de carga ultrarrápida.

### Pasos para Desplegar:

1. **Crear o Iniciar Sesión en Render:**
   - Ingresa a [https://render.com](https://render.com) e inicia sesión con tu cuenta de GitHub (`gastonmorante`).

2. **Crear un Nuevo Servicio:**
   - En el Dashboard de Render, haz clic en el botón azul **"New +"** (arriba a la derecha).
   - Selecciona **"Static Site"**.

3. **Conectar el Repositorio de GitHub:**
   - Selecciona el repositorio **`gastonmorante/nationscup2027`**.
   - *(Si no aparece en la lista, haz clic en "Configure account" para otorgar permisos a Render en ese repositorio).*

4. **Configurar los Parámetros del Despliegue:**
   - **Name:** `nationscup2027` (o el nombre de tu preferencia, ej. `nationscup2027-elrey`).
   - **Branch:** `main` (o `master`).
   - **Root Directory:** déjalo vacío (o `.`).
   - **Build Command:** déjalo vacío (no requiere compilación, es HTML estático nativo).
   - **Publish Directory:** `.` (o déjalo en blanco / directorio raíz donde reside `index.html`).

5. **Lanzar el Despliegue:**
   - Haz clic en **"Create Static Site"**.
   - Render clonará el repositorio y desplegará tu landing page en menos de 60 segundos.
   - Obtendrás una URL pública de alta disponibilidad con certificado SSL gratuito (ej. `https://nationscup2027.onrender.com`).

6. *(Opcional) Dominio Personalizado:*
   - En la pestaña **Settings** > **Custom Domains**, puedes vincular tu propio dominio de marca (ej. `nationscup2027.com` o `elreypolo.com`).

---

## 💻 Desarrollo Local

Para correr la landing page localmente en tu computadora:

```bash
# Con Python
python -m http.server 8080

# Con Node (npx)
npx serve .
```

Abre tu navegador en `http://localhost:8080`.
