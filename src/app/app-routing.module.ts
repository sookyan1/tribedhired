import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from 'src/app/post/post-detail/post-detail.component';
import { PostListingComponent } from 'src/app/post/post-listing/post-listing.component';


const routes: Routes = [
    { path: '', redirectTo: '/post', pathMatch: 'full' },
    { path: 'post', component: PostListingComponent },
    { path: 'post/:id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
