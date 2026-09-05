import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { getToggle } from './states/counter.selector'

import {
  increment,
  decrement,
  reset,
  customIncrement,
  toggleCustomInput,
} from './states/counter.action';

@Component({
  selector: 'app-counter-button',
  template: `
    <button (click)="onIncrement()">Increment</button>
    <button (click)="onDecrement()">Decrement</button>
    <button (click)="onReset()">Reset</button>

    <div class="accordion">
      <div class="accordion-panel" (click)="onToggle()"><span>{{(toggleCustomInput$ | async) ? '+' : '-'}}</span></div>
      <div class="accordion-body" *ngIf="toggleCustomInput$ | async">
        <h1>Custom Increment</h1>
        <input type="text" name="countInput" [(ngModel)]="count" />
        <button (click)="incrementBy()">IncrementBy</button>
      </div>
    </div>
  `,
  styles: [
    `
      .accordion {
        width: 20rem;
        padding:10px;
      }
      .accordion-panel {
        background-color: blue;
        height: 2rem;
        display: flex;
        justify-content: right;
        span {
          box-sizing: border-box;
          margin: 0.3rem;
          margin-right: 0.8rem;
          color: white;
          font-size: 20px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterButtonComponent {
  count: number = 0;
  // toggleCustomInput$ = this.store.select((state) => state.counter.toggle);
  toggleCustomInput$ = this.store.select(getToggle);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.toggleCustomInput$.subscribe((data) => {
        console.log('toggle observable');
    });
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
  incrementBy() {
    this.store.dispatch(customIncrement({ value: +this.count }));
  }
  onToggle() {
    this.store.dispatch(toggleCustomInput());
  }
}
