import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-asesoramiento',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppAsesoramientoComponent implements OnInit {
  constructor(private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Asesoramiento único - Clara Fuertes Nutrición")
  }
}
