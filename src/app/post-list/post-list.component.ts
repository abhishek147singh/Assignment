import { Component } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() postsData:{ PostImage:string , ProfileImage:string , Name:string , Time:string } [] = []; 
}
