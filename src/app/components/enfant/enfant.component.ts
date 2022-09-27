import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {

  @Input() title: string | undefined;
  //@Input() title? : string;
  @Input() count: number = 0;

  @Output() increment_event = new EventEmitter();
  @Output() message_event = new EventEmitter<string>();


  increment() {
      //this.count++;
      this.increment_event.emit();
  }

  message() {
    this.message_event.emit('Hello from Enfant Component')
  }





}
