import { Component } from '@angular/core';
import { FormulaireCalculGelsComponent } from '../../components/formulaire-calcul-gels/formulaire-calcul-gels.component';

@Component({
    selector: 'app-calcul-glucides',
    standalone: true,
    templateUrl: './calcul-glucides.component.html',
    styleUrl: './calcul-glucides.component.scss',
    imports: [FormulaireCalculGelsComponent]
})
export class CalculGlucidesComponent {

}
