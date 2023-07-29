import { Component } from '@angular/core';
import { ProfileDataService } from '../services/profile-data.service';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent {
    profiledata:any;

    constructor(private profileData : ProfileDataService){
        profileData.getData().subscribe(data => {
          this.profiledata = data;
        })
    }
}
