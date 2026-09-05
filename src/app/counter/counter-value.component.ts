import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { getCounter } from './states/counter.selector';

@Component({
    selector: 'app-counter-value',
    template: `<p>Counter: {{count$ | async}}</p>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterValueComponent {
   // count$ = this.store.select((state) => state.counter.counter);
   count$ = this.store.select(getCounter);

    constructor(private store: Store<AppState>) {}

    
  ngOnInit() {
    this.count$.subscribe((data) => {
        console.log('counter observable');
    });
  }
}