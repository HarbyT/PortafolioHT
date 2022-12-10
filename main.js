/*const nav = document.getElementById('navigation');
const botonNavBar = document.getElementById('boton-nav-bar');

// Agregar un event listener al botón para mostrar o ocultar la nav bar al hacer clic
botonNavBar.addEventListener('click', (event) => {
  nav.classList.toggle('nav-show');
});


document.querySelector('nav button').addEventListener('click', () => {
    const navLinks = document.querySelector('nav ul');
    if (navLinks.style.display === 'none') {
      navLinks.style.display = 'block';
    } else {
      navLinks.style.display = 'none';
    }
  });

*/
irASeccion('bienvenida');

  function mostrarOcultarNav() {
    // Obtener la barra de navegación
    const nav = document.querySelector('nav');
    
    // Cambiar la propiedad `display` de la barra de navegación entre `block` y `none`
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  }

  
// Función para enviar un correo electrónico al antropólogo programador
function enviarCorreo() {
    // Obtener la dirección de correo electrónico del antropólogo programador
    // y la información del mensaje desde el formulario de contacto
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Comprobar si se han ingresado todos los datos necesarios
    if (email && asunto && mensaje) {
      // Enviar el correo electrónico utilizando la API de correo electrónico
      // del proveedor de servicios de correo electrónico (por ejemplo, Gmail, Outlook, etc.)
      emailjs.send('gmail', 'portafolio_antropologo', { email, asunto, mensaje });
      
      // Mostrar un mensaje de éxito al usuario
      alert('¡Mensaje enviado exitosamente!');
    } else {
      // Mostrar un mensaje de error al usuario
      alert('Por favor, rellene todos los campos del formulario.');
    }
  }
  
 // Función para navegar entre las secciones del portafolio
  function irASeccion(seccionId) {
    // Ocultar todas las secciones del portafolio
    const secciones = document.querySelectorAll('main section');
    secciones.forEach((seccion) => {
      seccion.style.display = 'none';
    });
  
    // Mostrar la sección seleccionada
    const seccion = seccionId;
    seccion.style.display = 'block'; 

}

 /*   // Función para navegar entre las secciones del portafolio
function irASeccion(seccionId) {
    // Ocultar todas las secciones del portafolio
    const secciones = document.querySelectorAll('main section');
    secciones.forEach((seccion) => {
      seccion.style.display = 'none';
    });
  
    // Mostrar la sección seleccionada
    const seccion = document.getElementById(seccionId);
    seccion.style.display = 'block';
  } 

  */
  
  // Navegar a la sección de bienvenida cuando la página carga
  //irASeccion('sobre-mi');
  
  
  
  /* Asignar manejadores de eventos a los enlaces del menú de navegación
  const enlacesMenu = document.querySelectorAll('nav a');
  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener('click', (evento) => {
      // Prevenir el comportamiento

    */  
// Función para mostrar imágenes en un carrusel de imágenes
function mostrarImagenes(imagenes) {
    imagenes = "./FotoHT.png"
    // Inicializar la librería de carrusel de imágenes
    const lightbox = new Lightbox();
  
    // Agregar las imágenes al carrusel
    imagenes.forEach((imagen) => {
      lightbox.addImage(imagen);
    });
  
    // Mostrar el carrusel de imágenes
    lightbox.start();
  }

// Función para mostrar un mapa con la ubicación del antropólogo programador
function mostrarMapa() {
    // Inicializar la librería de mapas
    const map = new GoogleMaps('mapa-container');
  
    // Agregar un marcador en el mapa en la ubicación del antropólogo programador
    map.addMarker({
      lat: 4.65, // Coordenadas de latitude
      lng: -74.05, // Coordenadas de longitude
    });
  
    // Ajustar el nivel de zoom del mapa para mostrar todos los marcadores
    map.fitBounds();
  }

  // Crear una lista para mostrar los enlaces
const lista = document.createElement('ul');

// Agregar enlaces a los perfiles del antropólogo programador a la lista
const enlaces = [
  {
    titulo: 'LinkedIn',
    url: 'https://www.linkedin.com/in/antropologo-programador/',
  },
  {
    titulo: 'GitHub',
    url: 'https://github.com/antropologo-programador/',
  },
  {
    titulo: 'Upwork',
    url: 'https://www.upwork.com/o/profiles/users/_~01b3d3f4a4a7f8b8e9/',
  },
];

enlaces.forEach((enlace) => {
  // Crear un elemento <li> para cada enlace
  const item = document.createElement('li');

  // Crear un elemento <a> para el enlace
  const link = document.createElement('a');
  link.textContent = enlace.titulo;
  link.href = enlace.url;

  // Agregar el elemento <a> al elemento <li>
  item.appendChild(link);

  // Agregar el elemento <li> a la lista
  lista.appendChild(item);
});

// Agregar la lista a la sección de contacto en la página
const seccionContacto = document.getElementById('contacto');
seccionContacto.appendChild(lista);

// Función para mostrar una animación al hacer clic en un elemento
function mostrarAnimacion(elemento) {
    // Aplicar la clase "animated" de Animate.css para iniciar la animación
    elemento.classList.add('animated');
  
    // Aplicar la clase de la animación deseada, por ejemplo "bounceIn"
    elemento.classList.add('bounceIn');
  }
  
  // Asignar un manejador de eventos "click" al botón o enlace
  const boton = document.getElementById('mi-boton');
  boton.addEventListener('click', () => {
    // Mostrar la animación al hacer clic en el botón o enlace
    mostrarAnimacion(boton);
  });

// Función para mostrar una animación al hacer clic en un elemento
function mostrarAnimacion(elemento) {
    // Aplicar la clase "animated" de Animate.css para iniciar la animación
    elemento.classList.add('animated');
  
    // Aplicar la clase de la animación deseada, por ejemplo "bounceIn"
    elemento.classList.add('bounceIn');
  
    // Asignar un manejador de eventos "animationend" para quitar la clase de animación cuando termine
    elemento.addEventListener('animationend', () => {
      elemento.classList.remove('animated');
      elemento.classList.remove('bounceIn');
    });
  }
  
  
