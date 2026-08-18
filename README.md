
## Actividad Realizada Sesión 3

El objetivo principal fue recrear la estructura visual de la navegacion y cabecera de la plataforma sin incluir la seccion principal (main):

* Sidebar: Navegacion lateral fija en version de escritorio con el perfil del usuario en la parte inferior.
* Header: Cabecera con barra de busqueda, sistema de notificaciones, avatar de perfil y titulo dinamico.
* Navegacion Activa: Al hacer clic en cualquier opcion del menu, cambia su estilo visual de forma interactiva e incrementa la usabilidad actualizando el titulo de la pagina en el Header.
* Diseno Responsivo: 
  * En pantallas de escritorio, el boton de menu hamburguesa se mantiene oculto.
  * En dispositivos moviles (<= 768px), la sidebar se oculta automaticamente fuera de pantalla (translateX(-100%)).
  * El boton de tres lineas (menu-toggle) aparece unicamente en celular para desplegar la barra lateral junto a un overlay oscuro para facilitar su cierre.

---

## Puntos Clave de Implementacion

### Uso de Flexbox
Se utilizo Flexbox como motor principal de maquetacion:
* Estructura global: Para posicionar la barra lateral al lado del contenido principal.
* Sidebar: Distribucion vertical (flex-direction: column y justify-content: space-between) para fijar los datos del usuario al final del contenedor.
* Header: Alineacion horizontal (justify-content: space-between y align-items: center) para separar la seccion izquierda (menu/titulo) de la derecha (busqueda/perfil).

### Uso de Iconos
En lugar de vectores SVG incrustados en el codigo HTML, se integro la libreria Font Awesome desde CDNjs:
* Permite una estructura HTML mas limpia y facil de mantener.
* Facilita la personalizacion de tamano y color directamente desde CSS.

---

## Estructura de Archivos

```text
├── /index.html     # Estructura semantica HTML
├── /css/estilos.css     # Hojas de estilo y Media Queries
└── /js/script.js      # Logica para interactividad del menu