import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../utils/services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLogged?: boolean;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.is_logged$.subscribe(value => this.isLogged = value)
  }

  logout() {
    this.auth.logout();
  }
}
