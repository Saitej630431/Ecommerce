import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export default function Register() {

const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const email=e.target.email.value;
    const firstName=e.target.firstName.value;
    const lastName=e.target.lastName.value;
    const password=e.target.password.value;
    const confirmPassword=e.target.confirmPassword.value;
    if(password!==confirmPassword){
      alert("Passwords do not match.");
    }
    else{
      
      dispatch({ type: 'REGISTER_USER', payload: { username, email, firstName, lastName, password } });

      alert("Registration successful! Please login.");
      e.target.reset();
      navigate("/login");
    }
    }

  return (
    <div className="register">
     <form className="d-flex flex-column border rounded p-4" style={{width: "400px", margin: "0 auto", marginTop: "50px" }} onSubmit={handleRegister} >
        <label htmlFor="username" className="form-label">Username:</label>
        <input type="text" id="username" name="username" required  className="form-control"/>
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" name="email" required className="form-control" />
        <label htmlFor="firstName" className="form-label">First Name:</label>
        <input type="text" id="firstName" name="firstName" required className="form-control" />
        <label htmlFor="lastName" className="form-label">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required className="form-control" />
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" id="password" name="password" required className="form-control" />
        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required className="form-control" />
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
     </form>
    </div>
  );
}