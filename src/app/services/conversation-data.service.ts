import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversationDataService {
  url:string = "/api/demoapi/demo/GetConversation";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.post(this.url , {} , {
      "headers":{
        "Token":"123",
        "GroupId":"1",
        "AppVersion":"100"
      }
    })
  }
}
