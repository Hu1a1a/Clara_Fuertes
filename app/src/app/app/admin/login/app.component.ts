import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../style.component.css"]
})
export class AppAdminLoginComponent implements OnInit {
  User: string = ""
  Pass: string = ""
  Response!: any
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    document.title = "Login panel de administrador"
    const token = sessionStorage.getItem("jwt")!
    if (token) {
      this.api.setHeader(token)
      //await this.api.Token()
      this.router.navigate(['curso/portal'])
    }
  }
  async login() {
    this.Response = await this.api.Login(this.User, this.Pass)
    if (this.Response.ok) {
      this.router.navigate(["curso/portal"])
      sessionStorage.setItem("jwt", this.Response.token)
      this.api.setHeader(this.Response.token)
    }
  }
}
