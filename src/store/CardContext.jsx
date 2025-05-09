import { createContext, useReducer } from "react";

const CartContext = createContext({
  items:[],
  addItem: (item)=> {},
  removeItem: (id) => {}

})

function cartProvider(state,action) {
    if(action.type === 'ADD_ITEM') {
        // add the item
    }
    if(action.type === 'REMOVE_ITEM') {
        // remove the item
    }

    return state;

}

export function CartContextProvider({children}) {
    useReducer();

    return (
      <CartContext.Provider>{children}</CartContext.Provider>
    )
}