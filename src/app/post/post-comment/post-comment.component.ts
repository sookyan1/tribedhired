import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/post/post.service';

@Component({
    selector: 'app-post-comment',
    templateUrl: './post-comment.component.html',
    styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

    @Input() comment: Comment = {} as Comment;

    constructor(
    ) { }

    ngOnInit(): void {

    }

}
