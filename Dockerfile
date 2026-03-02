FROM node:20-alpine

WORKDIR /usr/src/app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Compilamos el proyecto (esto genera la carpeta dist/)
RUN npm run build

# Exponemos el puerto (por defecto 3000, pero se sobreescribe con el .env en desarrollo)
EXPOSE 3000

# Comando para correr la app con los archivos compilados
# Usamos directamente 'node' sobre los archivos .js generados en 'dist/'
CMD [ "node", "dist/index.js" ]
