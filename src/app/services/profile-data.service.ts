import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfileDataService {
  
  constructor(private http:HttpClient) { }

  getData(userId:number = 1){
    return this.http.post(`/api/demoapi/demo/Getprofile?UserId=${userId}` , {} , {
      "headers":{
        "Token":"123",
        "GroupId":"1",
        "AppVersion":"100"
      }
    })
  }
}
