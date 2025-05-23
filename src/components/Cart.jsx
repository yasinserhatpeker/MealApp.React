import { useContext } from "react";
import CartContext from "../store/CardContext";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "./UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {

    cartCtx=useContext(CartContext);
    userProgressCtx=useContext(UserProgressContext);

    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>
        totalPrice + item.price * item.quantity,0)
   
    function handleCloseCart() {
      userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
      userProgressCtx.showCheckout();
    }
    

    return (
        <Modal className='cart' open={userProgressCtx.progress==='cart'} onClose={userProgressCtx.progress==='cart' ? handleCloseCart : null}>
          <h2>Your Cart</h2>
          <ul>
            {cartCtx.items.map((item)=> 
               <CartItem  key={item.id}  name={item.name} quantity={item.quantity} price={item.price} onIncrease={()=>cartCtx.addItem(item)} onDecrease={()=>cartCtx.removeItem(item)}/>
            )}
          </ul>
          <p className='cart-total'> {currencyFormatter.format(cartTotal)}</p>
          <p>
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0  && <Button onClick={handleGoToCheckout}>Go to Checkout Button</Button>}
          </p>
        </Modal>
    )
}
