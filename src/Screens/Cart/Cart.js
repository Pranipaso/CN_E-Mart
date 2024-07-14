import { useSelector } from "react-redux";
import { cartSelector } from "../../Redux/CartSlice";
import ProductItem from "../../Components/ProductItem/ProductItem";
const Cart = () => {
  const { cartItems } = useSelector(cartSelector);
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
      }}
    >
      {cartItems.map((item, index) => {
        return (
          <ProductItem
            item={item}
            index={index}
            key={index}
            showDetailsForCart={true}
          />
        );
      })}
    </div>
  );
};

export default Cart;
