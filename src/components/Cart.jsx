import { useContext } from "react";
import CartContext from "../store/CardContext";

export default function Cart() {
    
    cartCtx=useContext(CartContext);
    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>
        totalPrice + item.price * item.quantity,0
    )
}
