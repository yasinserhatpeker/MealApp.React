import { useContext } from 'react';
import appLogo from '../assets/logo.jpg';
import Button from '../UI/Button';
import CartContext from '../store/CardContext';
export default function Header() 
{
   const cartCtx = useContext(CartContext);

   const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item) => {
     return totalNumberOfItems + item.quantity;
   },0) 
    return (
        <header id='main-header'>
            <div id="title">
                <img src={appLogo} alt="a burger logo" />
                <h1>PEKER'S</h1>
            </div>
            <nav>
            <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>

        </header>
    )
}