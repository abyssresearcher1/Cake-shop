import { Card } from "antd";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import styles from "./AdminProduct.css";
import { Footer } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/reducers/basketReducer";

export const AdminProduct = ({ product }) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(product.name);
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [editedPrice, setEditedPrice] = useState(product.cost);
  const dispatch = useDispatch();

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleEditPriceClick = () => {
    setIsEditingPrice(true);
  };

  const handleSaveClick = async (id) => {
    try {
      const updatedData = {};
      if (isEditingName) {
        updatedData.name = editedName;
      }
      if (isEditingPrice) {
        updatedData.cost = editedPrice;
      }

      await axios.patch(`http://localhost:8080/pastry/${id}`, updatedData);
      dispatch(fetchProducts());

      localStorage.setItem(
        `product_${id}`,
        JSON.stringify({ name: editedName, cost: editedPrice })
      );
    } catch (error) {
      console.log(error);
    }
    setIsEditingName(false);
    setIsEditingPrice(false);
  };

  const handleInputChange = (event) => {
    if (isEditingName) {
      setEditedName(event.target.value);
    } else if (isEditingPrice) {
      setEditedPrice(event.target.value);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pastry/${id}`);
      dispatch(fetchProducts());

      localStorage.removeItem(`product_${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`product_${product.id}`);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setEditedName(parsedData.name);
      setEditedPrice(parsedData.cost);
    }
  }, [product.id]);

  return (
    <>
      <div className="admin-general">
        <div className="admin-card" style={styles.admincard}>
          <div>
            {isEditingName ? (
              <input
                type="text"
                value={editedName}
                onChange={handleInputChange}
              />
            ) : (
              <>
                <button
                  className="editBtn leftBtn"
                  onClick={handleEditNameClick}
                >
                  <img src={edit} alt="Edit" className="EditIcon" />
                </button>{" "}
                <Card>{editedName}</Card>
              </>
            )}
          </div>
          <div className="admin-card_section">
            {isEditingPrice ? (
              <input
                type="text"
                value={editedPrice}
                onChange={handleInputChange}
              />
            ) : (
              <p>{`price: $${editedPrice}`}</p>
            )}
            {isEditingName || isEditingPrice ? (
              <button
                className="saveBtn"
                onClick={() => handleSaveClick(product.id)}
              >
                Save
              </button>
            ) : (
              <>
                <button
                  className="editBtn rightBtn"
                  onClick={handleEditPriceClick}
                >
                  <img src={edit} alt="Edit" className="EditPriceIcon" />
                </button>
              </>
            )}
          </div>
          <div>
            <p>in stock: {product.inStock}</p>
          </div>
          <div>
            <button
              className="deleteBtn"
              onClick={() => handleDeleteClick(product.id)}
            >
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </div>
      </div>
      <Footer style={styles.footer} />
    </>
  );
};
