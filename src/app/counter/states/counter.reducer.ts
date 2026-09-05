import { createReducer, on } from '@ngrx/store';

import { increment, decrement, reset, customIncrement, toggleCustomInput } from './counter.action';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({...state, counter: state.counter + 1})),
    on(decrement, (state) => ({...state, counter: state.counter - 1})),
    on(reset, (state) => ({...state, counter: 0})),
    on(customIncrement, (state, props) => ({...state, counter: state.counter + props.value})),
    on(toggleCustomInput, (state) => ({ ...state, toggle: !state.toggle }))
)
