import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Post, PostService, Comment } from 'src/app/post/post.service';


@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

    HTMLTextAreaElement = HTMLTextAreaElement;
    post: Post = {} as Post;
    comments: Comment[] = [];
    isLoading: boolean = true;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getData(id);
    }

    private getData(id: number): void {
        combineLatest([
            this.postService.getPostById(id),
            this.postService.getCommentsByPostId(id),
        ]).subscribe(([posts, comments]) => {
            this.post = posts;
            this.comments = comments;
            this.isLoading = false;
        },
        err => {
            this.isLoading = false;
        })
    }

    public search(event: Event): void {
        const str = (event.target as HTMLInputElement).value;
        if (str === '') {
            this.comments = this.postService.getResetComments();
        }
        else {
            this.comments = this.postService.search(str);
        }
    }

}
