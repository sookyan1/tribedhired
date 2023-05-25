import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCommentComponent } from 'src/app/post/post-comment/post-comment.component';
import { PostDetailComponent } from 'src/app/post/post-detail/post-detail.component';
import { PostListingComponent } from 'src/app/post/post-listing/post-listing.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PostListingComponent,
    PostDetailComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
