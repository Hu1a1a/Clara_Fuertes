import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/front/footer/footer.component';
import { HeadComponent } from './layout/front/head/head.component';
import { HeadCursoPanelComponent } from './layout/curso/head/head.component';
import { CommonModule } from '@angular/common';
import { FooterAdminPanelComponent } from './layout/admin/footer/footer.component';
import { FooterCursoPanelComponent } from './layout/curso/footer/footer.component';
import { HeadAdminPanelComponent } from './layout/admin/head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeadComponent,
    FooterAdminPanelComponent,
    FooterCursoPanelComponent,
    HeadAdminPanelComponent,
    HeadCursoPanelComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public router: Router) { }
}
