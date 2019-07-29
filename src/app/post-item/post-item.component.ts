import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() blogTitle: string;
  @Input() blogContent: string;
  @Input() blogLoveits: number;
  @Input() blogCreated_At: Date;
  @Input() index: number;

  constructor(private postService: PostsService) {
    this.blogCreated_At = new Date();
  }

  onLove() {
    // this.blogLoveits += 1;
    this.postService.addLove(this.index, 1);
  }

  onDeLove() {
    // this.blogLoveits -= 1;
    this.postService.addLove(this.index, -1);
  }

  onDeletePost() {
    this.postService.removePost(this.index);
  }

  ngOnInit() {
  }

}
