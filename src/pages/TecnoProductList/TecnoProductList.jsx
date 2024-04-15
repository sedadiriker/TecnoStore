import "./TecnoProductList.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const TecnoProductList = ({ products, getProducts }) => {
  // console.log(products);
  const initialQuantityState = products.reduce((acc, product) => {
    acc[product.id] = product.quantity; //! Ürün ID'sini anahtar olarak ve başlangıç miktarını değer olarak kullan
    return acc;
  }, {});
  // console.log(initialQuantityState)
  const [quantity, setQuantity] = useState(initialQuantityState);

const [subTotal, setSubTotal] = useState(0)
const shipping = 25
const taxRate = 0.18

useEffect(() => {
  let total = 0;
  products.forEach((product) => {
    total += product.quantity * (product.price * 0.8);
  });
  setSubTotal(total - (total * 0.18));
}, [products, quantity]); 
// console.log(subTotal)
const tax = ((subTotal * 100) / 82) * 0.18
const total = subTotal + tax + shipping/1000;


  const handlePlus = async (id) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity[id] + 1;
      const updatedQuantities = { ...prevQuantity, [id]: newQuantity };
      updateProductQuantity(id, newQuantity);
      return updatedQuantities;
    });
  };

  const handleMinus = async (id) => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity[id] - 1, 0);
      const updatedQuantities = { ...prevQuantity, [id]: newQuantity };

      updateProductQuantity(id, newQuantity);
      return updatedQuantities;
    });
  };

  const updateProductQuantity = async (ıd, newQuantity) => {
    const URL = `https://66140aa62fc47b4cf27b7326.mockapi.io/Tecno-products/${ıd}`;

    try {
      await axios.put(URL, { quantity: newQuantity });
    } catch (error) {
      console.error(error);
    }
    getProducts();
  };

  const deleteProduct = async (ıd) => {
    const URL = `https://66140aa62fc47b4cf27b7326.mockapi.io/Tecno-products/${ıd}`;

    try {
      await axios.delete(URL);
    } catch (err) {
      console.log(err);
    }
    getProducts();
  };

  return (
    <div className="product-list ">
      {products?.map((product) => (
        
        <Card
          className="card mb-3 mx-auto text-center rounded-5 "
          key={product.id}
          style={{ width: "50rem" }}
        >
          <Row className="no-gutters">
            <Col md={4}>
              <Card.Img
              className="rounded-5"
                src={product.image}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="fw-bold text-danger fs-2 d-flex justify-content-center align-items-center gap-2">
                <span className="fs-5 text-decoration-line-through text-dark">{product.price}</span>
                  <p>
                  {Math.round(product.price * 0.8).toFixed(3)}
                  <span className="fs-5">$</span>
                  </p>
                </Card.Text>

                <Card.Text className="border border-1 w-50 mx-auto d-flex gap-4 fs-4 align-items-center justify-content-center">
                  <FaMinus
                    onClick={() => handleMinus(product.id)}
                    role="button"
                    className="fs-4"
                  />{" "}
                  {quantity[product.id]}{" "}
                  <FaPlus
                    onClick={() => handlePlus(product.id)}
                    role="button"
                    className="fs-4"
                  />
                </Card.Text>
                <Button
                  className="w-50"
                  onClick={() => deleteProduct(product.id)}
                  variant="primary"
                >
                  Remove
                </Button>
                <p>
                  Product Total:
                  {`${(
                    product.quantity * (product.price * 0.8).toFixed(2)
                  ).toFixed(3)}`}{" "}
                  $
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}

<div className="total text-white text-center w-50 mx-auto mt-4 fs-4">
        <div className="d-flex justify-content-between px-5">
          <span>SubTotal</span>
          <span>{`${subTotal.toFixed(3)} $`}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between px-5">
          <span>Tax (18%)</span>
          <span>{`${tax.toFixed(3)} $`}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between px-5">
          <span>Shipping</span>
          <span>{`${shipping} $`}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between px-5">
          <span>TOTAL</span>
          <span className="text-danger">{`${total.toFixed(3)} $`}</span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TecnoProductList;
