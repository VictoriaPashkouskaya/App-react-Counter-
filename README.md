# React Application

## Objetivos del Proyecto

- Comprender cómo desarrollar una aplicación con React.
- Mejorar tus habilidades en desarrollo web.
- Mejorar tus habilidades en desarrollo de JavaScript.

## Ejercicios

### Ejercicio 1: Contador

Crea un componente funcional `Counter` que contenga:
- Un botón para decrementar.
- Un contador.
- Un botón para incrementar.

El contador debe:
- Poder empezar desde un número específico.
- Permitir configurar el incremento/decremento en diferentes valores (2, 3, etc.).

### Ejercicio 2: Saludo

Crea un componente funcional `Greeting` que contenga:
- Una etiqueta `p` que diga "Hola Euralio".
- Cambia "Euralio" a un prop recibido desde el componente padre.
- Después de 3 segundos desde que se monta el componente, debe mostrar "Hola Alfonsina".

## Página del Restaurante

Crea una página de restaurante con React utilizando componentes funcionales:
- Incluye al menos los componentes `Home` y `Header`.
- El componente `Home` debe mostrar el siguiente array de platos:

```javascript
const dishes = [
  { id: 1, name: 'plato 1', description: 'Este es el plato 1', price: 10 },
  { id: 2, name: 'plato 2', description: 'Este es el plato 2', price: 20 },
  { id: 3, name: 'plato 3', description: 'Este es el plato 3', price: 15 }
];
```

Este array debe ser pasado como props al componente Home.

Extras
Implementar diseño responsive.
Rehacer el Ejercicio 2 utilizando componentes de clases.
Rehacer la página del restaurante utilizando componentes de clases.
Despliegue
Para abrir el proyecto, despliega la aplicación en Vercel siguiendo estos pasos:

Sube tu proyecto a un repositorio en GitHub.
Conecta tu repositorio a Vercel:
Ve a Vercel.
Inicia sesión o crea una cuenta.
Importa tu repositorio desde GitHub.
Configura las opciones de despliegue y haz clic en "Deploy".
