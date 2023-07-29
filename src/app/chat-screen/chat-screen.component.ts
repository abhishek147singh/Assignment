import { Component } from '@angular/core';
import { ConversationDataService } from '../services/conversation-data.service';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent {

    conversationdata:any;
    searchKey:string = "";
    secondaryData:{ ProfileImage:string , Name: string , LastMessage:string } [] = [];

    constructor(private conversationData : ConversationDataService){
      conversationData.getData().subscribe(data => {
        this.conversationdata = data;
        if(this.conversationdata !== undefined && this.conversationdata.FriendList !== undefined){
            for(let item of this.conversationdata.FriendList){
                this.secondaryData.push(item);
            }
         }
      })
    }

    getDataFromsearch(data : string):void {
      this.searchKey = data;  
      this.conversationdata.FriendList = this.secondaryData.filter(item => {
        return item.Name.includes(this.searchKey);
      }); 
    }
}
