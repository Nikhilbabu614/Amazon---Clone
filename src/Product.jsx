import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{basket},dispatch] = useStateValue();

    const addToBasket = () =>{
        //add items to basket --> dispatch to stateprovider
        dispatch({
            type:"ADD_TO_BASKET",
            item : {
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image                //if keyname is same as value name just declare as   -- id , title
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="price">
                    <small>₹ </small>
                    <strong className="product_price">{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Buy Now</button>
        </div>
    )
}

export default Product
