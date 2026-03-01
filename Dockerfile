FROM node:20-alpine

WORKDIR /usr/src/app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto
EXPOSE 3000

# Comando para correr la app con ts-node (útil si no quieres compilar en el build)
CMD [ "npx", "ts-node", "src/index.ts" ]
