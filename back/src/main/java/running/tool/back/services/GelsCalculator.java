package running.tool.back.services;

import java.text.MessageFormat;

import org.apache.logging.log4j.message.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GelsCalculator {

  public static final Logger logger = LoggerFactory.getLogger(GelsCalculator.class);

  @Autowired
  public GelsCalculator() {
    logger.info("Initialisation du service SpeedConverter");

  }

  private static final String ERR_MSG = "{} doit être supérieur à zéro";

  public static double[] calculerGels(
      double concentrationGels,
      double glucidesRestantsAObtenir,
      double tempsCourseMinutes) throws Exception {

    // Initialisation des variables
    double nombreGels = 0;
    double frequenceGelsMinutes = 0;
    double prisePremierGel = 0;
    int nbGelsConseille = 0;

    if (concentrationGels <= 0) {
      throw new IllegalArgumentException(MessageFormat.format(ERR_MSG, "La concentration des gels"));
    }
    if (nombreGels <= 0) {
      throw new IllegalArgumentException(MessageFormat.format(ERR_MSG, "Le nombre de gels"));
    }
    if (tempsCourseMinutes <= 0) {
      throw new IllegalArgumentException(MessageFormat.format(ERR_MSG, "Le temps de course"));
    }
    // Calcul du nombre de gels nécessaires
    nombreGels = glucidesRestantsAObtenir / concentrationGels;
    // Calcul de la fréquence de consommation des gels

    frequenceGelsMinutes = tempsCourseMinutes / nombreGels;
    // Arrondi des résultats
    frequenceGelsMinutes = Math.round(frequenceGelsMinutes);
    nombreGels = Math.round(nombreGels * 10) / 10.0;

    // Arrondi du nombre de gels conseillé
    if (nombreGels - Math.floor(nombreGels) > 0.5) {
      nbGelsConseille = (int) Math.ceil(nombreGels);
    } else {
      nbGelsConseille = (int) Math.floor(nombreGels);
    }

    // Calcul de la prise du premier gel pour être à équidistance
    prisePremierGel = tempsCourseMinutes / (nbGelsConseille + 1);

    return new double[] { frequenceGelsMinutes, nombreGels, prisePremierGel, nbGelsConseille };
  }

  // Méthode pour calculer uniquement la boisson
  public static double calculerBoisson(
      double concentrationBoissonIso,
      double quantiteBoisson,
      double tempsCourseMinutes) {

    double frequenceGorgeesMinutes = 0;
    final double tailleGorgee = 15;

    if (concentrationBoissonIso != 0 && quantiteBoisson != 0) {
      frequenceGorgeesMinutes = tailleGorgee / (quantiteBoisson / tempsCourseMinutes);
    }

    return Math.round(frequenceGorgeesMinutes);
  }

}