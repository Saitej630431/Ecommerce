import React, { useState } from "react";
import Nav from "../Home/nav";
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {
  const products = useSelector(state => state.cart.cart) || [];
  const [count, setCount] = useState([]);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  }


  return (
    <div className="cart row">
      <Nav />
      {
        products.map(product => (
          <div className="card mb-3 col-md-3" style={{ width: "200px", height: "500px" }} key={product.id}>
            <div className="card-header">
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
            </div>
            <div className="card-footer ">
              <p className="card-text">Price: ${product.price * count}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-danger" onClick={() => handleRemove(product.id)} disabled={count > 1}>Remove</button>
                <button onClick={() => setCount(count - 1)} className="btn btn-secondary" disabled={count <= 1}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)} className="btn btn-primary">+</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}