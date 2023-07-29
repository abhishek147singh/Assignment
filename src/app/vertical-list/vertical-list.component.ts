import { Component , ViewChild , ElementRef } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.css']
})
export class VerticalListComponent {
  @Input() listData : {ProfileImage:string , Name:string } [] = [];

  @ViewChild('container') container : any;
  
  constructor(){}

  public scrollRight(): void {
    if(this.container !== undefined)
      this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    if(this.container !== undefined)
      this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

}
