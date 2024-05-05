import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';

@Component({
  selector: 'app-footer-curso-panel',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterCursoPanelComponent {}
