import React from 'react'
import './CheckoutProduct.css'
import { UseStateValue } from './StateProvider';
//function CheckoutProduct({props}) {
function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = UseStateValue()
    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch ({
            type : 'REMOVE_FROM_BASKET',
            //dispatch function defined as required, we explicitly declared item while adding to the basket
            // item : {
                id : id,
                // image : image,
                // title : title,
                // price : price,
                // rating : rating,
            // }
        })
    }
  return (
    <div className="CheckoutProduct">
      <img src={image} className="CheckoutProduct__image" />
      {/* responsible for all the other details */}
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {Array(rating)
            .fill()
            // .map(() also works, we are not using it directly
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct