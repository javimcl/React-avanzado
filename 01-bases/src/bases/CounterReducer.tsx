import React, { useReducer, useState } from 'react';

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 10,
    changes: 10
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }


const counterReducer = (state: CounterState, action: any): CounterState => {

    const {counter, changes} = state;
    switch (action.type) {
        case 'reset':

            return {
                changes: 0,
                counter: 0,
                previous: 0,

            }

        case 'increaseBy':

            return {
                //...state,
                changes: changes + 1,
                counter: counter + action.payload.value,
                previous: counter,                
            }

        default:
            return state;
    }

}


export const CounterReducerComponent = () => {


    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)


    const handleReset = () => {
        dispatch({ type: 'reset' })

    }

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: {value} });

    }
    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>
                { JSON.stringify( counterState, null, 2)}
            </pre>
            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={handleReset}>
                reset
            </button>
        </>
    )
}
