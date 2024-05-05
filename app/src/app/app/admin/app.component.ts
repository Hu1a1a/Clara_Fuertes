import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppAdminComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) { }
  async ngOnInit() {
    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("jwz")
    if (token && user) this.api.setHeader(token)
    else this.router.navigate(['/login/'])
  }
}
