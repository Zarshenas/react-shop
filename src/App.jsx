import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import ProductsProvider from "./contexts/ProductsProvider";
import CartProvider from "./contexts/CartProvider";
import AuthenticateProvider from "./contexts/AuthenticateProvider";
import Layout from "./layout/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Dashbord from "./pages/Dashbord";
import MyAccount from "./components/dashboard/MyAccount";
import MyOrders from "./components/dashboard/MyOrders";
import AuthProtected from "./components/AuthProtected";
import About from "./pages/About";

function App() {
  return (
    <>
      <AuthenticateProvider>
        <CartProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
                <Route
                  index
                  path="/home"
                  element={<Navigate to="/" replace />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<DetailPage />} />
                <Route path="/*" element={<NotFound />} />
                //preventing user to navigate to auth routes if has loged in already
                <Route element={<AuthProtected/>}>
                  <Route path="/auth/signup" element={<Signup />} />
                  <Route path="/signup" element={<Navigate to={'/auth/signup'}/>} />
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/login" element={<Navigate to={'/auth/login'}/>} />
                </Route>
                //protected Routes go here if user is not loged in
                <Route element={<Protected />}>
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/dashboard" element={<Dashbord />} >
                    <Route path={'my-account'} element={<MyAccount/>}/>
                    <Route path={'my-orders'} element={<MyOrders/>}/>
                  </Route>
                </Route>
              </Routes>
            </Layout>
          </ProductsProvider>
        </CartProvider>
      </AuthenticateProvider>
      <Toaster
        toastOptions={{
          style: { color: "#ffffff", backgroundColor: "#262626" },
          position:"bottom-left"
        }}
      />
    </>
  );
}

export default App;
