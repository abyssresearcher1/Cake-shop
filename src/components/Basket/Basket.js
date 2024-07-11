import "./Basket.css";
import { Divider } from "antd";

export const Basket = ({ products }) => {
  const getTotal = () => {
    return products
      .reduce((acc, curr) => {
        acc += curr.items * curr.cost;
        return acc;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart">
      {products.length ? (
        <div className="wrapper">
          {products.map((product) => (
            <div className="cart-item">
              <p>
                {product.name}
                <br />
                {product.items} items
              </p>
              {product.cost} $
            </div>
          ))}
          <Divider style={{ backgroundColor: "white" }} />
          <div className="total">
            <p>Total:</p>
            <p>{getTotal() || 0} $</p>
          </div>
        </div>
      ) : (
        <p>cart is empty</p>
      )}
    </div>
  );
};
