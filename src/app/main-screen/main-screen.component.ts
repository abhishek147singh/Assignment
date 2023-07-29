import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})

export class MainScreenComponent {

    userdata:any;
    postdata : { PostImage:string , ProfileImage:string , Name:string , Time:string }[]= [];
    pageNo:number = 1;
    apiData:any;

    constructor(private userData : UserDataService , private postData : PostDataService){
      this.userData.getData().subscribe(data => {
          this.userdata = data;
      });

      this.postData.getData().subscribe(data => {
        this.apiData = data;
        this.addDataToPost();
      })
    }

    addDataToPost(){
      if(this.apiData.PostList !== undefined ){
          for(let item of this.apiData.PostList){
              this.postdata.push(item); 
          }
      }
    }

    loadPosts(){
      this.pageNo++;
      this.postData.getData(this.pageNo).subscribe(data => {
        this.apiData = data;
        this.addDataToPost();      
      })
    }
}
