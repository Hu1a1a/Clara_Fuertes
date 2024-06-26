import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentCardGroupComponent } from '../../component/carousel-group/cardgroup.component';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { ApiService } from '../../../service/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentCardGroupComponent, ComponentButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"],

})

export class AppMainComponent implements OnInit {
  constructor(private api: ApiService, public dialog: MatDialog) { }
  comentario!: any
  ngOnInit(): void {
    this.api.Get("comentario").then((a) => this.comentario = a)
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
