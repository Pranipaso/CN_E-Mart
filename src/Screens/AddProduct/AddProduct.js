import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, productSelector } from "../../Redux/ProductSlice";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { products } = useSelector(productSelector);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const addProduct = () => {
    const data = {
      id: products.length,
      title,
      price,
      description,
      image: url,
    };
    console.log(data);
    dispatch(addNewProduct(data));
    navigation("/");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addProduct();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3 style={{ margin: "10px 0px" }}>Add Product</h3>
      <input
        type="text"
        style={styles.inputStyles}
        required
        placeholder="Enter a title"
        value={title}
        onChange={(event) => {
          setTitle(event.currentTarget.value);
        }}
      />
      <input
        type="text"
        style={styles.inputStyles}
        required
        placeholder="Enter a description"
        value={description}
        onChange={(event) => {
          setDescription(event.currentTarget.value);
        }}
      />
      <input
        type="number"
        style={styles.inputStyles}
        required
        placeholder="Enter a price"
        value={price}
        onChange={(event) => {
          setPrice(event.currentTarget.value);
        }}
      />
      <input
        type="text"
        style={styles.inputStyles}
        required
        placeholder="Enter a image url"
        value={url}
        onChange={(event) => {
          setUrl(event.currentTarget.value);
        }}
      />
      <button
        style={{
          padding: "10px 20px",

          alignSelf: "center",
          width: " calc(40% - 20px)",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;

const styles = {
  inputStyles: {
    width: " calc(40% - 40px)",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};
