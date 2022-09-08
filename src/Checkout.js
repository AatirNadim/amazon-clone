import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import PageWrapper from "./pageWrapper";
function Checkout() {
  const [{ basket, user }, dispatch] = UseStateValue();
  return (
    // <PageWrapper>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h3>{user?'Hello, ' + user.email:''}</h3>
            <h2 className="checkout__title">Your shopping basket</h2>
          </div>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* adding styles to the CheckoutProduct resets the basket 
            when styling go for the static information then replace it with the basket*/}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* <CheckoutProduct
          id="1234"
          title="this is a test this is a test this is a test this is a test"
          price={23.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={5}
        />
        <CheckoutProduct
          id="1234"
          title="this is a test this is a test this is a test this is a test"
          price={23.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={5}
        /> */}
        </div>
        <div className="checkout__right">
          <Subtotal />
          {/* <h2>The subtotal will go here</h2> */}
        </div>
      </div>
    // </PageWrapper>
  );
}

export default Checkout;
