
import './home.css'
import { Link } from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import Nav from './nav'
import sc1 from '../assets/sc1.png'
import sc2 from '../assets/sc2.png' 
import sc3 from '../assets/sc3.png'
import sc4 from '../assets/sc4.png'
import w1 from '../assets/w1.jpeg'
import w2 from '../assets/women.jpeg'
import w3 from '../assets/jewelles.jpg'
import w5 from '../assets/w5.jpeg'
// import { Nav } from 'react-bootstrap'
function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
   const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
       axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);  
      })
      .catch(err => {
        console.log(err);
      })  
      return () => {
        setProducts([]);
      }
  }, [filteredProducts]);
   function handleCategoryClick(category) {
    alert(`You clicked on ${category} category!`);
    const filteredProducts = products.filter(product => product.category === category);
    setFilteredProducts(filteredProducts);
  }
   function addToCart(productId) {
     const product=products.find(p => p.id === productId);
     dispatch({ type: 'ADD_TO_CART', payload: product });
    alert("Product added to cart!");
  }
  return (
    <div className="home">
      <Nav></Nav>
      <div className="carousel auto" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sc1} alt="corousel1" className="carousel-image" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
          </div>
          <div className="carousel-item">
            <img src={sc2} alt="corousel2" className="carousel-image" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
          </div>
          <div className="carousel-item">
            <img src={sc3} alt="corousel3" className="carousel-image" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
          </div>
          <div className="carousel-item">
            <img src={sc4} alt="corousel1" className="carousel-image" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
     <div className="container mt-5">
       <div className="container row mb-5">
        <div className="col-md-3 border rounded p-2">
          <img src={w1} alt="home" style={{width:'100%',height:'200px'}} onClick={() => handleCategoryClick("men's clothing")}  />
          <h2 className="text-center">Mens</h2>
         </div>
        <div className="col-md-3 border rounded p-2">
          <img src={w2} alt="home" style={{width:'100%', height:'200px'}} onClick={() => handleCategoryClick("women's clothing")} />
          <h2 className="text-center">Womens</h2>
        </div> 
         <div className="col-md-3 border rounded p-2">
          <img src={w3} alt="home" style={{width:'100%', height:'200px'}} onClick={() => handleCategoryClick("jewelery")} />
          <h2 className="text-center">Jewelry</h2>
        </div> 
         <div className="col-md-3 border rounded p-2">
          <img src={w5} alt="home" style={{width:'100%', height:'200px'}} onClick={() => handleCategoryClick("electronics")} />
          <h2 className="text-center">Electronics</h2>
        </div> 

       </div>
       <div className="main d-flex flex-wrap gap-4 justify-content-center">
           {
            filteredProducts.map(product => (
             
           <div className="card d-flex flex-column" style={{width:"200px",height:"500px"}} key={product.id}>  
                <div className="card-header">   
                    <img src={product.image} alt={product.title} style={{width:"100%", height:"200px", objectFit:"contain"}} />
                </div>  
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
                <div className="card-footer">
                    <p className="card-text">Price: ${product.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Buy Now</button>
                </div>
              </div>
            
            ))
           }
            
        </div>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-secondary" onClick={() => setFilteredProducts([])}>Clear Filter</button>
          <button className="btn btn-outline-primary" onClick={() => setFilteredProducts(products)}>View All</button>
        </div>
         
      </div>
         <div className="accordion " id="accordionExample">
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                About Us
              </button>
            </h2>
            <div className="accordion-collapse collapse show" id="collapseOne">
              <div className="accordion-body"> 
                <p>Welcome to Shopper, your one-stop destination for all your shopping needs! We are dedicated to providing you with a seamless and enjoyable shopping experience. At Shopper, we offer a wide range of products, from fashion and electronics to home essentials and more. Our mission is to make shopping easy, convenient, and accessible for everyone. With our user-friendly interface, secure payment options, and fast delivery services, we strive to exceed your expectations and ensure your satisfaction. Thank you for choosing Shopper as your trusted shopping partner!</p>
              </div>
            </div>
             <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                 Contact Us
                  </button>
                </h2>
                <div className="accordion-collapse collapse" id="collapseTwo">
                  <div className="accordion-body">
                    <p>If you have any questions, feedback, or need assistance, please don't hesitate to contact us. You can reach our customer support team via email at support@shopper.com.</p>
                    <p>We are here to help you with any inquiries, concerns, or issues you may have. Our team is committed to providing prompt and efficient support to ensure your satisfaction. Whether you need help with an order, have questions about our products, or want to provide feedback, we are always ready to assist you. Thank you for choosing Shopper, and we look forward to hearing from you!</p>
                  </div>
                </div>
                </div>
              <div className="accordion-item bg-dark text-light">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Terms and Conditions
                  </button>
                </h2>
                <div className="accordion-collapse collapse" id="collapseThree">
                  <div className="accordion-body">
                    <p>By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our website after any changes constitutes your acceptance of the new terms. If you do not agree to these terms, please do not use our website.</p>
                    <p>1. Product Information: We strive to provide accurate and up-to-date information about our products. However, we do not guarantee the completeness or accuracy of product descriptions, prices, or availability. We reserve the right to modify or discontinue any product without prior notice.</p>
                    <p>2. User Accounts: To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when creating your account and to update it as necessary.</p>
                    <p>3. Payment and Shipping: We accept various payment methods, and all payments must be made in full before we process your order. We will make reasonable efforts to ensure timely delivery of your order, but we do not guarantee delivery dates or times. Shipping costs and delivery times may vary based on your location and the shipping method chosen.</p>
                    <p>4. Returns and Refunds: We have a return policy in place for eligible products. Please refer to our Return Policy for more details on how to return a product and request a refund. We reserve the right to refuse returns or refunds if the product does not meet our return criteria.</p>
                    <p>5. Intellectual Property: All content on our website, including text, images, logos, and trademarks, is the property of Shopper or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from our website without our prior written permission.</p>
                    <p>6. Limitation of Liability: We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our website or products. This includes but is not limited to damages for loss of profits, data loss, or any other intangible losses.</p>
                    <p>7. Governing Law: These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate. Any disputes arising under these terms shall be resolved in the courts of that jurisdiction.</p>
                    <p>Thank you for taking the time to read our terms and conditions. If you have any questions or concerns about these terms, please contact us at info@shopper.com.</p>
                  </div>
                </div>
                </div>
                </div>
                </div>
      
    </div>
  );
}
export default Home;