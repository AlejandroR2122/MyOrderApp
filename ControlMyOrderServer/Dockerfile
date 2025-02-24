# Usar una imagen base de Node.js basada en Debian
FROM node:18-bullseye

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias; se recompilará sqlite3 para Linux
RUN npm install --build-from-source sqlite3

# Copiar el resto del código al contenedor (sin node_modules, gracias al .dockerignore)
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
