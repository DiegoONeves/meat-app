import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rate: number = 0;
  rates: number[] = [1, 2, 3, 4, 5];
  previousRate: number;

  @Output() rated = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit();
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }

    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }

}
