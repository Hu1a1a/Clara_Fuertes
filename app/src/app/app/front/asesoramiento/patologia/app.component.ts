import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../../module/app.angular.material.component';
import { AngularModule } from '../../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../../component/button/c.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../service/api.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-asesoramiento-patologia',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../style.component.css"]
})
export class AppAsesorPatologiaComponent {
  constructor(private dialog: MatDialog, private api: ApiService) { }
  openModal() {
    this.dialog.open(DialogPatologia, {})
  }
  async ComprarCurso() {
    const data = await this.api.paySession({ StripeId: environment.STRIPE_PAGO_PATOLOGIA, CallBack: "asesoramiento" })
    if (data.ok) {
      localStorage.setItem("stripe", data.url)
      window.location.href = data.url
    }
  }
}

@Component({
  selector: 'dialog-component-patologia',
  templateUrl: '../dialog.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AngularMaterialModule, FormsModule, CommonModule],
})
export class DialogPatologia {
  constructor(private api: ApiService) { }
  Email: string = ""
  Name: string = ""
  Msg: string = ""
  done: boolean = false
  async Send() {
    const data = await this.api.SendContacto(this.Email, this.Name, this.Msg, "CONSULTA PATOLOGÍA DIGESTIVA")
    this.done = data.ok
  }

}

