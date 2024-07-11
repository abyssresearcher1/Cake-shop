import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/reducers/basketReducer";
import { Card, Button } from "antd";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card
      style={{
        width: 250,
      }}
      cover={<img className="image" alt={product.name} src={product.image} />}
    >
      <h3>{product.name}</h3>
      {product.ingredients && <p>{product.ingredients.join(",")}</p>}
      <p>{product.cost}</p>

      <Button onClick={() => dispatch(addToBasket(product))}>
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductCard;
