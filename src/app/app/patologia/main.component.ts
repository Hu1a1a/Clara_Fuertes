import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { PatologiaFormComponent } from '../patologia-form/main.component';

@Component({
  selector: 'app-patologia',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, PatologiaFormComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', "../style.component.css"]
})
export class PatologiaComponent {
  modal: boolean = false
}
