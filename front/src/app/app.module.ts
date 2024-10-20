import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CalculGlucidesComponent } from './pages/calcul-glucides/calcul-glucides.component';
import { AlluresComponent } from './pages/allures/allures.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    HomeComponent,
    CalculGlucidesComponent,
    AlluresComponent,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
