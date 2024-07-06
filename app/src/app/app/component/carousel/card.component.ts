import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class ComponentCardComponent {
  @Input() data!: any
  substring(text: string, long: number) {
    if (text.length > long) return text.substring(0, long) + "...”"
    else return text
  }
}
