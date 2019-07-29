import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        'title':  ['', Validators.required],
        'content': ['', Validators.required]
      }
    );
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const post = new Post(title, content, 0);

    // Demander au service de créer le nouveau Post
    this.postService.createnewPost(post);

    // Rediriger l'utilisateur sur la liste des posts
    this.router.navigate(['/posts']);
  }
}
