import { Component } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})

export class ChatListComponent {
  @Input() chatlistData:{ ProfileImage:string , Name: string , LastMessage:string } []= [];
}
