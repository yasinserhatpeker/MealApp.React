import Header from "./components/Header";
import Products from "./components/Products";
import { CartContextProvider } from "./store/CardContext";

function App() {
  return (
    <CartContextProvider>
    <Header/>
    <Products/>
    </CartContextProvider>
  );
}

export default App;
