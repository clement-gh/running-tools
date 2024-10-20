import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalculGlucidesComponent } from './pages/calcul-glucides/calcul-glucides.component';
import { AlluresComponent } from './pages/allures/allures.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers la route '/home'
  { path: 'home', component: HomeComponent, data: { page: 'home' } }, // Route pour le composant Home
  { path: 'calculateur-glucides', component: CalculGlucidesComponent, data: { page: 'calculateur-glucides' } }, // Route pour le composant CalculGlucides
  { path: 'allures', component: AlluresComponent, data: { page: 'allures' } } // Route pour le composant Allures
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

