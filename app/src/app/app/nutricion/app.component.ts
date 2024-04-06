import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';

@Component({
  selector: 'app-nutricion',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppNutricionComponent implements OnInit {
  ngOnInit(): void {
    document.title = "Link en biografía de IG de ensaladas"
  }
}
