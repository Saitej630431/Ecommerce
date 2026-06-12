import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return(
        <div className="nav d-flex justify-content-between align-items-center p-3">
                    <h1 className="logo">Shopper.</h1>
                <ul className="nav-links">
                        <li><Link to="/home" className="nav-link"><span className="bi bi-house"></span>
                        Home</Link></li>
                        <li> <Link to="/product" className="nav-link">
                        <span className="bi bi-list"></span> Products</Link></li>
                        <li> <Link to="/register" className="nav-link">
                        <span className="bi bi-person-plus"></span> Register</Link></li>
                        <li> <Link to="/login" className="nav-link">
                        <span className="bi bi-box-arrow-in-right"></span> Login</Link></li>
                        <li><Link to="/cart" className="nav-link">
                        <span className="bi bi-cart"></span>
                        Cart</Link></li>
        
                    </ul>
              </div>
    )
}
export default Nav;