import "./AddTecnoProduct.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTecnoProduct = ({getProducts}) => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });
  const { name, price, quantity, image } = product;

  const handleData = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(product);
    setProduct({
      name: "",
      price: "",
      quantity: "",
      image: "",
    });
    
  };

  const postProduct = async (product) =>  {
    const URL = "https://66140aa62fc47b4cf27b7326.mockapi.io/Tecno-products"
    try{

      await axios.post(URL, product)
      getProducts()
      navigate("/tecnoProductList")
    }catch(err) {
      console.log(err)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="add-product px-5 d-flex  flex-column gap-5"
    >
      <h3 className="text-white text-center fs-2 border-bottom w-50 mx-auto">
        Add Product
      </h3>
      <div className="product-name">
        <input
          type="text"
          id="name"
          placeholder=" "
          required
          value={name}
          onChange={handleData}
        />
        <label htmlFor="name">Product Name</label>
      </div>
      <div className="product-price">
        <input
          type="number"
          id="price"
          placeholder=" "
          required
          value={price}
          onChange={handleData}
        />
        <label htmlFor="price">Product Price</label>
      </div>
      <div className="product-quantity">
        <input
          type="number"
          id="quantity"
          placeholder=" "
          required
          value={quantity}
          onChange={handleData}
        />
        <label htmlFor="quantity">Product Quantity</label>
      </div>
      <div className="product-image">
        <span className="prefix">https://example.com/</span>
        <input
          type="text"
          id="image"
          placeholder=" "
          required
          value={image}
          onChange={handleData}
        />
        <label htmlFor="image">Product Image</label>
      </div>
      <button className="btn text-white w-25 btn-success mx-auto add-btn">
        Add Product
      </button>
    </form>
  );
};

export default AddTecnoProduct;
