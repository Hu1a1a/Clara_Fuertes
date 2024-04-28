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
    document.title = "Link en biografía de IG de ensaladas"
    this.curso = await this.api.GetCourseList()
    console.log(this.curso)
  }
  ComprarCurso(id: number) {

  }
}
