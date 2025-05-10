import { useContext } from "react";
import CartContext from "../store/CardContext";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "./UserProgressContext";

export default function Cart() {

    cartCtx=useContext(CartContext);
    userProgressCtx=useContext(UserProgressContext);

    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>
        totalPrice + item.price * item.quantity,0
    )
   
    function handleCloseCart() {
      userProgressCtx.hideCart();
    }
    

    return (
        <Modal className='cart' open={userProgressCtx.progress==='cart'}>
          <h2>Your Cart</h2>
          <ul>
            {cartCtx.items.map((item)=> 
               <li key={item.id}>{item.name} - {item.quantity}</li>
            )}
          </ul>
          <p className='cart-total'> {currencyFormatter.format(cartTotal)}</p>
          <p>
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            <Button onClick={handleCloseCart}>Go to Checkout Button</Button>
          </p>
        </Modal>
    )
}
