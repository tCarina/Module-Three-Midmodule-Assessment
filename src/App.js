import React from "react";
import "./App.css";
import ProductList from './components/productList'
import Checkout from './components/checkout'
import Cart from './components/cart'

class App extends React.Component {
  state={addedProducts: []}

  addProduct = (product) => {
    this.setState((prevState) => {
      return {addedProducts: [product, ...prevState.addedProducts]}
    })
  }

  render() {
       let subtotal = 0 
       this.state.addedProducts.forEach(product => subtotal += product.price)
       let tax = (5/100) * subtotal
       let total = subtotal + tax
    return (
      <div className='App'>
        <ProductList addProduct={this.addProduct}/>
        <Checkout />
        <Cart addedProducts={this.state.addedProducts} tax={tax} subtotal={subtotal} total={total}/>
      </div>
    )
  }
}

export default App