import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  Menu: any = [
    { Name: "Inicio", Router: "#/" },
    { Name: "Recursos gratuitos", Router: "#/" },
    { Name: "Cursos para ti", Router: "#/" },
    { Name: "Sana tus digestiones", Router: "#/" },
    { Name: "Pérdida de grasa", Router: "#/" },
    { Name: "Asesoramiento único", Router: "#/" },
  ]
}
