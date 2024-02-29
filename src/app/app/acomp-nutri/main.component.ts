import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/app.angular.material.component';
import { AngularModule } from '../../module/app.angular.component copy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acompañamiento-nutricional',
  standalone: true,
  imports: [AngularMaterialModule, AngularModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', "../style.component.css"]
})
export class AcompNutriComponent implements OnInit {
  constructor(private router: Router) { }
  modal: boolean = true;
  ngOnInit(): void {
    document.title = "Acompañamientos Nutricionales 1:1"
  }

  async send() {
    this.router.navigate(['./patologia']);

  }
}
