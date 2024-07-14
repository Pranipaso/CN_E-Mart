import { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../utils";
import { productSelector } from "../../Redux/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const productSlice = useSelector(productSelector);

  useEffect(() => {
    if (productSlice.products.length !== 0) {
      return;
    }
    getProducts(dispatch);
  }, [dispatch, productSlice.products.length]);

  return (
    <div style={{ overflow: "hidden" }}>
      {productSlice.products.length !== 0 && <ProductList />}
    </div>
  );
};

export default Home;
