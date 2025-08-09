import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage.jsx";
import ProductUpload from "./components/ProductUpload.jsx";
import Product from "./pages/product/product.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/items-upload" element={<ProductUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
