FROM node:20.11.1-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
# Expose backend port
EXPOSE 3000
CMD ["node", "app.js"]