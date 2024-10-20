import { Component, Input } from '@angular/core';

interface Resultat {
  frequenceGelsMinutes: number;
  frequenceGorgeesMinutes: number;
  nombreGels: number;
  boisson: boolean;
}

@Component({
  selector: 'app-calculator-result',
  template: `
    <div>
      <h3>Résultat :</h3>
      <p>Nombre de gels nécessaires : {{ resultat?.nombreGels }}</p>
      <p>Fréquence de consommation des gels : 1 toutes les {{ resultat?.frequenceGelsMinutes }} minutes</p>
      <p *ngIf="resultat?.boisson">Boire une gorgée toute les (15ml/gorgée) : {{ resultat?.frequenceGorgeesMinutes }} minutes</p>
    </div>
  `,
})
export class CalculatorResultComponent {
  @Input() resultat: Resultat | null = null;
}
