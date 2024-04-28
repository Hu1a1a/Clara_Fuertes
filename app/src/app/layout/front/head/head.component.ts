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
    { Name: "Recursos gratuitos", Router: "#/ensalada/" },
    { Name: "Cursos para ti", Router: "#/compra/" },
    { Name: "Sana tus digestiones", Router: "#/nutricion/" },
    { Name: "Pérdida de grasa", Router: "#/patologia/" },
    { Name: "Asesoramiento único", Router: "#/" },
    { Name: "Portal Curso", Router: "#/login/" },
  ]
}
