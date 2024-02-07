import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
