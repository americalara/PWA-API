# PWA de Frases Motivacionales

## Descripción
Esta es una **Aplicación Web Progresiva (PWA)** que muestra frases motivacionales aleatorias utilizando una **API pública gratuita**.  
La app está diseñada para funcionar **online y offline**, permitiendo a los usuarios ver la última frase obtenida incluso sin conexión a internet.

---

## Características
- Consumir frases motivacionales desde la API pública [`https://api.adviceslip.com/advice`](https://api.adviceslip.com/advice)  
- Mostrar **frase y autor (fijo)**  
- Botón para **obtener una nueva frase**  
- Funcionalidad **offline**:  
  - Interfaz siempre disponible  
  - Última frase guardada en `localStorage`  
- **Instalable** en dispositivos móviles y escritorio  
- Implementa **service worker** y **manifest.json**  
- Proyecto desplegado en GitHub Pages: [https://americalara.github.io/PWA-API/](https://americalara.github.io/PWA-API/)

---

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (ES6)
- PWA (Service Worker + manifest.json)
- API pública REST

---

## Instalación y uso

1. Abrir la app desde el navegador:
   - [https://americalara.github.io/PWA-API/](https://americalara.github.io/PWA-API/)
2. Opcional: instalar como PWA en tu dispositivo:
   - En **Chrome o Edge** → botón de menú → "Agregar a pantalla de inicio"  
   - En **Firefox** → opción de menú → "Añadir a pantalla de inicio"
3. Presionar el botón **“Nueva Frase”** para obtener frases aleatorias.

> Nota: La app funciona offline mostrando la última frase obtenida, pero para obtener nuevas frases necesitas conexión a internet.

---

## Estructura del proyecto

PWA-API/
│
├─ index.html # Página principal
├─ styles.css # Estilos de la app
├─ app.js # Lógica de la app y consumo de API
├─ service-worker.js # Service worker para cache y offline
├─ manifest.json # Configuración de PWA
└─ README.md # Documentación


---

## Consideraciones
- La app cumple con los requisitos de **PWA básica** y **API pública gratuita**  
- Utiliza **localStorage** para guardar la última frase en modo offline  
- El **service worker** cachea los archivos esenciales de la app para que funcione sin conexión  

---

## Licencia
Proyecto desarrollado como actividad académica, uso libre para fines educativos.
