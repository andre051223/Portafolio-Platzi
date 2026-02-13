# Sistema de Diseño - Portafolio Platzi

Este documento describe el sistema de diseño completo utilizado en el proyecto Portafolio Platzi, incluyendo la paleta de colores, tipografía, espaciado y estilos aplicados en todos los componentes.

---

## 📋 Tabla de Contenido

- [Paleta de Colores](#-paleta-de-colores)
- [Tipografía](#-tipografía)
- [Sistema de Espaciado](#-sistema-de-espaciado)
- [Sombras](#-sombras)
- [Bordes y Radios](#-bordes-y-radios)
- [Navbar (Navegación)](#-navbar-navegación)
- [Contenido Principal](#-contenido-principal)
- [Footer (Pie de Página)](#-footer-pie-de-página)
- [Componentes y Animaciones](#-componentes-y-animaciones)
- [Responsive Design](#-responsive-design)

---

## 🎨 Paleta de Colores

### Colores Principales

| Color | Variable CSS | Valor Hexadecimal | Uso |
|-------|--------------|-------------------|-----|
| **Verde Platzi** | `--platzi-green` | `#0cce87` | Color principal de la marca, botones primarios, acentos |
| **Verde Platzi Oscuro** | `--platzi-green-dark` | `#0bb677` | Hover states, variaciones |
| **Verde Platzi Claro** | `--platzi-green-light` | `#1de99b` | Gradientes, efectos de luz |

### Colores de Fondo

| Color | Variable CSS | Valor | Uso |
|-------|--------------|-------|-----|
| **Fondo Oscuro Principal** | `--dark-bg` | `#0f0f23` | Fondo principal del body |
| **Fondo Oscuro Secundario** | `--dark-secondary` | `#1a1a2e` | Tarjetas, secciones alternas |
| **Fondo Oscuro Terciario** | `--dark-tertiary` | `#16213e` | Variaciones de fondo |

### Colores de Texto

| Color | Variable CSS | Valor | Uso |
|-------|--------------|-------|-----|
| **Texto Principal** | `--text-primary` | `#ffffff` | Títulos, texto importante |
| **Texto Secundario** | `--text-secondary` | `#a0a0a0` | Párrafos, texto descriptivo |

### Efectos de Cristal (Glassmorphism)

| Efecto | Variable CSS | Valor | Uso |
|--------|--------------|-------|-----|
| **Fondo de Cristal** | `--glass-bg` | `rgba(255, 255, 255, 0.1)` | Tarjetas con efecto glassmorphism |
| **Borde de Cristal** | `--glass-border` | `rgba(255, 255, 255, 0.2)` | Bordes translúcidos |

### Gradientes Utilizados

```css
/* Gradiente de fondo principal */
background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 50%, var(--dark-tertiary) 100%);

/* Gradiente para texto highlight */
background: linear-gradient(45deg, var(--platzi-green), var(--platzi-green-light));

/* Gradiente para botones primarios */
background: linear-gradient(45deg, var(--platzi-green), var(--platzi-green-light));
```

---

## 🔤 Tipografía

### Fuentes

| Uso | Variable CSS | Fuente | Fallback |
|-----|--------------|--------|----------|
| **Texto Principal** | `--font-primary` | `Inter` | `-apple-system, BlinkMacSystemFont, sans-serif` |
| **Títulos y Encabezados** | `--font-heading` | `Poppins` | `sans-serif` |

### Tamaños de Fuente Base

```css
html {
  font-size: 16px;
}

body {
  line-height: 1.6;
}
```

### Jerarquía Tipográfica

| Elemento | Tamaño | Peso | Familia |
|----------|--------|------|---------|
| **Hero Title** | `clamp(2.5rem, 5vw, 4rem)` | 700 | Poppins |
| **Section Title** | `2.2rem - 2.5rem` | 600-700 | Poppins |
| **Subtitle** | `1.25rem - 1.5rem` | 400-500 | Inter |
| **Body Text** | `1rem` | 400 | Inter |
| **Small Text** | `0.85rem - 0.95rem` | 400 | Inter |

---

## 📏 Sistema de Espaciado

Sistema consistente basado en múltiplos de `0.5rem`:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--spacing-xs` | `0.5rem` (8px) | Espaciado mínimo, padding pequeño |
| `--spacing-sm` | `1rem` (16px) | Espaciado estándar entre elementos |
| `--spacing-md` | `1.5rem` (24px) | Separación entre componentes |
| `--spacing-lg` | `2rem` (32px) | Padding de tarjetas, gaps en grids |
| `--spacing-xl` | `3rem` (48px) | Separación entre secciones |
| `--spacing-xxl` | `4rem` (64px) | Máximo espaciado, secciones principales |

---

## ✨ Sombras

Sistema de sombras para profundidad y jerarquía:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--shadow-sm` | `0 2px 8px rgba(0, 0, 0, 0.1)` | Elementos sutiles |
| `--shadow-md` | `0 4px 16px rgba(0, 0, 0, 0.2)` | Tarjetas, botones hover |
| `--shadow-lg` | `0 8px 32px rgba(0, 0, 0, 0.3)` | Elementos elevados, modales |
| `--shadow-glass` | `0 8px 32px rgba(12, 206, 135, 0.1)` | Efecto glassmorphism con acento verde |

---

## 🔘 Bordes y Radios

Sistema de border-radius para consistencia visual:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--radius-sm` | `8px` | Botones pequeños, inputs |
| `--radius-md` | `12px` | Botones estándar, tarjetas pequeñas |
| `--radius-lg` | `16px` | Tarjetas principales |
| `--radius-xl` | `24px` | Navegación, elementos destacados |

---

## 🧭 Navbar (Navegación)

### Navegación Flotante Principal (index.html)

```css
.floating-nav {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  backdrop-filter: blur(20px);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-sm) var(--spacing-lg);
  box-shadow: var(--shadow-glass);
}
```

**Características:**
- Posición fija en la parte superior
- Efecto glassmorphism con blur
- Borde translúcido
- Centrado horizontalmente

### Navbar Secundaria (platziNavbar.html)

```css
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}
```

**Elementos:**

#### Imagen de Perfil
```css
.profile-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--platzi-green);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(12, 206, 135, 0.3);
}
```

#### Enlaces de Navegación
```css
.nav-links a {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-links a:hover {
  background: var(--glass-bg);
  color: var(--platzi-green);
}
```

---

## 📄 Contenido Principal

### Hero Section

#### Estructura General
```css
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: calc(var(--spacing-xxl) + 80px) 0 var(--spacing-xxl) 0;
  overflow: hidden;
}
```

#### Fondo con Gradientes Radiales
```css
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, var(--platzi-green) 0%, transparent 25%),
    radial-gradient(circle at 75% 75%, var(--platzi-green-dark) 0%, transparent 25%);
  opacity: 0.1;
  z-index: -1;
}
```

#### Layout de Contenido
```css
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}
```

### Tarjetas de Perfil

```css
.profile-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-glass);
  max-width: 400px;
}
```

**Imagen de Perfil:**
```css
.profile-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--platzi-green);
  transition: all 0.3s ease;
}

.profile-image:hover img {
  transform: scale(1.05);
  box-shadow: 0 0 30px var(--platzi-green);
}
```

### Sección de Proyectos

#### Grid de Proyectos
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}
```

#### Tarjetas de Proyecto
```css
.project-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--platzi-green);
}
```

### Botones

#### Botón Primario (CTA)
```css
.cta-button.primary {
  background: linear-gradient(45deg, var(--platzi-green), var(--platzi-green-light));
  color: white;
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

#### Botón Secundario
```css
.cta-button.secondary {
  background: transparent;
  color: var(--platzi-green);
  border: 2px solid var(--platzi-green);
}

.cta-button.secondary:hover {
  background: var(--platzi-green);
  color: white;
}
```

### Sección de Búsqueda (platziNavbar)

```css
.search-box {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.search-input {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid var(--glass-border);
  border-radius: var(--radius-xl);
  color: var(--text-primary);
  font-size: 1.1rem;
}

.search-input:focus {
  outline: none;
  border-color: var(--platzi-green);
  box-shadow: 0 0 0 3px rgba(12, 206, 135, 0.1);
}
```

### Tarjetas de Escuelas (Quick Access)

```css
.schools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.school-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  backdrop-filter: blur(20px);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.school-card:hover {
  transform: translateY(-5px);
  border-color: var(--platzi-green);
  box-shadow: 0 10px 30px rgba(12, 206, 135, 0.2);
}
```

### Sección Journey (Recorrido)

```css
.journey-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-glass);
}
```

### Stats Cards (Platzi Store)

```css
.stat-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-glass);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--platzi-green);
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--platzi-green);
  margin-bottom: var(--spacing-xs);
}
```

---

## 🦶 Footer (Pie de Página)

### Footer de platziNavbar

```css
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: var(--spacing-lg) 0;
  background: var(--dark-bg);
  border-top: 1px solid var(--glass-border);
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.footer-links {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--platzi-green);
}
```

### Footer de Platzi Store

```css
.store-footer {
  background: var(--dark-bg);
  border-top: 1px solid var(--glass-border);
  padding: var(--spacing-xxl) 0 var(--spacing-lg);
  margin-top: var(--spacing-xxl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}
```

#### Secciones del Footer

```css
.footer-section h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.footer-section ul li a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--platzi-green);
}
```

#### Logo del Footer

```css
.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-weight: 600;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
}

.footer-logo img {
  width: 32px;
  height: 32px;
}
```

#### Enlaces Sociales

```css
.footer-section .social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.footer-section .social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.footer-section .social-link:hover {
  background: var(--platzi-green);
  color: white;
  border-color: var(--platzi-green);
  transform: translateY(-3px);
}
```

#### Footer Bottom (Copyright)

```css
.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--glass-border);
}

.footer-bottom p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}
```

---

## 🎭 Componentes y Animaciones

### Animaciones Principales

#### Slide In Left
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Slide In Right
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Transiciones Estándar

```css
transition: all 0.3s ease;
```

**Aplicaciones comunes:**
- Hover states en botones
- Transformaciones de tarjetas
- Cambios de color
- Efectos de elevación

### Efectos de Hover

#### Elevación de Tarjetas
```css
.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--platzi-green);
}
```

#### Escala de Imágenes
```css
.image:hover {
  transform: scale(1.05);
}
```

#### Brillo en Botones
```css
.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Max Width | Uso |
|------------|-----------|-----|
| **Desktop XL** | 1400px+ | Pantallas grandes |
| **Desktop L** | 1280px | Portátiles grandes |
| **Desktop** | 1024px | Portátiles estándar |
| **Tablet** | 768px | Tablets y móviles grandes |
| **Mobile L** | 640px | Móviles grandes |
| **Mobile** | 480px | Móviles estándar |

### Adaptaciones por Dispositivo

#### Desktop (1280px y menores)
```css
@media (max-width: 1280px) {
  .floating-nav {
    top: 16px;
    padding: var(--spacing-xs) var(--spacing-md);
    max-width: 95%;
  }
  
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

#### Tablet (768px y menores)
```css
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .nav-container {
    flex-direction: column;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

#### Mobile (480px y menores)
```css
@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-button {
    width: 100%;
  }
  
  .schools-grid {
    grid-template-columns: 1fr;
  }
}
```

### Ajustes de Tipografía Responsive

- Uso de `clamp()` para tamaños fluidos
- Reducción de padding y márgenes
- Ajuste de grid columns a 1 columna en móvil
- Navegación colapsada o simplificada

---

## 🎯 Principios de Diseño

### 1. **Glassmorphism**
- Fondos translúcidos con `backdrop-filter: blur()`
- Bordes sutiles con colores rgba
- Profundidad mediante sombras

### 2. **Jerarquía Visual**
- Uso consistente de tamaños de fuente
- Espaciado proporcional
- Contraste de color para elementos importantes

### 3. **Interactividad**
- Transiciones suaves (0.3s ease)
- Feedback visual en hover
- Transformaciones sutiles

### 4. **Accesibilidad**
- Contraste adecuado de colores
- Tamaños de texto legibles
- Áreas de click amplias para enlaces y botones

### 5. **Consistencia**
- Variables CSS para todos los valores
- Sistema de diseño unificado
- Componentes reutilizables

---

## 📝 Notas de Implementación

### Variables CSS Globales
Todas las variables están definidas en `:root` para facilitar el mantenimiento y personalización:

```css
:root {
  /* Colores */
  --platzi-green: #0cce87;
  /* Tipografía */
  --font-primary: 'Inter', sans-serif;
  /* Espaciado */
  --spacing-sm: 1rem;
  /* Etc... */
}
```

### Orden de Importancia
1. Variables globales
2. Reset CSS
3. Estilos base
4. Componentes
5. Utilidades
6. Responsive

### Mantenimiento
- Evitar valores hardcoded, usar variables
- Mantener convenciones de nomenclatura
- Documentar cambios significativos
- Probar en múltiples dispositivos

---

## 🚀 Recursos Utilizados

- **Fuentes:** Google Fonts (Inter, Poppins)
- **Iconos:** SVG personalizados y Font Awesome (si aplica)
- **Efectos:** CSS3 moderno con backdrop-filter
- **Grid:** CSS Grid y Flexbox

---

**Última actualización:** Febrero 2026  
**Versión del proyecto:** 1.0  
**Autor:** Portafolio Platzi

---

Este sistema de diseño proporciona una base sólida y consistente para el desarrollo y mantenimiento del proyecto. Todos los valores están centralizados mediante variables CSS, facilitando futuras actualizaciones y personalizaciones.
