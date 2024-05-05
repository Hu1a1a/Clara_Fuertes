import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perdida',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppPerdidaComponent {
  constructor(private dialog: MatDialog, public router: Router) { }
  openModal() {
    this.dialog.open(DialogPerdida, {})
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
