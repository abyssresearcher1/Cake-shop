import { AdminProduct } from "../components/AdminProduct/AdminProduct";
import { useSelector } from "react-redux";
import styles from "./AdminPage.css";

export const AdminPage = () => {
  const { products } = useSelector((state) => state.basket);
  const addNewItem = () => {
      
  }

  return (
    <div className="admin-page">
      <div className="admin-list">
        {products.map((item) => {
          return <AdminProduct key={item.id} product={item} />;
        })}
      </div>
      <div className="addNewItem">
        <button onClick={addNewItem}>Add New Item</button>
      </div>
    </div>
  );
};
