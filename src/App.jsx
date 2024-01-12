import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import ProductsProvider from "./contexts/ProductsProvider";
import { CartProvider } from "./contexts/CartProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <Layout>
            <Routes>
              <Route
                index
                path="/"
                element={<Navigate to="/products" replace />}
              />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<DetailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default App;
