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
  ngOnInit() {
    if (!this.api.SQL_Master) this.api.Get("master").then((data) => this.api.SQL_Master = data)
    this.Loading = false
    this.meta.addTags([
      { name: 'twitter:site', content: '@clara_nutricion)' },
      { name: 'og:site_name', content: 'Clara Fuertes Nutrición)' },
      { name: 'og:image', content: 'https://www.claranutricion.com/assets/main/Clara%20v2.webp' },
      { name: 'og:url', content: 'https://www.claranutricion.com/' },
      { name: 'keywords', content: 'Nutricionista, Dieta antiinflamatoria, Sibo, Nutricionista digestiva, Pérdida de grasa, Microbiota' },
      { name: 'author', content: 'Yang Ye from Ye Studio' },
      { name: 'description', content: 'Estoy aquí para ayudarte a reconciliarte con tus digestiones y tu cuerpo, y que recuperes tu bienestar mediante una alimentación antiinflamatoria personalizada.' },
      { name: 'og:description', content: 'Estoy aquí para ayudarte a reconciliarte con tus digestiones y tu cuerpo, y que recuperes tu bienestar mediante una alimentación antiinflamatoria personalizada.' },
      { name: 'og:title', content: 'Clara Fuertes Nutrición - Dieta antiinflamatoria' },
      { name: 'fb:app_id', content: '100010041019066' },
    ]);
  }
}
