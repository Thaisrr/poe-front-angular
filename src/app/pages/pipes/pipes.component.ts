import { Component } from '@angular/core';
import {OrderType} from "../../utils/types/CustomTypes";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {

  message = "hELlo wOrLd";
  today = new Date();
  pi = Math.PI;

  users1 = ['Jean Michel', 'Jean Micheline', 'Toto', 'Aliénor', 'Jeanne', 'Gertrude'];
  users2 = ['Jean Michel', 'Jean Micheline', 'Toto', 'Aliénor', 'Jeanne', 'Gertrude'];
  users3 = ['Jean Michel', 'Jean Micheline', 'Toto', 'Aliénor', 'Jeanne', 'Gertrude'];

  count = 0;
  direction: OrderType = 'asc';

  changeDirection() {
    this.direction = (this.direction === 'asc')? 'desc' : 'asc';
  }

  addUser() {
    this.count++;
    this.users3.push('User' + this.count);
  //  this.users3 = [...this.users3];
  }


}
