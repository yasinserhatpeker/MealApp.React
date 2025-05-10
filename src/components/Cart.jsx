import { useContext } from "react";
import CartContext from "../store/CardContext";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";

export default function Cart() {

    cartCtx=useContext(CartContext);
    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>
        totalPrice + item.price * item.quantity,0
    )

    return (
        <Modal className='cart'>
          <h2>Your Cart</h2>
          <ul>
            {cartCtx.items.map((item)=> 
               <li key={item.id}>{item.name} - {item.quantity}</li>
            )}
          </ul>
          <p className='cart-total'> {currencyFormatter.format(cartTotal)}</p>
          <p>
            <Button textOnly>Close</Button>
            <Button>Go to Checkout Button</Button>
          </p>
        </Modal>
    )
}
