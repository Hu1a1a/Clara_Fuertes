import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppCompraComponent implements OnInit {
  ngOnInit(): void {
    document.title = "Link en biografía de IG de ensaladas"
  }
}