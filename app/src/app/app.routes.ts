import { Routes } from '@angular/router';
import { AppMainComponent } from './app/front/main/app.component';
import { AppEnsaladaComponent } from './app/front/ensalada/app.component';
import { AppPatologiaComponent } from './app/front/patologia/app.component';
import { AppNutricionComponent } from './app/front/nutricion/app.component';
import { AppCursoLoginComponent } from './app/curso/login/app.component';
import { AppCursoPortalComponent } from './app/curso/portal/app.component';
import { AppCompraComponent } from './app/front/compra/app.component';
import { AppAdminLoginComponent } from './app/admin/login/app.component';
import { AppAdminPortalComponent } from './app/admin/portal/app.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent },
    { path: 'ensalada', component: AppEnsaladaComponent },
    { path: 'patologia', component: AppPatologiaComponent },
    { path: 'nutricion', component: AppNutricionComponent },
    { path: 'compra', component: AppCompraComponent },
    {
        path: 'curso', children: [
            { path: "login", component: AppCursoLoginComponent },
            { path: "portal", component: AppCursoPortalComponent },
            { path: "**", redirectTo: "portal", pathMatch: "full" },
        ]
    },
    {
        path: 'admin', children: [
            { path: "login", component: AppAdminLoginComponent },
            { path: "portal", component: AppAdminPortalComponent },
            { path: "**", redirectTo: "portal", pathMatch: "full" },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];