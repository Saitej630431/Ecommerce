 import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useSelector } from "react-redux";
 export default function Login() {
  const navigate=useNavigate();
 
  const users=useSelector(state=>state.register.users);
  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    const user=users.find(user=>user.email===email && user.password===password);
    if(user){
      alert("Login successful!");
      navigate("/home");
    }   
    else{
      alert("Invalid email or password. Please try again.");
    }
  }
  return (
    <div className=" d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
     <h1 className="text-center my-4">
        Login Page
      </h1>
      <form className=" d-flex flex-column border rounded p-4" style={{width: "400px" }} onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input type="password" id="password" name="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <Link to="/register" className="mt-3 text-center">
          Don't have an account? Register here.
        </Link>
      </form>
    </div>
  );
}