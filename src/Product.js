import React from 'react'
import './Product.css'
import { UseStateValue } from './StateProvider';
function product({id, title, image, price, rating}) {

  const [{basket}, dispatch] = UseStateValue();
  // console.log('this is the basket -->', basket);

  const addToBasket = () => {
    //dispatch the item into the data layer
    //dispatch is not a keyword
    dispatch ({
      type: 'ADD_TO_BASKET',
      item : {
        id : id,
        title : title,
        image : image,
        price : price,
        rating : rating,
      },
    });

  };

  return (
    <div className='product'>
        <div className='product__info'>
          {/* product details */}
          <p>{title}</p>
          {/*product price  */}
          <p className = 'product__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='product__rating'>
            {Array(rating).fill().map((_, i) => (
              <p>🌟</p>
            ))}
            
            {/* <p>🌟</p>
            <p>🌟</p> */}
          </div>
          </div>
          <img src = {image} alt = ''></img>
          <button className='' onClick={addToBasket}>Add to Basket</button>
        {/* </div> */}
    </div>
  )
}

export default product