import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  users: any;

  getData = new Observable((observer) => {
    observer.next('Hello World !');
    observer.error('NOPE ! Cassé')
    observer.complete();
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Syntaxe 1 : callback en paramétre
    this.getData.subscribe(response => {
      console.log(response);
    })

    // Syntaxe 2: next = réussite, error = gestion d'erreur éventuelle
    /*
       {
          next: callback ( function ) à effectuer en cas de succès,
          error: callback à effectuer en cas d'erreur
     */
    this.getData.subscribe({
      next: (res) => console.log(res),
      error: (e) => console.log(e.toString())
    })

    this.getUsers();
  } // fin du ngOnInit

  getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    this.http.get(url)
      .subscribe(response => this.users = response)
  }




}
