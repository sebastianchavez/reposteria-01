# 🎂 Repostería Delicias — Landing Page Template

Template de sitio web completo para servicios de repostería, diseñado como punto de partida personalizable para pastelerías, negocios de tortas, mesas dulces y academias de repostería.

## ✨ Características

- **9 páginas completas** con navegación entrelazada
- **Tailwind CSS** vía CDN (sin build step)
- **HTML + JavaScript nativo** (sin frameworks)
- **Animaciones suaves** al hacer scroll (IntersectionObserver)
- **Galería interactiva** con filtros y lightbox
- **Formulario de contacto** con simulación de envío
- **Botón flotante de WhatsApp** con animación pulse
- **Datos mockeados** listos para personalizar
- **100% responsive** (mobile, tablet, desktop)
- **SEO-friendly** con meta tags en cada página

## 📁 Estructura del proyecto

```
reposteria-01/
├── index.html                  # Pantalla de inicio
├── sobre-nosotros.html         # Sobre nosotros
├── servicios.html              # Nuestros servicios
├── galeria.html                # Galería con filtros
├── precios.html                # Planes y precios
├── clases.html                 # Horario de clases
├── contacto.html               # Formulario + mapa + horarios
├── politicas-privacidad.html   # Política de privacidad
├── terminos-condiciones.html   # Términos y condiciones
└── assets/
    ├── css/
    │   └── styles.css          # Animaciones y estilos custom
    └── js/
        ├── data.js             # Datos mockeados centralizados
        └── main.js             # Funcionalidades globales
```

## 🚀 Instalación y uso

No requiere instalación ni build step.

### Opción 1: Apertura directa
1. Descargar/clonar el proyecto
2. Doble clic en `index.html` para abrirlo en el navegador

### Opción 2: Servidor local (recomendado)
Con Python:
```bash
python -m http.server 8000
```

Con Node.js:
```bash
npx serve
```

Con PHP:
```bash
php -S localhost:8000
```

Luego abrir `http://localhost:8000` en el navegador.

## 🎨 Personalización

### Colores
Editar el bloque `tailwind.config` en cualquier archivo HTML (preferentemente centralizar en `<head>` de cada página):

```javascript
colors: {
  'rosa-pastel': '#F8C8DC',
  'rosa-fuerte': '#E91E63',
  'crema': '#FFF5E1',
  'dorado': '#D4A574',
  'chocolate': '#5D4037',
  'chocolate-oscuro': '#3E2723'
}
```

### Datos mockeados
Editar `assets/js/data.js`. Los datos se exponen globalmente como `window.DATA`:

- `DATA.servicios` — Array de servicios
- `DATA.galeria` — Imágenes de la galería
- `DATA.precios` — Planes y precios
- `DATA.clases` — Calendario de clases
- `DATA.testimonios` — Testimonios de clientes
- `DATA.equipo` — Equipo de trabajo
- `DATA.faqs` — Preguntas frecuentes

### Imágenes
El proyecto usa `https://picsum.photos/seed/xxx/ancho/alto` para imágenes placeholder. Para reemplazo:

1. Crear carpeta `assets/images/`
2. Reemplazar URLs en `data.js` por rutas locales:
   ```javascript
   imagen: "assets/images/torta-boda.jpg"
   ```

### Información de contacto
Buscar y reemplazar en todos los archivos HTML:
- `+52 123 456 7890` → número real
- `hola@reposteriadelicias.com` → email real
- `Av. Dulce 123, Ciudad` → dirección real
- En `contacto.html`, ajustar coordenadas del iframe de OpenStreetMap

## 🧩 Estructura de cada página

Todas las páginas comparten:

### Navbar
- Logo a la izquierda
- Links centrales (7 secciones)
- Botón "Reservar" a la derecha
- Menú hamburguesa en móvil

### Footer
- 4 columnas: marca, navegación, legal, contacto
- Redes sociales
- Copyright dinámico (año actual)

### Botón flotante WhatsApp
- Posición fija abajo a la derecha
- Animación pulse continua

## 📜 Páginas incluidas

| Página | Ruta | Contenido principal |
|---|---|---|
| Inicio | `index.html` | Hero, servicios destacados, sobre nosotros, galería preview, testimonios, CTA |
| Sobre nosotros | `sobre-nosotros.html` | Historia, misión/visión/valores, equipo, estadísticas |
| Servicios | `servicios.html` | 8 servicios, proceso de trabajo de 4 pasos |
| Galería | `galeria.html` | 16 imágenes con filtros por categoría + lightbox |
| Precios | `precios.html` | 4 planes, tabla comparativa, FAQ |
| Clases | `clases.html` | 10 clases semanales, instructores, niveles |
| Contacto | `contacto.html` | Formulario, info lateral, horarios, mapa |
| Privacidad | `politicas-privacidad.html` | 8 secciones legales |
| Términos | `terminos-condiciones.html` | 9 secciones legales |

## 🛠️ Stack técnico

- **HTML5** semántico
- **Tailwind CSS 3** (vía Play CDN)
- **JavaScript ES6+** nativo
- **Google Fonts:** Playfair Display + Poppins
- **Imágenes:** picsum.photos (placeholders)
- **Mapa:** OpenStreetMap embed

### Sin dependencias de build
No usa Webpack, Vite, ni npm. Todo funciona abriendo los archivos directamente.

## 📦 Despliegue

Compatible con cualquier hosting estático:

- **Netlify:** arrastrar carpeta
- **Vercel:** `vercel deploy`
- **GitHub Pages:** push a rama `gh-pages`
- **Hosting tradicional:** subir vía FTP

## 🎯 Casos de uso sugeridos

- 🎂 Pastelerías y reposterías artesanales
- 🎉 Servicios de mesas dulces para eventos
- 📚 Academias de repostería
- 🛍️ Tiendas online de productos horneados
- 🎨 Servicios de catering dulce

## 📝 Licencia

Template de uso libre. Personalizar libremente para proyectos comerciales o personales.

## 💡 Próximos pasos sugeridos

1. Reemplazar imágenes placeholder por fotos reales
2. Configurar envío real del formulario (Formspree, Netlify Forms, backend propio)
3. Conectar el botón WhatsApp a número real con mensaje pre-llenado
4. Añadir Google Analytics u otra herramienta de analítica
5. Implementar blog si se requiere
6. Generar favicon y PWA manifest

---

💕 Hecho con cariño y mucha azúcar
