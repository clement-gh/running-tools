import { calculerQuantiteGels2 } from '../../services/Calculate-gels';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AbstractControl, FormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';


interface FormData {
  label: string;
  value: string;
  type?: string;
  required?: boolean;
}

@Component({
  selector: 'app-formulaire-calcul-gels',
  templateUrl: './formulaire-calcul-gels.component.html',
  styleUrls: ['./formulaire-calcul-gels.component.scss'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
})
export class FormulaireCalculGelsComponent {
  formCalculGels: FormGroup ;
  boissonRenseignee = false;
  resultat: {
    frequenceGelsMinutes: number;
    frequenceGorgeesMinutes: number;
    nombreGels: number;
    boisson: boolean;
    prisePremierGel: number;
  } | null = null;
  

  constructor(private formBuilder: FormBuilder,private _snackBar: MatSnackBar) {

    this.formCalculGels = this.formBuilder.group({
      concentrationBoissonIso:[this.boissonRenseignee ? '' : '0', this.boissonRenseignee ? this.requiredNonNegative() : null,],
      quantiteBoisson:  [this.boissonRenseignee ? '' : '0', this.boissonRenseignee ? this.requiredNonNegative() : null],
      concentrationGels: ['', this.requiredNonNegative()],
      objectifGlucidesParHeure: ['', this.requiredNonNegative()],
      tempsCourseMinutes: ['', this.requiredNonNegative()]
    });

  }
  handleCheckboxChange(event: any): void {
    this.boissonRenseignee = event.target.checked;
  }handleSubmit(): void {
    console.log(this.formCalculGels.controls);
    if (this.formCalculGels.invalid) {
      // si le formulaire parce que les champs obligatoires ne sont pas remplis
      const formControls = this.formCalculGels.controls;
      for (const key in formControls) {
        if (formControls[key].errors) {
          if (formControls[key].errors?.['nonNegative']) {
            this.openSnackBar(`Le champ ${key} doit être supérieur à 0.`, 'Fermer');
          }
         else if (formControls[key].errors?.['required']) {
            this.openSnackBar(`Veuillez renseigner tous les champs obligatoires.`, 'Fermer');
          }
        }
      }
      return;
    }


    const formData = this.formCalculGels.value;
    const { concentrationBoissonIso, quantiteBoisson, concentrationGels, objectifGlucidesParHeure, tempsCourseMinutes } = formData;

    let [frequenceGelsMinutes, frequenceGorgeesMinutes, nombreGels, prisePremierGel, nbGelsConseille ] =
      calculerQuantiteGels2(
        parseFloat(concentrationBoissonIso),
        parseFloat(quantiteBoisson),
        parseFloat(concentrationGels),
        parseFloat(objectifGlucidesParHeure),
        parseFloat(tempsCourseMinutes)

      );


    this.resultat = { frequenceGelsMinutes, frequenceGorgeesMinutes, nombreGels, boisson: this.boissonRenseignee, prisePremierGel};
  }

  shouldDisplayResult(): boolean {
    return !!this.resultat && (this.resultat.nombreGels !== 0 || this.resultat.frequenceGelsMinutes !== 0 || this.resultat.frequenceGorgeesMinutes !== 0);
  }
    openSnackBar(message: string, action: string): void {
      this._snackBar.open(message, action, {
        duration: 6000,
      });
    }
    reset() {
      this.formCalculGels.reset();
      this.resultat = null;



    }
// Modifier le validateur personnalisé
requiredNonNegative(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return { 'required': true };
    }
    if (value <= 0) {
      return { 'nonNegative': true };
    }
    return null;
  };
}


}
