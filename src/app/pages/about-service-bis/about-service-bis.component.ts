import { Component } from '@angular/core';
import fakeService from "../../utils/services/fake.service";
import {Game} from "../../utils/types/Game";

@Component({
  selector: 'app-about-service-bis',
  templateUrl: './about-service-bis.component.html',
  styleUrls: ['./about-service-bis.component.css']
})
export class AboutServiceBisComponent  {

  jeux: Game[];

  constructor() {
    this.jeux = fakeService.getGames();
  }

  createJeu() {
    const new_jeu = {id: 90, title: 'Bidon Bidon'};
    fakeService.createGame(new_jeu);
  }

}
