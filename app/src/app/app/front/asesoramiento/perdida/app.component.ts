import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../../module/app.angular.material.component';
import { AngularModule } from '../../../../module/app.angular.component copy';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../service/api.service';
import { Title } from '@angular/platform-browser';
import { PlantillaComponent } from '../plantilla/plantilla.component';

@Component({
  selector: 'app-asesoramiento-perdida',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, PlantillaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../style.component.css"]
})
export class AppAsesorPerdidaComponent implements OnInit {
  constructor(private dialog: MatDialog, private api: ApiService, private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Pérdida de grasa - Clara Fuertes Nutrición")
  }
  openModal() {
    this.dialog.open(DialogPerdida, {})
  }
  ComprarCurso() {
    this.api.paySession({ StripeId: this.api.SQL_Master.data.find((a: any) => a.master === "Stripe Price - Asesoramiento Perdida").data }).then((data) => {
      if (data.ok && data.url) {
        localStorage.setItem("stripe", data.url)
        window.location.href = data.url
      }
    })
  }
}

@Component({
  selector: 'dialog-component-perdida',
  templateUrl: '../dialog.component.html',
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
    const data = await this.api.SendContacto(this.Email, this.Name, this.Msg, "CONSULTA PÉRDIDA DE GRASA")
    this.done = data.ok
  }
}

