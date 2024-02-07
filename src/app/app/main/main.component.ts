import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
