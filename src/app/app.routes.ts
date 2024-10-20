import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalculGlucidesComponent } from './pages/calcul-glucides/calcul-glucides.component';
import { AlluresComponent } from './pages/allures/allures.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent ,data: {page: 'home'}},
    {path: 'calculateur-glucides', component: CalculGlucidesComponent ,data: {page: 'calculateur-glucides'} },
    {path: 'allures', component: AlluresComponent, data: {page: 'allures'}},
    
];
