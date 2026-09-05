export interface CounterState {
    counter: number
    toggle: boolean
}
export const initialState: CounterState = {
    counter: 0,
    toggle: true,
}