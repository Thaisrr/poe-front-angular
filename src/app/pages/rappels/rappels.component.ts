import { Component, OnInit } from '@angular/core';
import {ProduitsService} from "../../utils/services/produits.service";

@Component({
  selector: 'app-rappels',
  templateUrl: './rappels.component.html',
  styleUrls: ['./rappels.component.css']
})
export class RappelsComponent implements OnInit {
  products?: {id: number, nom: string, category: {title: string}}[];

  constructor(private prodService: ProduitsService) { }

  ngOnInit(): void {
    this.products = this.prodService.getAll();
  }

}
