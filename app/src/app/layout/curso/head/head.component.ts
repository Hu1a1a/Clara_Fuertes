import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';

@Component({
  selector: 'app-head-curso-panel',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadCursoPanelComponent {
  constructor(private router: Router) { }
  CerrarSession() {
    localStorage.removeItem("jwt")
    this.router.navigate(["/login/"])
  }
}
