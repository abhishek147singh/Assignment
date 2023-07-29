import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { VerticalListComponent } from './vertical-list/vertical-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ChatScreenComponent,
    ProfileScreenComponent,
    VerticalListComponent,
    PostListComponent,
    SearchBarComponent,
    ChatListComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
