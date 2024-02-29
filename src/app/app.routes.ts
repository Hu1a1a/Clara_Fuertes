import { Routes } from '@angular/router';
import { MainComponent } from './app/main/main.component';
import { GuiaEnsaladaComponent } from './app/guia-ensalada/main.component';
import { PatologiaComponent } from './app/patologia/main.component';
import { AcompNutriComponent } from './app/acomp-nutri/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'guia', component: GuiaEnsaladaComponent },
    { path: 'patologia', component: PatologiaComponent },
    { path: 'nutricional', component: AcompNutriComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];