import { Component, OnInit } from '@angular/core';
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
export class GuiaEnsaladaComponent implements OnInit {
  constructor(private Api: ApiService, private router: Router) { }
  name: string = ""
  email: string = ""
  ngOnInit(): void {
    document.title = "¡Recibe tu Guía GRATUITA de ensaladas a tu correo!"
  }

  async send() {
    if (this.name && this.email) {
      const data = this.Api.GuiaEnsalada(this.name, this.email)
      window.open("./assets/ENSALADAS. LA GUIA INFALIBLE QUE RESUELVE TODAS TUS DUDAS.pdf", '_blank');
      this.router.navigate(['../nutricional']);
    }
  }
}
