import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Data } from 'ws';

@Component({
  selector: 'app-component-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class ComponentChatComponent implements OnInit {
  constructor(public api: ApiService, private fb: FormBuilder) { }
  chatMessages: { message: string, user: string, data: Data }[] = []
  chatForm!: FormGroup
  subject!: WebSocket
  showChat: boolean = false

  ngOnInit(): void {
    if (localStorage.getItem("jwt")?.split("_____")[1]) {
      this.chatForm = this.fb.group({ message: '', user: localStorage.getItem("jwt")?.split("_____")[1], data: new Date().toISOString() })
      this.subject = this.api.wsConnection()
      this.subject.onmessage = (data: any) => {
        this.chatMessages = JSON.parse(data.data)
        this.scrollDown()
      }
    }
  }

  sendMessage() {
    this.chatForm.patchValue({ data: new Date().toISOString().split(".")[0] })
    this.chatMessages.push(this.chatForm.getRawValue())
    this.subject.send(JSON.stringify(this.chatForm.getRawValue()))
    this.chatForm.patchValue({ message: "" })
    this.scrollDown()
  }

  scrollDown() {
    const screen = document.getElementById("screen")
    setTimeout(() => screen?.scrollTo(0, screen?.scrollHeight || 0), 0);
  }

}
