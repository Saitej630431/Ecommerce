import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import Home from '../Home/home'
import Nav from '../Home/nav'
export default function Products() {
const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {

    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, []);
  function addToCart(productId) {
     const product=products.find(p => p.id === productId);
     dispatch({ type: 'ADD_TO_CART', payload: product });
    alert("Product added to cart!");
  }
  return (

    <div className="container">

     <Nav></Nav>
      <div className="row">

        {
          products.map(product => (

            <div className="col-md-3 mb-4" key={product.id}>

              <div className="card text-center h-100 w-100">

               <div className="card-header">
                 <img src={product.image}  alt={product.title} className="card-img-top p-3"
                  style={{
                    height: "200px",
                    objectFit: "contain"
                  }}
                 
                />

                </div>
                <div className="card-body">

                  <h5 className="card-title">
                    {product.title}
                  </h5>

                  <p className="card-text">
                    Price: ${product.price}
                  </p>

                
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                    Add to Cart
                  </button>
                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}