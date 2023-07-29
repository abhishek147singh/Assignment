import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
    @Input() photoListData : { Image : string }[] = [];
  
    photoList:{imgPath:string , className: string }[][] = [];

    constructor(){ }
  
    ngOnInit(): void {
      this.generateList();
    }

    generateList(){
      let count = 1;
      for(let i = 0; i < this.photoListData.length; i += 3){
        let temp:{imgPath:string , className: string }[] = [];
        count = 1 - count;
        for(let k = 0; k < 3 && i + k < this.photoListData.length; k++){
          temp.push({imgPath: this.photoListData[i + k].Image , className: `img${(count + k) + 1}`});
        }
        this.photoList.push(temp);
      }
    }
}
