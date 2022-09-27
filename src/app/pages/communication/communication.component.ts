import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent  {

  compteur_parent = 10;

  handleIncrement() {
    this.compteur_parent++;
  }

  handleMessage(message: string) {
    console.log(message);
  }

}
