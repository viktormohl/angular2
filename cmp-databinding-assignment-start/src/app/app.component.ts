import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  incrementNumber: number;
  /** gerade Zahl */
  even: boolean;

  onIncrementNumber(incrementNumber: number) {
    this.incrementNumber = incrementNumber;
    this.even = incrementNumber % 2 === 0;
  }

  isEven(): boolean{
    return this.even;
  }
}
