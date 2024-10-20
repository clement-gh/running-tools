# Étape 1 : Construction de l'application avec Maven
FROM maven:3.8.8-eclipse-temurin-21 AS build
WORKDIR /app

# Copier les fichiers source dans le conteneur
COPY pom.xml .
COPY src ./src

# Construire le projet (cela génère un fichier jar)
RUN mvn clean package -DskipTests

# Étape 2 : Exécution de l'application Spring Boot
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copier l'artefact généré (fichier jar) de l'étape de build précédente
COPY --from=build /app/target/*.jar app.jar

# Exposer le port sur lequel l'application va tourner (par exemple, 8080)
EXPOSE 5400

# Démarrer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
