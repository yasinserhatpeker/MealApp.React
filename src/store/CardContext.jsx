import { act, createContext, useReducer } from "react";

const CartContext = createContext({
  items:[],
  addItem: (item)=> {},
  removeItem: (id) => {}

})

function cartProvider(state,action) {
    if(action.type === 'ADD_ITEM') {
        
       const existingCartIndex=state.items.findIndex(
        (item) => item.id === action.item.id
       )
       const updatedItems= [...state.item];

       if(existingCartIndex > -1) {
        const existingItem=state.items[existingCartIndex];
        const updatedItem={
            ...existingItem,
            quantity: existingItem.quantity + 1

        }
        updatedItems[existingCartIndex]=updatedItem;

       }
       else {
        updatedItems.push({...action.item, quantity: 1});
       }
       return {...state , items:updatedItems};
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