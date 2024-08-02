import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-compra-fail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppCompraFailComponent implements OnInit {
  constructor(private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Pago fallido - Clara Fuertes Nutrición")
  }
}
