import { createContext } from 'react';


// The one that will be used by useContext(context);
export const context = createContext(null);

// You know what it is
export const ContextProvider = context.Provider