import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../style.component.css"]
})
export class AppCompraComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) { }
  curso!: any
  async ngOnInit() {
    document.title = "Link en biografía de IG de ensaladas"
    this.curso = await this.api.Get("curso/level1")
  }
  async ComprarCurso(item: any) {
    const data = await this.api.paySession(item)
    if (data.ok) {
      window.location.href = data.url
    }
  }
}
