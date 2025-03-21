# Använd en liten Node.js-bild som bas
FROM node:alpine

# Ställ in arbetsmappen i containern
WORKDIR /app

# Kopiera package.json och installera beroenden
COPY package.json package-lock.json ./
RUN npm install

# Kopiera resten av koden
COPY . .

# Bygg frontend
RUN npm run build

# Exponera porten 
EXPOSE 3000

# Starta applikationen
CMD ["npm", "run", "dev"]
