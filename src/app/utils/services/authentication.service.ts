import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cred} from "../types/CustomTypes";
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "https://reqres.in/api";
  key = 'token';
  is_logged$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.is_logged$ = new BehaviorSubject(this.isConnected());
  }

  /**
   * @description cette méthode fait des trucs
   * @param credentials
   */
  login(credentials: Cred): Observable<{}> {
      return this.http.post<{token: string}>(`${this.url}/login`, credentials).pipe(
        tap(response => localStorage.setItem(this.key, response.token)), // agir avant le subscribe
        tap(() => this.is_logged$.next(true))
      )
  }

  isConnected(): boolean {
    const token = localStorage.getItem(this.key); // string OU undefined
    // return token ? true : false;
    // return Boolean(token)
    return !!token;
  }

  logout() {
    localStorage.removeItem(this.key);
    this.is_logged$.next(false);
  }

}
