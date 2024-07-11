import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
