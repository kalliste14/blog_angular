import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
    this.blogLoveits = 0;
    this.blogCreated_At = new Date();
  }

  onLove() {
    this.blogLoveits += 1;
    console.log(this.blogLoveits );
  }

  onDeLove() {
    this.blogLoveits -= 1;
    console.log(this.blogLoveits );
  }

  ngOnInit() {
  }

}
