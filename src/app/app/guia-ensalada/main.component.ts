import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guia-ensalada',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', "../style.component.css"]
})
export class GuiaEnsaladaComponent {
  constructor(private Api: ApiService, private router: Router) {

  }
  modal: boolean = false
  name: string = ""
  email: string = ""
  async send() {
    if (this.name && this.email) {
      const data = this.Api.GuiaEnsalada(this.name, this.email)
      window.open("./assets/ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS.pdf", '_blank');
      this.router.navigate(['']);
    }
  }
}
