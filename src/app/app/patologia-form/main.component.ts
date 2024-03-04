import { Component, Output, EventEmitter } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { AngularModule } from '../../module/app.angular.component copy';

@Component({
  selector: 'app-patologia-form',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', "../style.component.css"]
})
export class PatologiaFormComponent {
  constructor(private Api: ApiService, private router: Router) { }

  @Output() modal = new EventEmitter<boolean>();

  name: string = ""
  email: string = ""
  opt: string = ""
  num!: number
  ayuda: string = ""
  enviado: boolean = false
  async send() {
    if (this.name && this.email && this.ayuda) {
      const data = this.Api.AyudaMsg(this.name, this.email, this.opt, this.ayuda)
      this.enviado = true
    }
  }
  close() {
    this.modal.emit(false)
  }
  check() {
    if (this.num === 1) {
      this.opt = "Pérdida de grasa y alimentación antiinflamatoria"
    } else {
      this.opt = "Patología digestiva"
    }
  }
}


