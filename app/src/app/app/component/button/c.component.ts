import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class ComponentButtonComponent {
  constructor(private router: Router) { }
  @Input() text1: string = ""
  @Input() text1n: string = ""
  @Input() text2: string = ""
  @Input() ref: string = ""
  @Input() disabled: boolean = false
  @Input() nuevo: boolean = false
  @Input() novedad: boolean = false


  butonc() {
    if (this.ref) this.router.navigate([this.ref])
  }
}
