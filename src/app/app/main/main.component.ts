import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { AngularModule } from '../../module/app.angular.component copy';
import { PatologiaFormComponent } from '../patologia-form/main.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, PatologiaFormComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', "../style.component.css"]
})
export class MainComponent {
  constructor(private Api: ApiService, private router: Router) { }
  patologia() {
    this.router.navigate(['patologia']);
  }
  modal: boolean = false
  name: string = ""
  email: string = ""
  ayuda: string = ""
  enviado: boolean = false
  async send() {
    if (this.name && this.email && this.ayuda) {
      const data = this.Api.AyudaMsg(this.name, this.email, this.ayuda)
      this.enviado = true
    }
  }
}
