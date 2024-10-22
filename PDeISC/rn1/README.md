# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

# Proyecto de Autenticación

Este proyecto incluye un archivo PHP para el manejo de autenticación de usuarios. Asegúrate de colocar el archivo `login.php` en la carpeta correcta para que funcione correctamente con XAMPP.

## Instrucciones

1. **Instalar XAMPP**:
   - Si no tienes XAMPP instalado, puedes descargarlo e instalarlo desde [aquí](https://www.apachefriends.org/index.html).

2. **Ubicar el archivo `login.php`**:
   - Copia el archivo `login.php` que se encuentra en la carpeta `backend` de este proyecto y pégalo en la siguiente ruta:
     ```
     C:\xampp\htdocs\login
     ```

3. **Iniciar Apache**:
   - Abre el Panel de Control de XAMPP y asegúrate de que el servidor Apache esté iniciado.

4. **Acceder al archivo**:
   - Abre tu navegador web y accede a `http://localhost/login/login.php` para verificar que el archivo esté funcionando correctamente.

5. **Base de datos**:
   ```
   CREATE DATABASE rn01;
   USE rn01;

   CREATE TABLE usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   ); 
   ```


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
