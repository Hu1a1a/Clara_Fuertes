import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';

@Component({
  selector: 'app-footer-admin-panel',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterAdminPanelComponent {
  constructor(private router: Router) { }
  CerrarSession() {
    localStorage.removeItem("jwt")
    this.router.navigate(["/login/"])
  }
}
