Pagina Web: https://web-cheese-dama-equipo-javisy-pablo.vercel.app/

PÁGINA WEB TERMINADA Y COMPLETA

# CheeseEnAngular
Informe de Proyecto: Migración a Angular 

Impacto TecnológicoEste informe detalla el proceso de transformación de nuestra plataforma web de una arquitectura estática a una arquitectura basada en componentes utilizando el framework Angular.

  1. Investigación y Recopilación de ContenidoPara la migración, se ha realizado un análisis del contenido original para adaptarlo al patrón MVC (Modelo-Vista-Controlador) y a una arquitectura modular:Arquitectura de     Componentes:
  2.  Se ha descompuesto la web en piezas independientes y reutilizables: Header, Hero, Section-Content y Footer.
  3.  Gestión de Activos: Todos los recursos estáticos (imágenes de dispositivos, iconos de redes sociales y gráficos) se han centralizado en la carpeta public/ para una gestión eficiente de rutas en Angular.
  4.  Fuentes y Referencias: Se han documentado las fuentes de datos sobre el impacto de la tecnología en jóvenes y los créditos de las imágenes utilizadas (Unsplash/Pexels), asegurando la integridad académica del proyecto.
    
  6.  Diseño Visual del Sitio WebEl diseño se ha orientado a ofrecer una experiencia de usuario (UX) inmersiva mediante una navegación de scroll vertical continuo.
     
  7.  Identidad Visual: Se mantiene una estética minimalista y clara, priorizando la legibilidad con fondos negros y bloques de colores amarillos sutiles para diferenciar las secciones. La paleta se basa en tonos     representativos de la aplicación
     Tipografía: Se utiliza una fuente Sans-Serif (sin remates) moderna, que aporta un aspecto limpio y profesional, ideal para un sitio informativo sobre tecnología.
     Estructura: Layout de scroll vertical continuo, donde la navegación guía al usuario a través de los diferentes bloques temáticos (móviles, redes sociales, videojuegos) de manera fluida.

  8.  Prototipado UI-UX: Se ha diseñado un flujo donde cada sección de contenido (Móviles, Redes Sociales, Videojuegos) ocupa el total del viewport ($100vh$), utilizando técnicas de scroll-snap para una transición suave entre secciones.
  9.  Documentación: El boceto detallado de la interfaz se ha integrado en la documentación oficial de la 3ª Evaluación del módulo de Lenguajes de Marcas.3. Configuración del Entorno de TrabajoSe ha establecido un entorno de desarrollo profesional siguiendo los estándares de Angular:
  10.  Estructura del Proyecto: Organización de carpetas basada en módulos, separando la lógica de negocio (services), las interfaces de datos (models) y la interfaz de usuario (components).
  11.  Integración de Frameworks CSS: Se ha instalado y configurado Bootstrap mediante npm para gestionar el sistema de rejillas (grid) y asegurar que la web sea totalmente responsive.
  12.  Adaptación de Código: Se ha procedido a la refactorización del HTML/CSS original, extrayendo estilos globales a styles.css y encapsulando estilos específicos dentro de sus respectivos componentes para evitar colisiones.
