import { Component, OnInit } from '@angular/core';
import {JokeService} from "../../utils/services/joke.service";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  joke?: string;

  constructor(
    private jokeService: JokeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const param = Number(this.route.snapshot.params['id']);
    console.log(param);

    this.jokeService.getRandom()
      .subscribe(response => this.joke = response.joke)
  }

}
