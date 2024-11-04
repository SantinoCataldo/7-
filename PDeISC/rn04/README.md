# Torneo de Fútbol

Este proyecto es una aplicación para gestionar un torneo de fútbol. A continuación se indican los pasos necesarios para configurar el entorno y ejecutar la aplicación.

## Requisitos

- [XAMPP](https://www.apachefriends.org/index.html) para la base de datos.
- Node.js y npm instalados en tu máquina.

## Configuración de la Base de Datos

1. **Instalar XAMPP**: Si no tienes XAMPP instalado, descárgalo e instálalo desde [Apache Friends](https://www.apachefriends.org/index.html).

2. **Importar la Base de Datos**:
   - Abre el panel de control de XAMPP y asegúrate de que el servidor MySQL esté en ejecución.
   - Accede a `phpMyAdmin` en tu navegador (normalmente en `http://localhost/phpmyadmin`).
   - Crea una nueva base de datos llamada `torneo_futbol`.
   - Importa el archivo `torneo_futbol.bd` que se encuentra en la carpeta `backend` de este proyecto.

## Iniciar el Servidor

1. **Navegar a la Carpeta del Proyecto**:
   - Abre una terminal y navega a la carpeta raíz de tu proyecto.

2. **Iniciar el Servidor de Backend**:
   - Ejecuta el siguiente comando para iniciar el servidor de Node.js:
     ```
     node server.js
     ```

3. **Iniciar la Aplicación de Frontend**:
   - Abre otra terminal en la misma carpeta del proyecto y ejecuta:
     ```
     npm start
     ```

## Acceso a la Aplicación

Una vez que ambos servidores estén en funcionamiento, puedes acceder a la aplicación en tu navegador en la siguiente URL:
http://localhost:8081

