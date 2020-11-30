import React, { useReducer } from 'react';
import { ContextProvider as ContextProviderRaw }  from './index';
import { reducer, initialState } from './reducer';


export function ContextProvider({ children }){

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextProviderRaw value={{state, dispatch}}>
      { children }
    </ContextProviderRaw>
  )
}