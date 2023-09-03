# Usar una imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto 3000 (puerto por defecto de Vite)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]