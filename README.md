# Prueba Frontend

**Importante**: la aplicación se desarrolló teniendo algunos supuestos en cuenta, estos ayudan a omitir desarrollo que por temas de tiempo, principalmente, no habia podido implementar. Los enumero a continuación:

1. Siempre serán 4 vendedores. No se realiza paginación.
2. Las facturas a mostrar serán 2. No se realiza paginación.
3. Los usuarios no pueden remover un "Me gusta".

### Pre-requisitos
- Instalar [Node.JS](https://nodejs.org)
- Instalar [Git](https://git-scm.com/downloads)

### Instalación ambiente local
- Clonamos el repositorio
  ```bash
  git clone https://github.com/luchoweb/prueba-frontend.git
  ```
- Nos movemos a la carpeta del proyecto:
  ```cd prueba-alegra```
- Creamos el archivo `.env` con las siguientes variables(1):
  ```bash
  VITE_APP_NAME = "Imágenes del Mundo"
  VITE_APP_AVATAR_URL = https://i.pravatar.cc
  VITE_APP_PEXELS_API_URL = https://api.pexels.com/v1
  VITE_APP_PEXELS_API_KEY = sa5mDlVqFePGyz9BLc17tlGvnFrvvBxHdLveBsqGJu2QppJihTnySmhx
  VITE_APP_ALEGRA_USER = micorreo@gmail.com
  VITE_APP_ALEGRA_TOKEN = xzz1eb863btq322c1fe2
  VITE_APP_ALEGRA_API_URL = https://api.alegra.com/api/v1
  VITE_APP_FIREBASE_API_KEY = XazaSyBf57J-YzaurwrET_uHdSdEcv7zArHowqa
  VITE_APP_FIREBASE_PROJECT_ID = prueba-alegra
  ```
- Ejecutamos ```npm install``` para instalar todos los paquetes (se creará una carpera llamada *node-modules*).
- Ejecutamos  ```npm run dev``` para iniciar el servidor local.

Y listo, con estos pasos será suficiente para poder correr la prueba localmente.

### Pruebas unitarias

Agregué algunas pruebas unitarias, por favor ejecute:
```bash
npm run test
```

### Enlace a servidor

Enlace a la prueba desplegada en servidor: https://prueba-alegra.netlify.app

### Importante

(1) *Los valores reales de las variables de entorno serán enviadas en el correo electrónico de finalización de la prueba.*
