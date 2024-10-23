package running.tool.back.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpeedConverter {

  public static final Logger logger = LoggerFactory.getLogger(SpeedConverter.class);

  @Autowired
  public SpeedConverter() {
    logger.info("Initialisation du service SpeedConverter");
  }

  private double speedConvertion(double speed) {
    if (speed <= 0) {
      logger.error("la vitesse doit être positive speed");
      throw new IllegalArgumentException("La vitesse doit être positive.");
    }
    return 60 / speed;
  }

  public double minByKmsFromKmh(double speed) {
    return this.speedConvertion(speed);
  }

  public double kmhFromMinByKm(double speed) {
    return this.speedConvertion(speed);
  }

  /**
   * Donne l'allure en min / km à partir d'un temps et d'un nombre de kilomètres
   * 
   * @param kms  nombre de kilomètres
   * @param time temps en min
   * @return allure (pace)
   */
  public double paceFromTimeAndKm(double kms, double time) {
    if (kms <= 0 || time <= 0) {
      throw new IllegalArgumentException("Les distances et le temps doivent être positifs.");
    }
    return time / kms;
  }

}