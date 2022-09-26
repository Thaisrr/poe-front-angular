import { Component } from '@angular/core';
// Attention, dans un vrai projet, si on veut partager l'interface
// avec plusieurs composant, on la met dans un fichier à part !
interface User {
  nom: string;
  email: string;
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

  is_logged = true;
  books = [`L'Assassin Royal`, `La Passe Miroir`, `The Hitchhiker Guide to the Galaxy`]
  autre_book = 'Encore un livre';
  new_book = '';
  users: User[] = [];
  new_user: User = {nom: '', email: ''};

  login(): void {
    this.is_logged = !this.is_logged;
  }

  changeBook() {
    this.new_book = 'Frankenstein';
  }

  saveBook() {
    this.books.push(this.new_book);
    this.new_book = '';
  }

  saveUser() {
      this.users.push({...this.new_user});
      this.new_user.nom = '';
      this.new_user.email = '';
  }
}
