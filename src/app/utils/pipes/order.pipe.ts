import { Pipe, PipeTransform } from '@angular/core';
import {OrderType} from "../types/CustomTypes";
@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: string[], order: OrderType = 'asc'): string[] {
    console.log('Je suis dans le pipe')
    if(order === 'asc') {
      return value.sort();
    }
    return value.sort().reverse();
  }
}
