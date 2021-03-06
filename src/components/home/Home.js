import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Products from "../products/Products";

const Home = () => {

  const [products,setProduct] = useState([]);
  const [searchProducts,setSearchProduct] = useState([]);
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>{
    setProduct(data);
    setSearchProduct(data)
  })
},[])

  const handleSearch=e=>{
    const searchText=e.target.value;
    console.log(searchText);
    const getProducts= products.filter(product=>product.title.toLowerCase().includes(searchText.toLowerCase()))
    setSearchProduct(getProducts);
  }
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src="/assets/images/bg.jpg"
          className="cart-img"
          height="500px"
          alt="Card image"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <div className="container ">
            <Card.Title className="display-5 fw-bolder mb-0 ">
              NEW SESSIONS ARRIVAL
            </Card.Title>
            <Card.Text className="lead fs-2">
              CHECK OUT ALL THE NEW TRANS
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <div className="container-fluid text-center bg-warning py-3">
        <input type="text" onChange={handleSearch} className="w-75 p-2 rounded" placeholder="Search here your product" name="name" id="" />
      </div>
      <Products searchProducts={searchProducts}/>
    </div>
  );
};

export default Home;
