import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

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
  Response!: any
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    document.title = "Login"
  }

  async login() {
    this.Response = await this.api.Login(this.User, this.Pass)
    if (this.Response.ok) {
      if (this.Response.admin) this.router.navigate(["/admin/portal/"])
      else this.router.navigate(["/curso/portal/"])
      localStorage.setItem("jwt", this.Response.token)
      this.api.setHeader(this.Response.token)
    }
  }
}