import { Routes } from '@angular/router';
import { MainComponent } from './app/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: '', redirectTo: '', pathMatch: 'full' },
];