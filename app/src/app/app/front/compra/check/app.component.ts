import { Component } from '@angular/core';
import { ApiService } from '../../../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compra-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCompraCheckComponent {
  constructor(private api: ApiService) { }
  data!: any
  async ngOnInit() {
    const url = localStorage.getItem("stripe")
    if (url) {
      this.data = await this.api.checkSession(url)
      if (this.data.ok) {
        await this.api.PasswordReset(this.data.email)
      }
    }
  }
}
