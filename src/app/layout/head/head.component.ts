import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
