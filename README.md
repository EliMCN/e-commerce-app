# e-commerce-app

Este proyecto es una aplicación de comercio electrónico desarrollada como parte del curso de Coderhouse - React.js

Como proyecto final, la app permite a un usuario  ingresar, navegar por productos, ver detalles, agregar al carrito y finalizar la compra. El objetivo principal de la aplicación es permitir una experiencia de compra en línea sencilla e intuitiva. Además, el proyecto incluye la funcionalidad de manejar órdenes de compra y persistir los datos en Firebase.

## Funcionalidades

### 1. Navegación y Detalle de Producto

- Los usuarios pueden explorar un catálogo de productos en la ruta `/`.
- Cada producto cuenta con una imagen, descripción, y precio.
- Los productos se organizan por categorías, accesibles a través de un menú desplegable que redirige a `/categories/:categoryId`.
- Al seleccionar un producto, los usuarios serán dirigidos a `/item/:id`, donde pueden ver su detalle y elegir la cantidad a comprar.

### 2. Carrito de Compras

- El carrito de compras es accesible en cualquier momento desde la barra de navegación.
- Muestra la cantidad de items agregados y un listado compacto con el precio total.
- Los usuarios pueden modificar las cantidades de los productos o eliminarlos del carrito.

### 3. Checkout

- Para finalizar la compra, el usuario debe completar un formulario con nombre, apellido, teléfono y correo electrónico (ingresado dos veces para validación).
- Una vez completado, se activará el botón de 'Realizar Compra'.
- Al hacer clic en 'Realizar Compra', se guarda una orden en la base de datos Firebase, incluyendo todos los productos y la fecha de la orden.
- La aplicación proporcionará feedback con el número de orden generado.

## Estructura del Proyecto

El proyecto está estructurado en varios componentes clave:

- **Header**: Muestra el título de la tienda y la navegación.
- **Footer**: Contiene información de derechos de autor.
- **NavBar**: Barra de navegación con enlaces a categorías y al carrito.
- **CartWidget**: Visualización del carrito y cantidad de productos.
- **ItemListContainer**: Contenedor que muestra la lista de productos.
- **ItemList**: Listado de productos dentro de una categoría o en la página principal.
- **ItemDetailContainer**: Contenedor que carga el detalle de un producto seleccionado.
- **ItemDetail**: Vista detallada de un producto con opciones para agregar al carrito.
  - **ItemQuantitySelector**: Selector de cantidad para el producto.
  - **Description**: Descripción del producto.
  - **AddItemButton**: Botón para agregar el producto al carrito.
- **Checkout**: Proceso de finalización de compra.
  - **Brief**: Resumen de la orden antes de finalizar la compra.

## Requisitos Técnicos

### Tecnologías Utilizadas

- **React.js**: Para la creación de la interfaz de usuario.
- **Firebase**: Para el almacenamiento de productos y órdenes.
- **React Router**: Para la navegación entre las distintas rutas.
- **CSS/Bootstrap**: Para el diseño y estilo de la aplicación.

### Requisitos Funcionales

- El proyecto permite visualizar productos, acceder a categorías específicas, y ver los detalles de un producto en rutas organizadas con React Router.
- El carrito de compras es persistente en el navegador mediante `localStorage`.
- Se utiliza Firebase para gestionar las colecciones de productos y órdenes.
  - **Colección `items`**: Catálogo completo de productos.
  - **Colección `orders`**: Información de las órdenes generadas, que incluye productos y precios.
  
## Cómo ejecutar el proyecto

1. Clonar el repositorio.
   ```bash
    git clone https://github.com/EliMCN/e-commerce-app.git
2. Navega a la carpeta del proyecto.
   ```bash
     cd e-commerce-app
3. Instala las dependencias:
   ```bash
    npm install
4. Inicia el servidor de desarrollo:
   ```bash
     npm run dev

## Contribuciones

Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y envía un pull request.
