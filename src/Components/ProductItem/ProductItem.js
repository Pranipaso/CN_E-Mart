import { useDispatch, useSelector } from "react-redux";
import "./product.css";
import {
  FaCartPlus,
  FaCircleCheck,
  FaCircleXmark,
  FaPencil,
  FaTrash,
} from "react-icons/fa6";
import {
  addProductInCart,
  cartSelector,
  removeFromCart,
} from "../../Redux/CartSlice";
import { FaMinusCircle } from "react-icons/fa";
import { removeProduct, updateProduct } from "../../Redux/ProductSlice";
import { useState } from "react";
const ProductItem = ({ item, index, showDetailsForCart }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const isProductPresentInCart =
    cartItems.findIndex((cartItem) => cartItem.id === item.id) === -1;

  return (
    <div className="product-card">
      <div className="image-price-container">
        <img src={item.image} alt={title} />

        <div className="title-price">
          <div className="title-container">
            {isEdit ? (
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
              />
            ) : (
              <h3>{title}</h3>
            )}
          </div>
          <div className="price-container">
            <p>
              $
              {isEdit ? (
                <input
                  value={price}
                  onChange={(e) => {
                    setPrice(e.currentTarget.value);
                  }}
                />
              ) : (
                price
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="desc-actions">
        <div className="description-container">
          {isEdit ? (
            <textarea
              value={description}
              rows="5"
              cols="30"
              onChange={(e) => {
                setDescription(e.currentTarget.value);
              }}
            />
          ) : (
            <p>
              {description.length > 200
                ? description.slice(0, 200) + "..."
                : description}
            </p>
          )}
        </div>
        <div>
          <>
            {isEdit ? (
              <div className="action-container" style={{ gap: "30px" }}>
                {/* save the edited details */}
                <div
                  className="action-icon"
                  onClick={() => {
                    const newData = {
                      ...item,
                      title: title,
                      description: description,
                      price: price,
                    };
                    dispatch(updateProduct(newData));
                    setIsEdit(false);
                  }}
                >
                  <FaCircleCheck />
                </div>
                {/* cancel the edited details */}
                <div
                  className="action-icon"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  <FaCircleXmark />
                </div>
              </div>
            ) : (
              <div className="action-container" style={{ gap: "30px" }}>
                {/* edit the product */}
                {!showDetailsForCart && (
                  <div onClick={() => setIsEdit(true)}>
                    <FaPencil />
                  </div>
                )}
                {/* detele the Product */}
                {!showDetailsForCart && (
                  <div
                    onClick={() => {
                      dispatch(removeProduct(item));
                    }}
                  >
                    <FaTrash />
                  </div>
                )}
                {/* add to cart */}
                {isProductPresentInCart ? (
                  <div
                    onClick={() => {
                      dispatch(addProductInCart(item));
                    }}
                  >
                    <FaCartPlus />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    <FaMinusCircle />
                  </div>
                )}
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
