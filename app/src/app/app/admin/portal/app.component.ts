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
  constructor(private api: ApiService, private router: Router) { }
  panelOpenState = false;
  level1!: any
  level2!: any
  video!: any

  ngOnInit() {
    document.title = "Portal de curso"
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
    this.api.GetCurso("level1").then((a) => this.level1 = a)
    this.api.GetCurso("level2").then((a) => this.level2 = a)
    this.api.GetCurso("video").then((a) => this.video = a)
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
    await this.api.AccionCurso(data, router, accion)
    this.Get()
    this.modal = false
  }

}
