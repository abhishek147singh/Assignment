import { Component } from '@angular/core';
import {Output , EventEmitter} from "@angular/core";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() getDataFromSearch = new EventEmitter<string> ();
   
}
