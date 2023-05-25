import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/post/post.service';

@Component({
    selector: 'app-post-listing',
    templateUrl: './post-listing.component.html',
    styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

    public posts: Post[] = [];

    constructor(
        private postService: PostService
    ) { }

    ngOnInit(): void {
        this.getPostListing();
    }

    getPostListing(): void {
        this.postService.getPosts().subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
    }



}
