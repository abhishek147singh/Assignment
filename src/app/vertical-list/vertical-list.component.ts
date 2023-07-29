import { Component } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.css']
})
export class VerticalListComponent {
  @Input() listData : {ProfileImage:string , Name:string } [] = [];

}
