import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppLoginComponent {
  User: string = ""
  Pass: string = ""
  Email: string = ""
  Response!: any
  Login: boolean = true
  constructor(private api: ApiService, private router: Router) { }

  async login() {
    this.Response = await this.api.Login(this.User, this.Pass)
    if (this.Response.ok) {
      if (this.Response.admin) this.router.navigate(["/admin/portal/"])
      else this.router.navigate(["/curso/portal/"])
      localStorage.setItem("jwt", this.Response.token)
      localStorage.setItem("jwz", this.User)
      this.api.setHeader(this.Response.token)
    }
  }
  async passwordReset() {
    this.Response = await this.api.PasswordReset(this.Email)
  }
}
