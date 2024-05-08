import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppAdminPortalComponent implements OnInit {
  constructor(private api: ApiService) { }
  panelOpenState = false;
  level1!: any
  level2!: any
  video!: any
  user!: any
  comentario!: any
  curso!: any
  correo!: any

  ngOnInit() {
    this.Get()
  }

  modal: boolean = false
  sData!: any
  sRouter!: string
  sAccion!: "create" | "update" | "delete"

  Key(data: any) {
    return Object.keys(data)
  }

  async Get() {
    await this.api.Get("curso/level1").then((a) => this.level1 = a)
    await this.api.Get("curso/level2").then((a) => this.level2 = a)
    this.level2.data = this.level2.data.sort((a: any, b: any) => a.depId >= b.depId ? 1 : -1)
    await this.api.Get("curso/video").then((a) => this.video = a)
    this.video.data = this.video.data.sort((a: any, b: any) => a.Orden >= b.Orden ? 1 : -1)
    await this.api.Get("user").then((a) => this.user = a)
    await this.api.Get("comentario").then((a) => this.comentario = a)
    await this.api.Get("curso/curso").then((a) => this.curso = a)
    await this.api.Get("email").then((a) => this.correo = a)
  }

  OpenModal(data: any, router: string, accion: "create" | "update" | "delete") {
    this.sRouter = router
    this.sAccion = accion
    if (this.sAccion === "create") {
      this.sData = JSON.parse(JSON.stringify(data))
      for (const d of Object.keys(this.sData)) {
        this.sData[d] = ""
      }
    } else {
      this.sData = data
    }
    this.modal = true
  }



  async Accion(data: any, router: string, accion: "create" | "update" | "delete") {
    await this.api.Accion(data, router, accion)
    this.Get()
    this.modal = false
  }

}
