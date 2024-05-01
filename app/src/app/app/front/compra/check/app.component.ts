import { Component } from '@angular/core';
import { ApiService } from '../../../../service/api.service';

@Component({
  selector: 'app-compra-check',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCompraCheckComponent {
  constructor(private api: ApiService) { }
  async ngOnInit() {

    //const data = await this.api.Check()

  }
}
