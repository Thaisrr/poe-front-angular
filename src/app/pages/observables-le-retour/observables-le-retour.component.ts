import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-observables-le-retour',
  templateUrl: './observables-le-retour.component.html',
  styleUrls: ['./observables-le-retour.component.css']
})
export class ObservablesLeRetourComponent implements OnInit {

  obs: Observable<string> = new Observable((observer) => {
    observer.next('Hello There !');
    observer.next('General Kenobi !?!!');
    observer.error(`Je t'es cassé !`);
    observer.next('May the force be with you'); // ne sera jamais lu
  });

  message = new BehaviorSubject("Default value");
  str_message = '';

  ngOnInit(): void {
    this.obs
      .pipe(
        map(response => response + ' :)'),
        catchError(e => {
          // gestion de l'erreur : afficher un message, ou autre
          // ensuite : retourne un observable
          return of('Nope') // of : transforme une valeur en observable<valeur passée>
        }),
        map(res => res + ' 🔥')
      )
      .subscribe({
      next: response => console.log(response),
      error: err => console.warn("Arrêt de l'observable : erreur")
    });
    this.changeMessage();

    this.message.subscribe(msg => {
      console.log('Dans subscribe de message')
      this.str_message = msg
    });
  }

  changeMessage() {
    let count = 1;
    setInterval(() => {
      this.message.next('Changement ' + count);
      count++;
    }, 3000)
  }


}
