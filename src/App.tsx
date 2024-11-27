import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import { AuthProvider } from "./context/auth-firebase";
import PrivateRoute from "./components/private-route";
import ProductsPage from "./pages/products";
import CategoriesPage from "./pages/categories";
import ProductDetails from "./pages/product-details";
import ErrorPage from "./pages/error-page";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route 
              path="*" 
              element={<ErrorPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
