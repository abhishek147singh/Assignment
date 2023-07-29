import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';

const routes: Routes = [
  {path:'' , component:MainScreenComponent},
  {path:'chat',component:ChatScreenComponent},
  {path:'profile',component:ProfileScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
