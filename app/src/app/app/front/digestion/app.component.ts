import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../service/api.service';
import { FormsModule } from '@angular/forms';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';

@Component({
  selector: 'app-digestion',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent, CommonModule, ComponentCardGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppDigestionComponent {
  constructor(private dialog: MatDialog, private api: ApiService) { }
  comentario!: any

  openModal() {
    this.dialog.open(DialogDigestion, {})
  }
  ngOnInit(): void {
    this.api.Get("comentario").then((a: any) => {
      this.comentario = a
      this.comentario.data = this.comentario.data.filter((a: any) => a.Type === "Digestion")
    })
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
