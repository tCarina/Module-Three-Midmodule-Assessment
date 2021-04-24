import React from "react";
import formatPrice from '../helpers/formatPrice'

const Cart = ({ addedProducts, total, subtotal, tax }) => {
  return (
    <section>
      <h2>Cart</h2>

      <ul>
        {addedProducts.map(product => {
          const { name, price } = product;
          return (
            <li>
              {name}: {formatPrice(price)}
            </li>
          );
        })}
      </ul>

      <h3>Subtotal: {formatPrice(subtotal)}</h3>
      <h3>Tax: {formatPrice(tax)} </h3>
      <h3>Total: {formatPrice(total)}</h3>
    </section>
  );
};

export default Cart;
