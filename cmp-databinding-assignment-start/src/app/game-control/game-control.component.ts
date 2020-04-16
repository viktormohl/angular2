import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private intervalID: number;
  increment: number;

  constructor() {
    this.increment = 0;
  }

  ngOnInit(): void {
  }

  onStart() {
    if (!this.intervalID) {
      this.intervalID = setInterval(() => {
        this.onInterval();
      }, 1000);
    }
  }

  onStop() {
    if (!this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  onInterval() {
    this.increment = this.increment + 1;
  }
}
