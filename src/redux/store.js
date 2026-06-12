import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

function registerReducer(state = { users: [] }, action){
  switch(action.type){
    case 'REGISTER_USER':
      const existingUser = state.users.find(user => user.email === action.payload.email);
      if (existingUser) {
        alert("User with this email already exists!");
        return state; // No changes to state
      } 
      else{
        alert("Registration successful!");
        localStorage.setItem('registeredUser', JSON.stringify(action.payload));
      }
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      localStorage.setItem('registeredUser', JSON.stringify(state.users));
      return state;
  }
}

function cartReducer(state = { cart: [] }, action){
  switch(action.type){
    case 'ADD_TO_CART':
      localStorage.setItem('cart', JSON.stringify([...state.cart, action.payload]));
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_FROM_CART':
      localStorage.removeItem('cart', JSON.stringify(state.cart.filter(item => item.id === action.payload)));
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      localStorage.setItem('cart', JSON.stringify(state.cart));   
      return state;
  }
}

const rootReducer = combineReducers({
  register: registerReducer,
  cart: cartReducer,
});

console.log("Redux store created");
const store = configureStore({ reducer: rootReducer });

export default store;