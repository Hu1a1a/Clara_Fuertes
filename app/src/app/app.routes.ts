import { Routes } from '@angular/router';
import { AppMainComponent } from './app/front/main/app.component';
import { AppEnsaladaComponent } from './app/front/ensalada/app.component';
import { AppPatologiaComponent } from './app/front/patologia/app.component';
import { AppNutricionComponent } from './app/front/nutricion/app.component';
import { AppCursoPortalComponent } from './app/curso/portal/app.component';
import { AppCompraComponent } from './app/front/compra/app.component';
import { AppAdminPortalComponent } from './app/admin/portal/app.component';
import { AppCursoComponent } from './app/curso/app.component';
import { AppAdminComponent } from './app/admin/app.component';
import { AppLoginComponent } from './app/login/app.component';
import { AppCompraCheckComponent, } from './app/front/compra/check/app.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent },
    { path: 'ensalada', component: AppEnsaladaComponent },
    { path: 'patologia', component: AppPatologiaComponent },
    { path: 'nutricion', component: AppNutricionComponent },
    { path: 'compra', component: AppCompraComponent },
    { path: 'compra/pay', component: AppCompraCheckComponent },
    { path: "login", component: AppLoginComponent },
    {
        path: 'curso', component: AppCursoComponent, children: [
            { path: "portal", component: AppCursoPortalComponent },
            { path: "**", redirectTo: "portal", pathMatch: "full" },
        ]
    },
    {
        path: 'admin', component: AppAdminComponent, children: [
            { path: "portal", component: AppAdminPortalComponent },
            { path: "**", redirectTo: "portal", pathMatch: "full" },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];