function calculerQuantiteGels(
  concentrationBoissonIso: number,
  quantiteBoisson: number,
  concentrationGels: number,
  objectifGlucidesParHeure: number,
  tempsCourseMinutes: number
): [number, number, number] {
  let totalGlucidesBoisson = 0;
  let frequenceGorgeesMinutes = 0;
  let nombreGels = 0;
  let frequenceGelsMinutes = 0;
  const tailleGorgee = 15;
  console.log(concentrationBoissonIso, quantiteBoisson, concentrationGels, objectifGlucidesParHeure, tempsCourseMinutes);

  // Calcul du nombre total de glucides dans la boisson
  if (concentrationBoissonIso !== 0 && quantiteBoisson !== 0) {
  
    totalGlucidesBoisson = (concentrationBoissonIso * quantiteBoisson) / 500;
    frequenceGorgeesMinutes =tailleGorgee / (quantiteBoisson / tempsCourseMinutes);
    console.log(frequenceGorgeesMinutes);
  }

  // Calcul du nombre de glucides que vous pouvez absorber pendant la course (incluant ceux de la boisson)
  const objectifGlucidesTotal =
    (objectifGlucidesParHeure / 60) * tempsCourseMinutes;

  // Calcul du nombre de gels nécessaires en tenant compte des glucides de la boisson
  const glucidesRestantsAObtenir = objectifGlucidesTotal - totalGlucidesBoisson;
  if (glucidesRestantsAObtenir > 0 && concentrationGels > 0) {
    nombreGels = glucidesRestantsAObtenir / concentrationGels;
  }

  // Calcul de la fréquence de consommation des gels en minutes
  if (nombreGels > 0 && tempsCourseMinutes > 0) {

   frequenceGelsMinutes =tempsCourseMinutes / nombreGels;
  }
  // Calcul de la fréquence de consommation des gorgées en minutes (pour une gorgée de 15 ml)

  if (totalGlucidesBoisson >= objectifGlucidesTotal) {
    nombreGels = 0;
    frequenceGelsMinutes = 0;
  }

  return [frequenceGelsMinutes, frequenceGorgeesMinutes, nombreGels];
}

// clacule permettant de calculer la prise du premier egl pour que la prise soit à equidistance entre le debut, chque prise et la fin de la course
function calculerQuantiteGels2(
  concentrationBoissonIso: number,
  quantiteBoisson: number,
  concentrationGels: number,
  objectifGlucidesParHeure: number,
  tempsCourseMinutes: number,

): [number, number, number,number, number] {
  let totalGlucidesBoisson = 0;
  let frequenceGorgeesMinutes = 0;
  let nombreGels = 0;
  let frequenceGelsMinutes = 0;
  const tailleGorgee = 15;
  let prisePremierGel = 0;
  let nbGelsConseille = 0;
  console.log(concentrationBoissonIso, quantiteBoisson, concentrationGels, objectifGlucidesParHeure, tempsCourseMinutes);

  // Calcul du nombre total de glucides dans la boisson
  if (concentrationBoissonIso !== 0 && quantiteBoisson !== 0) {
  
    totalGlucidesBoisson = (concentrationBoissonIso * quantiteBoisson) / 500;
    frequenceGorgeesMinutes =tailleGorgee / (quantiteBoisson / tempsCourseMinutes);
    console.log(frequenceGorgeesMinutes);
  }

  // Calcul du nombre de glucides que vous pouvez absorber pendant la course (incluant ceux de la boisson)
  const objectifGlucidesTotal =
    (objectifGlucidesParHeure / 60) * tempsCourseMinutes;

  // Calcul du nombre de gels nécessaires en tenant compte des glucides de la boisson
  const glucidesRestantsAObtenir = objectifGlucidesTotal - totalGlucidesBoisson;
  if (glucidesRestantsAObtenir > 0 && concentrationGels > 0) {
    nombreGels = glucidesRestantsAObtenir / concentrationGels;
  }

  // Calcul de la fréquence de consommation des gels en minutes
  if (nombreGels > 0 && tempsCourseMinutes > 0) {

   frequenceGelsMinutes =tempsCourseMinutes / nombreGels;
  }
  // Calcul de la fréquence de consommation des gorgées en minutes (pour une gorgée de 15 ml)

  if (totalGlucidesBoisson >= objectifGlucidesTotal) {
    nombreGels = 0;
    frequenceGelsMinutes = 0;

  }

  frequenceGelsMinutes = Math.round(frequenceGelsMinutes);
  frequenceGorgeesMinutes = Math.round(frequenceGorgeesMinutes);
  nombreGels = Math.round(nombreGels * 10) / 10;
  nbGelsConseille =  //nbre de gels arrondi à l'entier supérieur si supérieur strictement à 0.5
  nombreGels - Math.floor(nombreGels) > 0.5 ? Math.ceil(nombreGels) : Math.floor(nombreGels);

  // calcul de la prise du premier gel pour que la prise soit à equidistance entre le debut, chaque prise et la fin de la course*
console.log(nbGelsConseille)

  prisePremierGel = tempsCourseMinutes / (nbGelsConseille + 1);
  console.log(prisePremierGel )

  return [
    frequenceGelsMinutes,
    frequenceGorgeesMinutes,
    nombreGels,prisePremierGel, nbGelsConseille

  ];


}

export { calculerQuantiteGels2 };
