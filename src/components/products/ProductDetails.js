import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AddToCart } from "../../redux/actions/CartAction";
import Preloader from "../preloader/Preloader";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);


  ///   dispatch from here
  const dispatch=useDispatch();
  const addProduct=(product)=>{
    dispatch(AddToCart(product));
    // console.log("clicked");
  }

  


  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  return (
    <div className="container mt-4 ">
    {
      loading ? <Preloader/> :
      <div className="row gx-5">
      <div className="col-6 bg-white shadow-lg d-flex flex-column justify-content-center align-items-center">
        <img
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className='mt-2 img-fluid'
        />
      </div>
      <div className="col-6 p-4 bg-light shadow-lg ">
        <h3 className="text-uppercase text-black-50">{product.category}</h3>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          {product.rating && product.rating.rate}

          <i class="fa fa-star"></i>
        </p>
        <h3 className="lead fw-bolder my-4"> ${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button className="btn btn-outline-dark me-3" onClick={()=>addProduct(product)}>Add to Cart</button>
        <Link to="/cart" className="btn btn-dark">Go To Cart</Link>
      </div>
    </div>
    }
    </div>
  );
};

export default ProductDetails;
