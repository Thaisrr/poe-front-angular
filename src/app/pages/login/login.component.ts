import { Component} from '@angular/core';
import {Cred} from "../../utils/types/CustomTypes";
import {AuthenticationService} from "../../utils/services/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  credentials: Cred = {email: '', password: ''};

  constructor(private authService: AuthenticationService) { }

  login() {
    this.authService.login(this.credentials).subscribe(() => {
      console.log('Vous êtes connecté⋅e');
    })
  }




}
