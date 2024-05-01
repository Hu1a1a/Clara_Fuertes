import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularMaterialModule } from '../../../module/app.angular.material.component';
import { AngularModule } from '../../../module/app.angular.component copy';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppResetPasswordComponent implements OnInit {
  password: string = ""
  passwordconfirm: string = ""
  email: string = ""
  token: string = ""
  Response!: any
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    document.title = "Login"
    this.email = this.route.snapshot.queryParams["email"]
    this.token = this.route.snapshot.queryParams["token"]

  }

  async passwordReset() {
    this.Response = await this.api.PasswordReset2(this.email, this.token, this.password)
    console.log(this.Response)
  }
}
