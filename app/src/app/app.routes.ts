import { Routes } from '@angular/router';
import { AppMainComponent } from './app/front/main/app.component';
import { AppEnsaladaComponent } from './app/front/ensalada/app.component';
import { AppCursoPortalComponent } from './app/curso/portal/app.component';
import { AppCompraComponent } from './app/front/compra/app.component';
import { AppAdminPortalComponent } from './app/admin/portal/app.component';
import { AppCursoComponent } from './app/curso/app.component';
import { AppAdminComponent } from './app/admin/app.component';
import { AppLoginComponent } from './app/login/app.component';
import { AppCompraCheckComponent, } from './app/front/compra/check/app.component';
import { AppResetPasswordComponent } from './app/login/resetpassword/app.component';
import { AppRecursoComponent } from './app/front/recursos/app.component';
import { AppDigestionComponent } from './app/front/digestion/app.component';
import { AppPerdidaComponent } from './app/front/perdida/app.component';
import { AppAsesoramientoComponent } from './app/front/asesoramiento/app.component';

export const routes: Routes = [
    { path: '', component: AppMainComponent },
    { path: 'recursos', component: AppRecursoComponent },
    { path: 'ensalada', component: AppEnsaladaComponent },
    { path: 'compra', component: AppCompraComponent },
    { path: 'compra/pay', component: AppCompraCheckComponent },
    { path: 'digestion', component: AppDigestionComponent },
    { path: 'perdidagrasa', component: AppPerdidaComponent },
    { path: 'asesoramiento', component: AppAsesoramientoComponent },

    { path: "login", component: AppLoginComponent },
    { path: "resetPass", component: AppResetPasswordComponent },
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