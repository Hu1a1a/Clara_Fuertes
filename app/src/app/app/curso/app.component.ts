import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppCursoComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit() {
    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("jwz")
    if (token && user) this.api.setHeader(token)
    else this.router.navigate(['/login/'])
  }
}
