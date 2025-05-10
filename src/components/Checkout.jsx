import { useContext } from "react"
import CartContext from "../store/CardContext"
import { currencyFormatter } from "../util/formatting";
import Input from "./Input";
import UserProgressContext from "./UserProgressContext";

export default function Checkout() {
  const cartCtx=useContext(CartContext);
  const userProgressCtx=useContext(UserProgressContext);

  const cartTotal=cartCtx.items.reduce((totalPrice,item)=>
    totalPrice + item.price * item.quantity,0,)
    
  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {

      event.preventDefault();
      const fd = new FormData(event.target);
      const customerData = Object.fromEntries(fd.entries());

  }
    return ( 
        <Modal>
            <form open={userProgressCtx.progress==='checkout'} onSubmit={handleSubmit}>
              <h2>Checkout</h2>
              <p>Total amount : {currencyFormatter.format(cartTotal)}</p>
              <Input label="Full Name"  type="text" id="full-name"/>
              <Input label="Email Adress"  type="email" id="email"/>
              <Input label="Street"  type="text" id="street"/>

              <div className="control-row">
              <Input label="Postal Code"  type="text" id="postal-code"/>
              <Input label="City"  type="text" id="city"/>
             </div>
              <p className="modal-actions">
                <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
                <Button>Submit Order</Button>
              </p>


            </form>
        </Modal>
    )
}