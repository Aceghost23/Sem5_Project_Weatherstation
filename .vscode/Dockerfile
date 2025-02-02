# 1. Offizielles Node.js-Image als Basis verwenden
FROM node:18-alpine

# 2. Arbeitsverzeichnis im Container setzen
WORKDIR /app

# 3. Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# 4. Restlichen Code kopieren
COPY . .

# 5. Port freigeben
EXPOSE 3000

# 6. Startbefehl für die Anwendung
CMD ["node", "server.js"]
