import {} from "./reducer";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed value should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true);

})

test('collapsed value should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(false);

})

test('we will get an error in case of a false action', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action


    //expect
    expect(()=>{
        reducer(state, {type: 'FAKE_TYPE'})
    }).toThrowError();
})
