
import React from 'react';
import './App.css';
import Counter from './app/features/counter/Counter'
import Products from './app/features/cart/Products'
import Cart from './app/features/cart/Cart'


function App() {

  return (
    <div className="App">
      {/* <Counter/> */}
      <Cart/>
      <Products/>
    </div>
  );
}

export default App;
