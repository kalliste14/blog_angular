import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet-blog';

  constructor() {

    var firebaseConfig = {
      apiKey: "AIzaSyDj4T4YHwqXbE54GIXL_55eoGuddbp5XAg",
      authDomain: "blog-angular-58b29.firebaseapp.com",
      databaseURL: "https://blog-angular-58b29.firebaseio.com",
      projectId: "blog-angular-58b29",
      storageBucket: "",
      messagingSenderId: "1047510528151",
      appId: "1:1047510528151:web:83db156541219a64"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}
