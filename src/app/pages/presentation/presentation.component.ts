import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent  {
  titre = 'Présentation d\'Angular';
  data = `Je suis un attribut de la classe PresentationComponent`;
  user = {nom: 'Jean Michel', age: 286};

  count = 0;

  url = 'https://wallpaperaccess.com/full/128440.jpg';
  image = {
    url: "https://wallpaperaccess.com/full/128463.jpg",
    titre: "NyanCat in space"
  }

  ma_classe = "bleu";
  condition = true;

  increment() {
    // Dans le ts, pour utiliser les variables, qui sont des attributs de classe,
    // on utilise le mot clef this.
    this.count++;
  }


}
