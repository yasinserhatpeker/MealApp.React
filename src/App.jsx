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
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
