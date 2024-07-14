import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";
import { FaCartShopping, FaCirclePlus } from "react-icons/fa6";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { cartSelector } from "../../Redux/CartSlice";

const Navbar = () => {
  const { cartItems } = useSelector(cartSelector);
  return (
    <div>
      <div className="navbar">
        <div className="subNavbar">
          <div className="title">E-Mart</div>
          <nav>
            <NavLink to="/">Products</NavLink>
            <NavLink to="/AddProduct">
              <div className="subNavbar">
                Add Product
                <FaCirclePlus
                  size={20}
                  style={{
                    marginLeft: "10px",
                  }}
                />
              </div>
            </NavLink>
          </nav>
        </div>
        <nav>
          <NavLink to="/cart">
            <FaCartShopping size={30} />
            {cartItems.length > 0 && (
              <Badge style={styles.badge}>
                {cartItems.length > 10 ? "9+" : cartItems.length}
              </Badge>
            )}
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

const styles = {
  badge: {
    backgroundColor: "red",
    height: "20px",
    width: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    borderRadius: "100px",
    position: "absolute",
    top: 5,
    right: 25,
  },
};
