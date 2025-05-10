import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Products from "./components/Products";
import { UserProgressContextProvider } from "./components/UserProgressContext";
import { CartContextProvider } from "./store/CardContext";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
    <Header/>
    <Products/>
    <Cart/>
    <Checkout/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
