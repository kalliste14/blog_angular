import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/Post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostSubject();
    this.postsService.getPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  ngOnDestroy()  {
    this.postsService.savePosts();
    this.postSubscription.unsubscribe();
  }

}
