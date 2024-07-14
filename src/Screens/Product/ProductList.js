import { useSelector } from "react-redux";
import { productSelector } from "../../Redux/ProductSlice";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { FaCircleXmark } from "react-icons/fa6";
import { useCallback, useEffect, useState } from "react";
const ProductList = () => {
  const { products } = useSelector(productSelector);
  const [sortData, setSortData] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(true);
    if (sortData) {
      const sortedData = [...products].sort((a, b) => a.price - b.price);
      setTimeout(() => {
        setSortedProducts(sortedData);
        setRefresh(false);
      }, 50);
    } else {
      setTimeout(() => {
        setSortedProducts(products);
        setRefresh(false);
      }, 50);
    }
  }, [products, sortData]);
  // const [data, setData] = useState([]);

  // const getSortedProducts = useCallback(() => {
  //   if (sortData) {
  //     const sortedData = products.sort((a, b) => (a.price > b.price ? -1 : 1));
  //     setData(sortedData);
  //   }

  //   setData(products);
  // }, [products, sortData]);
  // useEffect(() => {
  //   getSortedProducts();
  // }, [getSortedProducts, sortData]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => setSortData(!sortData)}
          style={{
            padding: "10px 20px",
            borderRadius: "100px",
            marginBottom: "20px",
            display: "flex",
            backgroundColor: "white",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "bolder",
            color: "#9a64ec",
          }}
        >
          <span>Sort By Price</span>
          {sortData && (
            <FaCircleXmark
              color="#9a64ec"
              size={20}
              style={{ marginLeft: "5px" }}
            />
          )}
        </button>
      </div>
      {!refresh &&
        sortedProducts.map((item, index) => {
          return <ProductItem item={item} index={index} key={index} />;
        })}
      {/* {refresh && "Loading..."} */}
    </div>
  );
};

export default ProductList;
