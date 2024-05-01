import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-admin-panel',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadAdminPanelComponent {
  constructor(private router: Router) { }
  CerrarSession() {
    localStorage.removeItem("jwt")
    this.router.navigate(["/login/"])
  }
}
