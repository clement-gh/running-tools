# Utiliser une image Node.js comme base
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application
COPY . .

# Installer les dépendances
RUN npm install

# Exposer le port 4500
EXPOSE 4500

# Commande pour démarrer l'application Angular
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4500"]