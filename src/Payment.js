import React from "react";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
// import { useStateValue } from "react";
function Payment() {
    const [{basket, user}, dispatch] = UseStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/* payment section : delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h1>Delivery Address</h1>
          </div>
          <div className = "payment__address">
            {/* email */}
            <p>{user?user.email : "Guest"}</p>
            <p>3/281, Vinamra Khand, Gomti Nagar</p>
            <p>Lucknow</p>
          </div>
        </div>
        {/* payment section : reviewing the items */}
        <div className="payment__section">
            <div className="payment__title">
                <h3>Review Items in delivery</h3>
            </div>
            <div className="payment__items">
                {/* all the products that we have in the basket */}
                {basket.map((item) => {
                    return (<CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}

                    />)
                    
                })}
                {/* for the short syntax, i.e., when there is only a return statement, we can skip { return {}}
                and just use (), asin the Checkout.js */}
            </div>


        </div>
        {/* payment section : payment method */}
        <div className="payment__section">
            <div className="payment__title">
                Payment Method
            </div>
            <div className = "payment__details">
                {/* Stripe magic goes here */}
            </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
