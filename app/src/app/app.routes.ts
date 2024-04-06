import { Routes } from '@angular/router';
import { AppMainComponent } from './app/main/app.component';
import { AppEnsaladaComponent } from './app/ensalada/app.component';
import { AppPatologiaComponent } from './app/patologia/app.component';
import { AppNutricionComponent } from './app/nutricion/app.component';
import { AppComponent } from './app.component';
import { AppCursoLoginComponent } from './app/curso/login/app.component';
import { AppCursoPortalComponent } from './app/curso/portal/app.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent },
    { path: 'ensalada', component: AppEnsaladaComponent },
    { path: 'patologia', component: AppPatologiaComponent },
    { path: 'nutricion', component: AppNutricionComponent },
    { path: 'compra', component: AppComponent },
    {
        path: 'curso', children: [
            { path: "login", component: AppCursoLoginComponent },
            { path: "portal", component: AppCursoPortalComponent },
            { path: "**", redirectTo: "portal", pathMatch: "full" },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];