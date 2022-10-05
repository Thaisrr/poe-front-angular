import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JokeRequest} from "../types/CustomTypes";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  url = "https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode";

  constructor(private http: HttpClient) { }

  getRandom(): Observable<JokeRequest> {

    // < Ce que l'API me renvoie >
    return this.http.get<JokeRequest>(this.url);
  }

}
