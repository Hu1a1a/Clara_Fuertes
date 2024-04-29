import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';

@Component({
  selector: 'app-head-admin-panel',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadAdminPanelComponent {

}
