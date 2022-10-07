import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const is_logged = this.authService.isConnected();
    if(is_logged) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {return_url: state.url}}); // rediriger vers la page login
    console.warn('Navigation interdite !');
    return false; // couper la navigation précédente
  }

}
