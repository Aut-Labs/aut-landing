import React, { useReducer } from 'react';

const initialState = {
  isOpen: false,
  mode: 'dark'
};

function reducer(state, action) {
  switch (action.type) {
    case 'MODE':
      return {
        ...state,
        mode: action.payload,
      };
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
export const DrawerContext = React.createContext({});

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
