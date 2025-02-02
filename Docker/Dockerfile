FROM node:18-alpine

WORKDIR /app

COPY Backend/package*.json ./
RUN npm install

COPY Backend/ ./

COPY Frontend/ ./Frontend

EXPOSE 3000
CMD ["node", "Server.js"]
