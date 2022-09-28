import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VraiService {

  constructor() { }

  sayHello() {
    console.log('Hello !')
  }
}
