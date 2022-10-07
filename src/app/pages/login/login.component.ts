import {Component, OnInit} from '@angular/core';
import {Cred} from "../../utils/types/CustomTypes";
import {AuthenticationService} from "../../utils/services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: Cred = {email: '', password: ''};

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }



  login() {
    this.authService.login(this.credentials).subscribe(() => {
      console.log('Vous êtes connecté⋅e');
      this.redirect();
    })
  }

  redirect() {
    const path = this.route.snapshot.queryParams['return_url'] || '/admin';
    this.router.navigate([path]);
  }





}
