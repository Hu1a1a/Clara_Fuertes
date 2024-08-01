import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ComponentCardComponent } from '../carousel/card.component';

@Component({
  selector: 'app-component-carouselgroup',
  standalone: true,
  imports: [CommonModule, ComponentCardComponent],
  templateUrl: './cardgroup.component.html',
  styleUrl: './cardgroup.component.css'
})
export class ComponentCardGroupComponent implements OnInit {
  @Input() data!: any[]
  @Input() id: string = "card"
  screen_width: number = window.innerWidth
  unit: any = Array(Math.floor(this.screen_width * 0.95 / 320) || 1)
  interval: any
  ngOnInit(): void {
    addEventListener("resize", () => {
      this.screen_width = window.innerWidth;
      this.unit = Array(Math.floor(this.screen_width * 0.95 / 320) || 1)
    })
    this.interval = setInterval(() => this.next(), 10000)
  }
  prev() {
    clearInterval(this.interval)
    this.interval = undefined
    const data = this.data.shift()
    if (data) {
      const x: any[] = []
      x.push(...this.data, data)
      setTimeout(() => this.data = x, 0);
    }
    this.interval = setInterval(() => this.next(), 10000)
  }

  next() {
    clearInterval(this.interval)
    this.interval = undefined
    const data = this.data.pop()
    if (data) {
      const x: any[] = []
      x.push(data, ...this.data)
      setTimeout(() => this.data = x, 0);
    }
    this.interval = setInterval(() => this.next(), 10000)
  }
}