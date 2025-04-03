# Pokédex en React ⚛️ + Pokémon API

🔹 Aplicación:
https://pokedex-hanzet.netlify.app/

![Pokedex 1](https://github.com/user-attachments/assets/297a9184-3d19-4fcd-af3f-d3b2c1536495)
![image](https://github.com/user-attachments/assets/834cdf0a-5254-4901-9eae-438307801721)

## 🚀 Características principales

- **Búsqueda dinámica** de Pokémon por nombre.
- **Filtros avanzados** por tipo (usando checkboxes).
- **Detalles completos** de cada Pokémon.
- **Rutas anidadas** para una navegación intuitiva.
- **Context API** para manejo global del estado.

## 🔧 Tecnologías utilizadas

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ⚛️ React Hooks y Funcionalidades Implementadas

### 🎣 Hooks Principales
- **`useState`**: Para manejar el estado local (búsqueda, filtros, etc.).
- **`useEffect`**: Para fetching de datos de la API y side effects.
- **`useContext`**: Para compartir estado global (como favoritos o tema oscuro).

### � React Router Dom v6
- **Rutas anidadas**: Ej: `/pokemon/:id/`.
- **Params dinámicos**: Para mostrar Pokémon específicos (`/pokemon/:id`).
- **`useLocation`**: Para tracking de navegación o análisis.
- **`Navigate`**: Para redirecciones programáticas.

### 🔎 Filtros y Búsqueda
- **Checkbox interactivos**: Filtra Pokémon por tipo (agua, fuego, etc.).
- **Búsqueda en tiempo real**: Actualiza resultados al escribir.
