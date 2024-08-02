import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ComponentButtonComponent } from '../../component/button/c.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-listado-esperae',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule, ComponentButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppListadoEsperaComponente implements OnInit {
  Name: string = ""
  Email: string = ""
  Msg: string = ""
  constructor(public router: Router, private api: ApiService, private title: Title) { }

  done: boolean = false
  async Send() {
    const data = await this.api.SendContacto(this.Email, this.Name, this.Msg, "Listado de espera: " + this.plaza)
    this.done = data.ok
  }
  plaza: string = "PLAZAS AGOTADAS"
  ngOnInit(): void {
    this.title.setTitle("Lista de espera - Clara Fuertes Nutrición")
    this.api.Get("master").then((a) => this.plaza = a.data.find((a: any) => a.master === "Lista de espera").data)
  }
}