import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import ShopContextProvider from "./context/ShopContext.jsx";
import RestaurantContextProvider from "./context/restaurant/RestaurantContext";
import MenuContextProvider from "./context/menu/MenuContext.jsx";
import CartContextProvider from "./context/cart/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartContextProvider>
        <MenuContextProvider>
          <RestaurantContextProvider>
            <ShopContextProvider>
              <App />
            </ShopContextProvider>
          </RestaurantContextProvider>
        </MenuContextProvider>
      </CartContextProvider>
    </Router>
  </StrictMode>,
);
