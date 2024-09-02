import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppLoginComponent implements OnInit {
  User: string = ""
  Pass: string = ""
  Email: string = ""
  Response!: any
  Login: boolean = true
  constructor(private api: ApiService, private router: Router, private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Portal de curso - Clara Fuertes Nutrición")
  }

  async login() {
    this.Response = await this.api.Login(this.User, this.Pass)
    if (this.Response.ok) {
      if (this.Response.admin) {
        this.router.navigate(["/admin/portal/"])
        localStorage.setItem("jwt", this.Response.token + "_____" + this.User + "_____Admin")
      }
      else {
        window.location.pathname = "/curso/portal/"
        localStorage.setItem("jwt", this.Response.token + "_____" + this.User)
      }
      localStorage.setItem("jwz", this.Response.id)
      this.api.setHeader(this.Response.token)
    }
  }

  async passwordReset() {
    this.Response = await this.api.PasswordReset(this.Email)
  }
}
