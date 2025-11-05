# Proyecto Web Grupo 2

Este proyecto es una aplicación web full-stack que gestiona integrantes de equipos y mensajes, dividida en frontend y backend.

## Estructura del Proyecto

```
├── BackEnd/
│   ├── Controllers/
│   │   ├── integrantes.controller.js
│   │   └── mensajes.controller.js
│   ├── DB/
│   │   └── connection.js
│   ├── Routes/
│   │   ├── integrantes.routes.js
│   │   └── mensajes.routes.js
│   └── index.js
├── FrontEnd/
│   ├── css/
│   │   └── Index.css
│   ├── img/
│   ├── js/
│   │   ├── cardsEquipos.js
│   │   └── envioDatosFrom.js
│   └── Pages/
│       └── Index.html
```

## Backend

### Tecnologías Utilizadas
- Node.js
- Express.js
- MySQL

### Componentes Principales

#### Controllers
- `integrantes.controller.js`: Maneja la lógica para obtener y gestionar integrantes, agrupándolos por puesto
- `mensajes.controller.js`: Gestiona la lógica relacionada con mensajes

#### Routes
- `integrantes.routes.js`: Define las rutas para las operaciones de integrantes
- `mensajes.routes.js`: Define las rutas para las operaciones de mensajes

#### Base de Datos
- `connection.js`: Configura y gestiona la conexión a la base de datos

### Características del Backend
- API RESTful
- Manejo de errores centralizado
- Agrupación de integrantes por puesto
- Sistema de mensajería

## Frontend

### Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla)

### Componentes Principales

#### Páginas
- `Index.html`: Página principal de la aplicación

#### JavaScript
- `cardsEquipos.js`: Maneja la visualización de equipos en formato de tarjetas
- `envioDatosFrom.js`: Gestiona el envío de datos desde formularios

#### Estilos
- `Index.css`: Estilos principales de la aplicación

## Base de Datos

### Estructura
La base de datos incluye las siguientes tablas principales:
- `integrantes`: Almacena información de los miembros
- `puestos`: Catálogo de puestos disponibles
- `integrante_puesto`: Tabla intermedia para la relación entre integrantes y puestos
- (Presumiblemente) `mensajes`: Almacena los mensajes del sistema

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/ThyagoKoremba/ProgramacionWebGrupo2.git
```

2. Instalar dependencias del backend:
```bash
cd BackEnd
npm install
```

3. Configurar la base de datos:
- Crear una base de datos MySQL
- Configurar las credenciales en `BackEnd/DB/connection.js`

4. Iniciar el servidor:
```bash
npm start
```

5. Abrir el frontend:
- Navegar a la carpeta `FrontEnd/Pages`
- Abrir `Index.html` en un navegador web

## Características Principales
- Gestión de integrantes y equipos
- Sistema de mensajería
- Visualización de equipos en tarjetas
- Formularios para entrada de datos
- API REST para la comunicación frontend-backend

## Contribución
1. Fork el proyecto
2. Cree su rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit sus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

## Autores
- Thyago Koremba, Francisco Lujan, Zeñuca Ariel, Ojeda Emiliano
