import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-component-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class ComponentChatComponent implements OnInit {
  constructor(public api: ApiService) { }
  chatMessages: any = [{ message: "fdfdsfsa", user: "fdsfa" }]
  ngOnInit(): void {
    this.chatMessages = this.api.wsConnection()
  }
}
