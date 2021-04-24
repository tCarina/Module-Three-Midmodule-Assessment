import React from "react";
import "./App.css";
import ProductList from './components/productList'
import Checkout from './components/checkout'
import Cart from './components/cart'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ProductList />
        <Checkout />
        <Cart />
      </div>
    )
  }
}

export default App