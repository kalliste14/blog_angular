import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/Post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }

  // Sauvegarder tous les posts du blog en base de données
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  // Récupérer tous les posts du blog en base de données
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }

  // Créer un nouveau post
  createnewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostSubject();
  }

  // Supprimer le post
  removePost(index: number) {
    const postIndexToRemove = index;
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostSubject();
  }

  // Gérer le compteur des LoveIts
  addLove(index: number, numberLove: number) {
    const postIndexToUpdate = index;
    this.posts[postIndexToUpdate].LoveIts += numberLove;
    this.savePosts();
    this.emitPostSubject();
  }
}

