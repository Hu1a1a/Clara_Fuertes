import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppAdminPortalComponent implements OnInit {
  constructor(private api: ApiService) { }
  data: {
    "curso/level1": any,
    "curso/level2": any,
    "curso/video": any,
    "curso/curso": any,
    "user": any,
    "comentario": any,
    "email": any,
  } = {
      "curso/level1": {},
      "curso/level2": {},
      "curso/video": {},
      "curso/curso": {},
      "user": {},
      "comentario": {},
      "email": {},
    }

  ngOnInit() {
    this.Get()
  }

  modal: boolean = false
  sData!: any
  sRouter!: "curso/level1" | "curso/level2" | "curso/video" | "curso/curso" | "user" | "comentario" | "email"
  sAccion!: "create" | "update" | "delete"
  loading: boolean = true
  Key(data: any) {
    return Object.keys(data)
  }

  async Get() {
    this.data["curso/level1"] = await this.api.Get("curso/level1")
    this.data["curso/level2"] = await this.api.Get("curso/level2")
    this.data["curso/level2"].data = this.data["curso/level2"].data.sort((a: any, b: any) => a.depId >= b.depId ? 1 : -1)
    this.data["curso/video"] = await this.api.Get("curso/video")
    this.data["curso/video"].data = this.data["curso/video"].data.sort((a: any, b: any) => a.Orden >= b.Orden ? 1 : -1)
    this.data["user"] = await this.api.Get("user")
    this.data["comentario"] = await this.api.Get("comentario")
    this.data["curso/curso"] = await this.api.Get("curso/curso")
    this.data["email"] = await this.api.Get("email")
    this.loading = false
  }

  OpenModal(data: any, router: "curso/level1" | "curso/level2" | "curso/video" | "curso/curso" | "user" | "comentario" | "email", accion: "create" | "update" | "delete") {
    this.sRouter = router
    this.sAccion = accion
    if (this.sAccion === "create") {
      this.sData = JSON.parse(JSON.stringify(data))
      for (const d of Object.keys(this.sData)) this.sData[d] = ""
    } else this.sData = data
    this.modal = true
  }

  Accion(data: any, router: "curso/level1" | "curso/level2" | "curso/video" | "curso/curso" | "user" | "comentario" | "email", accion: "create" | "update" | "delete") {
    this.loading = true
    setTimeout(async () => {
      await this.api.Accion(data, router, accion)
      this.data[router] = await this.api.Get(router)
      this.modal = false
      this.loading = false
    }, 0);

  }
}
