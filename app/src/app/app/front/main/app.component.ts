import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { ApiService } from '../../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentCardGroupComponent, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"],
})

export class AppMainComponent implements OnInit {
  constructor(private api: ApiService, public dialog: MatDialog, public router: Router, private title: Title) { }
  comentario!: any
  plaza: string = "PLAZAS AGOTADAS"
  async ngOnInit() {
    this.title.setTitle("Clara Fuertes Nutrición")
    if (!this.api.SQL_Comment) this.api.SQL_Comment = await this.api.Get("comentario")
    this.comentario = this.api.SQL_Comment.data.filter((a: any) => a.Type.split(" ").includes("Home"))
    this.plaza = this.api.SQL_Master.data.find((a: any) => a.master === "Lista de espera").data
  }

  openModal() {
    this.dialog.open(DialogDisable, {});
  }
}

@Component({
  selector: 'dialog-component-disable',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [AngularMaterialModule],
})
export class DialogDisable { }
