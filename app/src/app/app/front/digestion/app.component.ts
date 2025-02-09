import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../service/api.service';
import { FormsModule } from '@angular/forms';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-digestion',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, CommonModule, ComponentCardGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppDigestionComponent implements OnInit {
  constructor(private dialog: MatDialog, private api: ApiService, public router: Router, private title: Title) { }
  comentario!: any

  openModal() {
    this.dialog.open(DialogDigestion, {})
  }
  async ngOnInit() {
    this.title.setTitle("Sana tus digestiones - Clara Fuertes Nutrición")
    if (!this.api.SQL_Comment) this.api.SQL_Comment = await this.api.Get("comentario")
    this.comentario = this.api.SQL_Comment.data.filter((a: any) => a.Type.split(" ").includes("Digestion"))
  }
  async ComprarCurso() {
    const data = await this.api.paySession({ StripeId: this.api.SQL_Master.data.find((a: any) => a.master === "Stripe Price - Curso Sana").data })
    if (data.ok) {
      localStorage.setItem("stripe", data.url)
      window.location.href = data.url
    }
  }
}

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [AngularMaterialModule, FormsModule, CommonModule],
})
export class DialogDigestion {
  constructor(private api: ApiService) { }
  Email: string = ""
  Name: string = ""
  Msg: string = ""
  done: boolean = false
  async Send() {
    const data = await this.api.SendContacto(this.Email, this.Name, this.Msg, "Contacto sana tus digestiones")
    this.done = data.ok
  }
}
