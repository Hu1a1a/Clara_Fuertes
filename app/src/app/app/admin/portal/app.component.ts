import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Title } from '@angular/platform-browser';
import { ComponentChatComponent } from '../../component/chat/app.component';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppAdminPortalComponent implements OnInit {
  constructor(private api: ApiService, private title: Title) { }
  data: {
    "curso/level1": any,
    "curso/level2": any,
    "curso/video": any,
    "curso/curso": any,
    "user": any,
    "comentario": any,
    "email": any,
    "master": any,
    "chat": any
  } = {
      "curso/level1": {},
      "curso/level2": {},
      "curso/video": {},
      "curso/curso": {},
      "user": {},
      "comentario": {},
      "email": {},
      "master": {},
      "chat": {},
    }

  ngOnInit() {
    this.title.setTitle("Centro de admin - Clara Fuertes Nutrición")
    this.Get()
  }

  modal: boolean = false
  modalProgress: boolean = false
  sData!: any
  sRouter!: SQLClass
  sAccion!: SQLAccion
  loading: boolean = true
  emailColor: { Name: string, Color: string }[] = []
  emailFilter: string = ""
  now: Date = new Date()
  UnsubscriberMail: string = ""

  async Get() {
    this.data["curso/level1"] = await this.api.Get("curso/level1")
    this.data["curso/level2"] = await this.api.Get("curso/level2")
    this.data["curso/video"] = await this.api.Get("curso/video")
    this.data["user"] = await this.api.Get("user")
    this.data["comentario"] = await this.api.Get("comentario")
    this.data["curso/curso"] = await this.api.Get("curso/curso")
    this.data["email"] = await this.api.Get("email")
    this.data["master"] = await this.api.Get("master")
    this.data["chat"] = await this.api.Get("chat")
    const tipo = this.data["email"].data.map((a: any) => a.Tipo).filter((item: any, index: any) => this.data["email"].data.map((a: any) => a.Tipo).indexOf(item) === index)
    for (const tip of tipo) this.emailColor.push({ Name: tip, Color: '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6) })
    this.sort()
    this.loading = false
  }

  Date = (data: string): Date => { return new Date(data) }
  Key = (data: any): string[] => { return Object.keys(data) }
  find = (table: any[], value: string, key: string) => table.find((a: any) => a[key] === value)
  find2 = (table: any[], value: string, key: string, value2: string, key2: string) => table.find((a: any) => a[key] === value && a[key2] === value2)
  getTIP = (tip: string): string => this.api.SQL_Master.data.find((a: any) => a.master === tip).data
  getColor = (tipo: string): any => this.emailColor.find((a: any) => a.Name === tipo)?.Color
  getUser = (userId: string): any => this.data["user"].data.find((a: any) => a.id === userId)?.User
  getCurso = (cursoId: string): any => this.data["curso/level1"].data.find((a: any) => a.id === cursoId)?.Name

  sort() {
    this.data["curso/level2"].data = this.data["curso/level2"].data.sort((a: any, b: any) => a.orden >= b.orden ? 1 : -1).sort((a: any, b: any) => a.depId >= b.depId ? 1 : -1)
    this.data["curso/video"].data = this.data["curso/video"].data.sort((a: any, b: any) => a.Orden >= b.Orden ? 1 : -1)
    this.data["email"].data = this.data["email"].data.sort((a: any, b: any) => a.Date >= b.Date ? -1 : 1)
    this.data["master"].data = this.data["master"].data.sort((a: any, b: any) => a.master.split(" - ")[0] >= b.master.split(" - ")[0] ? 1 : -1)
  }

  OpenModal(data: any, router: SQLClass, accion: SQLAccion) {
    this.sRouter = router
    this.sAccion = accion
    if (this.sAccion === "create") {
      this.sData = JSON.parse(JSON.stringify(data))
      for (const d of Object.keys(this.sData)) this.sData[d] = null
    } else this.sData = data
    this.modal = true
  }

  async Accion(data: any, router: SQLClass, accion: SQLAccion) {
    delete data.showModal
    await this.api.Accion(data, router, accion)
    this.data[router] = await this.api.Get(router)
    this.sort()
    this.modal = false
  }
  modalClick(event: any) {
    if (event.target.localName === "section") return false
    return true
  }

  async Unsubscriber() {
    await this.api.Accion({ id: this.UnsubscriberMail }, "email", "delete")
    this.data["email"] = await this.api.Get("email")
  }
  Duplicar() {
    this.sAccion = "create"
    this.sData.id = null
  }
  showGroup(group: SQLClass, value: string) {
    for (const item of this.data[group].data) {
      if (item.master.split(' - ')[0] === value) {
        item.showModal = !item.showModal || false
      }
    }
  }

  ProgressForm: any[] = []
  async createProgress() {
    for await (let progress of this.ProgressForm) {
      await this.api.Accion({
        cursoId: progress,
        expiro: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        inicio: new Date().toISOString(),
        progreso: "",
        userId: this.sData.id
      }, "curso/curso", "create")
    }
    this.data["curso/curso"] = await this.api.Get("curso/curso")
    this.modalProgress = false
    this.ProgressForm = []
  }
}

type SQLClass = "curso/level1" | "curso/level2" | "curso/video" | "curso/curso" | "user" | "comentario" | "email" | "master" | "chat"
type SQLAccion = "create" | "update" | "delete"