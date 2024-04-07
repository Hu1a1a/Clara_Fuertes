import { Component, OnInit, Inject } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { ApiService } from '../../service/api.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ensalada',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppEnsaladaComponent implements OnInit {
  constructor(private api: ApiService, public dialog: MatDialog) { }
  Name: string = ""
  Email: string = ""
  Response!: any
  ngOnInit(): void {
    document.title = "Link en biografía de IG de ensaladas"
  }
  async sendGuia() {
    if (this.Email && this.Name) {
      this.Response = await this.api.SendEmail(this.Email, this.Name)
    } else {
      this.Response = { msg: "Introduce nombre y correo!" }
    }
    this.dialog.open(Dialog, {
      data: { msg: this.Response.msg }
    });
  }
}

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [AngularMaterialModule],
})
export class Dialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { msg: string }) { }
}
