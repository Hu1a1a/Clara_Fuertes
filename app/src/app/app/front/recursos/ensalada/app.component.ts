import { Component, Inject, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../../module/app.angular.material.component';
import { AngularModule } from '../../../../module/app.angular.component copy';
import { ApiService } from '../../../../service/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ComponentButtonComponent } from '../../../component/button/c.component';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ensalada',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../style.component.css"]
})
export class AppEnsaladaComponent implements OnInit {
  constructor(private api: ApiService, public dialog: MatDialog, private title: Title) { }
  Name: string = ""
  Email: string = ""
  Condicion: boolean = false
  Response!: any
  ngOnInit(): void {
    this.title.setTitle("La guía infalible - Clara Fuertes Nutrición")
  }

  sendGuia() {
    if (this.Condicion) {
      if (this.Email && this.Name) {
        this.Response = { ok: true }
        this.api.SendRecursos(this.Email, this.Name, "ensalada")
      } else this.Response = { msg: "Introduce tu nombre y tu correo!" }
    } else this.Response = { msg: "Acepte los términos y condiciones!" }
    this.dialog.open(DialogEnsalada, {
      data: { msg: this.Response.msg, ok: this.Response.ok }
    });
  }
}

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
})
export class DialogEnsalada {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { msg: string, ok: boolean }) { }
}
