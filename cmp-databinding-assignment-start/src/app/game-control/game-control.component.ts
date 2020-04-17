import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, AfterViewInit {

  /** timer reference */
  private intervalID: number;
  /** local storage for increment number */
  private incrementNumber: number;
  /** the custom event for emitting number to parent component */
  @Output('incremented') incremented = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.reset();
  }

  onStart() {
    if (!this.intervalID) {
      this.intervalID = setInterval(() => {
        this.onInterval();
      }, 1000);
    }
  }

  onStop() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = undefined;
      this.reset();
    }
  }

  onInterval() {
    this.incrementNumber = this.incrementNumber + 1;
    this.incremented.emit(this.incrementNumber);
  }

  private reset() {
    this.incrementNumber = 0;
    this.incremented.emit(this.incrementNumber);
  }
}
