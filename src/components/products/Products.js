import React, { useEffect, useState } from 'react';
import Preloader from '../preloader/Preloader';
import Product from './Product';
const Products = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(false);
    const [filterData, setFilterData]=useState(products);

    let componentMounted=true;

    useEffect(()=>{
      
        const url="https://fakestoreapi.com/products"
       const getProducts= async ()=>{
           setLoading(true)
          const response= await fetch(url)
          if(componentMounted){
            setProducts(await response.clone().json())
            setFilterData(await response.json())
            setLoading(false)
          }

          return ()=>{
              componentMounted=false;
          }

       }
       getProducts()

    },[])

    const filteringProducts=(cat)=>{
        const updateProductList= products.filter(p=>p.category===cat);
        setFilterData(updateProductList);
    }
 

   

    return (
        <div className='container my-3 py-5'>
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    <hr />
                </div>
              
            </div>
            <div className="row justify-content-center">
                {
                    loading? <Preloader/>: 
                   <>
                   <div className="buttons text-center m-0">
                     <button className="btn btn-outline-dark me-3 " onClick={()=>setFilterData(products)}>All</button>
                     <button className="btn btn-outline-dark me-3" onClick={()=>filteringProducts("men's clothing")}>Men's Clothing</button>
                     <button className="btn btn-outline-dark me-3" onClick={()=>filteringProducts("women's clothing")}>Women's Clothing</button>
                     <button className="btn btn-outline-dark me-3" onClick={()=>filteringProducts("jewelery")}>Jewelry</button>
                     <button className="btn btn-outline-dark " onClick={()=>filteringProducts("electronics")}>Electronics</button>
                   </div>
                   {
                       filterData.map((product)=><Product key={product.id} product={product}/>)
                   }
                   </>
                }
            </div>
            
        </div>
    );
};

export default Products;