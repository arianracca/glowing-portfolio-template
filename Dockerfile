# Usar una imagen base de Node.js
FROM node:18 as build-stage

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./app/

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY ./ ./app/

#RUN CI=true npm test
RUN  npm run build

# HTTPS=true  && --ssl-cert ".crt" --ssl-key ".crt.key"
#serve -s build --listen 8580 --ssl-cert ".crt" --ssl-key ".crt.key"

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 3000 (puerto por defecto de Vite)
# EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
