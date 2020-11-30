import types from './types';



export const initialState = {
  // message: 'Reducer Working!',
  date: new Date(), // Current Date
  error: false,
  fetching: true,
}



export function reducer(state, action){

    switch (action.type){
      
      case types.setDate:
        return {
          ...state,
          date: action.payload.date,
        };
        
      case types.setError:
        return {
          ...state,
          error: action.payload.error
        }
      
      case types.clearError:
        return {
          ...state,
          error: false
        }
      default:
        return state;
    }
}

