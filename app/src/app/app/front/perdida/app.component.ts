import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-perdida',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent, CommonModule, ComponentCardGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppPerdidaComponent implements OnInit {
  constructor(private dialog: MatDialog, public router: Router, private api: ApiService) { }
  comentario!: any

  openModal() {
    this.dialog.open(DialogPerdida, {})
  }
  async ngOnInit() {
    if (!this.api.SQL_Comment) this.api.SQL_Comment = await this.api.Get("comentario")
    this.comentario = this.api.SQL_Comment.data.filter((a: any) => a.Type === "Perdida")
  }

  async ComprarCurso() {
    const data = await this.api.paySession({ StripeId: environment.STRIPE_PAGO_PERDIDADEGRASA })
    if (data.ok) {
      localStorage.setItem("stripe", data.url)
      window.location.href = data.url
    }
  }
}
@Component({
  selector: 'dialog-component-perdida',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AngularMaterialModule, FormsModule, CommonModule],
})
export class DialogPerdida {
  constructor(private api: ApiService) { }
  Email: string = ""
  Name: string = ""
  Msg: string = ""
  done: boolean = false
  async Send() {
    const data = await this.api.SendContacto(this.Email, this.Name, this.Msg, "Contacto pérdida de grasa")
    this.done = data.ok
  }
}
