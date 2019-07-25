import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet-blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Valentiam Arelate oriens excursibus ter vastabantur suo caeli egressus diu Valentiam moturus egressus perferret reges petit suo Valentiam quorum arma.',
    },
    {
      title: 'Mon deuxième post',
      content: 'Pietate criminis quod esse lacrimae neque ex incredibilisque quidem iuratis declarat lacrimae sentiant iuratis esse parentes declarat est poni et.',
    },
    {
      title: 'Encore un post',
      content: 'Si theatrales taedium quocumque multas multas aetatem pavimenta aetatem ad pedibus volucriter flexeris cirratas pavimenta feminas ter flexeris quibus spectare.',
    }
  ];

}
