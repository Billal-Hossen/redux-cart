import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../redux/actions/CartAction';

const Cart = () => {
    const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(AddToCart(product))
    }
    const removeProduct=(product)=>{
        dispatch(RemoveFromCart(product))
    }
    const cart=useSelector(state=>state.handleCart)
    return (
        <>
      <div className="container">
      {
           cart.map(product=>(
            <div className='d-flex justify-content-around rounded shadow-sm bg-secondary text-white mt-3 px-2 py-4' >
            <div className="w-25">
                <img className='rounded' src={product.image} alt="" height={200} width={180}/>
            </div>
            <div className="d-flex flex-column justify-content-center w-50">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                    {product.quantity} X {product.price} = $ {(product.quantity* product.price).toFixed(2)}
                </p>
                <div>
                <button className="btn-outline-dark me-2" onClick={()=>removeProduct(product)}><i className='fa fa-minus'></i></button>
                <button className="btn-outline-dark me-2"onClick={()=>addProduct(product)} ><i className='fa fa-plus'></i></button>
                </div>
            </div>
            
        </div>
           )
            )
       }
      </div>
        </>
    );
};

export default Cart;