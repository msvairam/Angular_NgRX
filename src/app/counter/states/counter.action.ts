import { createAction, props } from '@ngrx/store';

const increment = createAction('increment');
const decrement = createAction('decrement');
const reset = createAction('reset');
const customIncrement = createAction('customIncrement', props<{value: number}>());
const toggleCustomInput = createAction('toggleCustomInput');

export {
    increment,
    decrement,
    reset,
    customIncrement,
    toggleCustomInput
}
