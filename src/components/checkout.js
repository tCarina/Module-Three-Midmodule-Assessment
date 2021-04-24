import React from "react";
import formatPrice from "../helpers/formatPrice";

class Checkout extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    if (!firstName || !lastName || !email || !creditCard || !zipCode) {
      window.alert("Input is not valid");
    } else if (creditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (zipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(
        `Purchase complete. Your total was ${formatPrice(this.props.total)}.`
      );
    }
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <section>
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name </label>
          <input
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          />

          <label htmlFor="lastName">Last Name </label>
          <input
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          />

          <label htmlFor="email">Email </label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="creditCard">Credit Card </label>
          <input
            name="creditCard"
            id="creditCard"
            value={creditCard}
            onChange={this.handleChange}
          />

          <label htmlFor="zipCode">Zip Code </label>
          <input
            name="zipCode"
            id="zipCode"
            value={zipCode}
            onChange={this.handleChange}
          />
          <button type="submit">Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
