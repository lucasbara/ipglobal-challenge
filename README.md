# Ipglobal - Challenge

Aplicación de pelicuas usando [The Movie DB API](https://developers.themoviedb.org/)

## Empezando

Estas instrucciones te permitirán obtener una copia del proyecto y ejecutarlo en tu máquina local para desarrollo.

### Pre-requisitos

- Asegúrate de tener npm instalado en tu máquina. Si no lo tienes, por favor consulta el siguiente enlace:

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

- Dentro de la carpeta del proyecto, crea un archivo .env con las credenciales que fueron enviadas por correo

### Instalar

Después de eso, instala las dependencias requeridas ejecutando el siguiente comando en la terminal.

```
npm install
```

Después de que la instalación sea exitosa, ejecuta el siguiente comando para que tu código esté disponible en modo de desarrollo.

```
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio

## Deployment

Para este proyecto decidí utilizar [Vercel](https://vercel.com/).
Cuenta con integración continua y despliegue continuo (CI/CD) incorporado para detectar cambios y fusiones en la rama predeterminada y crear una nueva versión del proyecto.

## Hecho con

- [The Movie DB API](https://www.themoviedb.org/) - The Movie DB Api
- [Vite](https://vitejs.dev/) - El entorno web
- [Tailwind](https://tailwindcss.com/) - Framework CSS
- [React Icons](https://react-icons.github.io/react-icons/) - Iconos SVGs
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Carteles de alerta
- [Dayjs](https://day.js.org/) - Fechas
- [React Error Boundary](https://www.npmjs.com/package/react-error-boundary) - Manejo de errores dentro de la aplicación

## Decisiones

- **Vite:** Se eligió Vite como herramienta de construcción para maximizar la velocidad de desarrollo y el rendimiento de la aplicación.
- **Modo estricto en TypeScript:** El proyecto utiliza TypeScript en modo estricto para garantizar la detección temprana de errores y proporcionar una mayor seguridad durante el desarrollo.
- **Diseño escalable y responsive:** Los componentes se han diseñado teniendo en cuenta la escalabilidad, lo que facilita a otros desarrolladores continuar trabajando en la aplicación en el futuro.
- **Evitar código repetido:** Se ha evitado la repetición de código en la medida de lo posible. Si se detectó código repetido, se crearon funciones o variables para reutilizarlo y mantener un código más limpio y legible.

## Autor

- Lucas Barallobre
