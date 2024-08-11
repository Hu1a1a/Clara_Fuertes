import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeadComponent } from './layout/head/head.component';
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeadComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private api: ApiService, private meta: Meta) { }
  Loading: boolean = true
  async ngOnInit() {
    if (!this.api.SQL_Master) this.api.SQL_Master = await this.api.Get("master")
    this.Loading = false
    this.meta.addTags([
      { name: 'twitter:site', content: '@clara_nutricion)' },
      { name: 'keywords', content: 'Nutricionista, Dieta antiinflamatoria, Sibo, Nutricionista digestiva, Pérdida de grasa, Microbiota' },
      { name: 'author', content: 'Yang Ye from YeStudio' },
      { name: 'description', content: 'Estoy aquí para ayudarte a reconciliarte con tus digestiones y tu cuerpo, y que recuperes tu bienestar mediante una alimentación antiinflamatoria personalizada.' },
    ]);
  }
}
