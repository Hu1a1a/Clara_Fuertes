import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-login',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../style.component.css"]
})
export class AppCursoLoginComponent implements OnInit {
  User: string = ""
  Pass: string = ""
  Response!: any
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    document.title = "Link en biografía de IG de ensaladas"
  }
  async login() {
    this.Response = await this.api.Login(this.User, this.Pass)
    if (this.Response.ok) this.router.navigate(["curso/portal"])
  }
}
