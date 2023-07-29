import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  constructor(private http:HttpClient) { }

  getData(pageNo:number = 1){
    return this.http.post(`/api/demoapi/demo/PostData?PageNo=${pageNo}` , {} , {
      "headers":{
        "Token":"123",
        "GroupId":"1",
        "AppVersion":"100"
      }
    })
  }
}
