import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppCompraComponent implements OnInit {
  constructor(private api: ApiService) { }
  curso!: any
  async ngOnInit() {
    //this.curso = await this.api.Get("curso/level1")
  }
  async ComprarCurso(item: any) {
    const data = await this.api.paySession(item)
    if (data.ok) {
      localStorage.setItem("stripe", data.url)
      window.location.href = data.url
    }
  }
}
