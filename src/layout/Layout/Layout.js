import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductList from "../../components/ProductList/ProductList";
import { fetchProducts } from "../../store/reducers/basketReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AdminPage } from "../../pages/AdminPage";

const Layout = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.basket);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
