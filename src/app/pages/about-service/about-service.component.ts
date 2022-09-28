import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from "../../utils/types/Game";
import fakeService from "../../utils/services/fake.service";
import {VraiService} from "../../utils/services/vrai.service";

@Component({
  selector: 'app-about-service',
  templateUrl: './about-service.component.html',
  styleUrls: ['./about-service.component.css']
})
export class AboutServiceComponent implements OnInit, OnDestroy{

  games: Game[];
  flux!: NodeJS.Timer;


  constructor(private vraiService: VraiService) {
    console.log('Chargement de la classe AboutService');
    this.games = fakeService.getGames();
    this.vraiService.sayHello();
  }

  ngOnInit(): void {
    console.log('Initialisation du composant');

    let count = 0;
    this.flux = setInterval(() => {
      console.log(count);
      count++;
    }, 1000);
  }

  ngOnDestroy() {
    console.log('Boooooommmmmmmm');
    clearInterval(this.flux);
  }

}
