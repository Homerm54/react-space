import { reducer, initialState } from "context/reducer";
import types from 'context/types';


describe('Context / Main Reducer Test Suit', () => {


  test('should return initial state if no action match', () => {

    const state = reducer(initialState, {});
    expect(state).toEqual(initialState);
  });


  test(`should do: ${types.setDate}`, () => {

    const newDate = new Date('2000-01-10');
    const action = {
      type: types.setDate,
      payload: {
        date: newDate
      }
    }

    const state = reducer(initialState, action);

    expect(state.date).toBe(newDate); // initialState's date was updated

  });


  test(`should do: ${types.setError} / ${types.clearError}`, ()=>{
  
    const error = "Hi, I'm a nasty error";
    const action = {
      type: types.setError,
      payload: {
        error,
      }
    }

    const state = reducer(initialState, action);
    expect(state.error).toBe(error);


    // Clear the error in the last state generated
    const newState = reducer(state, {type: types.clearError});
    expect(newState.error).toBeFalsy();

  });


});

