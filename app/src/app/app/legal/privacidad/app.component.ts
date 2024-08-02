import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-privacidad',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppLegalPrivacidadComponent implements OnInit {
  constructor(private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Política de privacidad - Clara Fuertes Nutrición")
  }
}
