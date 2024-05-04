import { Component, Inject } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ensalada',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppEnsaladaComponent {
  constructor(private api: ApiService, public dialog: MatDialog) { }
  Name: string = ""
  Email: string = ""
  Response!: any
  async sendGuia() {
    if (this.Email && this.Name) {
      this.Response = await this.api.SendEmail(this.Email, this.Name)
    } else {
      this.Response = { msg: "Introduce tu nombre y tu correo!" }
    }
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
