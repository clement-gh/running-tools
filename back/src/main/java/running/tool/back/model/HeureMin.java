package running.tool.back.model;

public class HeureMin {

  // Attributs pour stocker les heures et les minutes
  private int heures;
  private int minutes;

  // Constructeur par défaut qui initialise les heures et les minutes à zéro
  public HeureMin() {
    this.heures = 0;
    this.minutes = 0;
  }

  // Constructeur qui permet de créer un temps avec des heures et des minutes
  // spécifiques
  public HeureMin(int heures, int minutes) {
    this.setHeures(heures); // Utilise le setter pour valider l'entrée
    this.setMinutes(minutes); // Utilise le setter pour valider l'entrée
  }

  // Getter pour obtenir les heures
  public int getHeures() {
    return heures;
  }

  // Setter pour définir les heures, avec validation pour empêcher des valeurs
  // négatives
  public void setHeures(int heures) {
    if (heures >= 0) {
      this.heures = heures;
    } else {
      throw new IllegalArgumentException("Les heures ne peuvent pas être négatives.");
    }
  }

  // Getter pour obtenir les minutes
  public int getMinutes() {
    return minutes;
  }

  // Setter pour définir les minutes, avec validation pour s'assurer que les
  // minutes sont entre 0 et 59
  public void setMinutes(int minutes) {
    if (minutes >= 0 && minutes < 60) {
      this.minutes = minutes;
    } else {
      throw new IllegalArgumentException("Les minutes doivent être comprises entre 0 et 59.");
    }
  }

  // Méthode pour ajouter des minutes, qui met à jour automatiquement les heures
  // si les minutes dépassent 59
  public void ajouterMinutes(int minutesAAjouter) {
    if (minutesAAjouter >= 0) {
      this.minutes += minutesAAjouter;
      while (this.minutes >= 60) {
        this.minutes -= 60;
        this.heures += 1;
      }
    } else {
      throw new IllegalArgumentException("Les minutes à ajouter doivent être positives.");
    }
  }

  // Méthode pour convertir le temps total en minutes
  public int convertirEnMinutes() {
    return (heures * 60) + minutes;
  }

  // Méthode toString pour afficher les heures et les minutes de manière lisible
  @Override
  public String toString() {
    return String.format("%02d heures et %02d minutes", heures, minutes);
  }
}
