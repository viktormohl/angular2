import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIncrementNumber(incrementNumber: number) {
    if(this.isEven(incrementNumber)){
      this.eventNumbers.push(incrementNumber);
    } else {
      this.oddNumbers.push(incrementNumber);
    }
  }

  private isEven(number: number): boolean {
    return number % 2 === 0;
  }
}
