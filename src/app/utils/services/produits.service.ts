import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  #products = [
    {
      id: 1,
      nom: 'Souris',
      category: {title: 'informatique'}
    },
    {
      id: 2, nom: 'Ecran',
      category: {title: 'informatique'}
    },
    {id: 3, nom: 'Clavier', category: {title: 'informatique'}}
  ];

  constructor() { }

  getAll() {
    if(Math.random() > 0.5) {
      return this.#products;
    } else {
      return undefined;
    }
  }

}
