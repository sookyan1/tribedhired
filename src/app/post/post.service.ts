import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private route: string = 'https://jsonplaceholder.typicode.com/';
    private comments: Comment[] = [];

    constructor(
        private httpClient: HttpClient
    ) { }

    public getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.route + 'posts');
    }

    public getPostById(id: number): Observable<Post> {
        return this.httpClient.get<Post>(this.route + 'posts/' + id);
    }

    public getCommentsByPostId(id: number): Observable<Comment[]> {
        const params = {
            postId: id.toString()
        }
        return this.httpClient.get<Comment[]>(this.route + 'comments', {params: params}).pipe(map(d => {
            this.comments = d;
            return d;
        }));
    }

    public search(searchStr: string): Comment[] {
        return this.comments.filter((comment: Comment) =>  comment.body.toLowerCase().includes(searchStr.toLowerCase()) || comment.name.toLowerCase().includes(searchStr.toLowerCase()) || comment.email.toLowerCase().includes(searchStr.toLowerCase()));
    }

    public getResetComments(): Comment[] {
        return this.comments;
    }

}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
