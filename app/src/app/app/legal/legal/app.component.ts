import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal-politica',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppLegalPoliticaComponent implements OnInit {
  constructor(private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Aviso legal - Clara Fuertes Nutrición")
  }
}
