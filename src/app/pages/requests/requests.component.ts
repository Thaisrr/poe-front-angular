import { Component, OnInit } from '@angular/core';
import {JokeService} from "../../utils/services/joke.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  joke?: string;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {

    this.jokeService.getRandom()
      .subscribe(response => this.joke = response.joke)
  }

}
