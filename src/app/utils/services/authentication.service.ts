import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cred} from "../types/CustomTypes";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "https://reqres.in/api";
  key = 'token';

  constructor(private http: HttpClient) { }

  /**
   * @description cette méthode fait des trucs
   * @param credentials
   */
  login(credentials: Cred): Observable<any> {
      return this.http.post<{token: string}>(`${this.url}/login`, credentials).pipe(
        tap(response => localStorage.setItem(this.key, response.token))
      )
  }

  isConnected(): boolean {
    const token = localStorage.getItem(this.key); // string OU undefined
    // return token ? true : false;
    // return Boolean(token)
    return !!token;
  }


}
