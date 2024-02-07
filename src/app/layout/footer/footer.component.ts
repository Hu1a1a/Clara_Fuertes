import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
