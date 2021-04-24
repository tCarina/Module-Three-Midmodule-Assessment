import React from "react";

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
      e.preventDefault()
  }

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h2>Checkout</h2>
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
        </form>

        <button>Buy Now</button>
      </section>
    );
  }
}

export default Checkout;
