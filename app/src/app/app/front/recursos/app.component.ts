import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppRecursoComponent {

}
