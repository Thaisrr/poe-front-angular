import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {

  message = "hELlo wOrLd";
  today = new Date();
  pi = Math.PI;



}
