import React from 'react'
import './CheckoutItems.css';
import { useStateValue } from './StateProvider';

function CheckoutItems({id,title,image,price}) {

    const [{basket},dispatch] = useStateValue();

    const remove = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
        <div className="checkout_items">
            <img className="checkout_image" src={image} alt="imagenotavailable" />

            <div className="information">
                <p className="checkout_title">{title}</p>
                <p className="price">
                    <small>₹ </small>
                    <strong className="product_price">{price}</strong>
                </p>
                <button className="checkout_button" onClick={remove}>Remove Item</button>
            </div>
        </div>
    )
}

export default CheckoutItems
